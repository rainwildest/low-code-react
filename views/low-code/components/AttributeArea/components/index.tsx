import Attribute from "./Attribute";

import Layout from "./tailwindcss/layout";
import FlexboxGrid from "./tailwindcss/flexbox-grid";
import Sizing from "./tailwindcss/sizing";
import Spacing from "./tailwindcss/spacing";
import Typography from "./tailwindcss/typography";

export { Attribute };

export const attributeItems: Array<AttributeProps> = [
  ...Layout,
  ...FlexboxGrid,
  ...Sizing,
  ...Spacing,
  ...Typography
  // {
  //   type: "",
  //   header: " 属性",
  //   title: " ClassName：",
  //   inputPlaceholder: ": xxxx",
  //   selectPlaceholder: ": xxxx",
  //   hasCustom: false,
  //   options: [
  //     { value: "", label: "『  』 " },
  //     { value: "", label: "『  』 " }
  //   ]
  // }
];
