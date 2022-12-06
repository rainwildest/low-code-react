import { useState, useEffect, memo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ControlArea from "./components/ControlArea";
import DesignArea from "./components/DesignArea";

function LowCode() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <DndProvider backend={HTML5Backend}>
        {/* <Container /> */}
        <section className="h-full flex test-name">
          {/* 控件区 */}
          <div className="h-full w-72 bg-gray-300">
            <ControlArea />
          </div>

          {/* 拖拽区 */}
          <div className="w-full bg-container">
            <DesignArea />
          </div>
        </section>
      </DndProvider>
    </div>
  );
}

export default memo(LowCode);
