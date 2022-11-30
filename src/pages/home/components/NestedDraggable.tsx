import type { CSSProperties, FC } from "react";
import { memo } from "react";
import { useDrag, useDrop } from "react-dnd";

const style: CSSProperties = {
  border: "1px dashed gray",
  backgroundColor: "white",
  cursor: "move"
};

export interface BoxProps {
  name: string;
  type: string;
  data: any;
}

export const NestedDraggable: FC<BoxProps> = ({ name, type, data }) => {
  const onDrop = (val: any, monitor: any) => {
    console.log(val);
    console.log(monitor.getDropResult());
  };

  const [{ opacity }, drag, preview] = useDrag(
    () => ({
      type,
      item: data,
      end(item, monitor) {
        console.log(item, monitor.didDrop());
        return null;
      },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.4 : 1
      })
    }),
    [name, type]
  );

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ["DIV"],
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return (
    <>
      {/* <div className="w-10 h-10 bg-sky-600" ref={preview} /> */}
      <div ref={drag} style={{ ...style, opacity }} data-testid="box">
        <div className="text-white">sfsd</div>
        <div
          ref={drop}
          className="h-10 border border-solid border-purple-600"
        ></div>
      </div>
    </>
  );
};

export default memo(NestedDraggable);
