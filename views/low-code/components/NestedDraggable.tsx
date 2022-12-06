import type { CSSProperties, FC } from "react";
import { memo, useEffect, useRef, useState, Fragment } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
// import { v4 as uuid } from "uuid";
import { ItemTypes, tagsPosition } from "./ItemTypes";
import DragData from "./utils";
import testTags from "./test";

const style: CSSProperties = {
  border: "1px dashed gray",
  padding: "0.5rem 0.5rem",
  backgroundColor: "white"
};

interface DragDataProps {
  id: string;
  name: string;
  type: string;
  children?: Array<DragDataProps>;
  __positions__?: string[];
  __positionType__?: string;
}

const NestedDraggable: FC<DragDataProps> = ({ name, type, ...props }) => {
  console.log("dd", props, name, type);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState("");
  const dragData = new DragData();

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.DIV,
    item: { ...props, name, type },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  // const tagsType = {
  //   block: Symbol("block").toString(),
  //   inline: Symbol("inline").toString()
  // };

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

      if (0 < hoverClientY && hoverClientY < hoverMiddleY) {
        setPosition(tagsPosition.upOutside);
      }

      if (hoverMiddleY <= hoverClientY && hoverClientY < hoverMiddleY * 2) {
        setPosition(tagsPosition.inside);
      }

      if (hoverMiddleY * 2 <= hoverClientY - 6) {
        setPosition(tagsPosition.downOutside);
      }
    }
  };

  interface CollectedProps {
    canDrop: boolean;
    isOver: boolean;
  }

  const [{ isOver, canDrop }, drop] = useDrop<
    DragDataProps,
    {},
    CollectedProps
  >({
    accept: [ItemTypes.DIV],
    drop: (item, monitor) => {
      if (monitor.didDrop()) return;

      return {
        data: dragData.handleSource(position, item, { ...props, name, type })
      };
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

  const CurrentTag = testTags[type] as any;

  return (
    <Fragment>
      <div ref={dragRef}>
        {isOver && canDrop && position === tagsPosition.upOutside ? (
          <div className="bg-sky-100 rounded h-2" />
        ) : null}

        <CurrentTag
          className="cursor-grab relative"
          style={{ ...style, opacity }}
          {...props}
        >
          {name} - {position} - {props.id}
          {props?.children?.map(item => (
            <NestedDraggable {...item} name={name} type={type} key={item.id} />
          ))}
          {isOver && canDrop && position === tagsPosition.inside ? (
            <div className="bg-indigo-300 h-1/2 w-full absolute top-0 left-0" />
          ) : null}
        </CurrentTag>

        {isOver && canDrop && position === tagsPosition.downOutside ? (
          <div className="bg-sky-100 h-2" />
        ) : null}
      </div>
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
