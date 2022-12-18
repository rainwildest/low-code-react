import Attribute from "./Attribute";

export { Attribute };

const init = [{ value: null, label: null }];
export const attributeItems = [
  {
    header: "Display 属性",
    title: "Display ClassName：",
    type: "display",
    hasCustom: false,
    options: [
      ...init,
      { value: "block", label: "display: block" },
      { value: "inline-block", label: "display: inline-block;" },
      { value: "inline", label: "display: inline;" },
      { value: "flex", label: "display: flex;" },
      { value: "inline-flex", label: "display: inline-flex;" },
      { value: "table", label: "display: table;" },
      { value: "inline-table", label: "display: inline-table;" },
      { value: "table-caption", label: "display: table-caption;" },
      { value: "table-cell", label: "display: table-cell;" },
      { value: "table-column", label: "display: table-column;" },
      { value: "table-column-group", label: "display: table-column-group;" },
      { value: "table-footer-group", label: "display: table-footer-group;" },
      { value: "table-header-group", label: "display: table-header-group;" },
      { value: "table-row-group", label: "display: table-row-group;" },
      { value: "table-row", label: "display: table-row;" },
      { value: "flow-root", label: "display: flow-root;" },
      { value: "grid", label: "display: grid;" },
      { value: "inline-grid", label: "display: inline-grid;" },
      { value: "contents", label: "display: contents;" },
      { value: "list-item", label: "display: list-item;" },
      { value: "hidden", label: "display: none;" }
    ],
    selectPlaceholder: "display: xxxx"
  },
  {
    header: "Float 属性",
    title: "Float ClassName：",
    type: "float",
    hasCustom: false,
    selectPlaceholder: "float: xxxx"
  },
  {
    header: "Clear 属性",
    title: "Clear ClassName：",
    type: "clear",
    hasCustom: false,
    selectPlaceholder: "clear: xxxx"
  },
  {
    header: "Object Fit 属性",
    title: "Object Fit ClassName：",
    type: "object fit",
    hasCustom: false,
    selectPlaceholder: "object-fit: xxxx"
  },
  {
    header: "Overflow 属性",
    title: "Overflow ClassName：",
    type: "overflow",
    hasCustom: false,
    selectPlaceholder: "overflow: xxxx"
  },
  {
    header: "Overscroll Behavior 属性",
    title: "Overscroll Behavior ClassName：",
    type: "overscroll behavior",
    hasCustom: false,
    selectPlaceholder: "overscroll-behavior: xxxx"
  },
  {
    header: "Position 属性",
    title: "Position ClassName：",
    type: "position",
    hasCustom: false,
    selectPlaceholder: "position: xxxx"
  },

  {
    header: "Inset 属性",
    title: "Inset ClassName：",
    type: "inset",
    hasCustom: false,
    selectPlaceholder: "top:xxx; / left: xxxx / ..."
  },
  {
    header: "Z-Index 属性",
    title: "Z-Index ClassName：",
    type: "z-index",
    hasCustom: false,
    selectPlaceholder: "z-index: xxxx"
  },
  {
    header: "Visibility 属性",
    title: "Visibility ClassName：",
    type: "visibility",
    hasCustom: false,
    selectPlaceholder: "visibility: xxxx"
  },
  {
    header: "Width 属性",
    title: "Width ClassName：",
    type: "width",
    hasCustom: true,
    inputPlaceholder: "0px"
  },
  {
    header: "Height 属性",
    title: "Height ClassName：",
    type: "height",
    hasCustom: true,
    inputPlaceholder: "0px"
  }
];
