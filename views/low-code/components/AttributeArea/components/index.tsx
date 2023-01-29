import Attribute from "./Attribute";

export { Attribute };

const init = [{ value: null, label: "请选择" }];

export const attributeItems: Array<AttributeProps> = [
  {
    type: "display",
    header: "Display 属性",
    title: "Display ClassName：",
    selectPlaceholder: "display: xxxx",
    hasCustom: false,
    options: [
      { value: "block", label: "『 block 』 display: block" },
      {
        value: "inline-block",
        label: "『 inline-block 』 display: inline-block;"
      },
      { value: "inline", label: "『 inline 』 display: inline;" },
      { value: "flex", label: "『 flex 』 display: flex;" },
      {
        value: "inline-flex",
        label: "『 inline-flex 』 display: inline-flex;"
      },
      { value: "table", label: "『 table 』 display: table;" },
      {
        value: "inline-table",
        label: "『 inline-table 』 display: inline-table;"
      },
      {
        value: "table-caption",
        label: "『 table-caption 』 display: table-caption;"
      },
      { value: "table-cell", label: "『 table-cell 』 display: table-cell;" },
      {
        value: "table-column",
        label: "『 table-column 』 display: table-column;"
      },
      {
        value: "table-column-group",
        label: "『 table-column-group 』 display: table-column-group;"
      },
      {
        value: "table-footer-group",
        label: "『 table-footer-group 』 display: table-footer-group;"
      },
      {
        value: "table-header-group",
        label: "『 table-header-group 』 display: table-header-group;"
      },
      {
        value: "table-row-group",
        label: "『 table-row-group 』 display: table-row-group;"
      },
      { value: "table-row", label: "『 table-row 』 display: table-row;" },
      { value: "flow-root", label: "『 flow-root 』 display: flow-root;" },
      { value: "grid", label: "『 grid 』 display: grid;" },
      {
        value: "inline-grid",
        label: "『 inline-grid 』 display: inline-grid;"
      },
      { value: "contents", label: "『 contents 』 display: contents;" },
      { value: "list-item", label: "『 list-item 』 display: list-item;" },
      { value: "hidden", label: "『 hidden 』 display: none;" }
    ]
  },
  {
    type: "box-sizing",
    header: "Box Sizing 属性",
    title: "Box Sizing ClassName：",
    selectPlaceholder: "box-sizing: xxxx",
    hasCustom: false,
    options: [
      {
        value: "box-border",
        label: "『 box-border 』 box-sizing: border-box;"
      },
      {
        value: "box-content",
        label: "『 box-content 』 box-sizing: content-box;"
      }
    ]
  },
  {
    type: "float",
    header: "Float 属性",
    title: "Float ClassName：",
    selectPlaceholder: "float: xxxx",
    hasCustom: false,
    options: [
      { value: "float-right", label: "『 float-right 』 float: right;" },
      { value: "float-left", label: "『 float-left 』 float: left;" },
      { value: "float-none", label: "『 float-none 』 float: none;" }
    ]
  },
  {
    type: "clear",
    header: "Clear 属性",
    title: "Clear ClassName：",
    selectPlaceholder: "clear: xxxx",
    hasCustom: false,
    options: [
      { value: "clear-left", label: "『 clear-left 』 clear: left;" },
      { value: "clear-right", label: "『 clear-right 』 clear: right;" },
      { value: "clear-both", label: "『 clear-both 』 clear: both;" },
      { value: "clear-none", label: "『 clear-none 』 clear: none;" }
    ]
  },
  {
    type: "object-fit",
    header: "Object Fit 属性",
    title: "Object Fit ClassName：",
    selectPlaceholder: "object-fit: xxxx",
    hasCustom: false,
    options: [
      {
        value: "object-contain",
        label: "『 object-contain 』 object-fit: contain;"
      },
      { value: "object-cover", label: "『 object-cover 』 object-fit: cover;" },
      { value: "object-fill", label: "『 object-fill 』 object-fit: fill;" },
      { value: "object-none", label: "『 object-none 』 object-fit: none;" },
      {
        value: "object-scale-down",
        label: "『 object-scale-down 』 object-fit: scale-down;"
      }
    ]
  },
  {
    type: "object-position",
    header: "Object Position 属性",
    title: "Object Position ClassName：",
    selectPlaceholder: "object-position: xxxx",
    hasCustom: false,
    options: [
      {
        value: "object-bottom",
        label: "『 object-bottom 』 object-position: bottom;"
      },
      {
        value: "object-center",
        label: "『 object-center 』 object-position: center;"
      },
      {
        value: "object-left",
        label: "『 object-left 』 object-position: left;"
      },
      {
        value: "object-left-bottom",
        label: "『 object-left-bottom 』 object-position: left bottom;"
      },
      {
        value: "object-left-top",
        label: "『 object-left-top 』 object-position: left top;"
      },
      {
        value: "object-right",
        label: "『 object-right 』 object-position: right;"
      },
      {
        value: "object-right-bottom",
        label: "『 object-right-bottom 』 object-position: right bottom;"
      },
      {
        value: "object-right-top",
        label: "『 object-right-top 』 object-position: right top;"
      },
      { value: "object-top", label: "『 object-top 』 object-position: top;" }
    ]
  },
  {
    type: "overflow",
    header: "Overflow 属性",
    title: "Overflow ClassName：",
    selectPlaceholder: "overflow: xxxx",
    hasCustom: false,
    options: [
      { value: "overflow-auto", label: "『 overflow-auto 』 overflow: auto;" },
      {
        value: "overflow-hidden",
        label: "『 overflow-hidden 』 overflow: hidden;"
      },
      { value: "overflow-clip", label: "『 overflow-clip 』 overflow: clip;" },
      {
        value: "overflow-visible",
        label: "『 overflow-visible 』 overflow: visible;"
      },
      {
        value: "overflow-scroll",
        label: "『 overflow-scroll 』 overflow: scroll;"
      },
      {
        value: "overflow-x-auto",
        label: "『 overflow-x-auto 』 overflow-x: auto;"
      },
      {
        value: "overflow-y-auto",
        label: "『 overflow-y-auto 』 overflow-y: auto;"
      },
      {
        value: "overflow-x-hidden",
        label: "『 overflow-x-hidden 』 overflow-x: hidden;"
      },
      {
        value: "overflow-y-hidden",
        label: "『 overflow-y-hidden 』 overflow-y: hidden;"
      },
      {
        value: "overflow-x-clip",
        label: "『 overflow-x-clip 』 overflow-x: clip;"
      },
      {
        value: "overflow-y-clip",
        label: "『 overflow-y-clip 』 overflow-y: clip;"
      },
      {
        value: "overflow-x-visible",
        label: "『 overflow-x-visible 』 overflow-x: visible;"
      },
      {
        value: "overflow-y-visible",
        label: "『 overflow-y-visible 』 overflow-y: visible;"
      },
      {
        value: "overflow-x-scroll",
        label: "『 overflow-x-scroll 』 overflow-x: scroll;"
      },
      {
        value: "overflow-y-scroll",
        label: "『 overflow-y-scroll 』 overflow-y: scroll;"
      }
    ]
  },
  {
    type: "overscroll-behavior",
    header: "Overscroll Behavior 属性",
    title: "Overscroll Behavior ClassName：",
    selectPlaceholder: "overscroll-behavior: xxxx",
    hasCustom: false,
    options: [
      {
        value: "overscroll-auto",
        label: "『 overscroll-auto 』 overscroll-behavior: auto;"
      },
      {
        value: "overscroll-contain",
        label: "『 overscroll-contain 』 overscroll-behavior: contain;"
      },
      {
        value: "overscroll-none",
        label: "『 overscroll-none 』 overscroll-behavior: none;"
      },
      {
        value: "overscroll-y-auto",
        label: "『 overscroll-y-auto 』 overscroll-behavior-y: auto;"
      },
      {
        value: "overscroll-y-contain",
        label: "『 overscroll-y-contain 』 overscroll-behavior-y: contain;"
      },
      {
        value: "overscroll-y-none",
        label: "『 overscroll-y-none 』 overscroll-behavior-y: none;"
      },
      {
        value: "overscroll-x-auto",
        label: "『 overscroll-x-auto 』 overscroll-behavior-x: auto;"
      },
      {
        value: "overscroll-x-contain",
        label: "『 overscroll-x-contain 』 overscroll-behavior-x: contain;"
      },
      {
        value: "overscroll-x-none",
        label: "『 overscroll-x-none 』 overscroll-behavior-x: none;"
      }
    ]
  },
  {
    type: "position",
    header: "Position 属性",
    title: "Position ClassName：",
    selectPlaceholder: "position: xxxx",
    hasCustom: false,
    options: [
      { value: "static", label: "『 static 』 position: static;" },
      { value: "fixed", label: "『 fixed 』 position: fixed;" },
      { value: "absolute", label: "『 absolute 』 position: absolute;" },
      { value: "relative", label: "『 relative 』 position: relative;" },
      { value: "sticky", label: "『 sticky 』 position: sticky;" }
    ]
  },

  {
    type: "inset",
    header: "Inset 属性",
    title: "Inset ClassName：",
    selectPlaceholder: "top:xxx; / right: xxxx / ...",
    hasCustom: false,
    options: [
      {
        label: "0px",
        options: [
          {
            value: "inset-0",
            label: "『 inset-0 』 top: 0px; right: 0px; bottom: 0px; left: 0px;"
          },
          {
            value: "inset-x-0",
            label: "『 inset-x-0 』 left: 0px; right: 0px;"
          },
          {
            value: "inset-y-0",
            label: "『 inset-y-0 』 top: 0px; bottom: 0px;"
          },
          { value: "top-0", label: "『 top-0 』 top: 0px;" },
          { value: "right-0", label: "『 right-0 』 right: 0px;" },
          { value: "bottom-0", label: "『 bottom-0 』 bottom: 0px;" },
          { value: "left-0", label: "『 left-0 』 left: 0px;" }
        ]
      },
      {
        label: "1px",
        options: [
          {
            value: "inset-px",
            label:
              "『 inset-px 』 top: 1px; right: 1px; bottom: 1px; left: 1px;"
          },
          {
            value: "inset-x-px",
            label: "『 inset-x-px 』 left: 1px; right: 1px;"
          },
          {
            value: "inset-y-px",
            label: "『 inset-y-px 』 top: 1px; bottom: 1px;"
          },
          { value: "top-px", label: "『 top-px 』 top: 1px;" },
          { value: "right-px", label: "『 right-px 』 right: 1px;" },
          { value: "bottom-px", label: "『 bottom-px 』 bottom: 1px;" },
          { value: "left-px", label: "『 left-px 』 left: 1px;" }
        ]
      },
      {
        label: "2px",
        options: [
          {
            value: "inset-0.5",
            label:
              "『 inset-0.5 』 top: 0.125rem; right: 0.125rem; bottom: 0.125rem; left: 0.125rem;"
          },
          {
            value: "inset-x-0.5",
            label: "『 inset-x-0.5 』 left: 0.125rem; right: 0.125rem;"
          },
          {
            value: "inset-y-0.5",
            label: "『 inset-y-0.5 』 top: 0.125rem; bottom: 0.125rem;"
          },
          { value: "top-0.5", label: "『 top-0.5 』 top: 0.125rem;" },
          { value: "right-0.5", label: "『 right-0.5 』 right: 0.125rem;" },
          { value: "bottom-0.5", label: "『 bottom-0.5 』 bottom: 0.125rem;" },
          { value: "left-0.5", label: "『 left-0.5 』 left: 0.125rem;" }
        ]
      },
      {
        label: "4px",
        options: [
          {
            value: "inset-1",
            label:
              "『 inset-1 』 top: 0.25rem; right: 0.25rem; bottom: 0.25rem; left: 0.25rem;"
          },
          {
            value: "inset-x-1",
            label: "『 inset-x-1 』 left: 0.25rem; right: 0.25rem;"
          },
          {
            value: "inset-y-1",
            label: "『 inset-y-1 』 top: 0.25rem; bottom: 0.25rem;"
          },
          { value: "top-1", label: "『 top-1 』 top: 0.25rem;" },
          { value: "right-1", label: "『 right-1 』 right: 0.25rem;" },
          { value: "bottom-1", label: "『 bottom-1 』 bottom: 0.25rem;" },
          { value: "left-1", label: "『 left-1 』 left: 0.25rem;" }
        ]
      },
      {
        label: "6px",
        options: [
          {
            value: "inset-1.5",
            label:
              "『 inset-1.5 』 top: 0.375rem; right: 0.375rem; bottom: 0.375rem; left: 0.375rem;"
          },
          {
            value: "inset-x-1.5",
            label: "『 inset-x-1.5 』 left: 0.375rem; right: 0.375rem;"
          },
          {
            value: "inset-y-1.5",
            label: "『 inset-y-1.5 』 top: 0.375rem; bottom: 0.375rem;"
          },
          { value: "top-1.5", label: "『 top-1.5 』 top: 0.375rem;" },
          { value: "right-1.5", label: "『 right-1.5 』 right: 0.375rem;" },
          { value: "bottom-1.5", label: "『 bottom-1.5 』 bottom: 0.375rem;" },
          { value: "left-1.5", label: "『 left-1.5 』 left: 0.375rem;" }
        ]
      },
      {
        label: "8px",
        options: [
          {
            value: "inset-2",
            label:
              "『 inset-2 』 top: 0.5rem; right: 0.5rem; bottom: 0.5rem; left: 0.5rem;"
          },
          {
            value: "inset-x-2",
            label: "『 inset-x-2 』 left: 0.5rem; right: 0.5rem;"
          },
          {
            value: "inset-y-2",
            label: "『 inset-y-2 』 top: 0.5rem; bottom: 0.5rem;"
          },
          { value: "top-2", label: "『 top-2 』 top: 0.5rem;" },
          { value: "right-2", label: "『 right-2 』 right: 0.5rem;" },
          { value: "bottom-2", label: "『 bottom-2 』 bottom: 0.5rem;" },
          { value: "left-20", label: "『 left-20 』 left: 0.5rem;" }
        ]
      },
      {
        label: "10px",
        options: [
          {
            value: "inset-2.5",
            label:
              "『 inset-2.5 』 ltop: 0.625rem; right: 0.625rem; bottom: 0.625rem; left: 0.625rem;"
          },
          {
            value: "inset-x-2.5",
            label: "『 inset-x-2.5 』 left: 0.625rem; right: 0.625rem;"
          },
          {
            value: "inset-y-2.5",
            label: "『 inset-y-2.5 』 top: 0.625rem; bottom: 0.625rem;"
          },
          { value: "top-2.5", label: "『 top-2.5 』 top: 0.625rem;" },
          { value: "right-2.5", label: "『 right-2.5 』 right: 0.625rem;" },
          { value: "bottom-2.5", label: "『 bottom-2.5 』 bottom: 0.625rem;" },
          { value: "left-2.5", label: "『 left-2.5 』 left: 0.625rem;" }
        ]
      },
      {
        label: "12px",
        options: [
          {
            value: "inset-3",
            label:
              "『 inset-3 』 top: 0.75rem; right: 0.75rem; bottom: 0.75rem; left: 0.75rem;"
          },
          {
            value: "inset-x-3",
            label: "『 inset-x-3 』 left: 0.75rem; right: 0.75rem;"
          },
          {
            value: "inset-y-3",
            label: "『 inset-y-3 』 top: 0.75rem; bottom: 0.75rem;"
          },
          { value: "top-3", label: "『 top-3 』 top: 0.75rem;" },
          { value: "right-3", label: "『 right-3 』 right: 0.75rem;" },
          { value: "bottom-3", label: "『 bottom-3 』 bottom: 0.75rem;" },
          { value: "left-3", label: "『 left-3 』 left: 0.75rem;" }
        ]
      },
      {
        label: "14px",
        options: [
          {
            value: "inset-3.5",
            label:
              "『 inset-3.5 』 top: 0.875rem; right: 0.875rem; bottom: 0.875rem; left: 0.875rem;"
          },
          {
            value: "inset-x-3.5",
            label: "『 inset-x-3.5 』 left: 0.875rem; right: 0.875rem;"
          },
          {
            value: "inset-y-3.5",
            label: "『 inset-y-3.5 』 top: 0.875rem; bottom: 0.875rem;"
          },
          { value: "top-3.5", label: "『 top-3.5 』 top: 0.875rem;" },
          { value: "right-3.5", label: "『 right-3.5 』 right: 0.875rem;" },
          { value: "bottom-3.5", label: "『 bottom-3.5 』 bottom: 0.875rem;" },
          { value: "left-3.5", label: "『 left-3.5 』 left: 0.875rem;" }
        ]
      },
      {
        label: "16px",
        options: [
          {
            value: "inset-4",
            label:
              "『 inset-4 』 top: 1rem; right: 1rem; bottom: 1rem; left: 1rem;"
          },
          {
            value: "inset-x-4",
            label: "『 inset-x-4 』 left: 1rem; right: 1rem;"
          },
          {
            value: "inset-y-4",
            label: "『 inset-y-4 』 top: 1rem; bottom: 1rem;"
          },
          { value: "top-4", label: "『 top-4 』 top: 1rem;" },
          { value: "right-4", label: "『 right-4 』 right: 1rem;" },
          { value: "bottom-4", label: "『 bottom-4 』 bottom: 1rem;" },
          { value: "left-4", label: "『 left-4 』 left: 1rem;" }
        ]
      },
      {
        label: "20px",
        options: [
          {
            value: "inset-5",
            label:
              "『 inset-5 』 top: 1.25rem; right: 1.25rem; bottom: 1.25rem; left: 1.25rem;"
          },
          {
            value: "inset-x-5",
            label: "『 inset-x-5 』 left: 1.25rem; right: 1.25rem;"
          },
          {
            value: "inset-y-5",
            label: "『 inset-y-5 』 top: 1.25rem; bottom: 1.25rem;"
          },
          { value: "top-5", label: "『 top-5 』 top: 1.25rem;" },
          { value: "right-5", label: "『 right-5 』 right: 1.25rem;" },
          { value: "bottom-5", label: "『 bottom-5 』 bottom: 1.25rem;" },
          { value: "left-5", label: "『 left-5 』 left: 1.25rem;" }
        ]
      },
      {
        label: "24px",
        options: [
          {
            value: "inset-6",
            label:
              "『 inset-6 』 top: 1.5rem; right: 1.5rem; bottom: 1.5rem; left: 1.5rem;"
          },
          {
            value: "inset-x-6",
            label: "『 inset-x-6 』 left: 1.5rem; right: 1.5rem;"
          },
          {
            value: "inset-y-6",
            label: "『 inset-y-6 』 top: 1.5rem; bottom: 1.5rem;"
          },
          { value: "top-6", label: "『 top-6 』 top: 1.5rem;" },
          { value: "right-6", label: "『 right-6 』 right: 1.5rem;" },
          { value: "bottom-6", label: "『 bottom-6 』 bottom: 1.5rem;" },
          { value: "left-6", label: "『 left-6 』 left: 1.5rem;" }
        ]
      },
      {
        label: "28px",
        options: [
          {
            value: "inset-7",
            label:
              "『 inset-7 』 top: 1.75rem; right: 1.75rem; bottom: 1.75rem; left: 1.75rem;"
          },
          {
            value: "inset-x-7",
            label: "『 inset-x-7 』 left: 1.75rem; right: 1.75rem;"
          },
          {
            value: "inset-y-7",
            label: "『 inset-y-7 』 top: 1.75rem; bottom: 1.75rem;"
          },
          { value: "top-7", label: "『 top-7 』 top: 1.75rem;" },
          { value: "right-7", label: "『 right-7 』 right: 1.75rem;" },
          { value: "bottom-7", label: "『 bottom-7 』 bottom: 1.75rem;" },
          { value: "left-7", label: "『 left-7 』 left: 1.75rem;" }
        ]
      },
      {
        label: "32px",
        options: [
          {
            value: "inset-8",
            label:
              "『 inset-8 』 top: 2rem; right: 2rem; bottom: 2rem; left: 2rem;"
          },
          {
            value: "inset-x-8",
            label: "『 inset-x-8 』 left: 2rem; right: 2rem;"
          },
          {
            value: "inset-y-8",
            label: "『 inset-y-8 』 top: 2rem; bottom: 2rem;"
          },
          { value: "top-8", label: "『 top-8 』 top: 2rem;" },
          { value: "right-8", label: "『 right-8 』 right: 2rem;" },
          { value: "bottom-8", label: "『 bottom-8 』 bottom: 2rem;" },
          { value: "left-8", label: "『 left-8 』 left: 2rem;" }
        ]
      },
      {
        label: "36px",
        options: [
          {
            value: "inset-9",
            label:
              "『 inset-9 』 top: 2.25rem; right: 2.25rem; bottom: 2.25rem; left: 2.25rem;"
          },
          {
            value: "inset-x-9",
            label: "『 inset-x-9 』 left: 2.25rem; right: 2.25rem;"
          },
          {
            value: "inset-y-9",
            label: "『 inset-y-9 』 top: 2.25rem; bottom: 2.25rem;"
          },
          { value: "top-9", label: "『 top-9 』 top: 2.25rem;" },
          { value: "right-9", label: "『 right-9 』 right: 2.25rem;" },
          { value: "bottom-9", label: "『 bottom-9 』 bottom: 2.25rem;" },
          { value: "left-9", label: "『 left-9 』 left: 2.25rem;" }
        ]
      },
      {
        label: "40px",
        options: [
          {
            value: "inset-10",
            label:
              "『 inset-10 』 top: 2.5rem; right: 2.5rem; bottom: 2.5rem; left: 2.5rem;"
          },
          {
            value: "inset-x-10",
            label: "『 inset-x-10 』 left: 2.5rem; right: 2.5rem;"
          },
          {
            value: "inset-y-10",
            label: "『 inset-y-10 』 top: 2.5rem; bottom: 2.5rem;"
          },
          { value: "top-10", label: "『 top-10 』 top: 2.5rem;" },
          { value: "right-10", label: "『 right-10 』 right: 2.5rem;" },
          { value: "bottom-10", label: "『 bottom-10 』 bottom: 2.5rem;" },
          { value: "left-10", label: "『 left-10 』 left: 2.5rem;" }
        ]
      },
      {
        label: "44px",
        options: [
          {
            value: "inset-11",
            label:
              "『 inset-11 』 top: 2.75rem; right: 2.75rem; bottom: 2.75rem; left: 2.75rem;"
          },
          {
            value: "inset-x-11",
            label: "『 inset-x-11 』 left: 2.75rem; right: 2.75rem;"
          },
          {
            value: "inset-y-11",
            label: "『 inset-y-11 』 top: 2.75rem bottom: 2.75rem;"
          },
          { value: "top-11", label: "『 top-11 』 top: 2.75rem;" },
          { value: "right-11", label: "『 right-11 』 right: 2.75rem;" },
          { value: "bottom-11", label: "『 bottom-11 』 bottom: 2.75rem;" },
          { value: "left-11", label: "『 left-11 』 left: 2.75rem;" }
        ]
      },
      {
        label: "48px",
        options: [
          {
            value: "inset-12",
            label:
              "『 inset-12 』 top: 3rem; right: 3rem; bottom: 3rem; left: 3rem;"
          },
          {
            value: "inset-x-12",
            label: "『 inset-x-12 』 left: 3rem; right: 3rem;"
          },
          {
            value: "inset-y-12",
            label: "『 inset-y-12 』 top: 3rem; bottom: 3rem;"
          },
          { value: "top-12", label: "『 top-12 』 top: 3rem;" },
          { value: "right-12", label: "『 right-12 』 right: 3rem;" },
          { value: "bottom-12", label: "『 bottom-12 』 bottom: 3rem;" },
          { value: "left-12", label: "『 left-12 』 left: 3rem;" }
        ]
      },
      {
        label: "56px",
        options: [
          {
            value: "inset-14",
            label:
              "『 inset-14 』 top: 3.5rem; right: 3.5rem; bottom: 3.5rem; left: 3.5rem;"
          },
          {
            value: "inset-x-14",
            label: "『 inset-x-14 』 left: 3.5rem; right: 3.5rem;"
          },
          {
            value: "inset-y-14",
            label: "『 inset-y-14 』 top: 3.5rem; bottom: 3.5rem;"
          },
          { value: "top-14", label: "『 top-14 』 top: 3.5rem;" },
          { value: "right-14", label: "『 right-14 』 right: 3.5rem;" },
          { value: "bottom-14", label: "『 bottom-14 』 bottom: 3.5rem;" },
          { value: "left-14", label: "『 left-14 』 left: 3.5rem;" }
        ]
      },
      {
        label: "64px",
        options: [
          {
            value: "inset-16",
            label: "『  』 top: 4rem; right: 4rem; bottom: 4rem; left: 4rem;"
          },
          { value: "inset-x-16", label: "『  』 left: 4rem; right: 4rem;" },
          { value: "inset-y-16", label: "『  』 top: 4rem; bottom: 4rem;" },
          { value: "top-16", label: "『  』 top: 4rem;" },
          { value: "right-16", label: "『  』 right: 4rem;" },
          { value: "bottom-16", label: "『  』 bottom: 4rem;" },
          { value: "left-16", label: "『  』 left: 4rem;" }
        ]
      },
      {
        label: "80px",
        options: [
          {
            value: "inset-20",
            label:
              "『 inset-20 』 top: 5rem; right: 5rem; bottom: 5rem; left: 5rem;"
          },
          {
            value: "inset-x-20",
            label: "『 inset-x-20 』 left: 5rem; right: 5rem;"
          },
          {
            value: "inset-y-20",
            label: "『 inset-y-20 』 top: 5rem; bottom: 5rem;"
          },
          { value: "top-20", label: "『 top-20 』 top: 5rem;" },
          { value: "right-20", label: "『 right-20 』 right: 5rem;" },
          { value: "bottom-20", label: "『 bottom-20 』 bottom: 5rem;" },
          { value: "left-20", label: "『 left-20 』 left: 5rem;" }
        ]
      },
      {
        label: "96px",
        options: [
          {
            value: "inset-24",
            label:
              "『 inset-24 』 top: 6rem; right: 6rem; bottom: 6rem; left: 6rem;"
          },
          {
            value: "inset-x-24",
            label: "『 inset-x-24 』 left: 6rem; right: 6rem;"
          },
          {
            value: "inset-y-24",
            label: "『 inset-y-24 』 top: 6rem; bottom: 6rem;"
          },
          { value: "top-24", label: "『 top-24 』 top: 6rem;" },
          { value: "right-24", label: "『 right-24 』 right: 6rem;" },
          { value: "bottom-24", label: "『 bottom-24 』 bottom: 6rem;" },
          { value: "left-24", label: "『 left-24 』 left: 6rem;" }
        ]
      },
      {
        label: "112px",
        options: [
          {
            value: "inset-28",
            label:
              "『 inset-28 』 top: 7rem; right: 7rem; bottom: 7rem; left: 7rem;"
          },
          {
            value: "inset-x-28",
            label: "『 inset-x-28 』 left: 7rem; right: 7rem;"
          },
          {
            value: "inset-y-28",
            label: "『 inset-y-28 』 top: 7rem; bottom: 7rem;"
          },
          { value: "top-28", label: "『 top-28 』 top: 7rem;" },
          { value: "right-28", label: "『 right-28 』 right: 7rem;" },
          { value: "bottom-28", label: "『 bottom-28 』 bottom: 7rem;" },
          { value: "left-28", label: "『 left-28 』 left: 7rem;" }
        ]
      },
      {
        label: "128px",
        options: [
          {
            value: "inset-32",
            label:
              "『 inset-32 』 top: 8rem; right: 8rem; bottom: 8rem; left: 8rem;"
          },
          {
            value: "inset-x-32",
            label: "『 inset-x-32 』 left: 8rem; right: 8rem;"
          },
          {
            value: "inset-y-32",
            label: "『 inset-y-32 』 top: 8rem; bottom: 8rem;"
          },
          { value: "top-32", label: "『 top-32 』 top: 8rem;" },
          { value: "right-32", label: "『 right-32 』 right: 8rem;" },
          { value: "bottom-32", label: "『 bottom-32 』 bottom: 8rem;" },
          { value: "left-32", label: "『 left-32 』 left: 8rem;" }
        ]
      },
      {
        label: "144px",
        options: [
          {
            value: "inset-36",
            label:
              "『 inset-36 』 top: 9rem; right: 9rem; bottom: 9rem; left: 9rem;"
          },
          {
            value: "inset-x-36",
            label: "『 inset-x-36 』 left: 9rem; right: 9rem;"
          },
          {
            value: "inset-y-36",
            label: "『 inset-y-36 』 top: 9rem; bottom: 9rem;"
          },
          { value: "top-36", label: "『 top-36 』 top: 9rem;" },
          { value: "right-36", label: "『 right-36 』 right: 9rem;" },
          { value: "bottom-36", label: "『 bottom-36 』 bottom: 9rem;" },
          { value: "left-36", label: "『 left-36 』 left: 9rem;" }
        ]
      },
      {
        label: "160px",
        options: [
          {
            value: "inset-40",
            label:
              "『 inset-40 』 top: 10rem; right: 10rem; bottom: 10rem; left: 10rem;"
          },
          {
            value: "inset-x-40",
            label: "『 inset-x-40 』 left: 10rem; right: 10rem;"
          },
          {
            value: "inset-y-40",
            label: "『 inset-y-40 』 top: 10rem; bottom: 10rem;"
          },
          { value: "top-40", label: "『 top-40 』 top: 10rem;" },
          { value: "right-40", label: "『 right-40 』 right: 10rem;" },
          { value: "bottom-40", label: "『 bottom-40 』 bottom: 10rem;" },
          { value: "left-40", label: "『 left-40 』 left: 10rem;" }
        ]
      },
      {
        label: "176px",
        options: [
          {
            value: "inset-44",
            label:
              "『 inset-44 』 top: 11rem; right: 11rem; bottom: 11rem; left: 11rem;"
          },
          {
            value: "inset-x-44",
            label: "『 inset-x-44 』 left: 11rem; right: 11rem;"
          },
          {
            value: "inset-y-44",
            label: "『 inset-y-44 』 top: 11rem; bottom: 11rem;"
          },
          { value: "top-44", label: "『 top-44 』 top: 11rem;" },
          { value: "right-44", label: "『 right-44 』 right: 11rem;" },
          { value: "bottom-44", label: "『 bottom-44 』 bottom: 11rem;" },
          { value: "left-44", label: "『 left-44 』 left: 11rem;" }
        ]
      },
      {
        label: "192px",
        options: [
          {
            value: "inset-48",
            label:
              "『 inset-48 』 top: 12rem; right: 12rem; bottom: 12rem; left: 12rem;"
          },
          {
            value: "inset-x-48",
            label: "『 inset-x-48 』 left: 12rem; right: 12rem;"
          },
          {
            value: "inset-y-48",
            label: "『 inset-y-48 』 top: 12rem; bottom: 12rem;"
          },
          { value: "top-48", label: "『 top-48 』 top: 12rem;" },
          { value: "right-48", label: "『 right-48 』 right: 12rem;" },
          { value: "bottom-48", label: "『 bottom-48 』 bottom: 12rem;" },
          { value: "left-48", label: "『 left-48 』 left: 12rem;" }
        ]
      },
      {
        label: "208px",
        options: [
          {
            value: "inset-52",
            label:
              "『 inset-52 』 top: 13rem; right: 13rem; bottom: 13rem; left: 13rem;"
          },
          {
            value: "inset-x-52",
            label: "『 inset-x-52 』 left: 13rem; right: 13rem;"
          },
          {
            value: "inset-y-52",
            label: "『 inset-y-52 』 top: 13rem; bottom: 13rem;"
          },
          { value: "top-52", label: "『 top-52 』 top: 13rem;" },
          { value: "right-52", label: "『 right-52 』 right: 13rem;" },
          { value: "bottom-52", label: "『 bottom-52 』 bottom: 13rem;" },
          { value: "left-52", label: "『 left-52 』 left: 13rem;" }
        ]
      },
      {
        label: "224px",
        options: [
          {
            value: "inset-56",
            label:
              "『 inset-56 』 top: 14rem; right: 14rem; bottom: 14rem; left: 14rem;"
          },
          {
            value: "inset-x-56",
            label: "『 inset-x-56 』 left: 14rem; right: 14rem;"
          },
          {
            value: "inset-y-56",
            label: "『 inset-y-56 』 top: 14rem; bottom: 14rem;"
          },
          { value: "top-56", label: "『 top-56 』 top: 14rem;" },
          { value: "right-56", label: "『 right-56 』 right: 14rem;" },
          { value: "bottom-56", label: "『 bottom-56 』 bottom: 14rem;" },
          { value: "left-56", label: "『 left-56 』 left: 14rem;" }
        ]
      },
      {
        label: "240px",
        options: [
          {
            value: "inset-60",
            label:
              "『 inset-60 』 top: 15rem; right: 15rem; bottom: 15rem; left: 15rem;"
          },
          {
            value: "inset-x-60",
            label: "『 inset-x-60 』 left: 15rem; right: 15rem;"
          },
          {
            value: "inset-y-60",
            label: "『 inset-y-60 』 top: 15rem; bottom: 15rem;"
          },
          { value: "top-60", label: "『 top-60 』 top: 15rem;" },
          { value: "right-60", label: "『 right-60 』 right: 15rem;" },
          { value: "bottom-60", label: "『 bottom-60 』 bottom: 15rem;" },
          { value: "left-60", label: "『 left-60 』 left: 15rem;" }
        ]
      },
      {
        label: "256px",
        options: [
          {
            value: "inset-64",
            label:
              "『 inset-64 』 top: 16rem; right: 16rem; bottom: 16rem; left: 16rem;"
          },
          {
            value: "inset-x-64",
            label: "『 inset-x-64 』 left: 16rem; right: 16rem;"
          },
          {
            value: "inset-y-64",
            label: "『 inset-y-64 』 top: 16rem; bottom: 16rem;"
          },
          { value: "top-64", label: "『 top-64 』 top: 16rem;" },
          { value: "right-64", label: "『 right-64 』 right: 16rem;" },
          { value: "bottom-64", label: "『 bottom-64 』 bottom: 16rem;" },
          { value: "left-64", label: "『 left-64 』 left: 16rem;" }
        ]
      },
      {
        label: "288px",
        options: [
          {
            value: "inset-72",
            label:
              "『 inset-72 』 top: 18rem; right: 18rem; bottom: 18rem; left: 18rem;"
          },
          {
            value: "inset-x-72",
            label: "『 inset-x-72 』 left: 18rem; right: 18rem;"
          },
          {
            value: "inset-y-72",
            label: "『 inset-y-72 』 top: 18rem; bottom: 18rem;"
          },
          { value: "top-72", label: "『 top-72 』 top: 18rem;" },
          { value: "right-72", label: "『 right-72 』 right: 18rem;" },
          { value: "bottom-72", label: "『 bottom-72 』 bottom: 18rem;" },
          { value: "left-72", label: "『 left-72 』 left: 18rem;" }
        ]
      },
      {
        label: "320px",
        options: [
          {
            value: "inset-80",
            label:
              "『 inset-80 』 top: 20rem; right: 20rem; bottom: 20rem; left: 20rem;"
          },
          {
            value: "inset-x-80",
            label: "『 inset-x-80 』 left: 20rem; right: 20rem;"
          },
          {
            value: "inset-y-80",
            label: "『 inset-y-80 』 top: 20rem; bottom: 20rem;"
          },
          { value: "top-80", label: "『 top-80 』 top: 20rem;" },
          { value: "right-80", label: "『 right-80 』 right: 20rem;" },
          { value: "bottom-80", label: "『 bottom-80 』 bottom: 20rem;" },
          { value: "left-80", label: "『 left-80 』 left: 20rem;" }
        ]
      },
      {
        label: "384px",
        options: [
          {
            value: "inset-96",
            label:
              "『 inset-96 』 top: 24rem; right: 24rem; bottom: 24rem; left: 24rem;"
          },
          {
            value: "inset-x-96",
            label: "『 inset-x-96 』 left: 24rem; right: 24rem;"
          },
          {
            value: "inset-y-96",
            label: "『 inset-y-96 』 top: 24rem; bottom: 24rem;"
          },
          { value: "top-96", label: "『 top-96 』 top: 24rem;" },
          { value: "right-96", label: "『 right-96 』 right: 24rem;" },
          { value: "bottom-96", label: "『 bottom-96 』 bottom: 24rem;" },
          { value: "left-96", label: "『 left-96 』 left: 24rem;" }
        ]
      },
      {
        label: "auto",
        options: [
          {
            value: "inset-auto",
            label:
              "『 inset-auto 』 top: auto; right: auto; bottom: auto; left: auto;"
          },
          {
            value: "inset-x-auto",
            label: "『 inset-x-auto 』 left: auto; right: auto;"
          },
          {
            value: "inset-y-auto",
            label: "『 inset-y-auto 』 top: auto; bottom: auto;"
          },
          { value: "top-auto", label: "『 top-auto 』 top: auto;" },
          { value: "right-auto", label: "『 right-auto 』 right: auto;" },
          { value: "bottom-auto", label: "『 bottom-auto 』 bottom: auto;" },
          { value: "left-auto", label: "『 left-auto 』 left: auto;" }
        ]
      },
      {
        label: "50%",
        options: [
          {
            value: "inset-1/2",
            label:
              "『 inset-1/2 』 top: 50%; right: 50%; bottom: 50%; left: 50%;"
          },
          {
            value: "inset-x-1/2",
            label: "『 inset-x-1/2 』 left: 50%; right: 50%;"
          },
          {
            value: "inset-y-1/2",
            label: "『 inset-y-1/2 』 top: 50%; bottom: 50%;"
          },
          { value: "top-1/2", label: "『 top-1/2 』 top: 50%;" },
          { value: "right-1/2", label: "『 right-1/2 』 right: 50%;" },
          { value: "bottom-1/2", label: "『 bottom-1/2 』 bottom: 50%;" },
          { value: "left-1/2", label: "『 left-1/2 』 left: 50%;" }
        ]
      },
      {
        label: "33.333333%",
        options: [
          {
            value: "inset-1/3",
            label:
              "『 inset-1/3 』 top: 33.333333%; right: 33.333333%; bottom: 33.333333%; left: 33.333333%;"
          },
          {
            value: "inset-x-1/3",
            label: "『 inset-x-1/3 』 left: 33.333333%; right: 33.333333%;"
          },
          {
            value: "inset-y-1/3",
            label: "『 inset-y-1/3 』 top: 33.333333%; bottom: 33.333333%;"
          },
          { value: "top-1/3", label: "『 top-1/3 』 33.333333%;" },
          { value: "right-1/3", label: "『 right-1/3 』 right: 33.333333%;" },
          {
            value: "bottom-1/3",
            label: "『 bottom-1/3 』 bottom: 33.333333%;"
          },
          { value: "left-1/3", label: "『 left-1/3 』 left: 33.333333%;" }
        ]
      },
      {
        label: "66.666667%",
        options: [
          {
            value: "inset-2/3",
            label:
              "『 inset-2/3 』 top: 66.666667%; right: 66.666667%; bottom: 66.666667%; left: 66.666667%;"
          },
          {
            value: "inset-x-2/3",
            label: "『 inset-x-2/3 』 left: 66.666667%; right: 66.666667%;"
          },
          {
            value: "inset-y-2/3",
            label: "『 inset-y-2/3 』 top: 66.666667%; bottom: 66.666667%;"
          },
          { value: "top-2/3", label: "『 top-2/3 』 top: 66.666667%;" },
          { value: "right-2/3", label: "『 right-2/3 』 right: 66.666667%;" },
          {
            value: "bottom-2/3",
            label: "『 bottom-2/3 』 bottom: 66.666667%;"
          },
          { value: "left-2/3", label: "『 left-2/3 』 left: 66.666667%;" }
        ]
      },
      {
        label: "25%",
        options: [
          {
            value: "inset-1/4",
            label:
              "『 inset-1/4 』 top: 25%; right: 25%; bottom: 25%; left: 25%;"
          },
          {
            value: "inset-x-1/4",
            label: "『 inset-x-1/4 』 left: 25%; right: 25%;"
          },
          {
            value: "inset-y-1/4",
            label: "『 inset-y-1/4 』 top: 25%; bottom: 25%;"
          },
          { value: "top-1/4", label: "『 top-1/4 』 top: 25%;" },
          { value: "right-1/4", label: "『 right-1/4 』 right: 25%;" },
          { value: "bottom-1/4", label: "『 bottom-1/4 』 bottom: 25%;" },
          { value: "left-1/4", label: "『 left-1/4 』 left: 25%;" }
        ]
      },
      {
        label: "50%",
        options: [
          {
            value: "inset-2/4",
            label:
              "『 inset-2/4 』 top: 50%; right: 50%; bottom: 50%; left: 50%;"
          },
          {
            value: "inset-x-2/4",
            label: "『 inset-x-2/4 』 left: 50%; right: 50%;"
          },
          {
            value: "inset-y-2/4",
            label: "『 inset-y-2/4 』 top: 50%; bottom: 50%;"
          },
          { value: "top-2/4", label: "『 top-2/4 』 top: 50%;" },
          { value: "right-2/4", label: "『 right-2/4 』 right: 50%;" },
          { value: "bottom-2/4", label: "『 bottom-2/4 』 bottom: 50%;" },
          { value: "left-2/4", label: "『 left-2/4 』 left: 50%;" }
        ]
      },
      {
        label: "75%",
        options: [
          {
            value: "inset-3/4",
            label:
              "『 inset-3/4 』 top: 75%; right: 75%; bottom: 75%; left: 75%;"
          },
          {
            value: "inset-x-3/4",
            label: "『 inset-x-3/4 』 left: 75%; right: 75%;"
          },
          {
            value: "inset-y-3/4",
            label: "『 inset-y-3/4 』 top: 75%; bottom: 75%;"
          },
          { value: "top-3/4", label: "『 top-3/4 』 top: 75%;" },
          { value: "right-3/4", label: "『 right-3/4 』 right: 75%;" },
          { value: "bottom-3/4", label: "『 bottom-3/4 』 bottom: 75%;" },
          { value: "left-3/4", label: "『 left-3/4 』 left: 75%;" }
        ]
      },
      {
        label: "100%",
        options: [
          {
            value: "inset-full",
            label:
              "『 inset-full 』 top: 100%; right: 100%; bottom: 100%; left: 100%;"
          },
          {
            value: "inset-x-full",
            label: "『 inset-x-full 』 left: 100%; right: 100%;"
          },
          {
            value: "inset-y-full",
            label: "『 inset-y-full 』 top: 100%; bottom: 100%;"
          },
          { value: "top-full", label: "『 top-full 』 top: 100%;" },
          { value: "right-full", label: "『 right-full 』 right: 100%;" },
          { value: "bottom-full", label: "『 bottom-full 』 bottom: 100%;" },
          { value: "left-full", label: "『 left-full 』 left: 100%;" }
        ]
      }
    ]
  },
  {
    type: "z-index",
    header: "Z-Index 属性",
    title: "Z-Index ClassName：",
    selectPlaceholder: "z-index: xxxx",
    inputPlaceholder: "z-index: xxxx",
    hasCustom: true,
    options: [
      { value: "z-0", label: "『 z-0 』 z-index: 0;" },
      { value: "z-10", label: "『 z-10 』 z-index: 10;" },
      { value: "z-20", label: "『 z-20 』 z-index: 20;" },
      { value: "z-30", label: "『 z-30 』 z-index: 30;" },
      { value: "z-40", label: "『 z-40 』 z-index: 40;" },
      { value: "z-50", label: "『 z-50 』 z-index: 50;" },
      { value: "z-auto", label: "『 z-auto 』 z-index: auto;" }
    ]
  },
  {
    type: "visibility",
    header: "Visibility 属性",
    title: "Visibility ClassName：",
    selectPlaceholder: "visibility: xxxx",
    hasCustom: false,
    options: [
      { value: "visible", label: "『 visible 』 visibility: visible;" },
      { value: "invisible", label: "『 invisible 』 visibility: hidden;" },
      { value: "collapse", label: "『 collapse 』 visibility: collapse;" }
    ]
  },
  {
    type: "flex-basis",
    header: "Flex Basis 属性",
    title: "Flex Basis ClassName：",
    selectPlaceholder: "flex-basis: xxxx",
    inputPlaceholder: "flex-basis: xxxx",
    hasCustom: true,
    options: [
      { value: "basis-0", label: "『 basis-0 』 flex-basis: 0px;" },
      {
        value: "basis-1",
        label: "『 basis-1 』 flex-basis: 0.25rem; /* 4px */"
      },
      {
        value: "basis-2",
        label: "『 basis-2 』 flex-basis: 0.5rem; /* 8px */"
      },
      {
        value: "basis-3",
        label: "『 basis-3 』 flex-basis: 0.75rem; /* 12px */"
      },
      { value: "basis-4", label: "『 basis-4 』 flex-basis: 1rem; /* 16px */" },
      {
        value: "basis-5",
        label: "『 basis-5 』 flex-basis: 1.25rem; /* 20px */"
      },
      {
        value: "basis-6",
        label: "『 basis-6 』 flex-basis: 1.5rem; /* 24px */"
      },
      {
        value: "basis-7",
        label: "『 basis-7 』 flex-basis: 1.75rem; /* 28px */"
      },
      { value: "basis-8", label: "『 basis-8 』 flex-basis: 2rem; /* 32px */" },
      {
        value: "basis-9",
        label: "『 basis-9 』 flex-basis: 2.25rem; /* 36px */"
      },
      {
        value: "basis-10",
        label: "『 basis-10 』 flex-basis: 2.5rem; /* 40px */"
      },
      {
        value: "basis-11",
        label: "『 basis-11 』 flex-basis: 2.75rem; /* 44px */"
      },
      {
        value: "basis-12",
        label: "『 basis-12 』 flex-basis: 3rem; /* 48px */"
      },
      {
        value: "basis-14",
        label: "『 basis-14 』 flex-basis: 3.5rem; /* 56px */"
      },
      {
        value: "basis-16",
        label: "『 basis-16 』 flex-basis: 4rem; /* 64px */"
      },
      {
        value: "basis-20",
        label: "『 basis-20 』 flex-basis: 5rem; /* 80px */"
      },
      {
        value: "basis-24",
        label: "『 basis-24 』 flex-basis: 6rem; /* 96px */"
      },
      {
        value: "basis-28",
        label: "『 basis-28 』 flex-basis: 7rem; /* 112px */"
      },
      {
        value: "basis-32",
        label: "『 basis-32 』 flex-basis: 8rem; /* 128px */"
      },
      {
        value: "basis-36",
        label: "『 basis-36 』 flex-basis: 9rem; /* 144px */"
      },
      {
        value: "basis-40",
        label: "『 basis-40 』 flex-basis: 10rem; /* 160px */"
      },
      {
        value: "basis-44",
        label: "『 basis-44 』 flex-basis: 11rem; /* 176px */"
      },
      {
        value: "basis-48",
        label: "『 basis-48 』 flex-basis: 12rem; /* 192px */"
      },
      {
        value: "basis-52",
        label: "『 basis-52 』 flex-basis: 13rem; /* 208px */"
      },
      {
        value: "basis-56",
        label: "『 basis-56 』 flex-basis: 14rem; /* 224px */"
      },
      {
        value: "basis-60",
        label: "『 basis-60 』 flex-basis: 15rem; /* 240px */"
      },
      {
        value: "basis-64",
        label: "『 basis-64 』 flex-basis: 16rem; /* 256px */"
      },
      {
        value: "basis-72",
        label: "『 basis-72 』 flex-basis: 18rem; /* 288px */"
      },
      {
        value: "basis-80",
        label: "『 basis-80 』 flex-basis: 20rem; /* 320px */"
      },
      {
        value: "basis-96",
        label: "『 basis-96 』 flex-basis: 24rem; /* 384px */"
      },
      { value: "basis-auto", label: "『 basis-auto 』 flex-basis: auto;" },
      { value: "basis-px", label: "『 basis-px 』 flex-basis: 1px;" },
      {
        value: "basis-0.5",
        label: "『 basis-0.5 』 flex-basis: 0.125rem; /* 2px */"
      },
      {
        value: "basis-1.5",
        label: "『 basis-1.5 』 flex-basis: 0.375rem; /* 6px */"
      },
      {
        value: "basis-2.5",
        label: "『 basis-2.5 』 flex-basis: 0.625rem; /* 10px */"
      },
      {
        value: "basis-3.5",
        label: "『 basis-3.5 』 flex-basis: 0.875rem; /* 14px */"
      },
      { value: "basis-1/2", label: "『 basis-1/2 』 flex-basis: 50%;" },
      { value: "basis-1/3", label: "『 basis-1/3 』 flex-basis: 33.333333%;" },
      { value: "basis-2/3", label: "『 basis-2/3 』 flex-basis: 66.666667%;" },
      { value: "basis-1/4", label: "『 basis-1/4 』 flex-basis: 25%;" },
      { value: "basis-2/4", label: "『 basis-2/4 』 flex-basis: 50%;" },
      { value: "basis-3/4", label: "『 basis-3/4 』 flex-basis: 75%;" },
      { value: "basis-1/5", label: "『 basis-1/5 』 flex-basis: 20%;" },
      { value: "basis-2/5", label: "『 basis-2/5 』 flex-basis: 40%;" },
      { value: "basis-3/5", label: "『 basis-3/5 』 flex-basis: 60%;" },
      { value: "basis-4/5", label: "『 basis-4/5 』 flex-basis: 80%;" },
      { value: "basis-1/6", label: "『 basis-1/6 』 flex-basis: 16.666667%;" },
      { value: "basis-2/6", label: "『 basis-2/6 』 flex-basis: 33.333333%;" },
      { value: "basis-3/6", label: "『 basis-3/6 』 flex-basis: 50%;" },
      { value: "basis-4/6", label: "『 basis-4/6 』 flex-basis: 66.666667%;" },
      { value: "basis-5/6", label: "『 basis-5/6 』 flex-basis: 83.333333%;" },
      { value: "basis-1/12", label: "『 basis-1/12 』 flex-basis: 8.333333%;" },
      {
        value: "basis-2/12",
        label: "『 basis-2/12 』 flex-basis: 16.666667%;"
      },
      { value: "basis-3/12", label: "『 basis-3/12 』 flex-basis: 25%;" },
      {
        value: "basis-4/12",
        label: "『 basis-4/12 』 flex-basis: 33.333333%;"
      },
      {
        value: "basis-5/12",
        label: "『 basis-5/12 』 flex-basis: 41.666667%;"
      },
      { value: "basis-6/12", label: "『 basis-6/12 』 flex-basis: 50%;" },
      {
        value: "basis-7/12",
        label: "『 basis-7/12 』 flex-basis: 58.333333%;"
      },
      {
        value: "basis-8/12",
        label: "『 basis-8/12 』 flex-basis: 66.666667%;"
      },
      { value: "basis-9/12", label: "『 basis-9/12 』 flex-basis: 75%;" },
      {
        value: "basis-10/12",
        label: "『 basis-10/12 』 flex-basis: 83.333333%;"
      },
      {
        value: "basis-11/12",
        label: "『 basis-11/12 』 flex-basis: 91.666667%;"
      },
      { value: "basis-full", label: "『 basis-full 』 flex-basis: 100%;" }
    ]
  },
  {
    type: "flex-direction",
    header: "Flex Direction 属性",
    title: "Flex Direction ClassName：",
    selectPlaceholder: "flex-direction: xxxx",
    hasCustom: false,
    options: [
      { value: "flex-row", label: "『 flex-row 』 flex-direction: row;" },
      {
        value: "flex-row-reverse",
        label: "『 flex-row-reverse 』 flex-direction: row-reverse;"
      },
      { value: "flex-col", label: "『 flex-col 』 flex-direction: column;" },
      {
        value: "flex-col-reverse",
        label: "『 flex-col-reverse 』 flex-direction: column-reverse;"
      }
    ]
  },
  {
    type: "flex-wrap",
    header: "Flex Wrap 属性",
    title: "Flex Wrap ClassName：",
    selectPlaceholder: "flex-wrap: xxxx",
    hasCustom: false,
    options: [
      { value: "flex-wrap", label: "『 flex-wrap 』 flex-wrap: wrap;" },
      {
        value: "flex-wrap-reverse",
        label: "『 flex-wrap-reverse 』 flex-wrap: wrap-reverse;"
      },
      { value: "flex-nowrap", label: "『 flex-nowrap 』 flex-wrap: nowrap;" }
    ]
  },
  {
    type: "flex",
    header: "Flex 属性",
    title: "Flex ClassName：",
    selectPlaceholder: "flex: xxxx",
    inputPlaceholder: "flex: xxxx",
    hasCustom: true,
    options: [
      { value: "flex-1", label: "『  』 flex: 1 1 0%;" },
      { value: "flex-auto", label: "『  』 flex: 1 1 auto;" },
      { value: "flex-initial", label: "『  』 flex: 0 1 auto;" },
      { value: "flex-none", label: "『  』 flex: none;" }
    ]
  },
  {
    type: "flex-grow",
    header: "Flex Grow 属性",
    title: "Flex Grow ClassName：",
    selectPlaceholder: "flex-grow: xxxx",
    inputPlaceholder: "flex-grow: xxxx",
    hasCustom: true,
    options: [
      { value: "grow", label: "『  』 flex-grow: 1;" },
      { value: "grow-0", label: "『  』 flex-grow: 0;" }
    ]
  },
  {
    type: "order",
    header: "Order 属性",
    title: "Order ClassName：",
    selectPlaceholder: "order: xxxx",
    inputPlaceholder: "order xxxx",
    hasCustom: true,
    options: [
      { value: "order-1", label: "『  』 order: 1;" },
      { value: "order-2", label: "『  』 order: 2;" },
      { value: "order-3", label: "『  』 order: 3;" },
      { value: "order-4", label: "『  』 order: 4;" },
      { value: "order-5", label: "『  』 order: 5;" },
      { value: "order-6", label: "『  』 order: 6;" },
      { value: "order-7", label: "『  』 order: 7;" },
      { value: "order-8", label: "『  』 order: 8;" },
      { value: "order-9", label: "『  』 order: 9;" },
      { value: "order-10", label: "『  』 order: 10;" },
      { value: "order-11", label: "『  』 order: 11;" },
      { value: "order-12", label: "『  』 order: 12;" },
      { value: "order-first", label: "『  』 order: -9999;" },
      { value: "order-last", label: "『  』 order: 9999;" },
      { value: "order-none", label: "『  』 order: 0;" }
    ]
  },
  {
    type: "grid-template-columns",
    header: "Grid Template Columns 属性",
    title: "Grid Template Columns ClassName：",
    selectPlaceholder: "fgrid-template-columns: xxxx",
    inputPlaceholder: "grid-template-columns: xxxx",
    hasCustom: true,
    options: [
      {
        value: "grid-cols-1",
        label: "『  』 grid-template-columns: repeat(1, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-2",
        label: "『  』 grid-template-columns: repeat(2, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-3",
        label: "『  』 grid-template-columns: repeat(3, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-4",
        label: "『  』 grid-template-columns: repeat(4, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-5",
        label: "『  』 grid-template-columns: repeat(5, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-6",
        label: "『  』 grid-template-columns: repeat(6, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-7",
        label: "『  』 grid-template-columns: repeat(7, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-8",
        label: "『  』 grid-template-columns: repeat(8, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-9",
        label: "『  』 grid-template-columns: repeat(9, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-10",
        label: "『  』 grid-template-columns: repeat(10, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-11",
        label: "『  』 grid-template-columns: repeat(11, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-12",
        label: "『  』 grid-template-columns: repeat(12, minmax(0, 1fr));"
      },
      { value: "grid-cols-none", label: "『  』 grid-template-columns: none;" }
    ]
  },
  {
    type: "grid-column",
    header: "Grid Column Start / End 属性",
    title: "Grid Column Start / End ClassName：",
    inputPlaceholder: "grid-column: xxxx",
    selectPlaceholder: "grid-column: xxxx",
    hasCustom: true,
    options: [
      { value: "col-auto", label: "『  』 grid-column: auto;" },
      { value: "col-span-1", label: "『  』 grid-column: span 1 / span 1;" },
      { value: "col-span-2", label: "『  』 grid-column: span 2 / span 2;" },
      { value: "col-span-3", label: "『  』 grid-column: span 3 / span 3;" },
      { value: "col-span-4", label: "『  』 grid-column: span 4 / span 4;" },
      { value: "col-span-5", label: "『  』 grid-column: span 5 / span 5;" },
      { value: "col-span-6", label: "『  』 grid-column: span 6 / span 6;" },
      { value: "col-span-7", label: "『  』 grid-column: span 7 / span 7;" },
      { value: "col-span-8", label: "『  』 grid-column: span 8 / span 8;" },
      { value: "col-span-9", label: "『  』 grid-column: span 9 / span 9;" },
      { value: "col-span-10", label: "『  』 grid-column: span 10 / span 10;" },
      { value: "col-span-11", label: "『  』 grid-column: span 11 / span 11;" },
      { value: "col-span-12", label: "『  』 grid-column: span 12 / span 12;" },
      { value: "col-span-full", label: "『  』 grid-column: 1 / -1;" },
      { value: "col-start-1", label: "『  』 grid-column-start: 1;" },
      { value: "col-start-2", label: "『  』 grid-column-start: 2;" },
      { value: "col-start-3", label: "『  』 grid-column-start: 3;" },
      { value: "col-start-4", label: "『  』 grid-column-start: 4;" },
      { value: "col-start-5", label: "『  』 grid-column-start: 5;" },
      { value: "col-start-6", label: "『  』 grid-column-start: 6;" },
      { value: "col-start-7", label: "『  』 grid-column-start: 7;" },
      { value: "col-start-8", label: "『  』 grid-column-start: 8;" },
      { value: "col-start-9", label: "『  』 grid-column-start: 9;" },
      { value: "col-start-10", label: "『  』 grid-column-start: 10;" },
      { value: "col-start-11", label: "『  』 grid-column-start: 11;" },
      { value: "col-start-12", label: "『  』 grid-column-start: 12;" },
      { value: "col-start-13", label: "『  』 grid-column-start: 13;" },
      { value: "col-start-auto", label: "『  』 grid-column-start: auto;" },
      { value: "col-end-1", label: "『  』 grid-column-end: 1;" },
      { value: "col-end-2", label: "『  』 grid-column-end: 2;" },
      { value: "col-end-3", label: "『  』 grid-column-end: 3;" },
      { value: "col-end-4", label: "『  』 grid-column-end: 4;" },
      { value: "col-end-5", label: "『  』 grid-column-end: 5;" },
      { value: "col-end-6", label: "『  』 grid-column-end: 6;" },
      { value: "col-end-7", label: "『  』 grid-column-end: 7;" },
      { value: "col-end-8", label: "『  』 grid-column-end: 8;" },
      { value: "col-end-9", label: "『  』 grid-column-end: 9;" },
      { value: "col-end-10", label: "『  』 grid-column-end: 10;" },
      { value: "col-end-11", label: "『  』 grid-column-end: 11;" },
      { value: "col-end-12", label: "『  』 grid-column-end: 12;" },
      { value: "col-end-13", label: "『  』 grid-column-end: 13;" },
      { value: "col-end-auto", label: "『  』 grid-column-end: auto;" }
    ]
  },
  {
    type: "grid-template-rows",
    header: "Grid Template Rows 属性",
    title: "Grid Template Rows ClassName：",
    inputPlaceholder: "grid-template-rows: xxxx",
    selectPlaceholder: "grid-template-rows: xxxx",
    hasCustom: true,
    options: [
      {
        value: "grid-rows-1",
        label: "『  』 grid-template-rows: repeat(1, minmax(0, 1fr));"
      },
      {
        value: "grid-rows-2",
        label: "『  』 grid-template-rows: repeat(2, minmax(0, 1fr));"
      },
      {
        value: "grid-rows-3",
        label: "『  』 grid-template-rows: repeat(3, minmax(0, 1fr));"
      },
      {
        value: "grid-rows-4",
        label: "『  』 grid-template-rows: repeat(4, minmax(0, 1fr));"
      },
      {
        value: "grid-rows-5",
        label: "『  』 grid-template-rows: repeat(5, minmax(0, 1fr));"
      },
      {
        value: "grid-rows-6",
        label: "『  』 grid-template-rows: repeat(6, minmax(0, 1fr));"
      },
      { value: "grid-rows-none", label: "『  』 grid-template-rows: none;" }
    ]
  },
  {
    type: "grid-row",
    header: "Grid Row Start / End 属性",
    title: "Grid Row Start / End ClassName：",
    inputPlaceholder: "grid-row: xxxx",
    selectPlaceholder: "grid-row: xxxx",
    hasCustom: true,
    options: [
      { value: "row-auto", label: "『  』 grid-row: auto;" },
      { value: "row-span-1", label: "『  』 grid-row: span 1 / span 1;" },
      { value: "row-span-2", label: "『  』 grid-row: span 2 / span 2;" },
      { value: "row-span-3", label: "『  』 grid-row: span 3 / span 3;" },
      { value: "row-span-4", label: "『  』 grid-row: span 4 / span 4;" },
      { value: "row-span-5", label: "『  』 grid-row: span 5 / span 5;" },
      { value: "row-span-6", label: "『  』 grid-row: span 6 / span 6;" },
      { value: "row-span-full", label: "『  』 grid-row: 1 / -1;" },
      { value: "row-start-1", label: "『  』 grid-row-start: 1;" },
      { value: "row-start-2", label: "『  』 grid-row-start: 2;" },
      { value: "row-start-3", label: "『  』 grid-row-start: 3;" },
      { value: "row-start-4", label: "『  』 grid-row-start: 4;" },
      { value: "row-start-5", label: "『  』 grid-row-start: 5;" },
      { value: "row-start-6", label: "『  』 grid-row-start: 6;" },
      { value: "row-start-7", label: "『  』 grid-row-start: 7;" },
      { value: "row-start-auto", label: "『  』 grid-row-start: auto;" },
      { value: "row-end-1", label: "『  』 grid-row-end: 1;" },
      { value: "row-end-2", label: "『  』 grid-row-end: 2;" },
      { value: "row-end-3", label: "『  』 grid-row-end: 3;" },
      { value: "row-end-4", label: "『  』 grid-row-end: 4;" },
      { value: "row-end-5", label: "『  』 grid-row-end: 5;" },
      { value: "row-end-6", label: "『  』 grid-row-end: 6;" },
      { value: "row-end-7", label: "『  』 grid-row-end: 7;" },
      { value: "row-end-auto", label: "『  』 grid-row-end: auto;" }
    ]
  },
  {
    type: "grid-auto-flow",
    header: "Grid Auto Flow 属性",
    title: "Grid Auto Flow ClassName：",
    inputPlaceholder: "grid-auto-flow: xxxx",
    selectPlaceholder: "grid-auto-flow: xxxx",
    hasCustom: false,
    options: [
      { value: "grid-flow-row", label: "『  』 grid-auto-flow: row;" },
      { value: "grid-flow-col", label: "『  』 grid-auto-flow: column;" },
      { value: "grid-flow-dense", label: "『  』 grid-auto-flow: dense;" },
      {
        value: "grid-flow-row-dense",
        label: "『  』 grid-auto-flow: row dense;"
      },
      {
        value: "grid-flow-col-dense",
        label: "『  』 grid-auto-flow: column dense;"
      }
    ]
  },
  {
    type: "grid-auto-columns",
    header: "Grid Auto Columns 属性",
    title: "Grid Auto Columns ClassName：",
    inputPlaceholder: "grid-auto-columns: xxxx",
    selectPlaceholder: "grid-auto-columns: xxxx",
    hasCustom: true,
    options: [
      { value: "auto-cols-auto", label: "『  』 grid-auto-columns: auto;" },
      {
        value: "auto-cols-min",
        label: "『  』 grid-auto-columns: min-content;"
      },
      {
        value: "auto-cols-max",
        label: "『  』 grid-auto-columns: max-content;"
      },
      {
        value: "auto-cols-fr",
        label: "『  』 grid-auto-columns: minmax(0, 1fr);"
      }
    ]
  },
  {
    type: "grid-auto-rows",
    header: "Grid Auto Rows 属性",
    title: "Grid Auto Rows ClassName：",
    inputPlaceholder: "grid-auto-rows: xxxx",
    selectPlaceholder: "grid-auto-rows: xxxx",
    hasCustom: true,
    options: [
      { value: "auto-rows-auto", label: "『  』 grid-auto-rows: auto;" },
      { value: "auto-rows-min", label: "『  』 grid-auto-rows: min-content;" },
      { value: "auto-rows-max", label: "『  』 grid-auto-rows: max-content;" },
      { value: "auto-rows-fr", label: "『  』 grid-auto-rows: minmax(0, 1fr);" }
    ]
  },
  {
    type: "gap",
    header: "Gap 属性",
    title: "Gap ClassName：",
    inputPlaceholder: "gap: xxxx",
    selectPlaceholder: "gap: xxxx",
    hasCustom: true,
    options: [
      {
        label: "0px",
        options: [
          { value: "gap-0", label: "『  』 gap: 0px;" },
          { value: "gap-x-0", label: "『  』 column-gap: 0px;" },
          { value: "gap-y-0", label: "『  』 row-gap: 0px;" }
        ]
      },
      {
        label: "1px",
        options: [
          { value: "gap-px", label: "『  』 gap: 1px;" },
          { value: "gap-x-px", label: "『  』 column-gap: 1px;" },
          { value: "gap-y-px", label: "『  』 row-gap: 1px;" }
        ]
      },
      {
        label: "2px",
        options: [
          { value: "gap-0.5", label: "『  』 gap: 0.125rem;" },
          { value: "gap-x-0.5", label: "『  』 column-gap: 0.125rem;" },
          { value: "gap-y-0.5", label: "『  』 row-gap: 0.125rem;" }
        ]
      },
      {
        label: "4px",
        options: [
          { value: "gap-1", label: "『  』 gap: 0.25rem;" },
          { value: "gap-x-1", label: "『  』 column-gap: 0.25rem;" },
          { value: "gap-y-1", label: "『  』 row-gap: 0.25rem;" }
        ]
      },
      {
        label: "6px",
        options: [
          { value: "gap-1.5", label: "『  』 gap: 0.375rem;" },
          { value: "gap-x-1.5", label: "『  』 column-gap: 0.375rem;" },
          { value: "gap-y-1.5", label: "『  』 row-gap: 0.375rem;" }
        ]
      },
      {
        label: "8px",
        options: [
          { value: "gap-2", label: "『  』 gap: 0.5rem;" },
          { value: "gap-x-2", label: "『  』 column-gap: 0.5rem;" },
          { value: "gap-y-2", label: "『  』 row-gap: 0.5rem;" }
        ]
      },
      {
        label: "10px",
        options: [
          { value: "gap-2.5", label: "『  』 gap: 0.625rem;" },
          { value: "gap-x-2.5", label: "『  』 column-gap: 0.625rem;" },
          { value: "gap-y-2.5", label: "『  』 row-gap: 0.625rem;" }
        ]
      },
      {
        label: "12px",
        options: [
          { value: "gap-3", label: "『  』 gap: 0.75rem;" },
          { value: "gap-x-3", label: "『  』 column-gap: 0.75rem;" },
          { value: "gap-y-3", label: "『  』 row-gap: 0.75rem;" }
        ]
      },
      {
        label: "14px",
        options: [
          { value: "gap-3.5", label: "『  』 gap: 0.875rem;" },
          { value: "gap-x-3.5", label: "『  』 column-gap: 0.875rem; " },
          { value: "gap-y-3.5", label: "『  』 row-gap: 0.875rem;" }
        ]
      },
      {
        label: "16px",
        options: [
          { value: "gap-4", label: "『  』 gap: 1rem;" },
          { value: "gap-x-4", label: "『  』 column-gap: 1rem;" },
          { value: "gap-y-4", label: "『  』 row-gap: 1rem;" }
        ]
      },
      {
        label: "20px",
        options: [
          { value: "gap-5", label: "『  』 gap: 1.25rem;" },
          { value: "gap-x-5", label: "『  』 column-gap: 1.25rem;" },
          { value: "gap-y-5", label: "『  』 row-gap: 1.25rem;" }
        ]
      },
      {
        label: "24px",
        options: [
          { value: "gap-6", label: "『  』 gap: 1.5rem;" },
          { value: "gap-x-6", label: "『  』 column-gap: 1.5rem;" },
          { value: "gap-y-6", label: "『  』 row-gap: 1.5rem;" }
        ]
      },
      {
        label: "28px",
        options: [
          { value: "gap-7", label: "『  』 gap: 1.75rem;" },
          { value: "gap-x-7", label: "『  』 column-gap: 1.75rem;" },
          { value: "gap-y-7", label: "『  』 row-gap: 1.75rem;" }
        ]
      },
      {
        label: "32px",
        options: [
          { value: "gap-8", label: "『  』 gap: 2rem;" },
          { value: "gap-x-8", label: "『  』 column-gap: 2rem;" },
          { value: "gap-y-8", label: "『  』 row-gap: 2rem;" }
        ]
      },
      {
        label: "36px",
        options: [
          { value: "gap-9", label: "『  』 gap: 2.25rem;" },
          { value: "gap-x-9", label: "『  』 column-gap: 2.25rem;" },
          { value: "gap-y-9", label: "『  』 row-gap: 2.25rem;" }
        ]
      },
      {
        label: "40px",
        options: [
          { value: "gap-10", label: "『  』 gap: 2.5rem;" },
          { value: "gap-x-10", label: "『  』 column-gap: 2.5rem;" },
          { value: "gap-y-10", label: "『  』 row-gap: 2.5rem;" }
        ]
      },
      {
        label: "44px",
        options: [
          { value: "gap-11", label: "『  』 gap: 2.75rem;" },
          { value: "gap-x-11", label: "『  』 column-gap: 2.75rem;" },
          { value: "gap-y-11", label: "『  』 row-gap: 2.75rem;" }
        ]
      },
      {
        label: "48px",
        options: [
          { value: "gap-12", label: "『  』 gap: 3rem;" },
          { value: "gap-x-12", label: "『  』 column-gap: 3rem;" },
          { value: "gap-y-12", label: "『  』 row-gap: 3rem;" }
        ]
      },
      {
        label: "56px",
        options: [
          { value: "gap-14", label: "『  』 gap: 3.5rem;" },
          { value: "gap-x-14", label: "『  』 column-gap: 3.5rem;" },
          { value: "gap-y-14", label: "『  』 row-gap: 3.5rem;" }
        ]
      },
      {
        label: "『  』 64px",
        options: [
          { value: "gap-16", label: "『  』 gap: 4rem;" },
          { value: "gap-x-16", label: "『  』 column-gap: 4rem;" },
          { value: "gap-y-16", label: "『  』 row-gap: 4rem;" }
        ]
      },
      {
        label: "『  』 80px",
        options: [
          { value: "gap-20", label: "『  』 gap: 5rem;" },
          { value: "gap-x-20", label: "『  』 column-gap: 5rem;" },
          { value: "gap-y-20", label: "『  』 row-gap: 5rem;" }
        ]
      },
      {
        label: "96px",
        options: [
          { value: "gap-24", label: "『  』 gap: 6rem;" },
          { value: "gap-x-24", label: "『  』 column-gap: 6rem;" },
          { value: "gap-y-24", label: "『  』 row-gap: 6rem;" }
        ]
      },
      {
        label: "112px",
        options: [
          { value: "gap-28", label: "『  』 gap: 7rem;" },
          { value: "gap-x-28", label: "『  』 column-gap: 7rem;" },
          { value: "gap-y-28", label: "『  』 row-gap: 7rem;" }
        ]
      },
      {
        label: "128px",
        options: [
          { value: "gap-32", label: "『  』 gap: 8rem;" },
          { value: "gap-x-32", label: "『  』 column-gap: 8rem;" },
          { value: "gap-y-32", label: "『  』 row-gap: 8rem;" }
        ]
      },
      {
        label: "144px",
        options: [
          { value: "gap-36", label: "『  』 gap: 9rem;" },
          { value: "gap-x-36", label: "『  』 column-gap: 9rem;" },
          { value: "gap-y-36", label: "『  』 row-gap: 9rem;" }
        ]
      },
      {
        label: "160px",
        options: [
          { value: "gap-40", label: "『  』 gap: 10rem;" },
          { value: "gap-x-40", label: "『  』 column-gap: 10rem;" },
          { value: "gap-y-40", label: "『  』 row-gap: 10rem;" }
        ]
      },
      {
        label: "176px",
        options: [
          { value: "gap-44", label: "『  』 gap: 11rem;" },
          { value: "gap-x-44", label: "『  』 column-gap: 11rem;" },
          { value: "gap-y-44", label: "『  』 row-gap: 11rem;" }
        ]
      },
      {
        label: "192px",
        options: [
          { value: "gap-48", label: "『  』 gap: 12rem;" },
          { value: "gap-x-48", label: "『  』 column-gap: 12rem;" },
          { value: "gap-y-48", label: "『  』 row-gap: 12rem;" }
        ]
      },
      {
        label: "208px",
        options: [
          { value: "gap-52", label: "『  』 gap: 13rem;" },
          { value: "gap-x-52", label: "『  』 column-gap: 13rem;" },
          { value: "gap-y-52", label: "『  』 row-gap: 13rem;" }
        ]
      },
      {
        label: "224px",
        options: [
          { value: "gap-56", label: "『  』 gap: 14rem;" },
          { value: "gap-x-56", label: "『  』 column-gap: 14rem;" },
          { value: "gap-y-56", label: "『  』 row-gap: 14rem;" }
        ]
      },
      {
        label: "240px",
        options: [
          { value: "gap-60", label: "『  』 gap: 15rem;" },
          { value: "gap-x-60", label: "『  』 column-gap: 15rem;" },
          { value: "gap-y-60", label: "『  』 row-gap: 15rem;" }
        ]
      },
      {
        label: "256px",
        options: [
          { value: "gap-64", label: "『  』 gap: 16rem;" },
          { value: "gap-x-64", label: "『  』 column-gap: 16rem;" },
          { value: "gap-y-64", label: "『  』 row-gap: 16rem;" }
        ]
      },
      {
        label: "288px",
        options: [
          { value: "gap-72", label: "『  』 gap: 18rem;" },
          { value: "gap-x-72", label: "『  』 column-gap: 18rem;" },
          { value: "gap-y-72", label: "『  』 row-gap: 18rem;" }
        ]
      },
      {
        label: "320px",
        options: [
          { value: "gap-80", label: "『  』 gap: 20rem;" },
          { value: "gap-x-80", label: "『  』 column-gap: 20rem;" },
          { value: "gap-y-80", label: "『  』 row-gap: 20rem;" }
        ]
      },
      {
        label: "384px",
        options: [
          { value: "gap-96", label: "『  』 gap: 24rem;" },
          { value: "gap-x-96", label: "『  』 column-gap: 24rem;" },
          { value: "gap-y-96", label: "『  』 row-gap: 24rem;" }
        ]
      }
    ]
  },
  {
    type: "justify-content",
    header: "Justify Content 属性",
    title: "Justify Content ClassName：",
    inputPlaceholder: "justify-content: xxxx",
    selectPlaceholder: "justify-content: xxxx",
    hasCustom: false,
    options: [
      { value: "justify-start", label: "『  』 justify-content: flex-start;" },
      { value: "justify-end", label: "『  』 justify-content: flex-end;" },
      { value: "justify-center", label: "『  』 justify-content: center;" },
      {
        value: "justify-between",
        label: "『  』 justify-content: space-between;"
      },
      {
        value: "justify-around",
        label: "『  』 justify-content: space-around;"
      },
      {
        value: "justify-evenly",
        label: "『  』 justify-content: space-evenly;"
      }
    ]
  },
  {
    type: "justify-items",
    header: "Justify Items 属性",
    title: "Justify Items ClassName：",
    inputPlaceholder: "justify-items: xxxx",
    selectPlaceholder: "justify-items: xxxx",
    hasCustom: false,
    options: [
      { value: "justify-items-start", label: "『  』 justify-items: start;" },
      { value: "justify-items-end", label: "『  』 justify-items: end;" },
      { value: "justify-items-center", label: "『  』 justify-items: center;" },
      {
        value: "justify-items-stretch",
        label: "『  』 justify-items: stretch;"
      }
    ]
  },
  {
    type: "justify-self",
    header: "Justify Self 属性",
    title: "Justify Self ClassName：",
    inputPlaceholder: "justify-self: xxxx",
    selectPlaceholder: "justify-self: xxxx",
    hasCustom: false,
    options: [
      { value: "justify-self-auto", label: "『  』 justify-self: auto;" },
      { value: "justify-self-start", label: "『  』 justify-self: start;" },
      { value: "justify-self-end", label: "『  』 justify-self: end;" },
      { value: "justify-self-center", label: "『  』 justify-self: center;" },
      { value: "justify-self-stretch", label: "『  』 justify-self: stretch;" }
    ]
  },
  {
    type: "align-content",
    header: "Align Content 属性",
    title: "Align Content ClassName：",
    inputPlaceholder: ": xxxx",
    selectPlaceholder: ": xxxx",
    hasCustom: false,
    options: [
      { value: "content-center", label: "『  』 align-content: center;" },
      { value: "content-start", label: "『  』 align-content: flex-start;" },
      { value: "content-end", label: "『  』 align-content: flex-end;" },
      {
        value: "content-between",
        label: "『  』 align-content: space-between;"
      },
      { value: "content-around", label: "『  』 align-content: space-around;" },
      { value: "content-evenly", label: "『  』 align-content: space-evenly;" },
      { value: "content-baseline", label: "『  』 align-content: baseline;" }
    ]
  },
  {
    type: "align-items",
    header: "Align Items 属性",
    title: "Align Items ClassName：",
    inputPlaceholder: "align-items: xxxx",
    selectPlaceholder: "align-items: xxxx",
    hasCustom: false,
    options: [
      { value: "items-start", label: "『  』 align-items: flex-start;" },
      { value: "items-end", label: "『  』 align-items: flex-end;" },
      { value: "items-center", label: "『  』 align-items: center;" },
      { value: "items-baseline", label: "『  』 align-items: baseline;" },
      { value: "items-stretch", label: "『  』 align-items: stretch;" }
    ]
  },
  {
    type: "align-self",
    header: "Align Self 属性",
    title: "Align Self ClassName：",
    inputPlaceholder: "align-self: xxxx",
    selectPlaceholder: "align-self: xxxx",
    hasCustom: false,
    options: [
      { value: "self-auto", label: "『  』 align-self: auto;" },
      { value: "self-start", label: "『  』 align-self: flex-start;" },
      { value: "self-end", label: "『  』 align-self: flex-end;" },
      { value: "self-center", label: "『  』 align-self: center;" },
      { value: "self-stretch", label: "『  』 align-self: stretch;" },
      { value: "self-baseline", label: "『  』 align-self: baseline;" }
    ]
  },
  {
    type: "place-content",
    header: "Place Content 属性",
    title: "Place Content ClassName：",
    inputPlaceholder: "place-content: xxxx",
    selectPlaceholder: "place-content: xxxx",
    hasCustom: false,
    options: [
      { value: "place-content-center", label: "『  』 place-content: center;" },
      { value: "place-content-start", label: "『  』 place-content: start;" },
      { value: "place-content-end", label: "『  』 place-content: end;" },
      {
        value: "place-content-between",
        label: "『  』 place-content: space-between;"
      },
      {
        value: "place-content-around",
        label: "『  』 place-content: space-around;"
      },
      {
        value: "place-content-evenly",
        label: "『  』 place-content: space-evenly;"
      },
      {
        value: "place-content-baseline",
        label: "『  』 place-content: baseline;"
      },
      {
        value: "place-content-stretch",
        label: "『  』 place-content: stretch;"
      }
    ]
  },
  {
    type: "place-items",
    header: "Place Items 属性",
    title: "Place Items ClassName：",
    inputPlaceholder: "place-items: xxxx",
    selectPlaceholder: "place-items: xxxx",
    hasCustom: false,
    options: [
      { value: "place-items-start", label: "『  』 place-items: start;" },
      { value: "place-items-end", label: "『  』 place-items: end;" },
      { value: "place-items-center", label: "『  』 place-items: center;" },
      { value: "place-items-baseline", label: "『  』 place-items: baseline;" },
      { value: "place-items-stretch", label: "『  』 place-items: stretch;" }
    ]
  },
  {
    type: "place-self",
    header: "Place Self 属性",
    title: "Place Self ClassName：",
    inputPlaceholder: "place-self: xxxx",
    selectPlaceholder: "place-self: xxxx",
    hasCustom: false,
    options: [
      { value: "place-self-auto", label: "『  』 place-self: auto;" },
      { value: "place-self-start", label: "『  』 place-self: start;" },
      { value: "place-self-end", label: "『  』 place-self: end;" },
      { value: "place-self-center", label: "『  』 place-self: center;" },
      { value: "place-self-stretch", label: "『  』 place-self: stretch;" }
    ]
  },
  {
    type: "padding",
    header: "Padding 属性",
    title: "Padding ClassName：",
    inputPlaceholder: "padding: xxxx",
    selectPlaceholder: "padding: xxxx",
    hasCustom: true,
    options: [
      {
        label: "0px",
        options: [
          { value: "p-0", label: "『  』 padding: 0px;" },
          {
            value: "px-0",
            label: "『  』 padding-left: 0px; padding-right: 0px;"
          },
          {
            value: "py-0",
            label: "『  』 padding-top: 0px; padding-bottom: 0px;"
          },
          { value: "pt-0", label: "『  』 padding-top: 0px;" },
          { value: "pr-0", label: "『  』 padding-right: 0px;" },
          { value: "pb-0", label: "『  』 padding-bottom: 0px;" },
          { value: "pl-0", label: "『  』 padding-left: 0px;" }
        ]
      },
      {
        label: "1px",
        options: [
          { value: "p-px", label: "『  』 padding: 1px;" },
          {
            value: "px-px",
            label: "『  』 padding-left: 1px; padding-right: 1px;"
          },
          {
            value: "py-px",
            label: "『  』 padding-top: 1px; padding-bottom: 1px;"
          },
          { value: "pt-px", label: "『  』 padding-top: 1px;" },
          { value: "pr-px", label: "『  』 padding-right: 1px;" },
          { value: "pb-px", label: "『  』 padding-bottom: 1px;" },
          { value: "pl-px", label: "『  』 padding-left: 1px;" }
        ]
      },
      {
        label: "2px",
        options: [
          { value: "p-0.5", label: "『  』 padding: 0.125rem;" },
          {
            value: "px-0.5",
            label: "『  』 padding-left: 0.125rem; padding-right: 0.125rem;"
          },
          {
            value: "py-0.5",
            label: "『  』 padding-top: 0.125rem; padding-bottom: 0.125rem;"
          },
          { value: "pt-0.5", label: "『  』 padding-top: 0.125rem;" },
          { value: "pr-0.5", label: "『  』 padding-right: 0.125rem;" },
          { value: "pb-0.5", label: "『  』 padding-bottom: 0.125rem;" },
          { value: "pl-0.5", label: "『  』 padding-left: 0.125rem;" }
        ]
      },
      {
        label: "4px",
        options: [
          { value: "p-1", label: "『  』 padding: 0.25rem;" },
          {
            value: "px-1",
            label: "『  』 padding-left: 0.25rem; padding-right: 0.25rem;"
          },
          {
            value: "py-1",
            label: "『  』 padding-top: 0.25rem; padding-bottom: 0.25rem;"
          },
          { value: "pt-1", label: "『  』 padding-top: 0.25rem;" },
          { value: "pr-1", label: "『  』 padding-right: 0.25rem;" },
          { value: "pb-1", label: "『  』 padding-bottom: 0.25rem;" },
          { value: "pl-1", label: "『  』 padding-left: 0.25rem;" }
        ]
      },
      {
        label: "6px",
        options: [
          { value: "p-1.5", label: "『  』 padding: 0.375rem;" },
          {
            value: "px-1.5",
            label: "『  』 padding-left: 0.375rem; padding-right: 0.375rem;"
          },
          {
            value: "py-1.5",
            label: "『  』 padding-top: 0.375rem; padding-bottom: 0.375rem;"
          },
          { value: "pt-1.5", label: "『  』 padding-top: 0.375rem;" },
          { value: "pr-1.5", label: "『  』 padding-right: 0.375rem;" },
          { value: "pb-1.5", label: "『  』 padding-bottom: 0.375rem;" },
          { value: "pl-1.5", label: "『  』 padding-left: 0.375rem;" }
        ]
      },
      {
        label: "8px",
        options: [
          { value: "p-2", label: "『  』 padding: 0.5rem;" },
          {
            value: "px-2",
            label: "『  』 padding-left: 0.5rem; padding-right: 0.5rem;"
          },
          {
            value: "py-2",
            label: "『  』 padding-top: 0.5rem; padding-bottom: 0.5rem;"
          },
          { value: "pt-2", label: "『  』 padding-top: 0.5rem;" },
          { value: "pr-2", label: "『  』 padding-right: 0.5rem;" },
          { value: "pb-2", label: "『  』 padding-bottom: 0.5rem;" },
          { value: "pl-2", label: "『  』 padding-left: 0.5rem;" }
        ]
      },
      {
        label: "10px",
        options: [
          { value: "p-2.5", label: "『  』 padding: 0.625rem;" },
          {
            value: "px-2.5",
            label: "『  』 padding-left: 0.625rem; padding-right: 0.625rem;"
          },
          {
            value: "py-2.5",
            label: "『  』 padding-top: 0.625rem; padding-bottom: 0.625rem;"
          },
          { value: "pt-2.5", label: "『  』 padding-top: 0.625rem;" },
          { value: "pr-2.5", label: "『  』 padding-right: 0.625rem;" },
          { value: "pb-2.5", label: "『  』 padding-bottom: 0.625rem;" },
          { value: "pl-2.5", label: "『  』 padding-left: 0.625rem;" }
        ]
      },
      {
        label: "12px",
        options: [
          { value: "p-3", label: "『  』 padding: 0.75rem;" },
          {
            value: "px-3",
            label: "『  』 padding-left: 0.75rem; padding-right: 0.75rem;"
          },
          {
            value: "py-3",
            label: "『  』 padding-top: 0.75rem; padding-bottom: 0.75rem;"
          },
          { value: "pt-3", label: "『  』 padding-top: 0.75rem;" },
          { value: "pr-3", label: "『  』 padding-right: 0.75rem;" },
          { value: "pb-3", label: "『  』 padding-bottom: 0.75rem;" },
          { value: "pl-3", label: "『  』 padding-left: 0.75rem;" }
        ]
      },
      {
        label: "14px",
        options: [
          { value: "p-3.5", label: "『  』 padding: 0.875rem;" },
          {
            value: "px-3.5",
            label: "『  』 padding-left: 0.875rem; padding-right: 0.875rem;"
          },
          {
            value: "py-3.5",
            label: "『  』 padding-top: 0.875rem; padding-bottom: 0.875rem;"
          },
          { value: "pt-3.5", label: "『  』 padding-top: 0.875rem;" },
          { value: "pr-3.5", label: "『  』 padding-right: 0.875rem;" },
          { value: "pb-3.5", label: "『  』 padding-bottom: 0.875rem;" },
          { value: "pl-3.5", label: "『  』 padding-left: 0.875rem;" }
        ]
      },

      {
        label: "16px",
        options: [
          { value: "p-4", label: "『  』 padding: 1rem;" },
          {
            value: "px-4",
            label: "『  』 padding-left: 1rem; padding-right: 1rem;"
          },
          {
            value: "py-4",
            label: "『  』 padding-top: 1rem; padding-bottom: 1rem;"
          },
          { value: "pt-4", label: "『  』 padding-top: 1rem;" },
          { value: "pr-4", label: "『  』 padding-right: 1rem;" },
          { value: "pb-4", label: "『  』 padding-bottom: 1rem;" },
          { value: "pl-4", label: "『  』 padding-left: 1rem;" }
        ]
      },

      {
        label: "20px",
        options: [
          { value: "p-5", label: "『  』 padding: 1.25rem;" },
          {
            value: "px-5",
            label: "『  』 padding-left: 1.25rem; padding-right: 1.25rem;"
          },
          {
            value: "py-5",
            label: "『  』 padding-top: 1.25rem; padding-bottom: 1.25rem;"
          },
          { value: "pt-5", label: "『  』 padding-top: 1.25rem;" },
          { value: "pr-5", label: "『  』 padding-right: 1.25rem;" },
          { value: "pb-5", label: "『  』 padding-bottom: 1.25rem;" },
          { value: "pl-5", label: "『  』 padding-left: 1.25rem;" }
        ]
      },

      {
        label: "24px",
        options: [
          { value: "p-6", label: "『  』 padding: 1.5rem;" },
          {
            value: "px-6",
            label: "『  』 padding-left: 1.5rem; padding-right: 1.5rem;"
          },
          {
            value: "py-6",
            label: "『  』 padding-top: 1.5rem; padding-bottom: 1.5rem;"
          },
          { value: "pt-6", label: "『  』 padding-top: 1.5rem;" },
          { value: "pr-6", label: "『  』 padding-right: 1.5rem;" },
          { value: "pb-6", label: "『  』 padding-bottom: 1.5rem;" },
          { value: "pl-6", label: "『  』 padding-left: 1.5rem;" }
        ]
      },
      {
        label: "28px",
        options: [
          { value: "p-7", label: "『  』 padding: 1.75rem;" },
          {
            value: "px-7",
            label: "『  』 padding-left: 1.75rem; padding-right: 1.75rem;"
          },
          {
            value: "py-7",
            label: "『  』 padding-top: 1.75rem; padding-bottom: 1.75rem;"
          },
          { value: "pt-7", label: "『  』 padding-top: 1.75rem;" },
          { value: "pr-7", label: "『  』 padding-right: 1.75rem;" },
          { value: "pb-7", label: "『  』 padding-bottom: 1.75rem;" },
          { value: "pl-7", label: "『  』 padding-left: 1.75rem;" }
        ]
      },
      {
        label: "32px",
        options: [
          { value: "p-8", label: "『  』 padding: 2rem;" },
          {
            value: "px-8",
            label: "『  』 padding-left: 2rem; padding-right: 2rem;"
          },
          {
            value: "py-8",
            label: "『  』 padding-top: 2rem; padding-bottom: 2rem;"
          },
          { value: "pt-8", label: "『  』 padding-top: 2rem;" },
          { value: "pr-8", label: "『  』 padding-right: 2rem;" },
          { value: "pb-8", label: "『  』 padding-bottom: 2rem;" },
          { value: "pl-8", label: "『  』 padding-left: 2rem;" }
        ]
      },
      {
        label: "36px",
        options: [
          { value: "p-9", label: "『  』 padding: 2.25rem;" },
          {
            value: "px-9",
            label: "『  』 padding-left: 2.25rem; padding-right: 2.25rem;"
          },
          {
            value: "py-9",
            label: "『  』 padding-top: 2.25rem; padding-bottom: 2.25rem;"
          },
          { value: "pt-9", label: "『  』 padding-top: 2.25rem;" },
          { value: "pr-9", label: "『  』 padding-right: 2.25rem;" },
          { value: "pb-9", label: "『  』 padding-bottom: 2.25rem;" },
          { value: "pl-9", label: "『  』 padding-left: 2.25rem;" }
        ]
      },
      {
        label: "40px",
        options: [
          { value: "p-10", label: "『  』 padding: 2.5rem;" },
          {
            value: "px-10",
            label: "『  』 padding-left: 2.5rem; padding-right: 2.5rem;"
          },
          {
            value: "py-10",
            label: "『  』 padding-top: 2.5rem; padding-bottom: 2.5rem;"
          },
          { value: "pt-10", label: "『  』 padding-top: 2.5rem;" },
          { value: "pr-10", label: "『  』 padding-right: 2.5rem;" },
          { value: "pb-10", label: "『  』 padding-bottom: 2.5rem;" },
          { value: "pl-10", label: "『  』 padding-left: 2.5rem;" }
        ]
      },
      {
        label: "44px",
        options: [
          { value: "p-11", label: "『  』 padding: 2.75rem;" },
          {
            value: "px-11",
            label: "『  』 padding-left: 2.75rem; padding-right: 2.75rem;"
          },
          {
            value: "py-11",
            label: "『  』 padding-top: 2.75rem; padding-bottom: 2.75rem;"
          },
          { value: "pt-11", label: "『  』 padding-top: 2.75rem;" },
          { value: "pr-11", label: "『  』 padding-right: 2.75rem;" },
          { value: "pb-11", label: "『  』 padding-bottom: 2.75rem;" },
          { value: "pl-11", label: "『  』 padding-left: 2.75rem;" }
        ]
      },
      {
        label: "48px",
        options: [
          { value: "p-12", label: "『  』 padding: 3rem;" },
          {
            value: "px-12",
            label: "『  』 padding-left: 3rem; padding-right: 3rem;"
          },
          {
            value: "py-12",
            label: "『  』 padding-top: 3rem; padding-bottom: 3rem;"
          },
          { value: "pt-12", label: "『  』 padding-top: 3rem;" },
          { value: "pr-12", label: "『  』 padding-right: 3rem;" },
          { value: "pb-12", label: "『  』 padding-bottom: 3rem;" },
          { value: "pl-12", label: "『  』 padding-left: 3rem;" }
        ]
      },

      {
        label: "56px",
        options: [
          { value: "p-14", label: "『  』 padding: 3.5rem;" },
          {
            value: "px-14",
            label: "『  』 padding-left: 3.5rem; padding-right: 3.5rem;"
          },
          {
            value: "py-14",
            label: "『  』 padding-top: 3.5rem; padding-bottom: 3.5rem;"
          },
          { value: "pt-14", label: "『  』 padding-top: 3.5rem;" },
          { value: "pr-14", label: "『  』 padding-right: 3.5rem;" },
          { value: "pb-14", label: "『  』 padding-bottom: 3.5rem;" },
          { value: "pl-14", label: "『  』 padding-left: 3.5rem;" }
        ]
      },

      {
        label: "『  』 64px",
        options: [
          { value: "p-16", label: "『  』 padding: 4rem;" },
          {
            value: "px-16",
            label: "『  』 padding-left: 4rem; padding-right: 4rem;"
          },
          {
            value: "py-16",
            label: "『  』 padding-top: 4rem; padding-bottom: 4rem;"
          },
          { value: "pt-16", label: "『  』 padding-top: 4rem;" },
          { value: "pr-16", label: "『  』 padding-right: 4rem;" },
          { value: "pb-16", label: "『  』 padding-bottom: 4rem;" },
          { value: "pl-16", label: "『  』 padding-left: 4rem;" }
        ]
      },
      {
        label: "『  』 80px",
        options: [
          { value: "p-20", label: "『  』 padding: 5rem;" },
          {
            value: "px-20",
            label: "『  』 padding-left: 5rem; padding-right: 5rem;"
          },
          {
            value: "py-20",
            label: "『  』 padding-top: 5rem; padding-bottom: 5rem;"
          },
          { value: "pt-20", label: "『  』 padding-top: 5rem;" },
          { value: "pr-20", label: "『  』 padding-right: 5rem;" },
          { value: "pb-20", label: "『  』 padding-bottom: 5rem;" },
          { value: "pl-20", label: "『  』 padding-left: 5rem;" }
        ]
      },
      {
        label: "96px",
        options: [
          { value: "p-24", label: "『  』 padding: 6rem;" },
          {
            value: "px-24",
            label: "『  』 padding-left: 6rem; padding-right: 6rem;"
          },
          {
            value: "py-24",
            label: "『  』 padding-top: 6rem; padding-bottom: 6rem;"
          },
          { value: "pt-24", label: "『  』 padding-top: 6rem;" },
          { value: "pr-24", label: "『  』 padding-right: 6rem;" },
          { value: "pb-24", label: "『  』 padding-bottom: 6rem;" },
          { value: "pl-24", label: "『  』 padding-left: 6rem;" }
        ]
      },

      {
        label: "112px",
        options: [
          { value: "p-28", label: "『  』 padding: 7rem;" },
          {
            value: "px-28",
            label: "『  』 padding-left: 7rem; padding-right: 7rem;"
          },
          {
            value: "py-28",
            label: "『  』 padding-top: 7rem; padding-bottom: 7rem;"
          },
          { value: "pt-28", label: "『  』 padding-top: 7rem;" },
          { value: "pr-28", label: "『  』 padding-right: 7rem;" },
          { value: "pb-28", label: "『  』 padding-bottom: 7rem;" },
          { value: "pl-28", label: "『  』 padding-left: 7rem;" }
        ]
      },
      {
        label: "128px",
        options: [
          { value: "p-32", label: "『  』 padding: 8rem;" },
          {
            value: "px-32",
            label: "『  』 padding-left: 8rem; padding-right: 8rem;"
          },
          {
            value: "py-32",
            label: "『  』 padding-top: 8rem; padding-bottom: 8rem;"
          },
          { value: "pt-32", label: "『  』 padding-top: 8rem;" },
          { value: "pr-32", label: "『  』 padding-right: 8rem;" },
          { value: "pb-32", label: "『  』 padding-bottom: 8rem;" },
          { value: "pl-32", label: "『  』 padding-left: 8rem;" }
        ]
      },
      {
        label: "144px",
        options: [
          { value: "p-36", label: "『  』 padding: 9rem;" },
          {
            value: "px-36",
            label: "『  』 padding-left: 9rem; padding-right: 9rem;"
          },
          {
            value: "py-36",
            label: "『  』 padding-top: 9rem; padding-bottom: 9rem;"
          },
          { value: "pt-36", label: "『  』 padding-top: 9rem;" },
          { value: "pr-36", label: "『  』 padding-right: 9rem;" },
          { value: "pb-36", label: "『  』 padding-bottom: 9rem;" },
          { value: "pl-36", label: "『  』 padding-left: 9rem;" }
        ]
      },
      {
        label: "160px",
        options: [
          { value: "p-40", label: "『  』 padding: 10rem;" },
          {
            value: "px-40",
            label: "『  』 padding-left: 10rem; padding-right: 10rem;"
          },
          {
            value: "py-40",
            label: "『  』 padding-top: 10rem; padding-bottom: 10rem;"
          },
          { value: "pt-40", label: "『  』 padding-top: 10rem;" },
          { value: "pr-40", label: "『  』 padding-right: 10rem;" },
          { value: "pb-40", label: "『  』 padding-bottom: 10rem;" },
          { value: "pl-40", label: "『  』 padding-left: 10rem;" }
        ]
      },
      {
        label: "176px",
        options: [
          { value: "p-44", label: "『  』 padding: 11rem;" },
          {
            value: "px-44",
            label: "『  』 padding-left: 11rem; padding-right: 11rem;"
          },
          {
            value: "py-44",
            label: "『  』 padding-top: 11rem; padding-bottom: 11rem;"
          },
          { value: "pt-44", label: "『  』 padding-top: 11rem;" },
          { value: "pr-44", label: "『  』 padding-right: 11rem;" },
          { value: "pb-44", label: "『  』 padding-bottom: 11rem;" },
          { value: "pl-44", label: "『  』 padding-left: 11rem;" }
        ]
      },
      {
        label: "192px",
        options: [
          { value: "p-48", label: "『  』 padding: 12rem;" },
          {
            value: "px-48",
            label: "『  』 padding-left: 12rem; padding-right: 12rem;"
          },
          {
            value: "py-48",
            label: "『  』 padding-top: 12rem; padding-bottom: 12rem;"
          },
          { value: "pt-48", label: "『  』 padding-top: 12rem;" },
          { value: "pr-48", label: "『  』 padding-right: 12rem;" },
          { value: "pb-48", label: "『  』 padding-bottom: 12rem;" },
          { value: "pl-48", label: "『  』 padding-left: 12rem;" }
        ]
      },
      {
        label: "208px",
        options: [
          { value: "p-52", label: "『  』 padding: 13rem;" },
          {
            value: "px-52",
            label: "『  』 padding-left: 13rem; padding-right: 13rem;"
          },
          {
            value: "py-52",
            label: "『  』 padding-top: 13rem; padding-bottom: 13rem;"
          },
          { value: "pt-52", label: "『  』 padding-top: 13rem;" },
          { value: "pr-52", label: "『  』 padding-right: 13rem;" },
          { value: "pb-52", label: "『  』 padding-bottom: 13rem;" },
          { value: "pl-52", label: "『  』 padding-left: 13rem;" }
        ]
      },
      {
        label: "224px",
        options: [
          { value: "p-56", label: "『  』 padding: 14rem;" },
          {
            value: "px-56",
            label: "『  』 padding-left: 14rem; padding-right: 14rem;"
          },
          {
            value: "py-56",
            label: "『  』 padding-top: 14rem; padding-bottom: 14rem;"
          },
          { value: "pt-56", label: "『  』 padding-top: 14rem;" },
          { value: "pr-56", label: "『  』 padding-right: 14rem;" },
          { value: "pb-56", label: "『  』 padding-bottom: 14rem;" },
          { value: "pl-56", label: "『  』 padding-left: 14rem;" }
        ]
      },
      {
        label: "240px",
        options: [
          { value: "p-60", label: "『  』 padding: 15rem;" },
          {
            value: "px-60",
            label: "『  』 padding-left: 15rem; padding-right: 15rem;"
          },
          {
            value: "py-60",
            label: "『  』 padding-top: 15rem; padding-bottom: 15rem;"
          },
          { value: "pt-60", label: "『  』 padding-top: 15rem;" },
          { value: "pr-60", label: "『  』 padding-right: 15rem;" },
          { value: "pb-60", label: "『  』 padding-bottom: 15rem;" },
          { value: "pl-60", label: "『  』 padding-left: 15rem;" }
        ]
      },
      {
        label: "256px",
        options: [
          { value: "p-64", label: "『  』 padding: 16rem;" },
          {
            value: "px-64",
            label: "『  』 padding-left: 16rem; padding-right: 16rem;"
          },
          {
            value: "py-64",
            label: "『  』 padding-top: 16rem; padding-bottom: 16rem;"
          },
          { value: "pt-64", label: "『  』 padding-top: 16rem;" },
          { value: "pr-64", label: "『  』 padding-right: 16rem;" },
          { value: "pb-64", label: "『  』 padding-bottom: 16rem;" },
          { value: "pl-64", label: "『  』 padding-left: 16rem;" }
        ]
      },
      {
        label: "288px",
        options: [
          { value: "p-72", label: "『  』 padding: 18rem;" },
          {
            value: "px-72",
            label: "『  』 padding-left: 18rem; padding-right: 18rem;"
          },
          {
            value: "py-72",
            label: "『  』 padding-top: 18rem; padding-bottom: 18rem;"
          },
          { value: "pt-72", label: "『  』 padding-top: 18rem;" },
          { value: "pr-72", label: "『  』 padding-right: 18rem;" },
          { value: "pb-72", label: "『  』 padding-bottom: 18rem;" },
          { value: "pl-72", label: "『  』 padding-left: 18rem;" }
        ]
      },
      {
        label: "320px",
        options: [
          { value: "p-80", label: "『  』 padding: 20rem;" },
          {
            value: "px-80",
            label: "『  』 padding-left: 20rem; padding-right: 20rem;"
          },
          {
            value: "py-80",
            label: "『  』 padding-top: 20rem; padding-bottom: 20rem;"
          },
          { value: "pt-80", label: "『  』 padding-top: 20rem;" },
          { value: "pr-80", label: "『  』 padding-right: 20rem;" },
          { value: "pb-80", label: "『  』 padding-bottom: 20rem;" },
          { value: "pl-80", label: "『  』 padding-left: 20rem;" }
        ]
      },
      {
        label: "384px",
        options: [
          { value: "p-96", label: "『  』 padding: 24rem;" },
          {
            value: "px-96",
            label: "『  』 padding-left: 24rem; padding-right: 24rem;"
          },
          {
            value: "py-96",
            label: "『  』 padding-top: 24rem; padding-bottom: 24rem;"
          },
          { value: "pt-96", label: "『  』 padding-top: 24rem;" },
          { value: "pr-96", label: "『  』 padding-right: 24rem;" },
          { value: "pb-96", label: "『  』 padding-bottom: 24rem;" },
          { value: "pl-96", label: "『  』 padding-left: 24rem;" }
        ]
      }
    ]
  },
  {
    type: "margin",
    header: "Margin 属性",
    title: "Margin ClassName：",
    inputPlaceholder: "margin: xxxx",
    selectPlaceholder: "margin: xxxx",
    hasCustom: true,
    options: [
      {
        label: "『  』 0px;",
        options: [
          { value: "m-0", label: "『  』 margin: 0px;" },
          {
            value: "mx-0",
            label: "『  』 margin-left: 0px; margin-right: 0px;"
          },
          {
            value: "my-0",
            label: "『  』 margin-top: 0px; margin-bottom: 0px;"
          },
          { value: "mt-0", label: "『  』 margin-top: 0px;" },
          { value: "mr-0", label: "『  』 margin-right: 0px;" },
          { value: "mb-0", label: "『  』 margin-bottom: 0px;" },
          { value: "ml-0", label: "『  』 margin-left: 0px;" }
        ]
      },
      {
        label: "『  』 1px;",
        options: [
          { value: "m-px", label: "『  』 margin: 1px;" },
          {
            value: "mx-px",
            label: "『  』 margin-left: 1px; margin-right: 1px;"
          },
          {
            value: "my-px",
            label: "『  』 margin-top: 1px; margin-bottom: 1px;"
          },
          { value: "mt-px", label: "『  』 margin-top: 1px;" },
          { value: "mr-px", label: "『  』 margin-right: 1px;" },
          { value: "mb-px", label: "『  』 margin-bottom: 1px;" },
          { value: "ml-px", label: "『  』 margin-left: 1px;" }
        ]
      },
      {
        label: "2px",
        options: [
          { value: "m-0.5", label: "『  』 margin: 0.125rem;" },
          {
            value: "mx-0.5",
            label: "『  』 margin-left: 0.125rem; margin-right: 0.125rem;"
          },
          {
            value: "my-0.5",
            label: "『  』 margin-top: 0.125rem; margin-bottom: 0.125rem;"
          },
          { value: "mt-0.5", label: "『  』 margin-top: 0.125rem;" },
          { value: "mr-0.5", label: "『  』 margin-right: 0.125rem;" },
          { value: "mb-0.5", label: "『  』 margin-bottom: 0.125rem;" },
          { value: "ml-0.5", label: "『  』 margin-left: 0.125rem;" }
        ]
      },
      {
        label: "4px",
        options: [
          { value: "m-1", label: "『  』 margin: 0.25rem;" },
          {
            value: "mx-1",
            label: "『  』 margin-left: 0.25rem; margin-right: 0.25rem;"
          },
          {
            value: "my-1",
            label: "『  』 margin-top: 0.25rem; margin-bottom: 0.25rem;"
          },
          { value: "mt-1", label: "『  』 margin-top: 0.25rem;" },
          { value: "mr-1", label: "『  』 margin-right: 0.25rem;" },
          { value: "mb-1", label: "『  』 margin-bottom: 0.25rem;" },
          { value: "ml-1", label: "『  』 margin-left: 0.25rem;" }
        ]
      },
      {
        label: "6px",
        options: [
          { value: "m-1.5", label: "『  』 margin: 0.375rem;" },
          {
            value: "mx-1.5",
            label: "『  』 margin-left: 0.375rem; margin-right: 0.375rem;"
          },
          {
            value: "my-1.5",
            label: "『  』 margin-top: 0.375rem; margin-bottom: 0.375rem;"
          },
          { value: "mt-1.5", label: "『  』 margin-top: 0.375rem;" },
          { value: "mr-1.5", label: "『  』 margin-right: 0.375rem;" },
          { value: "mb-1.5", label: "『  』 margin-bottom: 0.375rem;" },
          { value: "ml-1.5", label: "『  』 margin-left: 0.375rem;" }
        ]
      },
      {
        label: "8px",
        options: [
          { value: "m-2", label: "『  』 margin: 0.5rem;" },
          {
            value: "mx-2",
            label: "『  』 margin-left: 0.5rem; margin-right: 0.5rem;"
          },
          {
            value: "my-2",
            label: "『  』 margin-top: 0.5rem; margin-bottom: 0.5rem;"
          },
          { value: "mt-2", label: "『  』 margin-top: 0.5rem;" },
          { value: "mr-2", label: "『  』 margin-right: 0.5rem;" },
          { value: "mb-2", label: "『  』 margin-bottom: 0.5rem;" },
          { value: "ml-2", label: "『  』 margin-left: 0.5rem;" }
        ]
      },
      {
        label: "10px",
        options: [
          { value: "m-2.5", label: "『  』 margin: 0.625rem;" },
          {
            value: "mx-2.5",
            label: "『  』 margin-left: 0.625rem; margin-right: 0.625rem;"
          },
          {
            value: "my-2.5",
            label: "『  』 margin-top: 0.625rem; margin-bottom: 0.625rem;"
          },
          { value: "mt-2.5", label: "『  』 margin-top: 0.625rem;" },
          { value: "mr-2.5", label: "『  』 margin-right: 0.625rem;" },
          { value: "mb-2.5", label: "『  』 margin-bottom: 0.625rem;" },
          { value: "ml-2.5", label: "『  』 margin-left: 0.625rem;" }
        ]
      },
      {
        label: "12px",
        options: [
          { value: "m-3", label: "『  』 margin: 0.75rem;" },
          {
            value: "mx-3",
            label: "『  』 margin-left: 0.75rem; margin-right: 0.75rem;"
          },
          {
            value: "my-3",
            label: "『  』 margin-top: 0.75rem; margin-bottom: 0.75rem;"
          },
          { value: "mt-3", label: "『  』 margin-top: 0.75rem;" },
          { value: "mr-3", label: "『  』 margin-right: 0.75rem;" },
          { value: "mb-3", label: "『  』 margin-bottom: 0.75rem;" },
          { value: "ml-3", label: "『  』 margin-left: 0.75rem;" }
        ]
      },
      {
        label: "14px",
        options: [
          { value: "m-3.5", label: "『  』 margin: 0.875rem;" },
          {
            value: "mx-3.5",
            label: "『  』 margin-left: 0.875rem; margin-right: 0.875rem;"
          },
          {
            value: "my-3.5",
            label: "『  』 margin-top: 0.875rem; margin-bottom: 0.875rem;"
          },
          { value: "mt-3.5", label: "『  』 margin-top: 0.875rem;" },
          { value: "mr-3.5", label: "『  』 margin-right: 0.875rem;" },
          { value: "mb-3.5", label: "『  』 margin-bottom: 0.875rem;" },
          { value: "ml-3.5", label: "『  』 margin-left: 0.875rem;" }
        ]
      },
      {
        label: "16px",
        options: [
          { value: "m-4", label: "『  』 margin: 1rem;" },
          {
            value: "mx-4",
            label: "『  』 margin-left: 1rem; margin-right: 1rem;"
          },
          {
            value: "my-4",
            label: "『  』 margin-top: 1rem;  margin-bottom: 1rem;"
          },
          { value: "mt-4", label: "『  』 margin-top: 1rem;" },
          { value: "mr-4", label: "『  』 margin-right: 1rem;" },
          { value: "mb-4", label: "『  』 margin-bottom: 1rem;" },
          { value: "ml-4", label: "『  』 margin-left: 1rem;" }
        ]
      },
      {
        label: "20px",
        options: [
          { value: "m-5", label: "『  』 margin: 1.25rem;" },
          {
            value: "mx-5",
            label: "『  』 margin-left: 1.25rem; margin-right: 1.25rem;"
          },
          {
            value: "my-5",
            label: "『  』 margin-top: 1.25rem; margin-bottom: 1.25rem;"
          },
          { value: "mt-5", label: "『  』 margin-top: 1.25rem;" },
          { value: "mr-5", label: "『  』 margin-right: 1.25rem;" },
          { value: "mb-5", label: "『  』 margin-bottom: 1.25rem;" },
          { value: "ml-5", label: "『  』 margin-left: 1.25rem;" }
        ]
      },
      {
        label: "24px",
        options: [
          { value: "m-6", label: "『  』 margin: 1.5rem;" },
          {
            value: "mx-6",
            label: "『  』 margin-left: 1.5rem; margin-right: 1.5rem;"
          },
          {
            value: "my-6",
            label: "『  』 margin-top: 1.5rem; margin-bottom: 1.5rem;"
          },
          { value: "mt-6", label: "『  』 margin-top: 1.5rem;" },
          { value: "mr-6", label: "『  』 margin-right: 1.5rem;" },
          { value: "mb-6", label: "『  』 margin-bottom: 1.5rem;" },
          { value: "ml-6", label: "『  』 margin-left: 1.5rem;" }
        ]
      },
      {
        label: "28px",
        options: [
          { value: "m-7", label: "『  』 margin: 1.75rem;" },
          {
            value: "mx-7",
            label: "『  』 margin-left: 1.75rem; margin-right: 1.75rem;"
          },
          {
            value: "my-7",
            label: "『  』 margin-top: 1.75rem; margin-bottom: 1.75rem;"
          },
          { value: "mt-7", label: "『  』 margin-top: 1.75rem;" },
          { value: "mr-7", label: "『  』 margin-right: 1.75rem;" },
          { value: "mb-7", label: "『  』 margin-bottom: 1.75rem;" },
          { value: "ml-7", label: "『  』 margin-left: 1.75rem;" }
        ]
      },
      {
        label: "32px",
        options: [
          { value: "m-8", label: "『  』 margin: 2rem;" },
          {
            value: "mx-8",
            label: "『  』 margin-left: 2rem; margin-right: 2rem;"
          },
          {
            value: "my-8",
            label: "『  』 margin-top: 2rem; margin-bottom: 2rem;"
          },
          { value: "mt-8", label: "『  』 margin-top: 2rem;" },
          { value: "mr-8", label: "『  』 margin-right: 2rem;" },
          { value: "mb-8", label: "『  』 margin-bottom: 2rem;" },
          { value: "ml-8", label: "『  』 margin-left: 2rem;" }
        ]
      },
      {
        label: "36px",
        options: [
          { value: "m-9", label: "『  』 margin: 2.25rem;" },
          {
            value: "mx-9",
            label: "『  』 margin-left: 2.25rem; margin-right: 2.25rem;"
          },
          {
            value: "my-9",
            label: "『  』 margin-top: 2.25rem; margin-bottom: 2.25rem;"
          },
          { value: "mt-9", label: "『  』 margin-top: 2.25rem;" },
          { value: "mr-9", label: "『  』 margin-right: 2.25rem;" },
          { value: "mb-9", label: "『  』 margin-bottom: 2.25rem;" },
          { value: "ml-9", label: "『  』 margin-left: 2.25rem;" }
        ]
      },
      {
        label: "40px",
        options: [
          { value: "m-10", label: "『  』 margin: 2.5rem;" },
          {
            value: "mx-10",
            label: "『  』 margin-left: 2.5rem; margin-right: 2.5rem;"
          },
          {
            value: "my-10",
            label: "『  』 margin-top: 2.5rem; margin-bottom: 2.5rem;"
          },
          { value: "mt-10", label: "『  』 margin-top: 2.5rem;" },
          { value: "mr-10", label: "『  』 margin-right: 2.5rem;" },
          { value: "mb-10", label: "『  』 margin-bottom: 2.5rem;" },
          { value: "ml-10", label: "『  』 margin-left: 2.5rem;" }
        ]
      },
      {
        label: "44px",
        options: [
          { value: "m-11", label: "『  』 margin: 2.75rem;" },
          {
            value: "mx-11",
            label: "『  』 margin-left: 2.75rem; margin-right: 2.75rem;"
          },
          {
            value: "my-11",
            label: "『  』 margin-top: 2.75rem; margin-bottom: 2.75rem;"
          },
          { value: "mt-11", label: "『  』 margin-top: 2.75rem;" },
          { value: "mr-11", label: "『  』 margin-right: 2.75rem;" },
          { value: "mb-11", label: "『  』 margin-bottom: 2.75rem;" },
          { value: "ml-11", label: "『  』 margin-left: 2.75rem;" }
        ]
      },
      {
        label: "48px",
        options: [
          { value: "m-12", label: "『  』 margin: 3rem;" },
          {
            value: "mx-12",
            label: "『  』 margin-left: 3rem; margin-right: 3rem;"
          },
          {
            value: "my-12",
            label: "『  』 margin-top: 3rem; margin-bottom: 3rem;"
          },
          { value: "mt-12", label: "『  』 margin-top: 3rem;" },
          { value: "mr-12", label: "『  』 margin-right: 3rem;" },
          { value: "mb-12", label: "『  』 margin-bottom: 3rem;" },
          { value: "ml-12", label: "『  』 margin-left: 3rem;" }
        ]
      },
      {
        label: "56px",
        options: [
          { value: "m-14", label: "『  』 margin: 3.5rem;" },
          {
            value: "mx-14",
            label: "『  』 margin-left: 3.5rem; margin-right: 3.5rem;"
          },
          {
            value: "my-14",
            label: "『  』 margin-top: 3.5rem; margin-bottom: 3.5rem;"
          },
          { value: "mt-14", label: "『  』 margin-top: 3.5rem;" },
          { value: "mr-14", label: "『  』 margin-right: 3.5rem;" },
          { value: "mb-14", label: "『  』 margin-bottom: 3.5rem;" },
          { value: "ml-14", label: "『  』 margin-left: 3.5rem;" }
        ]
      },
      {
        label: "『  』 64px",
        options: [
          { value: "m-16", label: "『  』 margin: 4rem;" },
          {
            value: "mx-16",
            label: "『  』 margin-left: 4rem; margin-right: 4rem;"
          },
          {
            value: "my-16",
            label: "『  』 margin-top: 4rem; margin-bottom: 4rem;"
          },
          { value: "mt-16", label: "『  』 margin-top: 4rem;" },
          { value: "mr-16", label: "『  』 margin-right: 4rem;" },
          { value: "mb-16", label: "『  』 margin-bottom: 4rem;" },
          { value: "ml-16", label: "『  』 margin-left: 4rem;" }
        ]
      },
      {
        label: "『  』 80px",
        options: [
          { value: "m-20", label: "『  』 margin: 5rem;" },
          {
            value: "mx-20",
            label: "『  』 margin-left: 5rem; margin-right: 5rem;"
          },
          {
            value: "my-20",
            label: "『  』 margin-top: 5rem; margin-bottom: 5rem;"
          },
          { value: "mt-20", label: "『  』 margin-top: 5rem;" },
          { value: "mr-20", label: "『  』 margin-right: 5rem;" },
          { value: "mb-20", label: "『  』 margin-bottom: 5rem;" },
          { value: "ml-20", label: "『  』 margin-left: 5rem;" }
        ]
      },
      {
        label: "96px",
        options: [
          { value: "m-24", label: "『  』 margin: 6rem;" },
          {
            value: "mx-24",
            label: "『  』 margin-left: 6rem; margin-right: 6rem;"
          },
          {
            value: "my-24",
            label: "『  』 margin-top: 6rem; margin-bottom: 6rem;"
          },
          { value: "mt-24", label: "『  』 margin-top: 6rem;" },
          { value: "mr-24", label: "『  』 margin-right: 6rem;" },
          { value: "mb-24", label: "『  』 margin-bottom: 6rem;" },
          { value: "ml-24", label: "『  』 margin-left: 6rem;" }
        ]
      },
      {
        label: "112px",
        options: [
          { value: "m-28", label: "『  』 margin: 7rem;" },
          {
            value: "mx-28",
            label: "『  』 margin-left: 7rem; margin-right: 7rem;"
          },
          {
            value: "my-28",
            label: "『  』 margin-top: 7rem; margin-bottom: 7rem;"
          },
          { value: "mt-28", label: "『  』 margin-top: 7rem;" },
          { value: "mr-28", label: "『  』 margin-right: 7rem;" },
          { value: "mb-28", label: "『  』 margin-bottom: 7rem;" },
          { value: "ml-28", label: "『  』 margin-left: 7rem;" }
        ]
      },
      {
        label: "128px",
        options: [
          { value: "m-32", label: "『  』 margin: 8rem;" },
          {
            value: "mx-32",
            label: "『  』 margin-left: 8rem; margin-right: 8rem;"
          },
          {
            value: "my-32",
            label: "『  』 margin-top: 8rem; margin-bottom: 8rem;"
          },
          { value: "mt-32", label: "『  』 margin-top: 8rem;" },
          { value: "mr-32", label: "『  』 margin-right: 8rem;" },
          { value: "mb-32", label: "『  』 margin-bottom: 8rem;" },
          { value: "ml-32", label: "『  』 margin-left: 8rem;" }
        ]
      },
      {
        label: "144px",
        options: [
          { value: "m-36", label: "『  』 margin: 9rem;" },
          {
            value: "mx-36",
            label: "『  』 margin-left: 9rem; margin-right: 9rem;"
          },
          {
            value: "my-36",
            label: "『  』 margin-top: 9rem; margin-bottom: 9rem;"
          },
          { value: "mt-36", label: "『  』 margin-top: 9rem;" },
          { value: "mr-36", label: "『  』 margin-right: 9rem;" },
          { value: "mb-36", label: "『  』 margin-bottom: 9rem;" },
          { value: "ml-36", label: "『  』 margin-left: 9rem;" }
        ]
      },
      {
        label: "160px",
        options: [
          { value: "m-40", label: "『  』 margin: 10rem;" },
          {
            value: "mx-40",
            label: "『  』 margin-left: 10rem; margin-right: 10rem;"
          },
          {
            value: "my-40",
            label: "『  』 margin-top: 10rem; margin-bottom: 10rem;"
          },
          { value: "mt-40", label: "『  』 margin-top: 10rem;" },
          { value: "mr-40", label: "『  』 margin-right: 10rem;" },
          { value: "mb-40", label: "『  』 margin-bottom: 10rem;" },
          { value: "ml-40", label: "『  』 margin-left: 10rem;" }
        ]
      },
      {
        label: "176px",
        options: [
          { value: "m-44", label: "『  』 margin: 11rem;" },
          {
            value: "mx-44",
            label: "『  』 margin-left: 11rem; margin-right: 11rem;"
          },
          {
            value: "my-44",
            label: "『  』 margin-top: 11rem; margin-bottom: 11rem;"
          },
          { value: "mt-44", label: "『  』 margin-top: 11rem;" },
          { value: "mr-44", label: "『  』 margin-right: 11rem;" },
          { value: "mb-44", label: "『  』 margin-bottom: 11rem;" },
          { value: "ml-44", label: "『  』 margin-left: 11rem;" }
        ]
      },
      {
        label: "192px",
        options: [
          { value: "m-48", label: "『  』 margin: 12rem;" },
          {
            value: "mx-48",
            label: "『  』 margin-left: 12rem; margin-right: 12rem;"
          },
          {
            value: "my-48",
            label: "『  』 margin-top: 12rem; margin-bottom: 12rem;"
          },
          { value: "mt-48", label: "『  』 margin-top: 12rem;" },
          { value: "mr-48", label: "『  』 margin-right: 12rem;" },
          { value: "mb-48", label: "『  』 margin-bottom: 12rem;" },
          { value: "ml-48", label: "『  』 margin-left: 12rem;" }
        ]
      },
      {
        label: "208px",
        options: [
          { value: "m-52", label: "『  』 margin: 13rem;" },
          {
            value: "mx-52",
            label: "『  』 margin-left: 13rem; margin-right: 13rem;"
          },
          {
            value: "my-52",
            label: "『  』 margin-top: 13rem; margin-bottom: 13rem;"
          },
          { value: "mt-52", label: "『  』 margin-top: 13rem;" },
          { value: "mr-52", label: "『  』 margin-right: 13rem;" },
          { value: "mb-52", label: "『  』 margin-bottom: 13rem;" },
          { value: "ml-52", label: "『  』 margin-left: 13rem;" }
        ]
      },
      {
        label: "224px",
        options: [
          { value: "m-56	", label: "『  』 margin: 14rem;" },
          {
            value: "mx-56",
            label: "『  』 margin-left: 14rem; margin-right: 14rem;"
          },
          {
            value: "my-56",
            label: "『  』 margin-top: 14rem; margin-bottom: 14rem;"
          },
          { value: "mt-56", label: "『  』 margin-top: 14rem;" },
          { value: "mr-56", label: "『  』 margin-right: 14rem;" },
          { value: "mb-56", label: "『  』 margin-bottom: 14rem;" },
          { value: "ml-56", label: "『  』 margin-left: 14rem;" }
        ]
      },
      {
        label: "240px",
        options: [
          { value: "m-60", label: "『  』 margin: 15rem;" },
          {
            value: "mx-60",
            label: "『  』 margin-left: 15rem; margin-right: 15rem;"
          },
          {
            value: "my-60",
            label: "『  』 margin-top: 15rem; margin-bottom: 15rem;"
          },
          { value: "mt-60", label: "『  』 margin-top: 15rem;" },
          { value: "mr-60", label: "『  』 margin-right: 15rem;" },
          { value: "mb-60", label: "『  』 margin-bottom: 15rem;" },
          { value: "ml-60", label: "『  』 margin-left: 15rem;" }
        ]
      },
      {
        label: "256px",
        options: [
          { value: "m-64", label: "『  』 margin: 16rem;" },
          {
            value: "mx-64",
            label: "『  』 margin-left: 16rem; margin-right: 16rem;"
          },
          {
            value: "my-64",
            label: "『  』 margin-top: 16rem; margin-bottom: 16rem;"
          },
          { value: "mt-64", label: "『  』 margin-top: 16rem;" },
          { value: "mr-64", label: "『  』 margin-right: 16rem;" },
          { value: "mb-64", label: "『  』 margin-bottom: 16rem;" },
          { value: "ml-64", label: "『  』 margin-left: 16rem;" }
        ]
      },
      {
        label: "288px",
        options: [
          { value: "m-72", label: "『  』 margin: 18rem;" },
          {
            value: "mx-72",
            label: "『  』 margin-left: 18rem; margin-right: 18rem;"
          },
          {
            value: "my-72",
            label: "『  』 margin-top: 18rem; margin-bottom: 18rem;"
          },
          { value: "mt-72", label: "『  』 margin-top: 18rem;" },
          { value: "mr-72", label: "『  』 margin-right: 18rem;" },
          { value: "mb-72", label: "『  』 margin-bottom: 18rem;" },
          { value: "ml-72", label: "『  』 margin-left: 18rem;" }
        ]
      },
      {
        label: "320px",
        options: [
          { value: "m-80", label: "『  』 margin: 20rem;" },
          {
            value: "mx-80",
            label: "『  』 margin-left: 20rem; margin-right: 20rem;"
          },
          {
            value: "my-80",
            label: "『  』 margin-top: 20rem; margin-bottom: 20rem;"
          },
          { value: "mt-80", label: "『  』 margin-top: 20rem;" },
          { value: "mr-80", label: "『  』 margin-right: 20rem;" },
          { value: "mb-80", label: "『  』 margin-bottom: 20rem;" },
          { value: "ml-80", label: "『  』 margin-left: 20rem;" }
        ]
      },
      {
        label: "384px",
        options: [
          { value: "m-96", label: "『  』 margin: 24rem;" },
          {
            value: "mx-96",
            label: "『  』 margin-left: 24rem; margin-right: 24rem;"
          },
          {
            value: "my-96",
            label: "『  』 margin-top: 24rem; margin-bottom: 24rem;"
          },
          { value: "mt-96", label: "『  』 margin-top: 24rem;" },
          { value: "mr-96", label: "『  』 margin-right: 24rem;" },
          { value: "mb-96", label: "『  』 margin-bottom: 24rem;" },
          { value: "ml-96", label: "『  』 margin-left: 24rem;" }
        ]
      },
      {
        label: "auto",
        options: [
          { value: "m-auto", label: "『  』 margin: auto;" },
          {
            value: "mx-auto",
            label: "『  』 margin-left: auto; margin-right: auto;"
          },
          {
            value: "my-auto",
            label: "『  』 margin-top: auto; margin-bottom: auto;"
          },
          { value: "mt-auto", label: "『  』 margin-top: auto;" },
          { value: "mr-auto", label: "『  』 margin-right: auto;" },
          { value: "mb-auto", label: "『  』 margin-bottom: auto;" },
          { value: "ml-auto", label: "『  』 margin-left: auto;" }
        ]
      }
    ]
  },
  {
    type: "space-between",
    header: "Space Between",
    title: "Space Between ClassName：",
    inputPlaceholder: "space-between: xxxx",
    selectPlaceholder: "space-between: xxxx",
    hasCustom: false,
    options: [
      {
        value: "space-x-0 > * + *",
        label: "『 space-x-0 > * + * 』 margin-left: 0px;"
      },
      {
        value: "space-y-0 > * + *",
        label: "『 space-y-0 > * + * 』 margin-top: 0px;"
      },
      {
        value: "space-x-0.5 > * + *",
        label: "『 space-x-0.5 > * + * 』 margin-left: 0.125rem; /* 2px */"
      },
      {
        value: "space-y-0.5 > * + *",
        label: "『 space-y-0.5 > * + * 』 margin-top: 0.125rem; /* 2px */"
      },
      {
        value: "space-x-1 > * + *",
        label: "『 space-x-1 > * + * 』 margin-left: 0.25rem; /* 4px */"
      },
      {
        value: "space-y-1 > * + *",
        label: "『 space-y-1 > * + * 』 margin-top: 0.25rem; /* 4px */"
      },
      {
        value: "space-x-1.5 > * + *",
        label: "『 space-x-1.5 > * + * 』 margin-left: 0.375rem; /* 6px */"
      },
      {
        value: "space-y-1.5 > * + *",
        label: "『 space-y-1.5 > * + * 』 margin-top: 0.375rem; /* 6px */"
      },
      {
        value: "space-x-2 > * + *",
        label: "『 space-x-2 > * + * 』 margin-left: 0.5rem; /* 8px */"
      },
      {
        value: "space-y-2 > * + *",
        label: "『 space-y-2 > * + * 』 margin-top: 0.5rem; /* 8px */"
      },
      {
        value: "space-x-2.5 > * + *",
        label: "『 space-x-2.5 > * + * 』 margin-left: 0.625rem; /* 10px */"
      },
      {
        value: "space-y-2.5 > * + *",
        label: "『 space-y-2.5 > * + * 』 margin-top: 0.625rem; /* 10px */"
      },
      {
        value: "space-x-3 > * + *",
        label: "『 space-x-3 > * + * 』 margin-left: 0.75rem; /* 12px */"
      },
      {
        value: "space-y-3 > * + *",
        label: "『 space-y-3 > * + * 』 margin-top: 0.75rem; /* 12px */"
      },
      {
        value: "space-x-3.5 > * + *",
        label: "『 space-x-3.5 > * + * 』 margin-left: 0.875rem; /* 14px */"
      },
      {
        value: "space-y-3.5 > * + *",
        label: "『 space-y-3.5 > * + * 』 margin-top: 0.875rem; /* 14px */"
      },
      {
        value: "space-x-4 > * + *",
        label: "『 space-x-4 > * + * 』 margin-left: 1rem; /* 16px */"
      },
      {
        value: "space-y-4 > * + *",
        label: "『 space-y-4 > * + * 』 margin-top: 1rem; /* 16px */"
      },
      {
        value: "space-x-5 > * + *",
        label: "『 space-x-5 > * + * 』 margin-left: 1.25rem; /* 20px */"
      },
      {
        value: "space-y-5 > * + *",
        label: "『 space-y-5 > * + * 』 margin-top: 1.25rem; /* 20px */"
      },
      {
        value: "space-x-6 > * + *",
        label: "『 space-x-6 > * + * 』 margin-left: 1.5rem; /* 24px */"
      },
      {
        value: "space-y-6 > * + *",
        label: "『 space-y-6 > * + * 』 margin-top: 1.5rem; /* 24px */"
      },
      {
        value: "space-x-7 > * + *",
        label: "『 space-x-7 > * + * 』 margin-left: 1.75rem; /* 28px */"
      },
      {
        value: "space-y-7 > * + *",
        label: "『 space-y-7 > * + * 』 margin-top: 1.75rem; /* 28px */"
      },
      {
        value: "space-x-8 > * + *",
        label: "『 space-x-8 > * + * 』 margin-left: 2rem; /* 32px */"
      },
      {
        value: "space-y-8 > * + *",
        label: "『 space-y-8 > * + * 』 margin-top: 2rem; /* 32px */"
      },
      {
        value: "space-x-9 > * + *",
        label: "『 space-x-9 > * + * 』 margin-left: 2.25rem; /* 36px */"
      },
      {
        value: "space-y-9 > * + *",
        label: "『 space-y-9 > * + * 』 margin-top: 2.25rem; /* 36px */"
      },
      {
        value: "space-x-10 > * + *",
        label: "『 space-x-10 > * + * 』 margin-left: 2.5rem; /* 40px */"
      },
      {
        value: "space-y-10 > * + *",
        label: "『 space-y-10 > * + * 』 margin-top: 2.5rem; /* 40px */"
      },
      {
        value: "space-x-11 > * + *",
        label: "『 space-x-11 > * + * 』 margin-left: 2.75rem; /* 44px */"
      },
      {
        value: "space-y-11 > * + *",
        label: "『 space-y-11 > * + * 』 margin-top: 2.75rem; /* 44px */"
      },
      {
        value: "space-x-12 > * + *",
        label: "『 space-x-12 > * + * 』 margin-left: 3rem; /* 48px */"
      },
      {
        value: "space-y-12 > * + *",
        label: "『 space-y-12 > * + * 』 margin-top: 3rem; /* 48px */"
      },
      {
        value: "space-x-14 > * + *",
        label: "『 space-x-14 > * + * 』 margin-left: 3.5rem; /* 56px */"
      },
      {
        value: "space-y-14 > * + *",
        label: "『 space-y-14 > * + * 』 margin-top: 3.5rem; /* 56px */"
      },
      {
        value: "space-x-16 > * + *",
        label: "『 space-x-16 > * + * 』 margin-left: 4rem; /* 64px */"
      },
      {
        value: "space-y-16 > * + *",
        label: "『 space-y-16 > * + * 』 margin-top: 4rem; /* 64px */"
      },
      {
        value: "space-x-20 > * + *",
        label: "『 space-x-20 > * + * 』 margin-left: 5rem; /* 80px */"
      },
      {
        value: "space-y-20 > * + *",
        label: "『 space-y-20 > * + * 』 margin-top: 5rem; /* 80px */"
      },
      {
        value: "space-x-24 > * + *",
        label: "『 space-x-24 > * + * 』 margin-left: 6rem; /* 96px */"
      },
      {
        value: "space-y-24 > * + *",
        label: "『 space-y-24 > * + * 』 margin-top: 6rem; /* 96px */"
      },
      {
        value: "space-x-28 > * + *",
        label: "『 space-x-28 > * + * 』 margin-left: 7rem; /* 112px */"
      },
      {
        value: "space-y-28 > * + *",
        label: "『 space-y-28 > * + * 』 margin-top: 7rem; /* 112px */"
      },
      {
        value: "space-x-32 > * + *",
        label: "『 space-x-32 > * + * 』 margin-left: 8rem; /* 128px */"
      },
      {
        value: "space-y-32 > * + *",
        label: "『 space-y-32 > * + * 』 margin-top: 8rem; /* 128px */"
      },
      {
        value: "space-x-36 > * + *",
        label: "『 space-x-36 > * + * 』 margin-left: 9rem; /* 144px */"
      },
      {
        value: "space-y-36 > * + *",
        label: "『 space-y-36 > * + * 』 margin-top: 9rem; /* 144px */"
      },
      {
        value: "space-x-40 > * + *",
        label: "『 space-x-40 > * + * 』 margin-left: 10rem; /* 160px */"
      },
      {
        value: "space-y-40 > * + *",
        label: "『 space-y-40 > * + * 』 margin-top: 10rem; /* 160px */"
      },
      {
        value: "space-x-44 > * + *",
        label: "『 space-x-44 > * + * 』 margin-left: 11rem; /* 176px */"
      },
      {
        value: "space-y-44 > * + *",
        label: "『 space-y-44 > * + * 』 margin-top: 11rem; /* 176px */"
      },
      {
        value: "space-x-48 > * + *",
        label: "『 space-x-48 > * + * 』 margin-left: 12rem; /* 192px */"
      },
      {
        value: "space-y-48 > * + *",
        label: "『 space-y-48 > * + * 』 margin-top: 12rem; /* 192px */"
      },
      {
        value: "space-x-52 > * + *",
        label: "『 space-x-52 > * + * 』 margin-left: 13rem; /* 208px */"
      },
      {
        value: "space-y-52 > * + *",
        label: "『 space-y-52 > * + * 』 margin-top: 13rem; /* 208px */"
      },
      {
        value: "space-x-56 > * + *",
        label: "『 space-x-56 > * + * 』 margin-left: 14rem; /* 224px */"
      },
      {
        value: "space-y-56 > * + *",
        label: "『 space-y-56 > * + * 』 margin-top: 14rem; /* 224px */"
      },
      {
        value: "space-x-60 > * + *",
        label: "『 space-x-60 > * + * 』 margin-left: 15rem; /* 240px */"
      },
      {
        value: "space-y-60 > * + *",
        label: "『 space-y-60 > * + * 』 margin-top: 15rem; /* 240px */"
      },
      {
        value: "space-x-64 > * + *",
        label: "『 space-x-64 > * + * 』 margin-left: 16rem; /* 256px */"
      },
      {
        value: "space-y-64 > * + *",
        label: "『 space-y-64 > * + * 』 margin-top: 16rem; /* 256px */"
      },
      {
        value: "space-x-72 > * + *",
        label: "『 space-x-72 > * + * 』 margin-left: 18rem; /* 288px */"
      },
      {
        value: "space-y-72 > * + *",
        label: "『 space-y-72 > * + * 』 margin-top: 18rem; /* 288px */"
      },
      {
        value: "space-x-80 > * + *",
        label: "『 space-x-80 > * + * 』 margin-left: 20rem; /* 320px */"
      },
      {
        value: "space-y-80 > * + *",
        label: "『 space-y-80 > * + * 』 margin-top: 20rem; /* 320px */"
      },
      {
        value: "space-x-96 > * + *",
        label: "『 space-x-96 > * + * 』 margin-left: 24rem; /* 384px */"
      },
      {
        value: "space-y-96 > * + *",
        label: "『 space-y-96 > * + * 』 margin-top: 24rem; /* 384px */"
      },
      {
        value: "space-x-px > * + *",
        label: "『 space-x-px > * + * 』 margin-left: 1px;"
      },
      {
        value: "space-y-px > * + *",
        label: "『 space-y-px > * + * 』 margin-top: 1px;"
      },
      {
        value: "space-y-reverse > * + *",
        label: "『 space-y-reverse > * + * 』 --tw-space-y-reverse: 1;"
      },
      {
        value: "space-x-reverse > * + *",
        label: "『 space-x-reverse > * + * 』 --tw-space-x-reverse: 1;"
      }
    ]
  },
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
