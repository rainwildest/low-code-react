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
          }
        ]
      }
    ]

    // inset-x-3.5	left: 0.875rem; /* 14px */
    // right: 0.875rem; /* 14px */
    // inset-y-3.5	top: 0.875rem; /* 14px */
    // bottom: 0.875rem; /* 14px */
    // top-3.5	top: 0.875rem; /* 14px */
    // right-3.5	right: 0.875rem; /* 14px */
    // bottom-3.5	bottom: 0.875rem; /* 14px */
    // left-3.5	left: 0.875rem; /* 14px */
    // inset-4	top: 1rem; /* 16px */
    // right: 1rem; /* 16px */
    // bottom: 1rem; /* 16px */
    // left: 1rem; /* 16px */
    // inset-x-4	left: 1rem; /* 16px */
    // right: 1rem; /* 16px */
    // inset-y-4	top: 1rem; /* 16px */
    // bottom: 1rem; /* 16px */
    // top-4	top: 1rem; /* 16px */
    // right-4	right: 1rem; /* 16px */
    // bottom-4	bottom: 1rem; /* 16px */
    // left-4	left: 1rem; /* 16px */
    // inset-5	top: 1.25rem; /* 20px */
    // right: 1.25rem; /* 20px */
    // bottom: 1.25rem; /* 20px */
    // left: 1.25rem; /* 20px */
    // inset-x-5	left: 1.25rem; /* 20px */
    // right: 1.25rem; /* 20px */
    // inset-y-5	top: 1.25rem; /* 20px */
    // bottom: 1.25rem; /* 20px */
    // top-5	top: 1.25rem; /* 20px */
    // right-5	right: 1.25rem; /* 20px */
    // bottom-5	bottom: 1.25rem; /* 20px */
    // left-5	left: 1.25rem; /* 20px */
    // inset-6	top: 1.5rem; /* 24px */
    // right: 1.5rem; /* 24px */
    // bottom: 1.5rem; /* 24px */
    // left: 1.5rem; /* 24px */
    // inset-x-6	left: 1.5rem; /* 24px */
    // right: 1.5rem; /* 24px */
    // inset-y-6	top: 1.5rem; /* 24px */
    // bottom: 1.5rem; /* 24px */
    // top-6	top: 1.5rem; /* 24px */
    // right-6	right: 1.5rem; /* 24px */
    // bottom-6	bottom: 1.5rem; /* 24px */
    // left-6	left: 1.5rem; /* 24px */
    // inset-7	top: 1.75rem; /* 28px */
    // right: 1.75rem; /* 28px */
    // bottom: 1.75rem; /* 28px */
    // left: 1.75rem; /* 28px */
    // inset-x-7	left: 1.75rem; /* 28px */
    // right: 1.75rem; /* 28px */
    // inset-y-7	top: 1.75rem; /* 28px */
    // bottom: 1.75rem; /* 28px */
    // top-7	top: 1.75rem; /* 28px */
    // right-7	right: 1.75rem; /* 28px */
    // bottom-7	bottom: 1.75rem; /* 28px */
    // left-7	left: 1.75rem; /* 28px */
    // inset-8	top: 2rem; /* 32px */
    // right: 2rem; /* 32px */
    // bottom: 2rem; /* 32px */
    // left: 2rem; /* 32px */
    // inset-x-8	left: 2rem; /* 32px */
    // right: 2rem; /* 32px */
    // inset-y-8	top: 2rem; /* 32px */
    // bottom: 2rem; /* 32px */
    // top-8	top: 2rem; /* 32px */
    // right-8	right: 2rem; /* 32px */
    // bottom-8	bottom: 2rem; /* 32px */
    // left-8	left: 2rem; /* 32px */
    // inset-9	top: 2.25rem; /* 36px */
    // right: 2.25rem; /* 36px */
    // bottom: 2.25rem; /* 36px */
    // left: 2.25rem; /* 36px */
    // inset-x-9	left: 2.25rem; /* 36px */
    // right: 2.25rem; /* 36px */
    // inset-y-9	top: 2.25rem; /* 36px */
    // bottom: 2.25rem; /* 36px */
    // top-9	top: 2.25rem; /* 36px */
    // right-9	right: 2.25rem; /* 36px */
    // bottom-9	bottom: 2.25rem; /* 36px */
    // left-9	left: 2.25rem; /* 36px */
    // inset-10	top: 2.5rem; /* 40px */
    // right: 2.5rem; /* 40px */
    // bottom: 2.5rem; /* 40px */
    // left: 2.5rem; /* 40px */
    // inset-x-10	left: 2.5rem; /* 40px */
    // right: 2.5rem; /* 40px */
    // inset-y-10	top: 2.5rem; /* 40px */
    // bottom: 2.5rem; /* 40px */
    // top-10	top: 2.5rem; /* 40px */
    // right-10	right: 2.5rem; /* 40px */
    // bottom-10	bottom: 2.5rem; /* 40px */
    // left-10	left: 2.5rem; /* 40px */
    // inset-11	top: 2.75rem; /* 44px */
    // right: 2.75rem; /* 44px */
    // bottom: 2.75rem; /* 44px */
    // left: 2.75rem; /* 44px */
    // inset-x-11	left: 2.75rem; /* 44px */
    // right: 2.75rem; /* 44px */
    // inset-y-11	top: 2.75rem; /* 44px */
    // bottom: 2.75rem; /* 44px */
    // top-11	top: 2.75rem; /* 44px */
    // right-11	right: 2.75rem; /* 44px */
    // bottom-11	bottom: 2.75rem; /* 44px */
    // left-11	left: 2.75rem; /* 44px */
    // inset-12	top: 3rem; /* 48px */
    // right: 3rem; /* 48px */
    // bottom: 3rem; /* 48px */
    // left: 3rem; /* 48px */
    // inset-x-12	left: 3rem; /* 48px */
    // right: 3rem; /* 48px */
    // inset-y-12	top: 3rem; /* 48px */
    // bottom: 3rem; /* 48px */
    // top-12	top: 3rem; /* 48px */
    // right-12	right: 3rem; /* 48px */
    // bottom-12	bottom: 3rem; /* 48px */
    // left-12	left: 3rem; /* 48px */
    // inset-14	top: 3.5rem; /* 56px */
    // right: 3.5rem; /* 56px */
    // bottom: 3.5rem; /* 56px */
    // left: 3.5rem; /* 56px */
    // inset-x-14	left: 3.5rem; /* 56px */
    // right: 3.5rem; /* 56px */
    // inset-y-14	top: 3.5rem; /* 56px */
    // bottom: 3.5rem; /* 56px */
    // top-14	top: 3.5rem; /* 56px */
    // right-14	right: 3.5rem; /* 56px */
    // bottom-14	bottom: 3.5rem; /* 56px */
    // left-14	left: 3.5rem; /* 56px */
    // inset-16	top: 4rem; /* 64px */
    // right: 4rem; /* 64px */
    // bottom: 4rem; /* 64px */
    // left: 4rem; /* 64px */
    // inset-x-16	left: 4rem; /* 64px */
    // right: 4rem; /* 64px */
    // inset-y-16	top: 4rem; /* 64px */
    // bottom: 4rem; /* 64px */
    // top-16	top: 4rem; /* 64px */
    // right-16	right: 4rem; /* 64px */
    // bottom-16	bottom: 4rem; /* 64px */
    // left-16	left: 4rem; /* 64px */
    // inset-20	top: 5rem; /* 80px */
    // right: 5rem; /* 80px */
    // bottom: 5rem; /* 80px */
    // left: 5rem; /* 80px */
    // inset-x-20	left: 5rem; /* 80px */
    // right: 5rem; /* 80px */
    // inset-y-20	top: 5rem; /* 80px */
    // bottom: 5rem; /* 80px */
    // top-20	top: 5rem; /* 80px */
    // right-20	right: 5rem; /* 80px */
    // bottom-20	bottom: 5rem; /* 80px */
    // left-20	left: 5rem; /* 80px */
    // inset-24	top: 6rem; /* 96px */
    // right: 6rem; /* 96px */
    // bottom: 6rem; /* 96px */
    // left: 6rem; /* 96px */
    // inset-x-24	left: 6rem; /* 96px */
    // right: 6rem; /* 96px */
    // inset-y-24	top: 6rem; /* 96px */
    // bottom: 6rem; /* 96px */
    // top-24	top: 6rem; /* 96px */
    // right-24	right: 6rem; /* 96px */
    // bottom-24	bottom: 6rem; /* 96px */
    // left-24	left: 6rem; /* 96px */
    // inset-28	top: 7rem; /* 112px */
    // right: 7rem; /* 112px */
    // bottom: 7rem; /* 112px */
    // left: 7rem; /* 112px */
    // inset-x-28	left: 7rem; /* 112px */
    // right: 7rem; /* 112px */
    // inset-y-28	top: 7rem; /* 112px */
    // bottom: 7rem; /* 112px */
    // top-28	top: 7rem; /* 112px */
    // right-28	right: 7rem; /* 112px */
    // bottom-28	bottom: 7rem; /* 112px */
    // left-28	left: 7rem; /* 112px */
    // inset-32	top: 8rem; /* 128px */
    // right: 8rem; /* 128px */
    // bottom: 8rem; /* 128px */
    // left: 8rem; /* 128px */
    // inset-x-32	left: 8rem; /* 128px */
    // right: 8rem; /* 128px */
    // inset-y-32	top: 8rem; /* 128px */
    // bottom: 8rem; /* 128px */
    // top-32	top: 8rem; /* 128px */
    // right-32	right: 8rem; /* 128px */
    // bottom-32	bottom: 8rem; /* 128px */
    // left-32	left: 8rem; /* 128px */
    // inset-36	top: 9rem; /* 144px */
    // right: 9rem; /* 144px */
    // bottom: 9rem; /* 144px */
    // left: 9rem; /* 144px */
    // inset-x-36	left: 9rem; /* 144px */
    // right: 9rem; /* 144px */
    // inset-y-36	top: 9rem; /* 144px */
    // bottom: 9rem; /* 144px */
    // top-36	top: 9rem; /* 144px */
    // right-36	right: 9rem; /* 144px */
    // bottom-36	bottom: 9rem; /* 144px */
    // left-36	left: 9rem; /* 144px */
    // inset-40	top: 10rem; /* 160px */
    // right: 10rem; /* 160px */
    // bottom: 10rem; /* 160px */
    // left: 10rem; /* 160px */
    // inset-x-40	left: 10rem; /* 160px */
    // right: 10rem; /* 160px */
    // inset-y-40	top: 10rem; /* 160px */
    // bottom: 10rem; /* 160px */
    // top-40	top: 10rem; /* 160px */
    // right-40	right: 10rem; /* 160px */
    // bottom-40	bottom: 10rem; /* 160px */
    // left-40	left: 10rem; /* 160px */
    // inset-44	top: 11rem; /* 176px */
    // right: 11rem; /* 176px */
    // bottom: 11rem; /* 176px */
    // left: 11rem; /* 176px */
    // inset-x-44	left: 11rem; /* 176px */
    // right: 11rem; /* 176px */
    // inset-y-44	top: 11rem; /* 176px */
    // bottom: 11rem; /* 176px */
    // top-44	top: 11rem; /* 176px */
    // right-44	right: 11rem; /* 176px */
    // bottom-44	bottom: 11rem; /* 176px */
    // left-44	left: 11rem; /* 176px */
    // inset-48	top: 12rem; /* 192px */
    // right: 12rem; /* 192px */
    // bottom: 12rem; /* 192px */
    // left: 12rem; /* 192px */
    // inset-x-48	left: 12rem; /* 192px */
    // right: 12rem; /* 192px */
    // inset-y-48	top: 12rem; /* 192px */
    // bottom: 12rem; /* 192px */
    // top-48	top: 12rem; /* 192px */
    // right-48	right: 12rem; /* 192px */
    // bottom-48	bottom: 12rem; /* 192px */
    // left-48	left: 12rem; /* 192px */
    // inset-52	top: 13rem; /* 208px */
    // right: 13rem; /* 208px */
    // bottom: 13rem; /* 208px */
    // left: 13rem; /* 208px */
    // inset-x-52	left: 13rem; /* 208px */
    // right: 13rem; /* 208px */
    // inset-y-52	top: 13rem; /* 208px */
    // bottom: 13rem; /* 208px */
    // top-52	top: 13rem; /* 208px */
    // right-52	right: 13rem; /* 208px */
    // bottom-52	bottom: 13rem; /* 208px */
    // left-52	left: 13rem; /* 208px */
    // inset-56	top: 14rem; /* 224px */
    // right: 14rem; /* 224px */
    // bottom: 14rem; /* 224px */
    // left: 14rem; /* 224px */
    // inset-x-56	left: 14rem; /* 224px */
    // right: 14rem; /* 224px */
    // inset-y-56	top: 14rem; /* 224px */
    // bottom: 14rem; /* 224px */
    // top-56	top: 14rem; /* 224px */
    // right-56	right: 14rem; /* 224px */
    // bottom-56	bottom: 14rem; /* 224px */
    // left-56	left: 14rem; /* 224px */
    // inset-60	top: 15rem; /* 240px */
    // right: 15rem; /* 240px */
    // bottom: 15rem; /* 240px */
    // left: 15rem; /* 240px */
    // inset-x-60	left: 15rem; /* 240px */
    // right: 15rem; /* 240px */
    // inset-y-60	top: 15rem; /* 240px */
    // bottom: 15rem; /* 240px */
    // top-60	top: 15rem; /* 240px */
    // right-60	right: 15rem; /* 240px */
    // bottom-60	bottom: 15rem; /* 240px */
    // left-60	left: 15rem; /* 240px */
    // inset-64	top: 16rem; /* 256px */
    // right: 16rem; /* 256px */
    // bottom: 16rem; /* 256px */
    // left: 16rem; /* 256px */
    // inset-x-64	left: 16rem; /* 256px */
    // right: 16rem; /* 256px */
    // inset-y-64	top: 16rem; /* 256px */
    // bottom: 16rem; /* 256px */
    // top-64	top: 16rem; /* 256px */
    // right-64	right: 16rem; /* 256px */
    // bottom-64	bottom: 16rem; /* 256px */
    // left-64	left: 16rem; /* 256px */
    // inset-72	top: 18rem; /* 288px */
    // right: 18rem; /* 288px */
    // bottom: 18rem; /* 288px */
    // left: 18rem; /* 288px */
    // inset-x-72	left: 18rem; /* 288px */
    // right: 18rem; /* 288px */
    // inset-y-72	top: 18rem; /* 288px */
    // bottom: 18rem; /* 288px */
    // top-72	top: 18rem; /* 288px */
    // right-72	right: 18rem; /* 288px */
    // bottom-72	bottom: 18rem; /* 288px */
    // left-72	left: 18rem; /* 288px */
    // inset-80	top: 20rem; /* 320px */
    // right: 20rem; /* 320px */
    // bottom: 20rem; /* 320px */
    // left: 20rem; /* 320px */
    // inset-x-80	left: 20rem; /* 320px */
    // right: 20rem; /* 320px */
    // inset-y-80	top: 20rem; /* 320px */
    // bottom: 20rem; /* 320px */
    // top-80	top: 20rem; /* 320px */
    // right-80	right: 20rem; /* 320px */
    // bottom-80	bottom: 20rem; /* 320px */
    // left-80	left: 20rem; /* 320px */
    // inset-96	top: 24rem; /* 384px */
    // right: 24rem; /* 384px */
    // bottom: 24rem; /* 384px */
    // left: 24rem; /* 384px */
    // inset-x-96	left: 24rem; /* 384px */
    // right: 24rem; /* 384px */
    // inset-y-96	top: 24rem; /* 384px */
    // bottom: 24rem; /* 384px */
    // top-96	top: 24rem; /* 384px */
    // right-96	right: 24rem; /* 384px */
    // bottom-96	bottom: 24rem; /* 384px */
    // left-96	left: 24rem; /* 384px */
    // inset-auto	top: auto;
    // right: auto;
    // bottom: auto;
    // left: auto;
    // inset-1/2	top: 50%;
    // right: 50%;
    // bottom: 50%;
    // left: 50%;
    // inset-1/3	top: 33.333333%;
    // right: 33.333333%;
    // bottom: 33.333333%;
    // left: 33.333333%;
    // inset-2/3	top: 66.666667%;
    // right: 66.666667%;
    // bottom: 66.666667%;
    // left: 66.666667%;
    // inset-1/4	top: 25%;
    // right: 25%;
    // bottom: 25%;
    // left: 25%;
    // inset-2/4	top: 50%;
    // right: 50%;
    // bottom: 50%;
    // left: 50%;
    // inset-3/4	top: 75%;
    // right: 75%;
    // bottom: 75%;
    // left: 75%;
    // inset-full	top: 100%;
    // right: 100%;
    // bottom: 100%;
    // left: 100%;
    // inset-x-auto	left: auto;
    // right: auto;
    // inset-x-1/2	left: 50%;
    // right: 50%;
    // inset-x-1/3	left: 33.333333%;
    // right: 33.333333%;
    // inset-x-2/3	left: 66.666667%;
    // right: 66.666667%;
    // inset-x-1/4	left: 25%;
    // right: 25%;
    // inset-x-2/4	left: 50%;
    // right: 50%;
    // inset-x-3/4	left: 75%;
    // right: 75%;
    // inset-x-full	left: 100%;
    // right: 100%;
    // inset-y-auto	top: auto;
    // bottom: auto;
    // inset-y-1/2	top: 50%;
    // bottom: 50%;
    // inset-y-1/3	top: 33.333333%;
    // bottom: 33.333333%;
    // inset-y-2/3	top: 66.666667%;
    // bottom: 66.666667%;
    // inset-y-1/4	top: 25%;
    // bottom: 25%;
    // inset-y-2/4	top: 50%;
    // bottom: 50%;
    // inset-y-3/4	top: 75%;
    // bottom: 75%;
    // inset-y-full	top: 100%;
    // bottom: 100%;
    // top-auto	top: auto;
    // top-1/2	top: 50%;
    // top-1/3	top: 33.333333%;
    // top-2/3	top: 66.666667%;
    // top-1/4	top: 25%;
    // top-2/4	top: 50%;
    // top-3/4	top: 75%;
    // top-full	top: 100%;
    // right-auto	right: auto;
    // right-1/2	right: 50%;
    // right-1/3	right: 33.333333%;
    // right-2/3	right: 66.666667%;
    // right-1/4	right: 25%;
    // right-2/4	right: 50%;
    // right-3/4	right: 75%;
    // right-full	right: 100%;
    // bottom-auto	bottom: auto;
    // bottom-1/2	bottom: 50%;
    // bottom-1/3	bottom: 33.333333%;
    // bottom-2/3	bottom: 66.666667%;
    // bottom-1/4	bottom: 25%;
    // bottom-2/4	bottom: 50%;
    // bottom-3/4	bottom: 75%;
    // bottom-full	bottom: 100%;
    // left-auto	left: auto;
    // left-1/2	left: 50%;
    // left-1/3	left: 33.333333%;
    // left-2/3	left: 66.666667%;
    // left-1/4	left: 25%;
    // left-2/4	left: 50%;
    // left-3/4	left: 75%;
    // left-full	left: 100%;
  },
  {
    type: "z-index",
    header: "Z-Index 属性",
    title: "Z-Index ClassName：",
    selectPlaceholder: "z-index: xxxx",
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
