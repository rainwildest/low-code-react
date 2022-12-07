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

  const svgParams = {
    style,
    onClick,
    src: url,
    className: "inline-block w-4 h-4",
    beforeInjection: (svg: AnyProps) => {
      let iconClass = !name ? "text-gray-300" : "";
      iconClass = mergeClassName(className, `${iconClass} w-full h-full`);

      iconClass.split(" ").forEach(item => {
        svg.classList.add(item);
      });
    }
  };

  return <ReactSVG {...svgParams} />;
};
export default Icon;
