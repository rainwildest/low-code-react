import { useState, useRef, useEffect, memo, WheelEvent } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ControlArea from "./components/ControlArea";
import DesignArea from "./components/DesignArea";
import AttributeArea from "./components/AttributeArea";
import { Layout } from "components";

import { Button } from "antd";
import { observer } from "mobx-react";

const LowCode = observer(() => {
  const controlRef = useRef<HTMLDivElement>(null);
  const attributeRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);

  const [zoom, setZoom] = useState(0);

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (event.ctrlKey) {
      let val = 0;
      const rate = 0.01;

      if (event.nativeEvent.deltaY < 0) {
        val = zoom + rate;

        val = val > 1 ? 1 : val;
      }

      if (event.nativeEvent.deltaY > 0 && zoom > 0.2) {
        val = zoom - rate;
      }

      val && setZoom(val);
    }
  };

  const onDisabledWheel = (e: MouseEvent) => {
    const event = e || (window.event as MouseEvent);

    event.ctrlKey && event.preventDefault();
  };

  const onInitDraggableContainer = (width: number, height: number) => {
    const { offsetWidth: controlWidth, offsetHeight: controlHeight } =
      controlRef.current;
    const { offsetWidth: attributeWidth, offsetHeight: attributeHeight } =
      attributeRef.current;

    const { offsetWidth: draggableWidth, offsetHeight: draggableHeight } =
      draggableRef.current;

    let value = "0";

    if (draggableWidth < width) {
      value = (
        (draggableWidth - (controlWidth + attributeWidth) - 100) /
        width
      ).toFixed(2);
    } else if (draggableHeight < height) {
      value = (
        (controlHeight + attributeHeight - draggableHeight - 100) /
        height
      ).toFixed(2);
    } else {
      value = "1";
    }

    setZoom(parseFloat(value));
  };

  useEffect(() => {
    onInitDraggableContainer(960, 800);

    /**
     * 禁止 ctr + wheel 事件放大缩小页面
     */
    document.addEventListener("mousewheel", onDisabledWheel, {
      passive: false
    });

    return () => {
      document.removeEventListener("mousewheel", onDisabledWheel); // 销毁
    };
  }, []);

  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        {/* <Container /> */}
        {/* <div className="h-20 relative z-10">
              {themeStore.count}
              <Button className="" onClick={() => themeStore.addCount()}>
                Default Button
              </Button>
            </div> */}

        <section className="h-full relative flex overflow-hidden">
          {/* 控件区 */}
          {/* <div className="h-full w-72 bg-gray-300"> */}
          <ControlArea
            ref={controlRef}
            className="bg-gray-1000 pr-5 dark:bg-purple-1000 shadow-lg"
          />
          {/* </div> */}

          {/* 拖拽区 */}
          <div
            ref={draggableRef}
            className="w-full relative bg-container"
            onWheel={onWheel}
          >
            <div
              style={{
                width: "960px",
                height: "800px",
                transform: `scale(${zoom}) translate(-50%, -50%)`,
                transformOrigin: "0 0"
              }}
              className="bg-red-100 left-1/2 top-1/2 absolute"
            >
              <DesignArea />
            </div>
            {/* <DesignArea style={{ width: "1920px", height: "960px" }} /> */}
          </div>

          <AttributeArea
            ref={attributeRef}
            className="bg-gray-1000 dark:bg-purple-1000 shadow-lg"
          />
        </section>
      </DndProvider>
    </Layout>
  );
});

export default memo(LowCode);
