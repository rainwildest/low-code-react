import type { CSSProperties, FC, MouseEvent } from "react";
import { memo, useEffect, useRef, useState } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
// import { v4 as uuid } from "uuid";
import { ItemTypes, tagsPosition } from "config/elementTypes";
import DragData, { isInlineTags } from "../utils";
import { mergeClassName } from "lib/utils";
import _ from "lodash";
import testTags from "./test";

interface DragDataProps {
  id: string;
  name: string;
  type: string;
  attribute?: AnyProps;
  children?: Array<DragDataProps>;

  __positions__?: string[];
  __positionType__?: string;

  onSelected?: (data: AnyProps) => void;
  onContextMenu?: (data: ContextMenuProps) => void;
}

const NestedDraggable: FC<DragDataProps> = ({
  name,
  type,
  onContextMenu,
  onSelected,
  ...props
}) => {
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
  }, []);

  const CurrentTag = testTags[type] as any;

  const isDrop = isOver && canDrop;
  const isInside = isDrop && position === tagsPosition.inside;
  const isUpOutside = isDrop && position === tagsPosition.upOutside;
  const isDownOutside = isDrop && position === tagsPosition.downOutside;

  const insideClassName = isInside ? "!bg-indigo-100" : "";
  const upOutSideClassName =
    "before:content-[''] before:absolute before:w-full before:h-full before:border before:left-0 before:top-0 before:z-[-1] before:border-dashed before:border-gray-300";

  const $attr = {
    ...props?.attribute,
    className: `${mergeClassName(
      props?.attribute?.className || "",
      `cursor-grab ${insideClassName}`
    )}`,
    style: props?.attribute?.style || {}
  };

  const onItemClick = (e: MouseEvent) => {
    e.stopPropagation();

    !!onSelected && onSelected({ ...props, name, type });
  };

  const onItemContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (onContextMenu) {
      onContextMenu({
        event: e as any,
        data: { ...props, name, type }
      });
    }
  };

  return (
    <div
      ref={dragRef}
      className={`relative ${isInlineTags(type) ? "inline-block" : ""}`}
      onClick={onItemClick}
      onContextMenu={onItemContextMenu}
    >
      <div
        className={`rounded-sm bg-sky-100 transition-all duration-200 ease-linear ${
          isUpOutside ? "h-2" : "h-0"
        }`}
      />

      {/* style={{ ...style, opacity }} */}
      <div
        className={`target-${props.id}
        relative grid h-full w-full ${upOutSideClassName}`}
      >
        <CurrentTag id={props.id} {...$attr}>
          {props?.children?.map(item => (
            <NestedDraggable
              {...item}
              key={item.id}
              onContextMenu={onContextMenu ?? null}
              onSelected={onSelected ?? null}
            />
          ))}
        </CurrentTag>
      </div>

      <div
        className={`rounded-sm bg-sky-100 transition-all duration-200 ease-linear ${
          isDownOutside ? "h-2" : "h-0"
        }`}
      />
    </div>
  );
};

export default memo(NestedDraggable);
