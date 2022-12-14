import { useState, useRef, useEffect, memo, WheelEvent } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ControlArea from "./components/ControlArea";
import DesignArea from "./components/DesignArea";
import AttributeArea from "./components/AttributeArea";
import { Layout } from "components";

import { observer } from "mobx-react";

import type { MenuProps } from "antd";
import { Button, Menu } from "antd";

const LowCode = observer(() => {
  const controlRef = useRef<HTMLDivElement>(null);
  const attributeRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);
  const contextmenuRef = useRef<HTMLDivElement>(null);

  const [canvasLeft, setCanvasLeft] = useState(50);
  const [canvasTop, setCanvasTop] = useState(50);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const [zoom, setZoom] = useState(0);

  const [position, setPosition] = useState({ left: 0, top: 0 });

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    /**
     * 控制放大缩小
     */
    if (event.ctrlKey && !event.altKey) {
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

    /**
     * 控制左右
     */
    if (!event.ctrlKey && event.altKey) {
      let val = 50;

      if (event.nativeEvent.deltaY < 0) {
        val = canvasLeft - 1;
      }

      if (event.nativeEvent.deltaY > 0) {
        val = canvasLeft + 1;
      }
      setCanvasLeft(val);
    }

    /**
     * 控制上下
     */
    if (event.ctrlKey && event.altKey) {
      let val = 50;

      if (event.nativeEvent.deltaY < 0) {
        val = canvasTop - 1;
      }

      if (event.nativeEvent.deltaY > 0) {
        val = canvasTop + 1;
      }

      setCanvasTop(val);
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
    setCanvasSize({ width, height });
  };

  const onDisabledContextmenu = (event: MouseEvent) => {
    event.preventDefault();
  };

  const onContextMenu = (data: ContextMenuProps) => {
    setPosition({
      left: data.event.pageX + 10,
      top: data.event.pageY - 10
    });
  };

  useEffect(() => {
    onInitDraggableContainer(960, 800);

    /**
     * 禁止 ctr + wheel 事件放大缩小页面
     */
    document.addEventListener("mousewheel", onDisabledWheel, {
      passive: false
    });

    document.addEventListener("contextmenu", onDisabledContextmenu);

    return () => {
      document.removeEventListener("mousewheel", onDisabledWheel); // 销毁
      document.removeEventListener("contextmenu", onDisabledContextmenu);
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
          <ControlArea
            ref={controlRef}
            className="bg-gray-1000 pr-5 dark:bg-purple-1000 shadow-lg"
          />

          {/* 拖拽区 */}
          <div
            ref={draggableRef}
            className="w-full relative bg-container"
            onWheel={onWheel}
          >
            <DesignArea
              style={{
                width: `${canvasSize.width}px`,
                height: `${canvasSize.height}px`,
                left: `${canvasLeft}%`,
                top: `${canvasTop}%`,
                transform: `scale(${zoom}) translate(-50%, -50%)`,
                transformOrigin: "0 0"
              }}
              className="p-5 bg-white absolute transition-all duration-150 ease-linear"
              onContextMenu={onContextMenu}
            />

            <section
              ref={contextmenuRef}
              className="w-24 rounded-lg shadow-lg overflow-hidden fixed"
              style={{ left: `${position.left}px`, top: `${position.top}px` }}
            >
              {/* <Menu className="w-32" selectable={false} items={items} /> */}
              <div className="cursor-pointer flex items-center px-4 h-10 bg-gray-1000">
                <span className="text-red-600  text-sm font-semibold tracking-widest">
                  删 除
                </span>
              </div>
              {/* <div className="cursor-pointer flex items-center px-4 h-10 bg-gray-1000">
                <span className="text-red-600  text-sm font-semibold tracking-widest">
                  删 除
                </span>
              </div> */}
            </section>
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
