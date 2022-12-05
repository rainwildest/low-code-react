import type { CSSProperties, FC } from "react";
import { memo } from "react";
import { useDrag, DragPreviewImage } from "react-dnd";
// import Link from "next/link";

const style: CSSProperties = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left"
};

export interface BoxProps {
  name: string;
  type: string;
  isDropped: boolean;
}

const ControlArea: FC<BoxProps> = ({ name, type, isDropped }) => {
  const [{ opacity }, drag, preview] = useDrag(
    () => ({
      type,
      item: { name },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.4 : 1
      })
    }),
    [name, type]
  );

  return (
    <div>
      <div ref={drag} style={{ ...style, opacity }} data-testid="box">
        {name}
      </div>
      {/* <Link href="/signup">About Us</Link> */}
    </div>
  );
};

export default memo(ControlArea);
