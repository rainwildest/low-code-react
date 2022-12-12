import type { FC, ForwardedRef, LegacyRef } from "react";
import { memo, forwardRef } from "react";
import Control from "./Control";
import { tagsName } from "./ItemTypes";

type AttributeProps = {
  ref?: LegacyRef<HTMLElement>;
  className?: string;
};

const AttributeArea: FC<AttributeProps> = forwardRef(
  ({ className }, nodeRef: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={`w-64 h-full absolute right-0 top-0 ${className}`}
        ref={nodeRef}
      ></div>
    );
  }
);

export default memo(AttributeArea);
