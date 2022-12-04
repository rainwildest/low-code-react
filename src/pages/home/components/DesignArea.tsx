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
    console.log("onDrop: ", monitor.getDropResult());

    const dropResult = monitor.getDropResult();

    if (!dropResult && item.id) return;

    if (!dropResult) {
      const $uuid = uuid();

      /* 用于检测是否已经存在当前布局 */
      // setSchemaId(update(schemaId, { $push: [$uuid] }));
      setSchema(update(schema, { $push: [{ ...item, id: $uuid, __positions__: null }] }));
    } else {
      if (!dropResult?.removeId) {
        const { data } = dropResult;
        /* 没有 __positions__ 就说明只是父级的一级 */
        if (!data.target?.__positions__ && tagsPosition.inside === data.__positionType__) {
          const index = schema.findIndex(item => item.id === dropResult.data.target.id);
          if (~index) {
            setSchema(update(schema, { $splice: [[index, 1, dropResult.data.target]] }));
          }
        } else {
          const { data, index } = dragData.handle({
            ...dropResult.data,
            schema
          });

          if (dropResult.data.__positionType__ === tagsPosition.upOutside) {
            console.log(data);
            setSchema(data);
          }

          if (dropResult.data.__positionType__ === tagsPosition.inside) {
            if (!!data && index !== null && index !== undefined) {
              setSchema(update(schema, { $splice: [[index, 1, data[index]]] }));
            }
          }

          if (dropResult.data.__positionType__ === tagsPosition.downOutside) {
            console.log(tagsPosition.downOutside);
            if (index !== null && index !== undefined) {
              console.log("有索引", index, data);
              setSchema(update(schema, { $splice: [[index, 1, data[index]]] }));
            } else {
              console.log("没有索引", data);
              setSchema(data);
            }
          }

          // const { data, index } = modifyData(dropResult.data, schema, dropResult.data.__positions__);
          // console.log(data, index);
          // if (!!data && index !== null && index !== undefined) {
          //   setSchema(update(schema, { $splice: [[index, 1, data[index]]] }));
          // }
        }
      }
    }
  };

  // const modifyData = (data: AnyProps, original: Array<AnyProps>, position: Array<string>) => {
  //   const $original = [...original];
  //   let $index: number | null = null;

  //   /* 适用于块级标签的内嵌 */
  //   if (position.length) {
  //     const index = $original.findIndex(item => item.id === position[0]);

  //     if (!~index) return { data: null, index: null };

  //     $index = index;

  //     const subIndex = $original[index].children.findIndex((item: AnyProps) => item.id === data.id);

  //     const childrenId = $original[index].children[subIndex]?.id;

  //     /* 对比子集 id 与 新增数据的 id 是否一致 不一致则继续查找 */
  //     if (childrenId !== data.id) {
  //       const { data: $data } = modifyData(data, $original[index].children, update(position, { $splice: [[0, 1]] }));

  //       $original[index] = { ...$original[index], children: $data };
  //     }

  //     /* 查找子集中与新增数据的 id 相同的数据  */
  //     const sub = $original[index].children.map((item: AnyProps) => {
  //       if (item.id !== data.id) return item;

  //       return data;
  //     });

  //     $original[index] = { ...$original[index], children: sub };
  //   }

  //   return { data: $original, index: $index };
  // };

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
      <div className="border border-solid border-red-900 w-full h-full overflow-auto" ref={drop} style={style}>
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
                        className="h-6 flex items-center justify-center bg-sky-400 px-2.5  absolute -top-0 -translate-y-full rounded-t-md"
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
