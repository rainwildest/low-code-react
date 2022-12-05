import { useState, memo } from "react";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./components/Container";
import ControlArea from "./components/ControlArea";
import DesignArea from "./components/DesignArea";
const test = ["DIV"];

function LowCode() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <DndProvider backend={HTML5Backend}>
        {/* <Container /> */}
        <section className="h-full flex">
          {/* 控件区 */}
          <div className="h-full w-72 bg-gray-300">
            <ControlArea type="DIV" name="list" isDropped={false} />
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
