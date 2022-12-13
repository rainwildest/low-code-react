import update from "immutability-helper";
import type { FC, CSSProperties } from "react";
import { memo, useCallback, useState, Fragment } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { ItemTypes, tagsPosition } from "./ItemTypes";
import NestedDraggable from "./NestedDraggable";
// import { v4 as uuid } from "uuid";
import DragData from "./utils";

export interface ContainerState {
  cards: AnyProps[];
}
type ContainerProps = {
  className?: string;
  style?: CSSProperties;
};

const Container: FC<ContainerProps> = ({ className = "", style = {} }) => {
  const [schema, setSchema] = useState<any[]>([]);
  const dragData = new DragData();

  const onDrop = (item: AnyProps, monitor: AnyProps) => {
    console.log("onDrop: ", monitor.getDropResult(), item);
    let $data = [];
    const dropResult = monitor.getDropResult();

    if (!dropResult) {
      $data = dragData.addingData(item, schema);
    } else {
      $data = dragData.handle({ ...dropResult.data, schema }) || [];
    }

    setSchema($data);
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [ItemTypes.DIV],
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop()
    })
  });

  return (
    // <DragDropContext
    //   onDragEnd={val => {
    //     console.log(val);
    //   }}
    // >
    <div ref={drop} style={style} className={`overflow-auto ${className}`}>
      {/* <Droppable droppableId="DesignArea" isCombineEnabled={false}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>*/}
      {schema.map((card, index) => (
        // <Draggable draggableId={card.id} index={index} key={card.id}>
        //   {(provided, snapshot) => (
        //     <div
        //       className="relative"
        //       ref={provided.innerRef}
        //       {...provided.draggableProps}
        //     >
        //       <div
        //         className="h-6 z-50 flex items-center justify-center bg-sky-400 px-2.5  absolute -top-0 -translate-y-full rounded-t-md"
        //         {...provided.dragHandleProps}
        //       >
        //         <p className="text-xs  text-gray-100">拖动排序</p>
        //       </div>
        //       <div className=""></div>
        //       <NestedDraggable key={card.id} {...card} />
        //     </div>
        //   )}
        // </Draggable>
        <NestedDraggable key={card.id} {...card} />
      ))}
      {isOver && canDrop ? (
        <div className="border-indigo-600 border border-solid"></div>
      ) : null}

      {/* {provided.placeholder}
            </div>
          )}
        </Droppable> */}
    </div>
    // </DragDropContext>
  );
};

export default memo(Container);
