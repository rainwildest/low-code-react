import type { CSSProperties, FC } from "react";
import { memo, useState } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import NestedDraggable from "./NestedDraggable";
import { v4 as uuid } from "uuid";

const style: CSSProperties = {
  height: "12rem",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left"
};

export interface DustbinProps {
  accept: string[];
  lastDroppedItem?: any;
}

const DesignArea: FC<DustbinProps> = ({ accept, lastDroppedItem }) => {
  const [schema, setSchema] = useState<any>([]);
  const [schemaId, setSchemaId] = useState<Array<string>>([]);
  const onDrop = (val: any, monitor: any) => {
    console.log(val);
    console.log(monitor.getDropResult());
    if (!monitor.getDropResult() && !schemaId.includes(val.id)) {
      const $uuid = uuid();
      /* 用于检测是否已经存在当前布局 */
      setSchemaId(update(schema, { $push: [$uuid] }));
      setSchema(update(schema, { $push: [{ ...val, id: $uuid }] }));
    }
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = isOver && canDrop;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
      {/* {isActive
        ? "Release to drop"
        : `This dustbin accepts: ${accept.join(", ")}`}

      {lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
      )} */}
      {schema.map((item: any, index: number) => {
        console.log("kkk");
        return (
          <NestedDraggable
            type="DIV"
            name={item.name}
            data={item}
          ></NestedDraggable>
        );
      })}
    </div>
  );
};

export default memo(DesignArea);
