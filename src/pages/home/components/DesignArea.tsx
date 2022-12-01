import update from "immutability-helper";
import type { FC } from "react";
import { memo, useCallback, useState, Fragment } from "react";
import { useDrop } from "react-dnd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { ItemTypes } from "./ItemTypes";
import NestedDraggable from "./NestedDraggable";
import { v4 as uuid } from "uuid";

const style = {};

export interface ContainerState {
  cards: any[];
}

const Container: FC = () => {
  const [schema, setSchema] = useState<any[]>([]);
  const [schemaId, setSchemaId] = useState<Array<string>>([]);

  const onDrop = (val: any, monitor: any) => {
    console.log(val);
    console.log(monitor.getDropResult(), !schemaId.includes(val.id));
    if (!monitor.getDropResult() && !schemaId.includes(val.id)) {
      const $uuid = uuid();

      /* 用于检测是否已经存在当前布局 */
      setSchemaId(update(schemaId, { $push: [$uuid] }));
      setSchema(update(schema, { $push: [{ ...val, id: $uuid }] }));
    }

    if (val?.change) {
      // children
      const { data, id } = val.change;
      // id 需要数据需要放入的 id
    }
  };

  const findCard = useCallback(
    (id: string) => {
      const card = schema.filter(c => `${c.id}` === id)[0] as {
        id: number;
        name: string;
      };
      return {
        card,
        index: schema.indexOf(card)
      };
    },
    [schema]
  );

  const moveCard = useCallback(
    (id: string, atIndex: number) => {
      const { card, index } = findCard(id);
      setSchema(
        update(schema, {
          $splice: [
            [index, 1],
            [atIndex, 0, card]
          ]
        })
      );
    },
    [findCard, schema, setSchema]
  );

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [ItemTypes.DIV],
    drop: onDrop,
    hover(item: any, i) {
      // console.log(item, i.getHandlerId());
      // if (draggedId !== id && draggedId !== undefined) {
      //   console.log(draggedId, id);
      //   const { index: overIndex } = findCard(id);
      //   moveCard(draggedId, overIndex);
      // }
      // if (draggedId === undefined) {
      // }
    },
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
      <div
        className="border border-solid border-red-900 w-full h-full"
        ref={drop}
        style={style}
      >
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
                    <div
                      className="relative"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div
                        className="h-6 flex items-center justify-center bg-sky-400 px-2.5  absolute -top-0 -translate-y-full rounded-t-md"
                        {...provided.dragHandleProps}
                      >
                        <p className="text-xs  text-gray-100">拖动排序</p>
                      </div>
                      <div className=""></div>
                      <NestedDraggable
                        key={card.id}
                        id={`${card.id}`}
                        text={card.name}
                        moveCard={moveCard}
                        findCard={findCard}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {isOver && canDrop ? (
                <div className="border-indigo-600 border" />
              ) : null}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default memo(Container);
