import update from "immutability-helper";
import { FC, CSSProperties, useRef, useEffect, MouseEvent } from "react";
import { memo, useCallback, useState, Fragment } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { ItemTypes, tagsPosition } from "config/elementTypes";
import NestedDraggable from "../NestedDraggable";
// import { v4 as uuid } from "uuid";
import DragData from "../utils";
import { emitter } from "lib/utils";
import { emitinfo } from "config/emitter";

export interface ContainerState {
  cards: AnyProps[];
}
type DesignAreaProps = {
  schema: AnyProps[];
  className?: string;
  style?: CSSProperties;

  onSelected?: (data: AnyProps) => void;
  onContextMenu?: (data: ContextMenuProps) => void;
  onClicked?: () => void;
  onChanged?: (data: AnyProps[]) => void;
  onDeleted?: (data: AnyProps[]) => void;
};

const DesignArea: FC<DesignAreaProps> = ({
  schema = [],
  className = "",
  style = {},

  onClicked,
  onChanged,
  onSelected,
  onContextMenu
}) => {
  const dragData = new DragData();
  const selectorRef = useRef<AnyProps>(null);

  const onDrop = (item: AnyProps, monitor: AnyProps) => {
    // console.log("onDrop: ", monitor.getDropResult(), item);

    let $data = [];
    const dropResult = monitor.getDropResult();

    if (!dropResult) {
      $data = dragData.addingData(item, schema);
    } else {
      $data = dragData.handle({ ...dropResult.data, schema }) || [];
    }

    onChanged && onChanged($data);
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [ItemTypes.DIV],
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop()
    })
  });

  const onItemContextMenu = (value: ContextMenuProps) => {
    if (!onContextMenu) return;

    selectorRef.current = value.data;
    onContextMenu(value);
  };

  const onItemClick = (data: AnyProps) => {
    selectorRef.current = data;

    !!onSelected && onSelected(data);
  };

  const onClickDesignArea = (e: MouseEvent<HTMLDivElement>) => {
    onClicked && onClicked();

    // e.stopPropagation();
  };

  return (
    <div ref={drop} style={style} className={`overflow-auto ${className}`} onClick={onClickDesignArea}>
      {schema.map((card: any) => (
        <NestedDraggable key={card.id} {...card} onContextMenu={onItemContextMenu} onSelected={onItemClick} />
      ))}

      {isOver && canDrop ? <div className="border border-solid border-indigo-600"></div> : null}
    </div>
  );
};

export default memo(DesignArea);
