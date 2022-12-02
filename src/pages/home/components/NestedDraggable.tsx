import type { CSSProperties, FC } from "react";
import { memo, useEffect, useRef, useState, Fragment } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { v4 as uuid } from "uuid";

import { ItemTypes } from "./ItemTypes";

const style: CSSProperties = {
  border: "1px dashed gray",
  padding: "0.5rem 0.5rem",
  backgroundColor: "white",
  cursor: "move"
};

export interface CardProps {
  data: DragData;
  // moveCard: (id: string, to: number) => void;
  // findCard: (id: string) => { index: number };
}

interface DragData {
  id: string;
  name: string;
  position?: string[];
  children?: Array<DragData>;
}

const NestedDraggable: FC<CardProps> = ({ data }) => {
  const dragRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState("");

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.DIV,
    item: { ...data },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    end: (item, monitor) => {
      // const { id: droppedId, originalIndex } = item;
      // const didDrop = monitor.didDrop();
      // console.log(droppedId, data.id);
      // console.log(didDrop);
      // if (!didDrop) {
      //   moveCard(droppedId, originalIndex);
      // }
    }
  });

  // const tagsType = {
  //   block: Symbol("block").toString(),
  //   inline: Symbol("inline").toString()
  // };
  const tagsPosition = {
    upOutside: Symbol("upOutside").toString(),
    downOutside: Symbol("downOutside").toString(),
    inside: Symbol("inside").toString()
  };

  const inlineTags = (
    dragRef: React.MutableRefObject<HTMLDivElement>,
    monitor: DropTargetMonitor
  ) => {
    // Determine rectangle on screen
    const hoverBoundingRect = dragRef.current.getBoundingClientRect();
    console.log(hoverBoundingRect);
    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    // Determine mouse position
    console.log(hoverMiddleY);
    const clientOffset = monitor.getClientOffset();
    //const dragOffset = monitor.getSourceClientOffset()
    console.log(clientOffset);
    if (clientOffset) {
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards

      console.log(hoverClientY, hoverMiddleY);
      if (hoverClientY <= hoverMiddleY) {
        setPosition(tagsPosition.upOutside);
      }
      // Dragging upwards
      if (hoverClientY > hoverMiddleY) {
        setPosition(tagsPosition.downOutside);
      }
    }
  };
  const blockTags = (
    dragRef: React.MutableRefObject<HTMLDivElement | null>,
    monitor: DropTargetMonitor
  ) => {
    const hoverBoundingRect = dragRef.current?.getBoundingClientRect();

    if (!hoverBoundingRect) return;

    // Get vertical middle
    const part = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 3;
    const hoverMiddleY = parseInt(part.toString());

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();
    //const dragOffset = monitor.getSourceClientOffset()

    if (clientOffset) {
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (0 <= hoverClientY && hoverClientY < hoverMiddleY) {
        setPosition(tagsPosition.upOutside);
      }

      if (hoverMiddleY <= hoverClientY && hoverClientY < hoverMiddleY * 2) {
        setPosition(tagsPosition.inside);
      }

      if (hoverMiddleY * 2 <= hoverClientY) {
        setPosition(tagsPosition.downOutside);
      }
    }
  };

  interface CollectedProps {
    canDrop: boolean;
    isOver: boolean;
  }

  const [{ isOver, canDrop }, drop] = useDrop<DragData, {}, CollectedProps>({
    accept: [ItemTypes.DIV],
    drop: (item, monitor) => {
      if (monitor.didDrop()) return;

      console.log(item, data);
      let $data: AnyProps = {};
      let removeId = "";

      if (position === tagsPosition.inside) {
        console.log(tagsPosition.inside);

        const $uuid = item.id ? item.id : uuid();
        const position = data?.position
          ? [...data.position, data.id]
          : [data.id];
        // ? `${data.position}||${data.id}`
        // : data.id;

        $data = {
          ...data,
          children: [
            {
              ...item,
              position,
              id: $uuid
            }
          ]
        };

        removeId = item?.id || "";
      }

      return { data: $data, removeId };
    },
    hover(item, monitor) {
      const didHover = monitor.isOver({ shallow: true });

      didHover && blockTags(dragRef, monitor);

      // console.log(draggedId, id, findCard(id));
      // if (draggedId !== id && draggedId !== undefined) {
      //   console.log(draggedId, id);
      //   const { index: overIndex } = findCard(id);
      //   moveCard(draggedId, overIndex);
      // }
    },
    collect: monitor => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop()
    })
  });

  const opacity = isDragging ? 0.5 : 1;

  useEffect(() => {
    drag(drop(dragRef));
  });

  return (
    <Fragment>
      {isOver && canDrop && position === tagsPosition.upOutside ? (
        <div className="bg-sky-100 rounded border h-2" />
      ) : null}

      <div ref={dragRef} style={{ ...style, opacity }}>
        <div className="h-20">
          {data.name} - {position} - {data.id}
        </div>

        {/* {data?.children?.map((item)=> )} */}
        {data?.children?.map(item => (
          <NestedDraggable data={item} key={item.id} />
        ))}

        {isOver && canDrop && position === tagsPosition.inside ? (
          <div className="border-indigo-600 border" />
        ) : null}
      </div>

      {isOver && canDrop && position === tagsPosition.downOutside ? (
        <div className="bg-sky-100 rounded border h-2" />
      ) : null}
    </Fragment>

    // <div ref={drag} style={{ ...style, opacity }}>
    //   {text} {id}
    //   <div
    //     ref={drop}
    //     className="w-full h-24 border border-solid border-red-700"
    //   ></div>
    //   {isOver && canDrop ? <div className="border-indigo-600 border" /> : null}
    // </div>
  );
};

export default memo(NestedDraggable);
