import React from "react";
import { ReactSVG } from "react-svg";
import { mergeClassName } from "lib/utils";

type IconProps = {
  name: string;
  className?: string;
  style?: { [key: string]: any };
  onClick?: React.MouseEventHandler & React.MouseEventHandler<SVGSVGElement>;
  [key: string]: any;
};

const handleClassName = (className: string): string => {
  return mergeClassName(className, "svg-icon inline-block");
};
const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  style,
  onClick
}) => {
  const base = "/icons/";
  const url = `${base}${name || "default-internal"}.svg`;

  const ws = (className || "").match(/(w-[\S]+)/g);
  const hs = (className || "").match(/(h-[\S]+)/g);

  const width = ws?.join(" ");
  const height = hs?.join(" ");

  const svgParams = {
    style,
    onClick,
    src: url,
    className: `inline-block ${width ?? "w-4"} ${height ?? "h-4"}`,
    beforeInjection: (svg: AnyProps) => {
      let iconClass = !name ? "text-gray-300" : "";
      iconClass = mergeClassName(
        (className || "").replace(/(w-[\S]+\s?)|(h-[\S]+\s?)/g, ""),
        `${iconClass} w-full h-full`
      );

      iconClass.split(" ").forEach(item => {
        svg.classList.add(item);
      });
    }
  };

  return <ReactSVG {...svgParams} />;
};
export default Icon;
