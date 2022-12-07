import type { FC } from "react";
import { memo } from "react";
import Control from "./Control";
import { tagsName } from "./ItemTypes";

type AttributeProps = {
  className?: string;
};

const AttributeArea: FC<AttributeProps> = ({ className }) => {
  return (
    <div className={`w-64 h-full absolute right-0 top-0 ${className}`}></div>
  );
};

export default memo(AttributeArea);
