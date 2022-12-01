import type { CSSProperties, FC } from "react";
import { memo } from "react";
import { useDrag, useDrop } from "react-dnd";

import { ItemTypes } from "./ItemTypes";

const style: CSSProperties = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move"
};

export interface CardProps {
  id: string;
  text: string;
  moveCard: (id: string, to: number) => void;
  findCard: (id: string) => { index: number };
}

interface Item {
  id: string;
  originalIndex: number;
}

const Card: FC<CardProps> = ({ id, text, moveCard, findCard }) => {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.DIV,
    item: { id, originalIndex, name: text },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    end: (item, monitor) => {
      const { id: droppedId, originalIndex } = item;
      const didDrop = monitor.didDrop();
      console.log(droppedId, id);
      console.log(didDrop);
      if (!didDrop) {
        moveCard(droppedId, originalIndex);
      }
    }
  });

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [ItemTypes.DIV],
    drop: (val: any, monitor: any) => {
      // console.log(val, id);
      return { change: { data: { ...val }, id } };
    },
    hover({ id: draggedId }: Item) {
      // console.log(draggedId, id, findCard(id));
      // if (draggedId !== id && draggedId !== undefined) {
      //   console.log(draggedId, id);
      //   const { index: overIndex } = findCard(id);
      //   moveCard(draggedId, overIndex);
      // }

      if (draggedId === undefined) {
      }

      return { test: "ooo" };
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const opacity = isDragging ? 0.5 : 1;
  return (
    // <div ref={node => drag(drop(node))} style={{ ...style, opacity }}>
    //   <div className="h-20">{text}</div>
    //   {/* <div
    //     ref={drop}
    //     className="w-full h-24 border border-solid border-red-700"
    //   ></div> */}
    //   {isOver && canDrop ? <div className="border-indigo-600 border" /> : null}
    // </div>

    <div ref={drag} style={{ ...style, opacity }}>
      {text}
      <div
        ref={drop}
        className="w-full h-24 border border-solid border-red-700"
      ></div>
      {isOver && canDrop ? <div className="border-indigo-600 border" /> : null}
    </div>
  );
};

export default memo(Card);
