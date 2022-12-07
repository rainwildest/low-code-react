import { useState, useEffect, memo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ControlArea from "./components/ControlArea";
import DesignArea from "./components/DesignArea";
import AttributeArea from "./components/AttributeArea";
import { Layout } from "components";

import { Button } from "antd";
import { observer } from "mobx-react";
import { useMobxStores } from "store";

const LowCode = observer(() => {
  const { themeStore } = useMobxStores();

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

        <section className="h-full relative flex test-name">
          {/* 控件区 */}
          {/* <div className="h-full w-72 bg-gray-300"> */}
          <ControlArea className="bg-gray-1000 shadow-lg" />
          {/* </div> */}

          {/* 拖拽区 */}
          <div className="w-full bg-container">
            <DesignArea />
          </div>

          <AttributeArea className="bg-gray-1000 shadow-lg" />
        </section>
      </DndProvider>
    </Layout>
  );
});

export default memo(LowCode);
