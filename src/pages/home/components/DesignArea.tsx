import update from "immutability-helper";
import type { FC } from "react";
import { memo, useCallback, useState, Fragment } from "react";
import { useDrop } from "react-dnd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { ItemTypes, tagsPosition } from "./ItemTypes";
import NestedDraggable from "./NestedDraggable";
// import { v4 as uuid } from "uuid";
import DragData, { UUID } from "./utils";
const uuid = UUID();

const style = {};

export interface ContainerState {
  cards: any[];
}

const Container: FC = () => {
  const [schema, setSchema] = useState<any[]>([]);
  const dragData = new DragData();
  // const [schemaId, setSchemaId] = useState<Array<string>>([]);

  const onDrop = (item: any, monitor: any) => {
    console.log("onDrop: ", monitor.getDropResult(), item);

    const dropResult = monitor.getDropResult();

    if (!dropResult && item.id) return;

    if (!dropResult) {
      const $uuid = uuid();

      /* 用于检测是否已经存在当前布局 */
      // setSchemaId(update(schemaId, { $push: [$uuid] }));
      setSchema(update(schema, { $push: [{ ...item, id: $uuid, __positions__: null }] }));
    } else {
      if (!dropResult?.removeId) {
        const data = dragData.handle({
          ...dropResult.data,
          schema
        });

        setSchema(data || []);
      }
    }
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
    <DragDropContext
      onDragEnd={val => {
        console.log(val);
      }}
    >
      <div className="b w-full h-full overflow-auto" ref={drop} style={style}>
        {/*
      {schema.map(card => (
        <NestedDraggable
          key={card.id}
          id={`${card.id}`}
          text={card.name}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
      {isOver && canDrop ? <div className="border-indigo-600 border" /> : null}
      */}

        <Droppable droppableId="DesignArea" isCombineEnabled={false}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {schema.map((card, index) => (
                <Draggable draggableId={card.id} index={index} key={card.id}>
                  {(provided, snapshot) => (
                    <div className="relative" ref={provided.innerRef} {...provided.draggableProps}>
                      <div
                        className="h-6 opacity-0 pointer-events-none flex items-center justify-center bg-sky-400 px-2.5  absolute -top-0 -translate-y-full rounded-t-md"
                        {...provided.dragHandleProps}
                      >
                        <p className="text-xs  text-gray-100">拖动排序</p>
                      </div>
                      <div className=""></div>
                      <NestedDraggable key={card.id} data={card} />
                    </div>
                  )}
                </Draggable>
              ))}
              {isOver && canDrop ? <div className="border-indigo-600 border" /> : null}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default memo(Container);
