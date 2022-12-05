import type { CSSProperties, FC } from "react";
import { memo } from "react";
import { useDrag, DragPreviewImage } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
// import Link from "next/link";

const style: CSSProperties = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem"
};

export interface BoxProps {
  name: string;
  type: string;
}

const Control: FC<BoxProps> = ({ name, type }) => {
  const [{ opacity }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.DIV,

      item: { name, type },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.4 : 1
      })
    }),
    [name, type]
  );

  return (
    <div
      ref={drag}
      className="cursor-grab"
      style={{ ...style, opacity }}
      title={`${type.toLocaleLowerCase()} 标签`}
    >
      {name}
    </div>
  );
};

export default memo(Control);
