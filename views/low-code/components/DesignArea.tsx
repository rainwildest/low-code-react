import update from "immutability-helper";
import { FC, CSSProperties, useRef, useEffect } from "react";
import { memo, useCallback, useState, Fragment } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { ItemTypes, tagsPosition } from "./ItemTypes";
import NestedDraggable from "./NestedDraggable";
// import { v4 as uuid } from "uuid";
import DragData from "./utils";
import { emitter } from "lib/utils";

export interface ContainerState {
  cards: AnyProps[];
}
type DesignAreaProps = {
  className?: string;
  style?: CSSProperties;

  onSelected?: (data: AnyProps) => void;
  onContextMenu?: (data: ContextMenuProps) => void;
};

const DesignArea: FC<DesignAreaProps> = ({
  className = "",
  style = {},
  onContextMenu,
  onSelected
}) => {
  const [schema, setSchema] = useState<any[]>([]);
  const dragData = new DragData();
  const selectorRef = useRef<AnyProps>(null);

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

  const onItemContextMenu = (value: ContextMenuProps) => {
    if (!onContextMenu) return;

    selectorRef.current = value.data;
    onContextMenu(value);
  };

  const onItemClick = (data: AnyProps) => {
    selectorRef.current = data;

    !!onSelected && onSelected(data);
  };

  const onKeyDown = (value: KeyboardEvent) => {
    if (value.code === "Delete") {
      setSchema(schema => {
        return dragData.remove(selectorRef.current, schema);
      });

      emitter.emit("isClear");
    }
  };

  const onMenuDelete = (value: AnyProps) => {
    setSchema(schema => dragData.remove(value, schema));

    emitter.emit("isClear");
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    emitter.on("delete", onMenuDelete);

    return () => {
      document.removeEventListener("keydown", onKeyDown);

      emitter.off("delete", onMenuDelete);
    };
  }, []);

  return (
    <div ref={drop} style={style} className={`overflow-auto ${className}`}>
      {schema.map((card, index) => (
        <NestedDraggable
          key={card.id}
          {...card}
          onContextMenu={onItemContextMenu}
          onSelected={onItemClick}
        />
      ))}
      {isOver && canDrop ? (
        <div className="border-indigo-600 border border-solid"></div>
      ) : null}
    </div>
  );
};

export default memo(DesignArea);
