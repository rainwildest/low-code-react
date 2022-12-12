import { useState, useEffect, memo, WheelEvent } from "react";
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
  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (event.ctrlKey) {
      console.log("kk");
    }
  };

  const onDisabledWheel = (e: DisabledWheelEvent) => {
    const event = e || (window.event as DisabledWheelEvent);

    event.ctrlKey && event.preventDefault();
  };

  useEffect(() => {
    /**
     * 禁止 ctr + wheel 事件放大缩小页面
     */
    document.addEventListener("mousewheel", onDisabledWheel, {
      passive: false
    });

    return () => {
      document.removeEventListener("mousewheel", onDisabledWheel); // 销毁
    };
  });
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
          <ControlArea className="bg-gray-1000 pr-5 dark:bg-purple-1000 shadow-lg" />
          {/* </div> */}

          {/* 拖拽区 */}
          <div className="w-full relative bg-container" onWheel={onWheel}>
            <div
              style={{ width: "1920px", height: "960px" }}
              className="bg-red-500 inset-0 m-auto absolute"
            ></div>
            {/* <DesignArea /> */}
          </div>

          <AttributeArea className="bg-gray-1000 dark:bg-purple-1000 shadow-lg" />
        </section>
      </DndProvider>
    </Layout>
  );
});

export default memo(LowCode);
