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
    ]
  },
  {
    type: "box-sizing",
    header: "Box Sizing 属性",
    title: "Box Sizing ClassName：",
    selectPlaceholder: "box-sizing: xxxx",
    hasCustom: false,
    options: [
      ...init,
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
      ...init,
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
      ...init,
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
      ...init,
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
      ...init,
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
      ...init,
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
      ...init,
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
      ...init,
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
      ...init,
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
      ...init,
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
      ...init,
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
      ...init,
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
      ...init,
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
      ...init,
      { value: "flex-wrap", label: "flex-wrap: wrap;" },
      { value: "flex-wrap-reverse", label: "flex-wrap: wrap-reverse;" },
      { value: "flex-nowrap", label: "flex-wrap: nowrap;" }
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
