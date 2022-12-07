import type { FC } from "react";
import { memo } from "react";
import Control from "./Control";
import { tagsName } from "./ItemTypes";

const AttributeArea: FC = () => {
  return (
    <div className="w-64 h-full absolute right-0 top-0 bg-white shadow-lg"></div>
  );
};

export default memo(AttributeArea);
