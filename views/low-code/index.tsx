import { useState, useEffect, memo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ControlArea from "./components/ControlArea";
import DesignArea from "./components/DesignArea";
import AttributeArea from "./components/AttributeArea";

import { Button } from "antd";
import { observer } from "mobx-react";
import { useMobxStores } from "store";

const LowCode = observer(props => {
  const { themeStore } = useMobxStores();
  console.log(props);
  return (
    <div className="w-full h-screen overflow-hidden bg-gray-1000">
      {/* 头部 */}
      <header className="h-16 bg-gray-700"></header>
      <section className="flex h-full w-full">
        {/* 导航栏 */}
        <aside className="h-ful w-16 bg-red-500"></aside>

        <main className="h-full w-full">
          <DndProvider backend={HTML5Backend}>
            {/* <Container /> */}
            <div className="h-20 relative z-10">
              {themeStore.count}
              <Button className="" onClick={() => themeStore.addCount()}>
                Default Button
              </Button>
            </div>

            <section className="h-full relative flex test-name">
              {/* 控件区 */}
              {/* <div className="h-full w-72 bg-gray-300"> */}
              <ControlArea className="bg-gray-1000" />
              {/* </div> */}

              {/* 拖拽区 */}
              <div className="w-full bg-container">
                <DesignArea />
              </div>

              <AttributeArea className="bg-gray-1000" />
            </section>
          </DndProvider>
        </main>
      </section>
    </div>
  );
});

export default memo(LowCode);
