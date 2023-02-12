import Attribute from "./Attribute";

import Layout from "./tailwindcss-classname/layout";
import FlexboxGrid from "./tailwindcss-classname/flexbox-grid";
import Sizing from "./tailwindcss-classname/sizing";
import Spacing from "./tailwindcss-classname/spacing";
import Typography from "./tailwindcss-classname/typography";

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
