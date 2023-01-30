import Attribute from "./Attribute";

export { Attribute };

const init = [{ value: null, label: "请选择" }];

export const attributeItems: Array<AttributeProps> = [
  {
    type: "",
    header: " 属性",
    title: " ClassName：",
    inputPlaceholder: ": xxxx",
    selectPlaceholder: ": xxxx",
    hasCustom: false,
    options: [
      { value: "", label: "『  』 " },
      { value: "", label: "『  』 " }
    ]
  },
  {
    type: "width",
    header: "Width 属性",
    title: "Width ClassName：",
    inputPlaceholder: "0px",
    hasCustom: true,
    options: []
  },
  {
    type: "height",
    header: "Height 属性",
    title: "Height ClassName：",
    inputPlaceholder: "0px",
    hasCustom: true,
    options: []
  }
];
