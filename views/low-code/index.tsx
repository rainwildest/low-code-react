import { useState, useRef, useEffect, memo, WheelEvent } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ControlArea from "./components/ControlArea";
import DesignArea from "./components/DesignArea";
import AttributeArea from "./components/AttributeArea";
import { Layout } from "components";

import { Button } from "antd";
import { observer } from "mobx-react";

interface DisabledWheelEvent extends Event {
  ctrlKey: boolean;
}

const LowCode = observer(() => {
  const controlRef = useRef<HTMLDivElement>(null);
  const attributeRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);

  const [zoom, setZoom] = useState(1);

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    console.log("kk", event.detail, event.nativeEvent.wheelDelta);
    if (event.ctrlKey) {
      // setZoom(zoom + 12);
    }
  };

  const onDisabledWheel = (e: DisabledWheelEvent) => {
    const event = e || (window.event as DisabledWheelEvent);

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
    }

    if (draggableHeight < height) {
      value = (
        (controlHeight + attributeHeight - draggableHeight - 100) /
        height
      ).toFixed(2);
    }

    value !== "0" && setZoom(parseFloat(value) * 100);
  };

  useEffect(() => {
    onInitDraggableContainer(960, 1920);
    console.log("kkk");
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
              style={{ width: "960px", height: "1920px", zoom: `${zoom}%` }}
              className="bg-red-500 inset-0 m-auto absolute"
            ></div>
            {/* <DesignArea /> */}
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
