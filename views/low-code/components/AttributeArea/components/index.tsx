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
    ]
  },
  {
    type: "box-sizing",
    header: "Box Sizing 属性",
    title: "Box Sizing ClassName：",
    selectPlaceholder: "box-sizing: xxxx",
    hasCustom: false,
    options: [
      { value: "box-border", label: "box-sizing: border-box;" },
      { value: "box-content", label: "box-sizing: content-box;" }
    ]
  },
  {
    type: "float",
    header: "Float 属性",
    title: "Float ClassName：",
    selectPlaceholder: "float: xxxx",
    hasCustom: false,
    options: [
      { value: "float-right", label: "float: right;" },
      { value: "float-left", label: "float: left;" },
      { value: "float-none", label: "float: none;" }
    ]
  },
  {
    type: "clear",
    header: "Clear 属性",
    title: "Clear ClassName：",
    selectPlaceholder: "clear: xxxx",
    hasCustom: false,
    options: [
      { value: "clear-left", label: "clear: left;" },
      { value: "clear-right", label: "clear: right;" },
      { value: "clear-both", label: "clear: both;" },
      { value: "clear-none", label: "clear: none;" }
    ]
  },
  {
    type: "object-fit",
    header: "Object Fit 属性",
    title: "Object Fit ClassName：",
    selectPlaceholder: "object-fit: xxxx",
    hasCustom: false,
    options: [
      { value: "object-contain", label: "object-fit: contain;" },
      { value: "object-cover", label: "object-fit: cover;" },
      { value: "object-fill", label: "object-fit: fill;" },
      { value: "object-none", label: "object-fit: none;" },
      { value: "object-scale-down", label: "object-fit: scale-down;" }
    ]
  },
  {
    type: "object-position",
    header: "Object Position 属性",
    title: "Object Position ClassName：",
    selectPlaceholder: "object-position: xxxx",
    hasCustom: false,
    options: [
      { value: "object-bottom", label: "object-position: bottom;" },
      { value: "object-center", label: "object-position: center;" },
      { value: "object-left", label: "object-position: left;" },
      { value: "object-left-bottom", label: "object-position: left bottom;" },
      { value: "object-left-top", label: "object-position: left top;" },
      { value: "object-right", label: "object-position: right;" },
      { value: "object-right-bottom", label: "object-position: right bottom;" },
      { value: "object-right-top", label: "object-position: right top;" },
      { value: "object-top", label: "object-position: top;" }
    ]
  },
  {
    type: "overflow",
    header: "Overflow 属性",
    title: "Overflow ClassName：",
    selectPlaceholder: "overflow: xxxx",
    hasCustom: false,
    options: [
      { value: "overflow-auto", label: "overflow: auto;" },
      { value: "overflow-hidden", label: "overflow: hidden;" },
      { value: "overflow-clip", label: "overflow: clip;" },
      { value: "overflow-visible", label: "overflow: visible;" },
      { value: "overflow-scroll", label: "overflow: scroll;" },
      { value: "overflow-x-auto", label: "overflow-x: auto;" },
      { value: "overflow-y-auto", label: "overflow-y: auto;" },
      { value: "overflow-x-hidden", label: "overflow-x: hidden;" },
      { value: "overflow-y-hidden", label: "overflow-y: hidden;" },
      { value: "overflow-x-clip", label: "overflow-x: clip;" },
      { value: "overflow-y-clip", label: "overflow-y: clip;" },
      { value: "overflow-x-visible", label: "overflow-x: visible;" },
      { value: "overflow-y-visible", label: "overflow-y: visible;" },
      { value: "overflow-x-scroll", label: "overflow-x: scroll;" },
      { value: "overflow-y-scroll", label: "overflow-y: scroll;" }
    ]
  },
  {
    type: "overscroll-behavior",
    header: "Overscroll Behavior 属性",
    title: "Overscroll Behavior ClassName：",
    selectPlaceholder: "overscroll-behavior: xxxx",
    hasCustom: false,
    options: [
      { value: "overscroll-auto", label: "overscroll-behavior: auto;" },
      { value: "overscroll-contain", label: "overscroll-behavior: contain;" },
      { value: "overscroll-none", label: "overscroll-behavior: none;" },
      { value: "overscroll-y-auto", label: "overscroll-behavior-y: auto;" },
      {
        value: "overscroll-y-contain",
        label: "overscroll-behavior-y: contain;"
      },
      { value: "overscroll-y-none", label: "overscroll-behavior-y: none;" },
      { value: "overscroll-x-auto", label: "overscroll-behavior-x: auto;" },
      {
        value: "overscroll-x-contain",
        label: "overscroll-behavior-x: contain;"
      },
      { value: "overscroll-x-none", label: "overscroll-behavior-x: none;" }
    ]
  },
  {
    type: "position",
    header: "Position 属性",
    title: "Position ClassName：",
    selectPlaceholder: "position: xxxx",
    hasCustom: false,
    options: [
      { value: "static", label: "position: static;" },
      { value: "fixed", label: "position: fixed;" },
      { value: "absolute", label: "position: absolute;" },
      { value: "relative", label: "position: relative;" },
      { value: "sticky", label: "position: sticky;" }
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
            label: "top: 0px; right: 0px; bottom: 0px; left: 0px;"
          },
          { value: "inset-x-0", label: "left: 0px; right: 0px;" },
          { value: "inset-y-0", label: "top: 0px; bottom: 0px;" },
          { value: "top-0", label: "top: 0px;" },
          { value: "right-0", label: "right: 0px;" },
          { value: "bottom-0", label: "bottom: 0px;" },
          { value: "left-0", label: "	left: 0px;" }
        ]
      },
      {
        label: "1px",
        options: [
          {
            value: "inset-px",
            label: "top: 1px; right: 1px; bottom: 1px; left: 1px;"
          },
          { value: "inset-x-px", label: "left: 1px; right: 1px;" },
          { value: "inset-y-px", label: "top: 1px; bottom: 1px;" },
          { value: "top-px", label: "top: 1px;" },
          { value: "right-px", label: "right: 1px;" },
          { value: "bottom-px", label: "bottom: 1px;" },
          { value: "left-px", label: "left: 1px;" }
        ]
      },
      {
        label: "2px",
        options: [
          {
            value: "inset-0.5",
            label:
              "top: 0.125rem; right: 0.125rem; bottom: 0.125rem; left: 0.125rem;"
          },
          { value: "inset-x-0.5", label: "left: 0.125rem; right: 0.125rem;" },
          { value: "inset-y-0.5", label: "top: 0.125rem; bottom: 0.125rem;" },
          { value: "top-0.5", label: "top: 0.125rem;" },
          { value: "right-0.5", label: "right: 0.125rem;" },
          { value: "bottom-0.5", label: "bottom: 0.125rem;" },
          { value: "left-0.5", label: "left: 0.125rem;" }
        ]
      },
      {
        label: "4px",
        options: [
          {
            value: "inset-1",
            label:
              "top: 0.25rem; right: 0.25rem; bottom: 0.25rem; left: 0.25rem;"
          },
          { value: "inset-x-1", label: "left: 0.25rem; right: 0.25rem;" },
          { value: "inset-y-1", label: "top: 0.25rem; bottom: 0.25rem;" },
          { value: "top-1", label: "top: 0.25rem;" },
          { value: "right-1", label: "right: 0.25rem;" },
          { value: "bottom-1", label: "bottom: 0.25rem;" },
          { value: "left-1", label: "left: 0.25rem;" }
        ]
      },
      {
        label: "6px",
        options: [
          {
            value: "inset-1.5",
            label:
              "top: 0.375rem; right: 0.375rem; bottom: 0.375rem; left: 0.375rem;"
          },
          { value: "inset-x-1.5", label: "left: 0.375rem; right: 0.375rem;" },
          { value: "inset-y-1.5", label: "top: 0.375rem; bottom: 0.375rem;" },
          { value: "top-1.5", label: "top: 0.375rem;" },
          { value: "right-1.5", label: "right: 0.375rem;" },
          { value: "bottom-1.5", label: "bottom: 0.375rem;" },
          { value: "left-1.5", label: "left: 0.375rem;" }
        ]
      },
      {
        label: "8px",
        options: [
          {
            value: "inset-2",
            label: "top: 0.5rem; right: 0.5rem; bottom: 0.5rem; left: 0.5rem;"
          },
          { value: "inset-x-2", label: "left: 0.5rem; right: 0.5rem;" },
          { value: "inset-y-2", label: "top: 0.5rem; bottom: 0.5rem;" },
          { value: "top-2", label: "top: 0.5rem;" },
          { value: "right-2", label: "right: 0.5rem;" },
          { value: "bottom-2", label: "bottom: 0.5rem;" },
          { value: "left-20", label: "left: 0.5rem;" }
        ]
      },
      {
        label: "10px",
        options: [
          {
            value: "inset-2.5",
            label:
              "top: 0.625rem; right: 0.625rem; bottom: 0.625rem; left: 0.625rem;"
          },
          { value: "inset-x-2.5", label: "left: 0.625rem; right: 0.625rem;" },
          { value: "inset-y-2.5", label: "top: 0.625rem; bottom: 0.625rem;" },
          { value: "top-2.5", label: "top: 0.625rem;" },
          { value: "right-2.5", label: "right: 0.625rem;" },
          { value: "bottom-2.5", label: "bottom: 0.625rem;" },
          { value: "left-2.5", label: "left: 0.625rem;" }
        ]
      },
      {
        label: "12px",
        options: [
          {
            value: "inset-3",
            label:
              "top: 0.75rem; right: 0.75rem; bottom: 0.75rem; left: 0.75rem;"
          },
          { value: "inset-x-3", label: "left: 0.75rem; right: 0.75rem;" },
          { value: "inset-y-3", label: "top: 0.75rem; bottom: 0.75rem;" },
          { value: "top-3", label: "top: 0.75rem;" },
          { value: "right-3", label: "right: 0.75rem;" },
          { value: "bottom-3", label: "bottom: 0.75rem;" },
          { value: "left-3", label: "left: 0.75rem;" }
        ]
      },
      {
        label: "14px",
        options: [
          {
            value: "inset-3.5",
            label:
              "top: 0.875rem; right: 0.875rem; bottom: 0.875rem; left: 0.875rem;"
          },
          { value: "inset-x-3.5", label: "left: 0.875rem; right: 0.875rem;" },
          { value: "inset-y-3.5", label: "top: 0.875rem; bottom: 0.875rem;" },
          { value: "top-3.5", label: "top: 0.875rem;" },
          { value: "right-3.5", label: "right: 0.875rem;" },
          { value: "bottom-3.5", label: "bottom: 0.875rem;" },
          { value: "left-3.5", label: "left: 0.875rem;" }
        ]
      },
      {
        label: "16px",
        options: [
          {
            value: "inset-4",
            label: "top: 1rem; right: 1rem; bottom: 1rem; left: 1rem;"
          },
          { value: "inset-x-4", label: "left: 1rem; right: 1rem;" },
          { value: "inset-y-4", label: "top: 1rem; bottom: 1rem;" },
          { value: "top-4", label: "top: 1rem;" },
          { value: "right-4", label: "right: 1rem;" },
          { value: "bottom-4", label: "bottom: 1rem;" },
          { value: "left-4", label: "left: 1rem;" }
        ]
      },
      {
        label: "20px",
        options: [
          {
            value: "inset-5",
            label:
              "top: 1.25rem; right: 1.25rem; bottom: 1.25rem; left: 1.25rem;"
          },
          { value: "inset-x-5", label: "left: 1.25rem; right: 1.25rem;" },
          { value: "inset-y-5", label: "top: 1.25rem; bottom: 1.25rem;" },
          { value: "top-5", label: "top: 1.25rem;" },
          { value: "right-5", label: "right: 1.25rem;" },
          { value: "bottom-5", label: "bottom: 1.25rem;" },
          { value: "left-5", label: "left: 1.25rem;" }
        ]
      },
      {
        label: "24px",
        options: [
          {
            value: "inset-6",
            label: "top: 1.5rem; right: 1.5rem; bottom: 1.5rem; left: 1.5rem;"
          },
          { value: "inset-x-6", label: "left: 1.5rem; right: 1.5rem;" },
          { value: "inset-y-6", label: "top: 1.5rem; bottom: 1.5rem;" },
          { value: "top-6", label: "top: 1.5rem;" },
          { value: "right-6", label: "right: 1.5rem;" },
          { value: "bottom-6", label: "bottom: 1.5rem;" },
          { value: "left-6", label: "left: 1.5rem;" }
        ]
      },
      {
        label: "28px",
        options: [
          {
            value: "inset-7",
            label:
              "top: 1.75rem; right: 1.75rem; bottom: 1.75rem; left: 1.75rem;"
          },
          { value: "inset-x-7", label: "left: 1.75rem; right: 1.75rem;" },
          { value: "inset-y-7", label: "top: 1.75rem; bottom: 1.75rem;" },
          { value: "top-7", label: "top: 1.75rem;" },
          { value: "right-7", label: "right: 1.75rem;" },
          { value: "bottom-7", label: "bottom: 1.75rem;" },
          { value: "left-7", label: "left: 1.75rem;" }
        ]
      },
      {
        label: "32px",
        options: [
          {
            value: "inset-8",
            label: "top: 2rem; right: 2rem; bottom: 2rem; left: 2rem;"
          },
          { value: "inset-x-8", label: "left: 2rem; right: 2rem;" },
          { value: "inset-y-8", label: "top: 2rem; bottom: 2rem;" },
          { value: "top-8", label: "top: 2rem;" },
          { value: "right-8", label: "right: 2rem;" },
          { value: "bottom-8", label: "bottom: 2rem;" },
          { value: "left-8", label: "left: 2rem;" }
        ]
      },
      {
        label: "36px",
        options: [
          {
            value: "inset-9",
            label:
              "top: 2.25rem; right: 2.25rem; bottom: 2.25rem; left: 2.25rem;"
          },
          { value: "inset-x-9", label: "left: 2.25rem; right: 2.25rem;" },
          { value: "inset-y-9", label: "top: 2.25rem; bottom: 2.25rem;" },
          { value: "top-9", label: "top: 2.25rem;" },
          { value: "right-9", label: "right: 2.25rem;" },
          { value: "bottom-9", label: "bottom: 2.25rem;" },
          { value: "left-9", label: "left: 2.25rem;" }
        ]
      },
      {
        label: "40px",
        options: [
          {
            value: "inset-10",
            label: "top: 2.5rem; right: 2.5rem; bottom: 2.5rem; left: 2.5rem;"
          },
          { value: "inset-x-10", label: "left: 2.5rem; right: 2.5rem;" },
          { value: "inset-y-10", label: "top: 2.5rem; bottom: 2.5rem;" },
          { value: "top-10", label: "top: 2.5rem;" },
          { value: "right-10", label: "right: 2.5rem;" },
          { value: "bottom-10", label: "bottom: 2.5rem;" },
          { value: "left-10", label: "left: 2.5rem;" }
        ]
      },
      {
        label: "44px",
        options: [
          {
            value: "inset-11",
            label:
              "top: 2.75rem; right: 2.75rem; bottom: 2.75rem; left: 2.75rem;"
          },
          { value: "inset-x-11", label: "left: 2.75rem; right: 2.75rem;" },
          { value: "inset-y-11", label: "top: 2.75rem bottom: 2.75rem;" },
          { value: "top-11", label: "top: 2.75rem;" },
          { value: "right-11", label: "right: 2.75rem;" },
          { value: "bottom-11", label: "bottom: 2.75rem;" },
          { value: "left-11", label: "left: 2.75rem;" }
        ]
      },
      {
        label: "48px",
        options: [
          {
            value: "inset-12",
            label: "top: 3rem; right: 3rem; bottom: 3rem; left: 3rem;"
          },
          { value: "inset-x-12", label: "left: 3rem; right: 3rem;" },
          { value: "inset-y-12", label: "top: 3rem; bottom: 3rem;" },
          { value: "top-12", label: "top: 3rem;" },
          { value: "right-12", label: "right: 3rem;" },
          { value: "bottom-12", label: "bottom: 3rem;" },
          { value: "left-12", label: "left: 3rem;" }
        ]
      },
      {
        label: "56px",
        options: [
          {
            value: "inset-14",
            label: "top: 3.5rem; right: 3.5rem; bottom: 3.5rem; left: 3.5rem;"
          },
          { value: "inset-x-14", label: "left: 3.5rem; right: 3.5rem;" },
          { value: "inset-y-14", label: "top: 3.5rem; bottom: 3.5rem;" },
          { value: "top-14", label: "top: 3.5rem;" },
          { value: "right-14", label: "right: 3.5rem;" },
          { value: "bottom-14", label: "bottom: 3.5rem;" },
          { value: "left-14", label: "left: 3.5rem;" }
        ]
      },
      {
        label: "64px",
        options: [
          {
            value: "inset-16",
            label: "top: 4rem; right: 4rem; bottom: 4rem; left: 4rem;"
          },
          { value: "inset-x-16", label: "left: 4rem; right: 4rem;" },
          { value: "inset-y-16", label: "top: 4rem; bottom: 4rem;" },
          { value: "top-16", label: "top: 4rem;" },
          { value: "right-16", label: "right: 4rem;" },
          { value: "bottom-16", label: "bottom: 4rem;" },
          { value: "left-16", label: "left: 4rem;" }
        ]
      },
      {
        label: "80px",
        options: [
          {
            value: "inset-20",
            label: "top: 5rem; right: 5rem; bottom: 5rem; left: 5rem;"
          },
          { value: "inset-x-20", label: "left: 5rem; right: 5rem;" },
          { value: "inset-y-20", label: "top: 5rem; bottom: 5rem;" },
          { value: "top-20", label: "top: 5rem;" },
          { value: "right-20", label: "right: 5rem;" },
          { value: "bottom-20", label: "bottom: 5rem;" },
          { value: "left-20", label: "left: 5rem;" }
        ]
      },
      {
        label: "96px",
        options: [
          {
            value: "inset-24",
            label: "top: 6rem; right: 6rem; bottom: 6rem; left: 6rem;"
          },
          { value: "inset-x-24", label: "left: 6rem; right: 6rem;" },
          { value: "inset-y-24", label: "top: 6rem; bottom: 6rem;" },
          { value: "top-24", label: "top: 6rem;" },
          { value: "right-24", label: "right: 6rem;" },
          { value: "bottom-24", label: "bottom: 6rem;" },
          { value: "left-24", label: "left: 6rem;" }
        ]
      },
      {
        label: "112px",
        options: [
          {
            value: "inset-28",
            label: "top: 7rem; right: 7rem; bottom: 7rem; left: 7rem;"
          },
          { value: "inset-x-28", label: "left: 7rem; right: 7rem;" },
          { value: "inset-y-28", label: "top: 7rem; bottom: 7rem;" },
          { value: "top-28", label: "top: 7rem;" },
          { value: "right-28", label: "right: 7rem;" },
          { value: "bottom-28", label: "bottom: 7rem;" },
          { value: "left-28", label: "left: 7rem;" }
        ]
      },
      {
        label: "128px",
        options: [
          {
            value: "inset-32",
            label: "top: 8rem; right: 8rem; bottom: 8rem; left: 8rem;"
          },
          { value: "inset-x-32", label: "left: 8rem; right: 8rem;" },
          { value: "inset-y-32", label: "top: 8rem; bottom: 8rem;" },
          { value: "top-32", label: "top: 8rem;" },
          { value: "right-32", label: "right: 8rem;" },
          { value: "bottom-32", label: "bottom: 8rem;" },
          { value: "left-32", label: "left: 8rem;" }
        ]
      },
      {
        label: "144px",
        options: [
          {
            value: "inset-36",
            label: "top: 9rem; right: 9rem; bottom: 9rem; left: 9rem;"
          },
          { value: "inset-x-36", label: "left: 9rem; right: 9rem;" },
          { value: "inset-y-36", label: "top: 9rem; bottom: 9rem;" },
          { value: "top-36", label: "top: 9rem;" },
          { value: "right-36", label: "right: 9rem;" },
          { value: "bottom-36", label: "bottom: 9rem;" },
          { value: "left-36", label: "left: 9rem;" }
        ]
      },
      {
        label: "160px",
        options: [
          {
            value: "inset-40",
            label: "top: 10rem; right: 10rem; bottom: 10rem; left: 10rem;"
          },
          { value: "inset-x-40", label: "left: 10rem; right: 10rem;" },
          { value: "inset-y-40", label: "top: 10rem; bottom: 10rem;" },
          { value: "top-40", label: "top: 10rem;" },
          { value: "right-40", label: "right: 10rem;" },
          { value: "bottom-40", label: "bottom: 10rem;" },
          { value: "left-40", label: "left: 10rem;" }
        ]
      },
      {
        label: "176px",
        options: [
          {
            value: "inset-44",
            label: "top: 11rem; right: 11rem; bottom: 11rem; left: 11rem;"
          },
          { value: "inset-x-44", label: "left: 11rem; right: 11rem;" },
          { value: "inset-y-44", label: "top: 11rem; bottom: 11rem;" },
          { value: "top-44", label: "top: 11rem;" },
          { value: "right-44", label: "right: 11rem;" },
          { value: "bottom-44", label: "bottom: 11rem;" },
          { value: "left-44", label: "left: 11rem;" }
        ]
      },
      {
        label: "192px",
        options: [
          {
            value: "inset-48",
            label: "top: 12rem; right: 12rem; bottom: 12rem; left: 12rem;"
          },
          { value: "inset-x-48", label: "left: 12rem; right: 12rem;" },
          { value: "inset-y-48", label: "top: 12rem; bottom: 12rem;" },
          { value: "top-48", label: "top: 12rem;" },
          { value: "right-48", label: "right: 12rem;" },
          { value: "bottom-48", label: "bottom: 12rem;" },
          { value: "left-48", label: "left: 12rem;" }
        ]
      },
      {
        label: "208px",
        options: [
          {
            value: "inset-52",
            label: "top: 13rem; right: 13rem; bottom: 13rem; left: 13rem;"
          },
          { value: "inset-x-52", label: "left: 13rem; right: 13rem;" },
          { value: "inset-y-52", label: "top: 13rem; bottom: 13rem;" },
          { value: "top-52", label: "top: 13rem;" },
          { value: "right-52", label: "right: 13rem;" },
          { value: "bottom-52", label: "bottom: 13rem;" },
          { value: "left-52", label: "left: 13rem;" }
        ]
      },
      {
        label: "224px",
        options: [
          {
            value: "inset-56",
            label: "top: 14rem; right: 14rem; bottom: 14rem; left: 14rem;"
          },
          { value: "inset-x-56", label: "left: 14rem; right: 14rem;" },
          { value: "inset-y-56", label: "top: 14rem; bottom: 14rem;" },
          { value: "top-56", label: "top: 14rem;" },
          { value: "right-56", label: "right: 14rem;" },
          { value: "bottom-56", label: "bottom: 14rem;" },
          { value: "left-56", label: "left: 14rem;" }
        ]
      },
      {
        label: "240px",
        options: [
          {
            value: "inset-60",
            label: "top: 15rem; right: 15rem; bottom: 15rem; left: 15rem;"
          },
          { value: "inset-x-60", label: "left: 15rem; right: 15rem;" },
          { value: "inset-y-60", label: "top: 15rem; bottom: 15rem;" },
          { value: "top-60", label: "top: 15rem;" },
          { value: "right-60", label: "right: 15rem;" },
          { value: "bottom-60", label: "bottom: 15rem;" },
          { value: "left-60", label: "left: 15rem;" }
        ]
      },
      {
        label: "256px",
        options: [
          {
            value: "inset-64",
            label: "top: 16rem; right: 16rem; bottom: 16rem; left: 16rem;"
          },
          { value: "inset-x-64", label: "left: 16rem; right: 16rem;" },
          { value: "inset-y-64", label: "top: 16rem; bottom: 16rem;" },
          { value: "top-64", label: "top: 16rem;" },
          { value: "right-64", label: "right: 16rem;" },
          { value: "bottom-64", label: "bottom: 16rem;" },
          { value: "left-64", label: "left: 16rem;" }
        ]
      },
      {
        label: "288px",
        options: [
          {
            value: "inset-72",
            label: "top: 18rem; right: 18rem; bottom: 18rem; left: 18rem;"
          },
          { value: "inset-x-72", label: "left: 18rem; right: 18rem;" },
          { value: "inset-y-72", label: "top: 18rem; bottom: 18rem;" },
          { value: "top-72", label: "top: 18rem;" },
          { value: "right-72", label: "right: 18rem;" },
          { value: "bottom-72", label: "bottom: 18rem;" },
          { value: "left-72", label: "left: 18rem;" }
        ]
      },
      {
        label: "320px",
        options: [
          {
            value: "inset-80",
            label: "top: 20rem; right: 20rem; bottom: 20rem; left: 20rem;"
          },
          { value: "inset-x-80", label: "left: 20rem; right: 20rem;" },
          { value: "inset-y-80", label: "top: 20rem; bottom: 20rem;" },
          { value: "top-80", label: "top: 20rem;" },
          { value: "right-80", label: "right: 20rem;" },
          { value: "bottom-80", label: "bottom: 20rem;" },
          { value: "left-80", label: "left: 20rem;" }
        ]
      },
      {
        label: "384px",
        options: [
          {
            value: "inset-96",
            label: "top: 24rem; right: 24rem; bottom: 24rem; left: 24rem;"
          },
          { value: "inset-x-96", label: "left: 24rem; right: 24rem;" },
          { value: "inset-y-96", label: "top: 24rem; bottom: 24rem;" },
          { value: "top-96", label: "top: 24rem;" },
          { value: "right-96", label: "right: 24rem;" },
          { value: "bottom-96", label: "bottom: 24rem;" },
          { value: "left-96", label: "left: 24rem;" }
        ]
      },
      {
        label: "auto",
        options: [
          {
            value: "inset-auto",
            label: "top: auto; right: auto; bottom: auto; left: auto;"
          },
          { value: "inset-x-auto", label: "left: auto; right: auto;" },
          { value: "inset-y-auto", label: "top: auto; bottom: auto;" },
          { value: "top-auto", label: "top: auto;" },
          { value: "right-auto", label: "right: auto;" },
          { value: "bottom-auto", label: "bottom: auto;" },
          { value: "left-auto", label: "left: auto;" }
        ]
      },
      {
        label: "50%",
        options: [
          {
            value: "inset-1/2",
            label: "top: 50%; right: 50%; bottom: 50%; left: 50%;"
          },
          { value: "inset-x-1/2", label: "left: 50%; right: 50%;" },
          { value: "inset-y-1/2", label: "top: 50%; bottom: 50%;" },
          { value: "top-1/2", label: "top: 50%;" },
          { value: "right-1/2", label: "right: 50%;" },
          { value: "bottom-1/2", label: "bottom: 50%;" },
          { value: "left-1/2", label: "left: 50%;" }
        ]
      },
      {
        label: "33.333333%",
        options: [
          {
            value: "inset-1/3",
            label:
              "top: 33.333333%; right: 33.333333%; bottom: 33.333333%; left: 33.333333%;"
          },
          {
            value: "inset-x-1/3",
            label: "left: 33.333333%; right: 33.333333%;"
          },
          {
            value: "inset-y-1/3",
            label: "top: 33.333333%; bottom: 33.333333%;"
          },
          { value: "top-1/3", label: "33.333333%;" },
          { value: "right-1/3", label: "right: 33.333333%;" },
          { value: "bottom-1/3", label: "bottom: 33.333333%;" },
          { value: "left-1/3", label: "left: 33.333333%;" }
        ]
      },
      {
        label: "66.666667%",
        options: [
          {
            value: "inset-2/3",
            label:
              "top: 66.666667%; right: 66.666667%; bottom: 66.666667%; left: 66.666667%;"
          },
          {
            value: "inset-x-2/3",
            label: "left: 66.666667%; right: 66.666667%;"
          },
          {
            value: "inset-y-2/3",
            label: "top: 66.666667%; bottom: 66.666667%;"
          },
          { value: "top-2/3", label: "top: 66.666667%;" },
          { value: "right-2/3", label: "right: 66.666667%;" },
          { value: "bottom-2/3", label: "bottom: 66.666667%;" },
          { value: "left-2/3", label: "left: 66.666667%;" }
        ]
      },
      {
        label: "25%",
        options: [
          {
            value: "inset-1/4",
            label: "top: 25%; right: 25%; bottom: 25%; left: 25%;"
          },
          { value: "inset-x-1/4", label: "left: 25%; right: 25%;" },
          { value: "inset-y-1/4", label: "top: 25%; bottom: 25%;" },
          { value: "top-1/4", label: "top: 25%;" },
          { value: "right-1/4", label: "right: 25%;" },
          { value: "bottom-1/4", label: "bottom: 25%;" },
          { value: "left-1/4", label: "left: 25%;" }
        ]
      },
      {
        label: "50%",
        options: [
          {
            value: "inset-2/4",
            label: "top: 50%; right: 50%; bottom: 50%; left: 50%;"
          },
          { value: "inset-x-2/4", label: "left: 50%; right: 50%;" },
          { value: "inset-y-2/4", label: "top: 50%; bottom: 50%;" },
          { value: "top-2/4", label: "top: 50%;" },
          { value: "right-2/4", label: "right: 50%;" },
          { value: "bottom-2/4", label: "bottom: 50%;" },
          { value: "left-2/4", label: "left: 50%;" }
        ]
      },
      {
        label: "75%",
        options: [
          {
            value: "inset-3/4",
            label: "top: 75%; right: 75%; bottom: 75%; left: 75%;"
          },
          { value: "inset-x-3/4", label: "left: 75%; right: 75%;" },
          { value: "inset-y-3/4", label: "top: 75%; bottom: 75%;" },
          { value: "top-3/4", label: "top: 75%;" },
          { value: "right-3/4", label: "right: 75%;" },
          { value: "bottom-3/4", label: "bottom: 75%;" },
          { value: "left-3/4", label: "left: 75%;" }
        ]
      },
      {
        label: "100%",
        options: [
          {
            value: "inset-full",
            label: "top: 100%; right: 100%; bottom: 100%; left: 100%;"
          },
          { value: "inset-x-full", label: "left: 100%; right: 100%;" },
          { value: "inset-y-full", label: "top: 100%; bottom: 100%;" },
          { value: "top-full", label: "top: 100%;" },
          { value: "right-full", label: "right: 100%;" },
          { value: "bottom-full", label: "bottom: 100%;" },
          { value: "left-full", label: "left: 100%;" }
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
      { value: "z-0", label: "z-index: 0;" },
      { value: "z-10", label: "z-index: 10;" },
      { value: "z-20", label: "z-index: 20;" },
      { value: "z-30", label: "z-index: 30;" },
      { value: "z-40", label: "z-index: 40;" },
      { value: "z-50", label: "z-index: 50;" },
      { value: "z-auto", label: "z-index: auto;" }
    ]
  },
  {
    type: "visibility",
    header: "Visibility 属性",
    title: "Visibility ClassName：",
    selectPlaceholder: "visibility: xxxx",
    hasCustom: false,
    options: [
      { value: "visible", label: "visibility: visible;" },
      { value: "invisible", label: "visibility: hidden;" },
      { value: "collapse", label: "visibility: collapse;" }
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
      { value: "basis-0", label: "flex-basis: 0px;" },
      { value: "basis-1", label: "flex-basis: 0.25rem; /* 4px */" },
      { value: "basis-2", label: "flex-basis: 0.5rem; /* 8px */" },
      { value: "basis-3", label: "flex-basis: 0.75rem; /* 12px */" },
      { value: "basis-4", label: "flex-basis: 1rem; /* 16px */" },
      { value: "basis-5", label: "flex-basis: 1.25rem; /* 20px */" },
      { value: "basis-6", label: "flex-basis: 1.5rem; /* 24px */" },
      { value: "basis-7", label: "flex-basis: 1.75rem; /* 28px */" },
      { value: "basis-8", label: "flex-basis: 2rem; /* 32px */" },
      { value: "basis-9", label: "flex-basis: 2.25rem; /* 36px */" },
      { value: "basis-10", label: "flex-basis: 2.5rem; /* 40px */" },
      { value: "basis-11", label: "flex-basis: 2.75rem; /* 44px */" },
      { value: "basis-12", label: "flex-basis: 3rem; /* 48px */" },
      { value: "basis-14", label: "flex-basis: 3.5rem; /* 56px */" },
      { value: "basis-16", label: "flex-basis: 4rem; /* 64px */" },
      { value: "basis-20", label: "flex-basis: 5rem; /* 80px */" },
      { value: "basis-24", label: "flex-basis: 6rem; /* 96px */" },
      { value: "basis-28", label: "flex-basis: 7rem; /* 112px */" },
      { value: "basis-32", label: "flex-basis: 8rem; /* 128px */" },
      { value: "basis-36", label: "flex-basis: 9rem; /* 144px */" },
      { value: "basis-40", label: "flex-basis: 10rem; /* 160px */" },
      { value: "basis-44", label: "flex-basis: 11rem; /* 176px */" },
      { value: "basis-48", label: "flex-basis: 12rem; /* 192px */" },
      { value: "basis-52", label: "flex-basis: 13rem; /* 208px */" },
      { value: "basis-56", label: "flex-basis: 14rem; /* 224px */" },
      { value: "basis-60", label: "flex-basis: 15rem; /* 240px */" },
      { value: "basis-64", label: "flex-basis: 16rem; /* 256px */" },
      { value: "basis-72", label: "flex-basis: 18rem; /* 288px */" },
      { value: "basis-80", label: "flex-basis: 20rem; /* 320px */" },
      { value: "basis-96", label: "flex-basis: 24rem; /* 384px */" },
      { value: "basis-auto", label: "flex-basis: auto;" },
      { value: "basis-px", label: "flex-basis: 1px;" },
      { value: "basis-0.5", label: "flex-basis: 0.125rem; /* 2px */" },
      { value: "basis-1.5", label: "flex-basis: 0.375rem; /* 6px */" },
      { value: "basis-2.5", label: "flex-basis: 0.625rem; /* 10px */" },
      { value: "basis-3.5", label: "flex-basis: 0.875rem; /* 14px */" },
      { value: "basis-1/2", label: "flex-basis: 50%;" },
      { value: "basis-1/3", label: "flex-basis: 33.333333%;" },
      { value: "basis-2/3", label: "flex-basis: 66.666667%;" },
      { value: "basis-1/4", label: "flex-basis: 25%;" },
      { value: "basis-2/4", label: "flex-basis: 50%;" },
      { value: "basis-3/4", label: "flex-basis: 75%;" },
      { value: "basis-1/5", label: "flex-basis: 20%;" },
      { value: "basis-2/5", label: "flex-basis: 40%;" },
      { value: "basis-3/5", label: "flex-basis: 60%;" },
      { value: "basis-4/5", label: "flex-basis: 80%;" },
      { value: "basis-1/6", label: "flex-basis: 16.666667%;" },
      { value: "basis-2/6", label: "flex-basis: 33.333333%;" },
      { value: "basis-3/6", label: "flex-basis: 50%;" },
      { value: "basis-4/6", label: "flex-basis: 66.666667%;" },
      { value: "basis-5/6", label: "flex-basis: 83.333333%;" },
      { value: "basis-1/12", label: "flex-basis: 8.333333%;" },
      { value: "basis-2/12", label: "flex-basis: 16.666667%;" },
      { value: "basis-3/12", label: "flex-basis: 25%;" },
      { value: "basis-4/12", label: "flex-basis: 33.333333%;" },
      { value: "basis-5/12", label: "flex-basis: 41.666667%;" },
      { value: "basis-6/12", label: "flex-basis: 50%;" },
      { value: "basis-7/12", label: "flex-basis: 58.333333%;" },
      { value: "basis-8/12", label: "flex-basis: 66.666667%;" },
      { value: "basis-9/12", label: "flex-basis: 75%;" },
      { value: "basis-10/12", label: "flex-basis: 83.333333%;" },
      { value: "basis-11/12", label: "flex-basis: 91.666667%;" },
      { value: "basis-full", label: "flex-basis: 100%;" }
    ]
  },
  {
    type: "flex-direction",
    header: "Flex Direction 属性",
    title: "Flex Direction ClassName：",
    selectPlaceholder: "flex-direction: xxxx",
    hasCustom: false,
    options: [
      { value: "flex-row", label: "flex-direction: row;" },
      { value: "flex-row-reverse", label: "flex-direction: row-reverse;" },
      { value: "flex-col", label: "flex-direction: column;" },
      { value: "flex-col-reverse", label: "flex-direction: column-reverse;" }
    ]
  },
  {
    type: "flex-wrap",
    header: "Flex Wrap 属性",
    title: "Flex Wrap ClassName：",
    selectPlaceholder: "flex-wrap: xxxx",
    hasCustom: false,
    options: [
      { value: "flex-wrap", label: "flex-wrap: wrap;" },
      { value: "flex-wrap-reverse", label: "flex-wrap: wrap-reverse;" },
      { value: "flex-nowrap", label: "flex-wrap: nowrap;" }
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
      { value: "flex-1", label: "flex: 1 1 0%;" },
      { value: "flex-auto", label: "flex: 1 1 auto;" },
      { value: "flex-initial", label: "flex: 0 1 auto;" },
      { value: "flex-none", label: "flex: none;" }
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
      { value: "grow", label: "flex-grow: 1;" },
      { value: "grow-0", label: "flex-grow: 0;" }
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
      { value: "order-1", label: "order: 1;" },
      { value: "order-2", label: "order: 2;" },
      { value: "order-3", label: "order: 3;" },
      { value: "order-4", label: "order: 4;" },
      { value: "order-5", label: "order: 5;" },
      { value: "order-6", label: "order: 6;" },
      { value: "order-7", label: "order: 7;" },
      { value: "order-8", label: "order: 8;" },
      { value: "order-9", label: "order: 9;" },
      { value: "order-10", label: "order: 10;" },
      { value: "order-11", label: "order: 11;" },
      { value: "order-12", label: "order: 12;" },
      { value: "order-first", label: "order: -9999;" },
      { value: "order-last", label: "order: 9999;" },
      { value: "order-none", label: "order: 0;" }
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
        label: "grid-template-columns: repeat(1, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-2",
        label: "grid-template-columns: repeat(2, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-3",
        label: "grid-template-columns: repeat(3, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-4",
        label: "grid-template-columns: repeat(4, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-5",
        label: "grid-template-columns: repeat(5, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-6",
        label: "grid-template-columns: repeat(6, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-7",
        label: "grid-template-columns: repeat(7, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-8",
        label: "grid-template-columns: repeat(8, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-9",
        label: "grid-template-columns: repeat(9, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-10",
        label: "grid-template-columns: repeat(10, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-11",
        label: "grid-template-columns: repeat(11, minmax(0, 1fr));"
      },
      {
        value: "grid-cols-12",
        label: "grid-template-columns: repeat(12, minmax(0, 1fr));"
      },
      { value: "grid-cols-none", label: "grid-template-columns: none;" }
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
      { value: "col-auto", label: "grid-column: auto;" },
      { value: "col-span-1", label: "grid-column: span 1 / span 1;" },
      { value: "col-span-2", label: "grid-column: span 2 / span 2;" },
      { value: "col-span-3", label: "grid-column: span 3 / span 3;" },
      { value: "col-span-4", label: "grid-column: span 4 / span 4;" },
      { value: "col-span-5", label: "grid-column: span 5 / span 5;" },
      { value: "col-span-6", label: "grid-column: span 6 / span 6;" },
      { value: "col-span-7", label: "grid-column: span 7 / span 7;" },
      { value: "col-span-8", label: "grid-column: span 8 / span 8;" },
      { value: "col-span-9", label: "grid-column: span 9 / span 9;" },
      { value: "col-span-10", label: "grid-column: span 10 / span 10;" },
      { value: "col-span-11", label: "grid-column: span 11 / span 11;" },
      { value: "col-span-12", label: "grid-column: span 12 / span 12;" },
      { value: "col-span-full", label: "grid-column: 1 / -1;" },
      { value: "col-start-1", label: "grid-column-start: 1;" },
      { value: "col-start-2", label: "grid-column-start: 2;" },
      { value: "col-start-3", label: "grid-column-start: 3;" },
      { value: "col-start-4", label: "grid-column-start: 4;" },
      { value: "col-start-5", label: "grid-column-start: 5;" },
      { value: "col-start-6", label: "grid-column-start: 6;" },
      { value: "col-start-7", label: "grid-column-start: 7;" },
      { value: "col-start-8", label: "grid-column-start: 8;" },
      { value: "col-start-9", label: "grid-column-start: 9;" },
      { value: "col-start-10", label: "grid-column-start: 10;" },
      { value: "col-start-11", label: "grid-column-start: 11;" },
      { value: "col-start-12", label: "grid-column-start: 12;" },
      { value: "col-start-13", label: "grid-column-start: 13;" },
      { value: "col-start-auto", label: "grid-column-start: auto;" },
      { value: "col-end-1", label: "grid-column-end: 1;" },
      { value: "col-end-2", label: "grid-column-end: 2;" },
      { value: "col-end-3", label: "grid-column-end: 3;" },
      { value: "col-end-4", label: "grid-column-end: 4;" },
      { value: "col-end-5", label: "grid-column-end: 5;" },
      { value: "col-end-6", label: "grid-column-end: 6;" },
      { value: "col-end-7", label: "grid-column-end: 7;" },
      { value: "col-end-8", label: "grid-column-end: 8;" },
      { value: "col-end-9", label: "grid-column-end: 9;" },
      { value: "col-end-10", label: "grid-column-end: 10;" },
      { value: "col-end-11", label: "grid-column-end: 11;" },
      { value: "col-end-12", label: "grid-column-end: 12;" },
      { value: "col-end-13", label: "grid-column-end: 13;" },
      { value: "col-end-auto", label: "grid-column-end: auto;" }
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
        label: "grid-template-rows: repeat(1, minmax(0, 1fr));"
      },
      {
        value: "grid-rows-2",
        label: "grid-template-rows: repeat(2, minmax(0, 1fr));"
      },
      {
        value: "grid-rows-3",
        label: "grid-template-rows: repeat(3, minmax(0, 1fr));"
      },
      {
        value: "grid-rows-4",
        label: "grid-template-rows: repeat(4, minmax(0, 1fr));"
      },
      {
        value: "grid-rows-5",
        label: "grid-template-rows: repeat(5, minmax(0, 1fr));"
      },
      {
        value: "grid-rows-6",
        label: "grid-template-rows: repeat(6, minmax(0, 1fr));"
      },
      { value: "grid-rows-none", label: "grid-template-rows: none;" }
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
      { value: "row-auto", label: "grid-row: auto;" },
      { value: "row-span-1", label: "grid-row: span 1 / span 1;" },
      { value: "row-span-2", label: "grid-row: span 2 / span 2;" },
      { value: "row-span-3", label: "grid-row: span 3 / span 3;" },
      { value: "row-span-4", label: "grid-row: span 4 / span 4;" },
      { value: "row-span-5", label: "grid-row: span 5 / span 5;" },
      { value: "row-span-6", label: "grid-row: span 6 / span 6;" },
      { value: "row-span-full", label: "grid-row: 1 / -1;" },
      { value: "row-start-1", label: "grid-row-start: 1;" },
      { value: "row-start-2", label: "grid-row-start: 2;" },
      { value: "row-start-3", label: "grid-row-start: 3;" },
      { value: "row-start-4", label: "grid-row-start: 4;" },
      { value: "row-start-5", label: "grid-row-start: 5;" },
      { value: "row-start-6", label: "grid-row-start: 6;" },
      { value: "row-start-7", label: "grid-row-start: 7;" },
      { value: "row-start-auto", label: "grid-row-start: auto;" },
      { value: "row-end-1", label: "grid-row-end: 1;" },
      { value: "row-end-2", label: "grid-row-end: 2;" },
      { value: "row-end-3", label: "grid-row-end: 3;" },
      { value: "row-end-4", label: "grid-row-end: 4;" },
      { value: "row-end-5", label: "grid-row-end: 5;" },
      { value: "row-end-6", label: "grid-row-end: 6;" },
      { value: "row-end-7", label: "grid-row-end: 7;" },
      { value: "row-end-auto", label: "grid-row-end: auto;" }
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
      { value: "grid-flow-row", label: "grid-auto-flow: row;" },
      { value: "grid-flow-col", label: "grid-auto-flow: column;" },
      { value: "grid-flow-dense", label: "grid-auto-flow: dense;" },
      { value: "grid-flow-row-dense", label: "grid-auto-flow: row dense;" },
      { value: "grid-flow-col-dense", label: "grid-auto-flow: column dense;" }
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
      { value: "auto-cols-auto", label: "grid-auto-columns: auto;" },
      { value: "auto-cols-min", label: "grid-auto-columns: min-content;" },
      { value: "auto-cols-max", label: "grid-auto-columns: max-content;" },
      { value: "auto-cols-fr", label: "grid-auto-columns: minmax(0, 1fr);" }
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
      { value: "auto-rows-auto", label: "grid-auto-rows: auto;" },
      { value: "auto-rows-min", label: "grid-auto-rows: min-content;" },
      { value: "auto-rows-max", label: "grid-auto-rows: max-content;" },
      { value: "auto-rows-fr", label: "grid-auto-rows: minmax(0, 1fr);" }
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
          { value: "gap-0", label: "gap: 0px;" },
          { value: "gap-x-0", label: "column-gap: 0px;" },
          { value: "gap-y-0", label: "row-gap: 0px;" }
        ]
      },
      {
        label: "1px",
        options: [
          { value: "gap-px", label: "gap: 1px;" },
          { value: "gap-x-px", label: "column-gap: 1px;" },
          { value: "gap-y-px", label: "row-gap: 1px;" }
        ]
      },
      {
        label: "2px",
        options: [
          { value: "gap-0.5", label: "gap: 0.125rem;" },
          { value: "gap-x-0.5", label: "column-gap: 0.125rem;" },
          { value: "gap-y-0.5", label: "row-gap: 0.125rem;" }
        ]
      },
      {
        label: "4px",
        options: [
          { value: "gap-1", label: "gap: 0.25rem;" },
          { value: "gap-x-1", label: "column-gap: 0.25rem;" },
          { value: "gap-y-1", label: "row-gap: 0.25rem;" }
        ]
      },
      {
        label: "6px",
        options: [
          { value: "gap-1.5", label: "gap: 0.375rem;" },
          { value: "gap-x-1.5", label: "column-gap: 0.375rem;" },
          { value: "gap-y-1.5", label: "row-gap: 0.375rem;" }
        ]
      },
      {
        label: "8px",
        options: [
          { value: "gap-2", label: "gap: 0.5rem;" },
          { value: "gap-x-2", label: "column-gap: 0.5rem;" },
          { value: "gap-y-2", label: "row-gap: 0.5rem;" }
        ]
      },
      {
        label: "10px",
        options: [
          { value: "gap-2.5", label: "gap: 0.625rem;" },
          { value: "gap-x-2.5", label: "column-gap: 0.625rem;" },
          { value: "gap-y-2.5", label: "row-gap: 0.625rem;" }
        ]
      },
      {
        label: "12px",
        options: [
          { value: "gap-3", label: "gap: 0.75rem;" },
          { value: "gap-x-3", label: "column-gap: 0.75rem;" },
          { value: "gap-y-3", label: "row-gap: 0.75rem;" }
        ]
      },
      {
        label: "14px",
        options: [
          { value: "gap-3.5", label: "gap: 0.875rem;" },
          { value: "gap-x-3.5", label: "column-gap: 0.875rem; " },
          { value: "gap-y-3.5", label: "row-gap: 0.875rem;" }
        ]
      },
      {
        label: "16px",
        options: [
          { value: "gap-4", label: "gap: 1rem;" },
          { value: "gap-x-4", label: "column-gap: 1rem;" },
          { value: "gap-y-4", label: "row-gap: 1rem;" }
        ]
      },
      {
        label: "20px",
        options: [
          { value: "gap-5", label: "gap: 1.25rem;" },
          { value: "gap-x-5", label: "column-gap: 1.25rem;" },
          { value: "gap-y-5", label: "row-gap: 1.25rem;" }
        ]
      },
      {
        label: "24px",
        options: [
          { value: "gap-6", label: "gap: 1.5rem;" },
          { value: "gap-x-6", label: "column-gap: 1.5rem;" },
          { value: "gap-y-6", label: "row-gap: 1.5rem;" }
        ]
      },
      {
        label: "28px",
        options: [
          { value: "gap-7", label: "gap: 1.75rem;" },
          { value: "gap-x-7", label: "column-gap: 1.75rem;" },
          { value: "gap-y-7", label: "row-gap: 1.75rem;" }
        ]
      },
      {
        label: "32px",
        options: [
          { value: "gap-8", label: "gap: 2rem;" },
          { value: "gap-x-8", label: "column-gap: 2rem;" },
          { value: "gap-y-8", label: "row-gap: 2rem;" }
        ]
      },
      {
        label: "36px",
        options: [
          { value: "gap-9", label: "gap: 2.25rem;" },
          { value: "gap-x-9", label: "column-gap: 2.25rem;" },
          { value: "gap-y-9", label: "row-gap: 2.25rem;" }
        ]
      },
      {
        label: "40px",
        options: [
          { value: "gap-10", label: "gap: 2.5rem;" },
          { value: "gap-x-10", label: "column-gap: 2.5rem;" },
          { value: "gap-y-10", label: "row-gap: 2.5rem;" }
        ]
      },
      {
        label: "44px",
        options: [
          { value: "gap-11", label: "gap: 2.75rem;" },
          { value: "gap-x-11", label: "column-gap: 2.75rem;" },
          { value: "gap-y-11", label: "row-gap: 2.75rem;" }
        ]
      },
      {
        label: "48px",
        options: [
          { value: "gap-12", label: "gap: 3rem;" },
          { value: "gap-x-12", label: "column-gap: 3rem;" },
          { value: "gap-y-12", label: "row-gap: 3rem;" }
        ]
      },
      {
        label: "56px",
        options: [
          { value: "gap-14", label: "gap: 3.5rem;" },
          { value: "gap-x-14", label: "column-gap: 3.5rem;" },
          { value: "gap-y-14", label: "row-gap: 3.5rem;" }
        ]
      },
      {
        label: "64px",
        options: [
          { value: "gap-16", label: "gap: 4rem;" },
          { value: "gap-x-16", label: "column-gap: 4rem;" },
          { value: "gap-y-16", label: "row-gap: 4rem;" }
        ]
      },
      {
        label: "80px",
        options: [
          { value: "gap-20", label: "gap: 5rem;" },
          { value: "gap-x-20", label: "column-gap: 5rem;" },
          { value: "gap-y-20", label: "row-gap: 5rem;" }
        ]
      },
      {
        label: "96px",
        options: [
          { value: "gap-24", label: "gap: 6rem;" },
          { value: "gap-x-24", label: "column-gap: 6rem;" },
          { value: "gap-y-24", label: "row-gap: 6rem;" }
        ]
      },
      {
        label: "112px",
        options: [
          { value: "gap-28", label: "gap: 7rem;" },
          { value: "gap-x-28", label: "column-gap: 7rem;" },
          { value: "gap-y-28", label: "row-gap: 7rem;" }
        ]
      },
      {
        label: "128px",
        options: [
          { value: "gap-32", label: "gap: 8rem;" },
          { value: "gap-x-32", label: "column-gap: 8rem;" },
          { value: "gap-y-32", label: "row-gap: 8rem;" }
        ]
      },
      {
        label: "144px",
        options: [
          { value: "gap-36", label: "gap: 9rem;" },
          { value: "gap-x-36", label: "column-gap: 9rem;" },
          { value: "gap-y-36", label: "row-gap: 9rem;" }
        ]
      },
      {
        label: "160px",
        options: [
          { value: "gap-40", label: "gap: 10rem;" },
          { value: "gap-x-40", label: "column-gap: 10rem;" },
          { value: "gap-y-40", label: "row-gap: 10rem;" }
        ]
      },
      {
        label: "176px",
        options: [
          { value: "gap-44", label: "gap: 11rem;" },
          { value: "gap-x-44", label: "column-gap: 11rem;" },
          { value: "gap-y-44", label: "row-gap: 11rem;" }
        ]
      },
      {
        label: "192px",
        options: [
          { value: "gap-48", label: "gap: 12rem;" },
          { value: "gap-x-48", label: "column-gap: 12rem;" },
          { value: "gap-y-48", label: "row-gap: 12rem;" }
        ]
      },
      {
        label: "208px",
        options: [
          { value: "gap-52", label: "gap: 13rem;" },
          { value: "gap-x-52", label: "column-gap: 13rem;" },
          { value: "gap-y-52", label: "row-gap: 13rem;" }
        ]
      },
      {
        label: "224px",
        options: [
          { value: "gap-56", label: "gap: 14rem;" },
          { value: "gap-x-56", label: "column-gap: 14rem;" },
          { value: "gap-y-56", label: "row-gap: 14rem;" }
        ]
      },
      {
        label: "240px",
        options: [
          { value: "gap-60", label: "gap: 15rem;" },
          { value: "gap-x-60", label: "column-gap: 15rem;" },
          { value: "gap-y-60", label: "row-gap: 15rem;" }
        ]
      },
      {
        label: "256px",
        options: [
          { value: "gap-64", label: "gap: 16rem;" },
          { value: "gap-x-64", label: "column-gap: 16rem;" },
          { value: "gap-y-64", label: "row-gap: 16rem;" }
        ]
      },
      {
        label: "288px",
        options: [
          { value: "gap-72", label: "gap: 18rem;" },
          { value: "gap-x-72", label: "column-gap: 18rem;" },
          { value: "gap-y-72", label: "row-gap: 18rem;" }
        ]
      },
      {
        label: "320px",
        options: [
          { value: "gap-80", label: "gap: 20rem;" },
          { value: "gap-x-80", label: "column-gap: 20rem;" },
          { value: "gap-y-80", label: "row-gap: 20rem;" }
        ]
      },
      {
        label: "384px",
        options: [
          { value: "gap-96", label: "gap: 24rem;" },
          { value: "gap-x-96", label: "column-gap: 24rem;" },
          { value: "gap-y-96", label: "row-gap: 24rem;" }
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
      { value: "justify-start", label: "justify-content: flex-start;" },
      { value: "justify-end", label: "justify-content: flex-end;" },
      { value: "justify-center", label: "justify-content: center;" },
      { value: "justify-between", label: "justify-content: space-between;" },
      { value: "justify-around", label: "justify-content: space-around;" },
      { value: "justify-evenly", label: "justify-content: space-evenly;" }
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
      { value: "justify-items-start", label: "justify-items: start;" },
      { value: "justify-items-end", label: "justify-items: end;" },
      { value: "justify-items-center", label: "justify-items: center;" },
      { value: "justify-items-stretch", label: "justify-items: stretch;" }
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
      { value: "justify-self-auto", label: "justify-self: auto;" },
      { value: "justify-self-start", label: "justify-self: start;" },
      { value: "justify-self-end", label: "justify-self: end;" },
      { value: "justify-self-center", label: "justify-self: center;" },
      { value: "justify-self-stretch", label: "justify-self: stretch;" }
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
      { value: "content-center", label: "align-content: center;" },
      { value: "content-start", label: "align-content: flex-start;" },
      { value: "content-end", label: "align-content: flex-end;" },
      { value: "content-between", label: "align-content: space-between;" },
      { value: "content-around", label: "align-content: space-around;" },
      { value: "content-evenly", label: "align-content: space-evenly;" },
      { value: "content-baseline", label: "align-content: baseline;" }
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
      { value: "items-start", label: "align-items: flex-start;" },
      { value: "items-end", label: "align-items: flex-end;" },
      { value: "items-center", label: "align-items: center;" },
      { value: "items-baseline", label: "align-items: baseline;" },
      { value: "items-stretch", label: "align-items: stretch;" }
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
      { value: "self-auto", label: "align-self: auto;" },
      { value: "self-start", label: "align-self: flex-start;" },
      { value: "self-end", label: "align-self: flex-end;" },
      { value: "self-center", label: "align-self: center;" },
      { value: "self-stretch", label: "align-self: stretch;" },
      { value: "self-baseline", label: "align-self: baseline;" }
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
      { value: "place-content-center", label: "place-content: center;" },
      { value: "place-content-start", label: "place-content: start;" },
      { value: "place-content-end", label: "place-content: end;" },
      {
        value: "place-content-between",
        label: "place-content: space-between;"
      },
      { value: "place-content-around", label: "place-content: space-around;" },
      { value: "place-content-evenly", label: "place-content: space-evenly;" },
      { value: "place-content-baseline", label: "place-content: baseline;" },
      { value: "place-content-stretch", label: "place-content: stretch;" }
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
      { value: "place-items-start", label: "place-items: start;" },
      { value: "place-items-end", label: "place-items: end;" },
      { value: "place-items-center", label: "place-items: center;" },
      { value: "place-items-baseline", label: "place-items: baseline;" },
      { value: "place-items-stretch", label: "place-items: stretch;" }
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
      { value: "place-self-auto", label: "place-self: auto;" },
      { value: "place-self-start", label: "place-self: start;" },
      { value: "place-self-end", label: "place-self: end;" },
      { value: "place-self-center", label: "place-self: center;" },
      { value: "place-self-stretch", label: "place-self: stretch;" }
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
          { value: "p-0", label: "padding: 0px;" },
          { value: "px-0", label: "padding-left: 0px; padding-right: 0px;" },
          { value: "py-0", label: "padding-top: 0px; padding-bottom: 0px;" },
          { value: "pt-0", label: "padding-top: 0px;" },
          { value: "pr-0", label: "padding-right: 0px;" },
          { value: "pb-0", label: "padding-bottom: 0px;" },
          { value: "pl-0", label: "padding-left: 0px;" }
        ]
      },
      {
        label: "1px",
        options: [
          { value: "p-px", label: "padding: 1px;" },
          { value: "px-px", label: "padding-left: 1px; padding-right: 1px;" },
          { value: "py-px", label: "padding-top: 1px; padding-bottom: 1px;" },
          { value: "pt-px", label: "padding-top: 1px;" },
          { value: "pr-px", label: "padding-right: 1px;" },
          { value: "pb-px", label: "padding-bottom: 1px;" },
          { value: "pl-px", label: "padding-left: 1px;" }
        ]
      },
      {
        label: "2px",
        options: [
          { value: "p-0.5", label: "padding: 0.125rem;" },
          {
            value: "px-0.5",
            label: "padding-left: 0.125rem; padding-right: 0.125rem;"
          },
          {
            value: "py-0.5",
            label: "padding-top: 0.125rem; padding-bottom: 0.125rem;"
          },
          { value: "pt-0.5", label: "padding-top: 0.125rem;" },
          { value: "pr-0.5", label: "padding-right: 0.125rem;" },
          { value: "pb-0.5", label: "padding-bottom: 0.125rem;" },
          { value: "pl-0.5", label: "padding-left: 0.125rem;" }
        ]
      },
      {
        label: "4px",
        options: [
          { value: "p-1", label: "padding: 0.25rem;" },
          {
            value: "px-1",
            label: "padding-left: 0.25rem; padding-right: 0.25rem;"
          },
          {
            value: "py-1",
            label: "padding-top: 0.25rem; padding-bottom: 0.25rem;"
          },
          { value: "pt-1", label: "padding-top: 0.25rem;" },
          { value: "pr-1", label: "padding-right: 0.25rem;" },
          { value: "pb-1", label: "padding-bottom: 0.25rem;" },
          { value: "pl-1", label: "padding-left: 0.25rem;" }
        ]
      },
      {
        label: "6px",
        options: [
          { value: "p-1.5", label: "padding: 0.375rem;" },
          {
            value: "px-1.5",
            label: "padding-left: 0.375rem; padding-right: 0.375rem;"
          },
          {
            value: "py-1.5",
            label: "padding-top: 0.375rem; padding-bottom: 0.375rem;"
          },
          { value: "pt-1.5", label: "padding-top: 0.375rem;" },
          { value: "pr-1.5", label: "padding-right: 0.375rem;" },
          { value: "pb-1.5", label: "padding-bottom: 0.375rem;" },
          { value: "pl-1.5", label: "padding-left: 0.375rem;" }
        ]
      },
      {
        label: "8px",
        options: [
          { value: "p-2", label: "padding: 0.5rem;" },
          {
            value: "px-2",
            label: "padding-left: 0.5rem; padding-right: 0.5rem;"
          },
          {
            value: "py-2",
            label: "padding-top: 0.5rem; padding-bottom: 0.5rem;"
          },
          { value: "pt-2", label: "padding-top: 0.5rem;" },
          { value: "pr-2", label: "padding-right: 0.5rem;" },
          { value: "pb-2", label: "padding-bottom: 0.5rem;" },
          { value: "pl-2", label: "padding-left: 0.5rem;" }
        ]
      },
      {
        label: "10px",
        options: [
          { value: "p-2.5", label: "padding: 0.625rem;" },
          {
            value: "px-2.5",
            label: "padding-left: 0.625rem; padding-right: 0.625rem;"
          },
          {
            value: "py-2.5",
            label: "padding-top: 0.625rem; padding-bottom: 0.625rem;"
          },
          { value: "pt-2.5", label: "padding-top: 0.625rem;" },
          { value: "pr-2.5", label: "padding-right: 0.625rem;" },
          { value: "pb-2.5", label: "padding-bottom: 0.625rem;" },
          { value: "pl-2.5", label: "padding-left: 0.625rem;" }
        ]
      },
      {
        label: "12px",
        options: [
          { value: "p-3", label: "padding: 0.75rem;" },
          {
            value: "px-3",
            label: "padding-left: 0.75rem; padding-right: 0.75rem;"
          },
          {
            value: "py-3",
            label: "padding-top: 0.75rem; padding-bottom: 0.75rem;"
          },
          { value: "pt-3", label: "padding-top: 0.75rem;" },
          { value: "pr-3", label: "padding-right: 0.75rem;" },
          { value: "pb-3", label: "padding-bottom: 0.75rem;" },
          { value: "pl-3", label: "padding-left: 0.75rem;" }
        ]
      },
      {
        label: "14px",
        options: [
          { value: "p-3.5", label: "padding: 0.875rem;" },
          {
            value: "px-3.5",
            label: "padding-left: 0.875rem; padding-right: 0.875rem;"
          },
          {
            value: "py-3.5",
            label: "padding-top: 0.875rem; padding-bottom: 0.875rem;"
          },
          { value: "pt-3.5", label: "padding-top: 0.875rem;" },
          { value: "pr-3.5", label: "padding-right: 0.875rem;" },
          { value: "pb-3.5", label: "padding-bottom: 0.875rem;" },
          { value: "pl-3.5", label: "padding-left: 0.875rem;" }
        ]
      },

      {
        label: "16px",
        options: [
          { value: "p-4", label: "padding: 1rem;" },
          { value: "px-4", label: "padding-left: 1rem; padding-right: 1rem;" },
          { value: "py-4", label: "padding-top: 1rem; padding-bottom: 1rem;" },
          { value: "pt-4", label: "padding-top: 1rem;" },
          { value: "pr-4", label: "padding-right: 1rem;" },
          { value: "pb-4", label: "padding-bottom: 1rem;" },
          { value: "pl-4", label: "padding-left: 1rem;" }
        ]
      },

      {
        label: "20px",
        options: [
          { value: "p-5", label: "padding: 1.25rem;" },
          {
            value: "px-5",
            label: "padding-left: 1.25rem; padding-right: 1.25rem;"
          },
          {
            value: "py-5",
            label: "padding-top: 1.25rem; padding-bottom: 1.25rem;"
          },
          { value: "pt-5", label: "padding-top: 1.25rem;" },
          { value: "pr-5", label: "padding-right: 1.25rem;" },
          { value: "pb-5", label: "padding-bottom: 1.25rem;" },
          { value: "pl-5", label: "padding-left: 1.25rem;" }
        ]
      },

      {
        label: "24px",
        options: [
          { value: "p-6", label: "padding: 1.5rem;" },
          {
            value: "px-6",
            label: "padding-left: 1.5rem; padding-right: 1.5rem;"
          },
          {
            value: "py-6",
            label: "padding-top: 1.5rem; padding-bottom: 1.5rem;"
          },
          { value: "pt-6", label: "padding-top: 1.5rem;" },
          { value: "pr-6", label: "padding-right: 1.5rem;" },
          { value: "pb-6", label: "padding-bottom: 1.5rem;" },
          { value: "pl-6", label: "padding-left: 1.5rem;" }
        ]
      },
      {
        label: "28px",
        options: [
          { value: "p-7", label: "padding: 1.75rem;" },
          {
            value: "px-7",
            label: "padding-left: 1.75rem; padding-right: 1.75rem;"
          },
          {
            value: "py-7",
            label: "padding-top: 1.75rem; padding-bottom: 1.75rem;"
          },
          { value: "pt-7", label: "padding-top: 1.75rem;" },
          { value: "pr-7", label: "padding-right: 1.75rem;" },
          { value: "pb-7", label: "padding-bottom: 1.75rem;" },
          { value: "pl-7", label: "padding-left: 1.75rem;" }
        ]
      },
      {
        label: "32px",
        options: [
          { value: "p-8", label: "padding: 2rem;" },
          { value: "px-8", label: "padding-left: 2rem; padding-right: 2rem;" },
          { value: "py-8", label: "padding-top: 2rem; padding-bottom: 2rem;" },
          { value: "pt-8", label: "padding-top: 2rem;" },
          { value: "pr-8", label: "padding-right: 2rem;" },
          { value: "pb-8", label: "padding-bottom: 2rem;" },
          { value: "pl-8", label: "padding-left: 2rem;" }
        ]
      },
      {
        label: "36px",
        options: [
          { value: "p-9", label: "padding: 2.25rem;" },
          {
            value: "px-9",
            label: "padding-left: 2.25rem; padding-right: 2.25rem;"
          },
          {
            value: "py-9",
            label: "padding-top: 2.25rem; padding-bottom: 2.25rem;"
          },
          { value: "pt-9", label: "padding-top: 2.25rem;" },
          { value: "pr-9", label: "padding-right: 2.25rem;" },
          { value: "pb-9", label: "padding-bottom: 2.25rem;" },
          { value: "pl-9", label: "padding-left: 2.25rem;" }
        ]
      },
      {
        label: "40px",
        options: [
          { value: "p-10", label: "padding: 2.5rem;" },
          {
            value: "px-10",
            label: "padding-left: 2.5rem; padding-right: 2.5rem;"
          },
          {
            value: "py-10",
            label: "padding-top: 2.5rem; padding-bottom: 2.5rem;"
          },
          { value: "pt-10", label: "padding-top: 2.5rem;" },
          { value: "pr-10", label: "padding-right: 2.5rem;" },
          { value: "pb-10", label: "padding-bottom: 2.5rem;" },
          { value: "pl-10", label: "padding-left: 2.5rem;" }
        ]
      },
      {
        label: "44px",
        options: [
          { value: "p-11", label: "padding: 2.75rem;" },
          {
            value: "px-11",
            label: "padding-left: 2.75rem; padding-right: 2.75rem;"
          },
          {
            value: "py-11",
            label: "padding-top: 2.75rem; padding-bottom: 2.75rem;"
          },
          { value: "pt-11", label: "padding-top: 2.75rem;" },
          { value: "pr-11", label: "padding-right: 2.75rem;" },
          { value: "pb-11", label: "padding-bottom: 2.75rem;" },
          { value: "pl-11", label: "padding-left: 2.75rem;" }
        ]
      },
      {
        label: "48px",
        options: [
          { value: "p-12", label: "padding: 3rem;" },
          { value: "px-12", label: "padding-left: 3rem; padding-right: 3rem;" },
          { value: "py-12", label: "padding-top: 3rem; padding-bottom: 3rem;" },
          { value: "pt-12", label: "padding-top: 3rem;" },
          { value: "pr-12", label: "padding-right: 3rem;" },
          { value: "pb-12", label: "padding-bottom: 3rem;" },
          { value: "pl-12", label: "padding-left: 3rem;" }
        ]
      },

      {
        label: "56px",
        options: [
          { value: "p-14", label: "padding: 3.5rem;" },
          {
            value: "px-14",
            label: "padding-left: 3.5rem; padding-right: 3.5rem;"
          },
          {
            value: "py-14",
            label: "padding-top: 3.5rem; padding-bottom: 3.5rem;"
          },
          { value: "pt-14", label: "padding-top: 3.5rem;" },
          { value: "pr-14", label: "padding-right: 3.5rem;" },
          { value: "pb-14", label: "padding-bottom: 3.5rem;" },
          { value: "pl-14", label: "padding-left: 3.5rem;" }
        ]
      },

      {
        label: "64px",
        options: [
          { value: "p-16", label: "padding: 4rem;" },
          { value: "px-16", label: "padding-left: 4rem; padding-right: 4rem;" },
          { value: "py-16", label: "padding-top: 4rem; padding-bottom: 4rem;" },
          { value: "pt-16", label: "padding-top: 4rem;" },
          { value: "pr-16", label: "padding-right: 4rem;" },
          { value: "pb-16", label: "padding-bottom: 4rem;" },
          { value: "pl-16", label: "padding-left: 4rem;" }
        ]
      },
      {
        label: "80px",
        options: [
          { value: "p-20", label: "padding: 5rem;" },
          { value: "px-20", label: "padding-left: 5rem; padding-right: 5rem;" },
          { value: "py-20", label: "padding-top: 5rem; padding-bottom: 5rem;" },
          { value: "pt-20", label: "padding-top: 5rem;" },
          { value: "pr-20", label: "padding-right: 5rem;" },
          { value: "pb-20", label: "padding-bottom: 5rem;" },
          { value: "pl-20", label: "padding-left: 5rem;" }
        ]
      },
      {
        label: "96px",
        options: [
          { value: "p-24", label: "padding: 6rem;" },
          { value: "px-24", label: "padding-left: 6rem; padding-right: 6rem;" },
          { value: "py-24", label: "padding-top: 6rem; padding-bottom: 6rem;" },
          { value: "pt-24", label: "padding-top: 6rem;" },
          { value: "pr-24", label: "padding-right: 6rem;" },
          { value: "pb-24", label: "padding-bottom: 6rem;" },
          { value: "pl-24", label: "padding-left: 6rem;" }
        ]
      },

      {
        label: "112px",
        options: [
          { value: "p-28", label: "padding: 7rem;" },
          { value: "px-28", label: "padding-left: 7rem; padding-right: 7rem;" },
          { value: "py-28", label: "padding-top: 7rem; padding-bottom: 7rem;" },
          { value: "pt-28", label: "padding-top: 7rem;" },
          { value: "pr-28", label: "padding-right: 7rem;" },
          { value: "pb-28", label: "padding-bottom: 7rem;" },
          { value: "pl-28", label: "padding-left: 7rem;" }
        ]
      },
      {
        label: "128px",
        options: [
          { value: "p-32", label: "padding: 8rem;" },
          { value: "px-32", label: "padding-left: 8rem; padding-right: 8rem;" },
          { value: "py-32", label: "padding-top: 8rem; padding-bottom: 8rem;" },
          { value: "pt-32", label: "padding-top: 8rem;" },
          { value: "pr-32", label: "padding-right: 8rem;" },
          { value: "pb-32", label: "padding-bottom: 8rem;" },
          { value: "pl-32", label: "padding-left: 8rem;" }
        ]
      },
      {
        label: "144px",
        options: [
          { value: "p-36", label: "padding: 9rem;" },
          { value: "px-36", label: "padding-left: 9rem; padding-right: 9rem;" },
          { value: "py-36", label: "padding-top: 9rem; padding-bottom: 9rem;" },
          { value: "pt-36", label: "padding-top: 9rem;" },
          { value: "pr-36", label: "padding-right: 9rem;" },
          { value: "pb-36", label: "padding-bottom: 9rem;" },
          { value: "pl-36", label: "padding-left: 9rem;" }
        ]
      },
      {
        label: "160px",
        options: [
          { value: "p-40", label: "padding: 10rem;" },
          {
            value: "px-40",
            label: "padding-left: 10rem; padding-right: 10rem;"
          },
          {
            value: "py-40",
            label: "padding-top: 10rem; padding-bottom: 10rem;"
          },
          { value: "pt-40", label: "padding-top: 10rem;" },
          { value: "pr-40", label: "padding-right: 10rem;" },
          { value: "pb-40", label: "padding-bottom: 10rem;" },
          { value: "pl-40", label: "padding-left: 10rem;" }
        ]
      },
      {
        label: "176px",
        options: [
          { value: "p-44", label: "padding: 11rem;" },
          {
            value: "px-44",
            label: "padding-left: 11rem; padding-right: 11rem;"
          },
          {
            value: "py-44",
            label: "padding-top: 11rem; padding-bottom: 11rem;"
          },
          { value: "pt-44", label: "padding-top: 11rem;" },
          { value: "pr-44", label: "padding-right: 11rem;" },
          { value: "pb-44", label: "padding-bottom: 11rem;" },
          { value: "pl-44", label: "padding-left: 11rem;" }
        ]
      },
      {
        label: "192px",
        options: [
          { value: "p-48", label: "padding: 12rem;" },
          {
            value: "px-48",
            label: "padding-left: 12rem; padding-right: 12rem;"
          },
          {
            value: "py-48",
            label: "padding-top: 12rem; padding-bottom: 12rem;"
          },
          { value: "pt-48", label: "padding-top: 12rem;" },
          { value: "pr-48", label: "padding-right: 12rem;" },
          { value: "pb-48", label: "padding-bottom: 12rem;" },
          { value: "pl-48", label: "padding-left: 12rem;" }
        ]
      },
      {
        label: "208px",
        options: [
          { value: "p-52", label: "padding: 13rem;" },
          {
            value: "px-52",
            label: "padding-left: 13rem; padding-right: 13rem;"
          },
          {
            value: "py-52",
            label: "padding-top: 13rem; padding-bottom: 13rem;"
          },
          { value: "pt-52", label: "padding-top: 13rem;" },
          { value: "pr-52", label: "padding-right: 13rem;" },
          { value: "pb-52", label: "padding-bottom: 13rem;" },
          { value: "pl-52", label: "padding-left: 13rem;" }
        ]
      },
      {
        label: "224px",
        options: [
          { value: "p-56", label: "padding: 14rem;" },
          {
            value: "px-56",
            label: "padding-left: 14rem; padding-right: 14rem;"
          },
          {
            value: "py-56",
            label: "padding-top: 14rem; padding-bottom: 14rem;"
          },
          { value: "pt-56", label: "padding-top: 14rem;" },
          { value: "pr-56", label: "padding-right: 14rem;" },
          { value: "pb-56", label: "padding-bottom: 14rem;" },
          { value: "pl-56", label: "padding-left: 14rem;" }
        ]
      },
      {
        label: "240px",
        options: [
          { value: "p-60", label: "padding: 15rem;" },
          {
            value: "px-60",
            label: "padding-left: 15rem; padding-right: 15rem;"
          },
          {
            value: "py-60",
            label: "padding-top: 15rem; padding-bottom: 15rem;"
          },
          { value: "pt-60", label: "padding-top: 15rem;" },
          { value: "pr-60", label: "padding-right: 15rem;" },
          { value: "pb-60", label: "padding-bottom: 15rem;" },
          { value: "pl-60", label: "padding-left: 15rem;" }
        ]
      },
      {
        label: "256px",
        options: [
          { value: "p-64", label: "padding: 16rem;" },
          {
            value: "px-64",
            label: "padding-left: 16rem; padding-right: 16rem;"
          },
          {
            value: "py-64",
            label: "padding-top: 16rem; padding-bottom: 16rem;"
          },
          { value: "pt-64", label: "padding-top: 16rem;" },
          { value: "pr-64", label: "padding-right: 16rem;" },
          { value: "pb-64", label: "padding-bottom: 16rem;" },
          { value: "pl-64", label: "padding-left: 16rem;" }
        ]
      },
      {
        label: "288px",
        options: [
          { value: "p-72", label: "padding: 18rem;" },
          {
            value: "px-72",
            label: "padding-left: 18rem; padding-right: 18rem;"
          },
          {
            value: "py-72",
            label: "padding-top: 18rem; padding-bottom: 18rem;"
          },
          { value: "pt-72", label: "padding-top: 18rem;" },
          { value: "pr-72", label: "padding-right: 18rem;" },
          { value: "pb-72", label: "padding-bottom: 18rem;" },
          { value: "pl-72", label: "padding-left: 18rem;" }
        ]
      },
      {
        label: "320px",
        options: [
          { value: "p-80", label: "padding: 20rem;" },
          {
            value: "px-80",
            label: "padding-left: 20rem; padding-right: 20rem;"
          },
          {
            value: "py-80",
            label: "padding-top: 20rem; padding-bottom: 20rem;"
          },
          { value: "pt-80", label: "padding-top: 20rem;" },
          { value: "pr-80", label: "padding-right: 20rem;" },
          { value: "pb-80", label: "padding-bottom: 20rem;" },
          { value: "pl-80", label: "padding-left: 20rem;" }
        ]
      },
      {
        label: "384px",
        options: [
          { value: "p-96", label: "padding: 24rem;" },
          {
            value: "px-96",
            label: "padding-left: 24rem; padding-right: 24rem;"
          },
          {
            value: "py-96",
            label: "padding-top: 24rem; padding-bottom: 24rem;"
          },
          { value: "pt-96", label: "padding-top: 24rem;" },
          { value: "pr-96", label: "padding-right: 24rem;" },
          { value: "pb-96", label: "padding-bottom: 24rem;" },
          { value: "pl-96", label: "padding-left: 24rem;" }
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
      // m-0	margin: 0px;
      // mx-0	margin-left: 0px; margin-right: 0px;
      // my-0	margin-top: 0px; margin-bottom: 0px;
      // mt-0	margin-top: 0px;
      // mr-0	margin-right: 0px;
      // mb-0	margin-bottom: 0px;
      // ml-0	margin-left: 0px;

      // m-px	margin: 1px;
      // mx-px	margin-left: 1px; margin-right: 1px;
      // my-px	margin-top: 1px; margin-bottom: 1px;
      // mt-px	margin-top: 1px;
      // mr-px	margin-right: 1px;
      // mb-px	margin-bottom: 1px;
      // ml-px	margin-left: 1px;

      // m-0.5	margin: 0.125rem; /* 2px */
      // mx-0.5	margin-left: 0.125rem; margin-right: 0.125rem; /* 2px */
      // my-0.5	margin-top: 0.125rem; margin-bottom: 0.125rem; /* 2px */
      // mt-0.5	margin-top: 0.125rem; /* 2px */
      // mr-0.5	margin-right: 0.125rem; /* 2px */
      // mb-0.5	margin-bottom: 0.125rem; /* 2px */
      // ml-0.5	margin-left: 0.125rem; /* 2px */

      // m-1	margin: 0.25rem; /* 4px */
      // mx-1	margin-left: 0.25rem; margin-right: 0.25rem; /* 4px */
      // my-1	margin-top: 0.25rem; margin-bottom: 0.25rem; /* 4px */
      // mt-1	margin-top: 0.25rem; /* 4px */
      // mr-1	margin-right: 0.25rem; /* 4px */
      // mb-1	margin-bottom: 0.25rem; /* 4px */
      // ml-1	margin-left: 0.25rem; /* 4px */

      // m-1.5	margin: 0.375rem; /* 6px */
      // mx-1.5	margin-left: 0.375rem; margin-right: 0.375rem; /* 6px */
      // my-1.5	margin-top: 0.375rem; margin-bottom: 0.375rem; /* 6px */
      // mt-1.5	margin-top: 0.375rem; /* 6px */
      // mr-1.5	margin-right: 0.375rem; /* 6px */
      // mb-1.5	margin-bottom: 0.375rem; /* 6px */
      // ml-1.5	margin-left: 0.375rem; /* 6px */

      // m-2	margin: 0.5rem; /* 8px */
      // mx-2	margin-left: 0.5rem; margin-right: 0.5rem; /* 8px */
      // my-2	margin-top: 0.5rem; margin-bottom: 0.5rem; /* 8px */
      // mt-2	margin-top: 0.5rem; /* 8px */
      // mr-2	margin-right: 0.5rem; /* 8px */
      // mb-2	margin-bottom: 0.5rem; /* 8px */
      // ml-2	margin-left: 0.5rem; /* 8px */

      // m-2.5	margin: 0.625rem; /* 10px */
      // mx-2.5	margin-left: 0.625rem; margin-right: 0.625rem; /* 10px */
      // my-2.5	margin-top: 0.625rem; margin-bottom: 0.625rem; /* 10px */
      // mt-2.5	margin-top: 0.625rem; /* 10px */
      // mr-2.5	margin-right: 0.625rem; /* 10px */
      // mb-2.5	margin-bottom: 0.625rem; /* 10px */
      // ml-2.5	margin-left: 0.625rem; /* 10px */

      // m-3	margin: 0.75rem; /* 12px */
      // mx-3	margin-left: 0.75rem; margin-right: 0.75rem; /* 12px */
      // my-3	margin-top: 0.75rem; margin-bottom: 0.75rem; /* 12px */
      // mt-3	margin-top: 0.75rem; /* 12px */
      // mr-3	margin-right: 0.75rem; /* 12px */
      // mb-3	margin-bottom: 0.75rem; /* 12px */
      // ml-3	margin-left: 0.75rem; /* 12px */

      // m-3.5	margin: 0.875rem; /* 14px */
      // mx-3.5	margin-left: 0.875rem; margin-right: 0.875rem; /* 14px */
      // my-3.5	margin-top: 0.875rem; margin-bottom: 0.875rem; /* 14px */
      // mt-3.5	margin-top: 0.875rem; /* 14px */
      // mr-3.5	margin-right: 0.875rem; /* 14px */
      // mb-3.5	margin-bottom: 0.875rem; /* 14px */
      // ml-3.5	margin-left: 0.875rem; /* 14px */

      // m-4	margin: 1rem; /* 16px */
      // mx-4	margin-left: 1rem; margin-right: 1rem; /* 16px */
      // my-4	margin-top: 1rem;  margin-bottom: 1rem; /* 16px */
      // mt-4	margin-top: 1rem; /* 16px */
      // mr-4	margin-right: 1rem; /* 16px */
      // mb-4	margin-bottom: 1rem; /* 16px */
      // ml-4	margin-left: 1rem; /* 16px */

      // m-5	margin: 1.25rem; /* 20px */
      // mx-5	margin-left: 1.25rem; margin-right: 1.25rem; /* 20px */
      // my-5	margin-top: 1.25rem; margin-bottom: 1.25rem; /* 20px */
      // mt-5	margin-top: 1.25rem; /* 20px */
      // mr-5	margin-right: 1.25rem; /* 20px */
      // mb-5	margin-bottom: 1.25rem; /* 20px */
      // ml-5	margin-left: 1.25rem; /* 20px */

      // m-6	margin: 1.5rem; /* 24px */
      // mx-6	margin-left: 1.5rem; margin-right: 1.5rem; /* 24px */
      // my-6	margin-top: 1.5rem; margin-bottom: 1.5rem; /* 24px */
      // mt-6	margin-top: 1.5rem; /* 24px */
      // mr-6	margin-right: 1.5rem; /* 24px */
      // mb-6	margin-bottom: 1.5rem; /* 24px */
      // ml-6	margin-left: 1.5rem; /* 24px */

      // m-7	margin: 1.75rem; /* 28px */
      // mx-7	margin-left: 1.75rem; margin-right: 1.75rem; /* 28px */
      // my-7	margin-top: 1.75rem; margin-bottom: 1.75rem; /* 28px */
      // mt-7	margin-top: 1.75rem; /* 28px */
      // mr-7	margin-right: 1.75rem; /* 28px */
      // mb-7	margin-bottom: 1.75rem; /* 28px */
      // ml-7	margin-left: 1.75rem; /* 28px */

      // m-8	margin: 2rem; /* 32px */
      // mx-8	margin-left: 2rem; margin-right: 2rem; /* 32px */
      // my-8	margin-top: 2rem; margin-bottom: 2rem; /* 32px */
      // mt-8	margin-top: 2rem; /* 32px */
      // mr-8	margin-right: 2rem; /* 32px */
      // mb-8	margin-bottom: 2rem; /* 32px */
      // ml-8	margin-left: 2rem; /* 32px */

      // m-9	margin: 2.25rem; /* 36px */
      // mx-9	margin-left: 2.25rem; margin-right: 2.25rem; /* 36px */
      // my-9	margin-top: 2.25rem; margin-bottom: 2.25rem; /* 36px */
      // mt-9	margin-top: 2.25rem; /* 36px */
      // mr-9	margin-right: 2.25rem; /* 36px */
      // mb-9	margin-bottom: 2.25rem; /* 36px */
      // ml-9	margin-left: 2.25rem; /* 36px */

      // m-10	margin: 2.5rem; /* 40px */
      // mx-10	margin-left: 2.5rem; margin-right: 2.5rem; /* 40px */
      // my-10	margin-top: 2.5rem; margin-bottom: 2.5rem; /* 40px */
      // mt-10	margin-top: 2.5rem; /* 40px */
      // mr-10	margin-right: 2.5rem; /* 40px */
      // mb-10	margin-bottom: 2.5rem; /* 40px */
      // ml-10	margin-left: 2.5rem; /* 40px */

      // m-11	margin: 2.75rem; /* 44px */
      // mx-11	margin-left: 2.75rem; margin-right: 2.75rem; /* 44px */
      // my-11	margin-top: 2.75rem; margin-bottom: 2.75rem; /* 44px */
      // mt-11	margin-top: 2.75rem; /* 44px */
      // mr-11	margin-right: 2.75rem; /* 44px */
      // mb-11	margin-bottom: 2.75rem; /* 44px */
      // ml-11	margin-left: 2.75rem; /* 44px */

      // m-12	margin: 3rem; /* 48px */
      // mx-12	margin-left: 3rem; margin-right: 3rem; /* 48px */
      // my-12	margin-top: 3rem; margin-bottom: 3rem; /* 48px */
      // mt-12	margin-top: 3rem; /* 48px */
      // mr-12	margin-right: 3rem; /* 48px */
      // mb-12	margin-bottom: 3rem; /* 48px */
      // ml-12	margin-left: 3rem; /* 48px */

      // m-14	margin: 3.5rem; /* 56px */
      // mx-14	margin-left: 3.5rem; margin-right: 3.5rem; /* 56px */
      // my-14	margin-top: 3.5rem; margin-bottom: 3.5rem; /* 56px */
      // mt-14	margin-top: 3.5rem; /* 56px */
      // mr-14	margin-right: 3.5rem; /* 56px */
      // mb-14	margin-bottom: 3.5rem; /* 56px */
      // ml-14	margin-left: 3.5rem; /* 56px */

      // m-16	margin: 4rem; /* 64px */
      // mx-16	margin-left: 4rem; margin-right: 4rem; /* 64px */
      // my-16	margin-top: 4rem; margin-bottom: 4rem; /* 64px */
      // mt-16	margin-top: 4rem; /* 64px */
      // mr-16	margin-right: 4rem; /* 64px */
      // mb-16	margin-bottom: 4rem; /* 64px */
      // ml-16	margin-left: 4rem; /* 64px */

      // m-20	margin: 5rem; /* 80px */
      // mx-20	margin-left: 5rem; margin-right: 5rem; /* 80px */
      // my-20	margin-top: 5rem; margin-bottom: 5rem; /* 80px */
      // mt-20	margin-top: 5rem; /* 80px */
      // mr-20	margin-right: 5rem; /* 80px */
      // mb-20	margin-bottom: 5rem; /* 80px */
      // ml-20	margin-left: 5rem; /* 80px */

      // m-24	margin: 6rem; /* 96px */
      // mx-24	margin-left: 6rem; margin-right: 6rem; /* 96px */
      // my-24	margin-top: 6rem; margin-bottom: 6rem; /* 96px */
      // mt-24	margin-top: 6rem; /* 96px */
      // mr-24	margin-right: 6rem; /* 96px */
      // mb-24	margin-bottom: 6rem; /* 96px */
      // ml-24	margin-left: 6rem; /* 96px */

      // m-28	margin: 7rem; /* 112px */
      // mx-28	margin-left: 7rem; margin-right: 7rem; /* 112px */
      // my-28	margin-top: 7rem; margin-bottom: 7rem; /* 112px */
      // mt-28	margin-top: 7rem; /* 112px */
      // mr-28	margin-right: 7rem; /* 112px */
      // mb-28	margin-bottom: 7rem; /* 112px */
      // ml-28	margin-left: 7rem; /* 112px */

      // m-32	margin: 8rem; /* 128px */
      // mx-32	margin-left: 8rem; margin-right: 8rem; /* 128px */
      // my-32	margin-top: 8rem; margin-bottom: 8rem; /* 128px */
      // mt-32	margin-top: 8rem; /* 128px */
      // mr-32	margin-right: 8rem; /* 128px */
      // mb-32	margin-bottom: 8rem; /* 128px */
      // ml-32	margin-left: 8rem; /* 128px */

      // m-36	margin: 9rem; /* 144px */
      // mx-36	margin-left: 9rem; margin-right: 9rem; /* 144px */
      // my-36	margin-top: 9rem; margin-bottom: 9rem; /* 144px */
      // mt-36	margin-top: 9rem; /* 144px */
      // mr-36	margin-right: 9rem; /* 144px */
      // mb-36	margin-bottom: 9rem; /* 144px */
      // ml-36	margin-left: 9rem; /* 144px */

      // m-40	margin: 10rem; /* 160px */
      // mx-40	margin-left: 10rem; margin-right: 10rem; /* 160px */
      // my-40	margin-top: 10rem; margin-bottom: 10rem; /* 160px */
      // mt-40	margin-top: 10rem; /* 160px */
      // mr-40	margin-right: 10rem; /* 160px */
      // mb-40	margin-bottom: 10rem; /* 160px */
      // ml-40	margin-left: 10rem; /* 160px */

      // m-44	margin: 11rem; /* 176px */
      // mx-44	margin-left: 11rem; margin-right: 11rem; /* 176px */
      // my-44	margin-top: 11rem; margin-bottom: 11rem; /* 176px */
      // mt-44	margin-top: 11rem; /* 176px */
      // mr-44	margin-right: 11rem; /* 176px */
      // mb-44	margin-bottom: 11rem; /* 176px */
      // ml-44	margin-left: 11rem; /* 176px */

      // m-48	margin: 12rem; /* 192px */
      // mx-48	margin-left: 12rem; margin-right: 12rem; /* 192px */
      // my-48	margin-top: 12rem; margin-bottom: 12rem; /* 192px */
      // mt-48	margin-top: 12rem; /* 192px */
      // mr-48	margin-right: 12rem; /* 192px */
      // mb-48	margin-bottom: 12rem; /* 192px */
      // ml-48	margin-left: 12rem; /* 192px */

      // m-52	margin: 13rem; /* 208px */
      // mx-52	margin-left: 13rem; margin-right: 13rem; /* 208px */
      // my-52	margin-top: 13rem; margin-bottom: 13rem; /* 208px */
      // mt-52	margin-top: 13rem; /* 208px */
      // mr-52	margin-right: 13rem; /* 208px */
      // mb-52	margin-bottom: 13rem; /* 208px */
      // ml-52	margin-left: 13rem; /* 208px */

      // m-56	margin: 14rem; /* 224px */
      // mx-56	margin-left: 14rem; margin-right: 14rem; /* 224px */
      // my-56	margin-top: 14rem; margin-bottom: 14rem; /* 224px */
      // mt-56	margin-top: 14rem; /* 224px */
      // mr-56	margin-right: 14rem; /* 224px */
      // mb-56	margin-bottom: 14rem; /* 224px */
      // ml-56	margin-left: 14rem; /* 224px */

      // m-60	margin: 15rem; /* 240px */
      // mx-60	margin-left: 15rem; margin-right: 15rem; /* 240px */
      // my-60	margin-top: 15rem; margin-bottom: 15rem; /* 240px */
      // mt-60	margin-top: 15rem; /* 240px */
      // mr-60	margin-right: 15rem; /* 240px */
      // mb-60	margin-bottom: 15rem; /* 240px */
      // ml-60	margin-left: 15rem; /* 240px */

      // m-64	margin: 16rem; /* 256px */
      // mx-64	margin-left: 16rem; margin-right: 16rem; /* 256px */
      // my-64	margin-top: 16rem; margin-bottom: 16rem; /* 256px */
      // mt-64	margin-top: 16rem; /* 256px */
      // mr-64	margin-right: 16rem; /* 256px */
      // mb-64	margin-bottom: 16rem; /* 256px */
      // ml-64	margin-left: 16rem; /* 256px */

      // m-72	margin: 18rem; /* 288px */
      // mx-72	margin-left: 18rem; margin-right: 18rem; /* 288px */
      // my-72	margin-top: 18rem; margin-bottom: 18rem; /* 288px */
      // mt-72	margin-top: 18rem; /* 288px */
      // mr-72	margin-right: 18rem; /* 288px */
      // mb-72	margin-bottom: 18rem; /* 288px */
      // ml-72	margin-left: 18rem; /* 288px */

      // m-80	margin: 20rem; /* 320px */
      // mx-80	margin-left: 20rem; margin-right: 20rem; /* 320px */
      // my-80	margin-top: 20rem; margin-bottom: 20rem; /* 320px */
      // mt-80	margin-top: 20rem; /* 320px */
      // mr-80	margin-right: 20rem; /* 320px */
      // mb-80	margin-bottom: 20rem; /* 320px */
      // ml-80	margin-left: 20rem; /* 320px */

      // m-96	margin: 24rem; /* 384px */
      // mx-96	margin-left: 24rem; margin-right: 24rem; /* 384px */
      // my-96	margin-top: 24rem; margin-bottom: 24rem; /* 384px */
      // mt-96	margin-top: 24rem; /* 384px */
      // mr-96	margin-right: 24rem; /* 384px */
      // mb-96	margin-bottom: 24rem; /* 384px */
      // ml-96	margin-left: 24rem; /* 384px */

      // m-auto	margin: auto;
      // mx-auto	margin-left: auto; margin-right: auto;
      // my-auto	margin-top: auto; margin-bottom: auto;
      // mt-auto	margin-top: auto;
      // mr-auto	margin-right: auto;
      // mb-auto	margin-bottom: auto;
      // ml-auto	margin-left: auto;
      {
        label: "",
        options: []
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
      { value: "", label: "" },
      { value: "", label: "" }
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
