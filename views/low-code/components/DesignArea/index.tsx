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
  className?: string;
  style?: CSSProperties;

  onSelected?: (data: AnyProps) => void;
  onContextMenu?: (data: ContextMenuProps) => void;
  onClicked?: () => void;
};

const DesignArea: FC<DesignAreaProps> = ({
  className = "",
  style = {},

  onClicked,
  onSelected,
  onContextMenu
}) => {
  const [schema, setSchema] = useState<any[]>([]);

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

      emitter.emit(emitinfo["delete:clear"]);
    }
  };

  const onMenuDelete = (value: AnyProps) => {
    setSchema(schema => dragData.remove(value, schema));

    emitter.emit(emitinfo["delete:clear"]);
  };

  const onClickDesignArea = (e: MouseEvent<HTMLDivElement>) => {
    onClicked && onClicked();

    // e.stopPropagation();
  };

  const onAttributeChange = (val: AnyProps) => {
    setSchema(schema => {
      console.log("design area", dragData.modify(val, schema));
      return dragData.modify(val, schema);
    });
  };

  useEffect(() => {
    const events = [
      /**
       * @brief 监听删除按钮
       */
      { name: "keydown", function: onKeyDown, isEmit: false },
      /**
       * @brief 注册监听删除
       */
      { name: emitinfo["delete:remove"], function: onMenuDelete, isEmit: true },
      {
        name: emitinfo["change:attribute"],
        function: onAttributeChange,
        isEmit: true
      }
    ];

    events.forEach(event => {
      if (event.isEmit) {
        emitter.on(event.name, event.function);
      } else {
        document.addEventListener(event.name as string, event.function);
      }
    });

    return () => {
      events.forEach(event => {
        if (event.isEmit) {
          emitter.off(event.name, event.function);
        } else {
          document.removeEventListener(event.name as string, event.function);
        }
      });
    };
  }, []);

  return (
    <div
      ref={drop}
      style={style}
      className={`overflow-auto ${className}`}
      onClick={onClickDesignArea}
    >
      {schema.map(card => (
        <NestedDraggable
          key={card.id}
          {...card}
          onContextMenu={onItemContextMenu}
          onSelected={onItemClick}
        />
      ))}

      {isOver && canDrop ? (
        <div className="border border-solid border-indigo-600"></div>
      ) : null}
    </div>
  );
};

export default memo(DesignArea);
