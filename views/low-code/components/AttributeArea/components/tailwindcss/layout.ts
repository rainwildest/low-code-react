import {
  AspectRatioType,
  ColumnsType,
  BreakAfterType,
  BreakBeforeType,
  BreakInsideType,
  BoxDecorationBreakType,
  BoxSizingType,
  DisplayType,
  FloatsType,
  ClearType,
  ObjectFitType,
  ObjectPositionType,
  OverflowType,
  OverscrollBehaviorType,
  PositionType,
  InsetType,
  VisibilityType,
  ZIndexType
} from "config/tailwind-type";

export const AspectRatio: AttributeProps = {
  type: AspectRatioType.toString(),
  header: "Aspect Ratio 属性",
  title: "Aspect Ratio ClassName：",
  selectPlaceholder: "aspect-ratio: xxxx",
  hasCustom: false,
  options: [
    { value: "aspect-auto", label: "aspect-ratio: auto;" },
    { value: "aspect-square", label: "aspect-ratio: 1 / 1;" },
    { value: "aspect-video", label: "aspect-ratio: 16 / 9;" }
  ]
};

export const Columns: AttributeProps = {
  type: ColumnsType.toString(),
  header: "Columns 属性",
  title: "Columns ClassName：",
  selectPlaceholder: "columns: xxxx",
  inputPlaceholder: "columns: xxxx",
  hasCustom: true,
  options: [
    { value: "columns-1", label: "columns: 1;" },
    { value: "columns-2", label: "columns: 2;" },
    { value: "columns-3", label: "columns: 3;" },
    { value: "columns-4", label: "columns: 4;" },
    { value: "columns-5", label: "columns: 5;" },
    { value: "columns-6", label: "columns: 6;" },
    { value: "columns-7", label: "columns: 7;" },
    { value: "columns-8", label: "columns: 8;" },
    { value: "columns-9", label: "columns: 9;" },
    { value: "columns-10", label: "columns: 10;" },
    { value: "columns-11", label: "columns: 11;" },
    { value: "columns-12", label: "columns: 12;" },
    { value: "columns-auto", label: "columns: auto;" },
    { value: "columns-3xs", label: "columns: 16rem; /* 256px */" },
    { value: "columns-2xs", label: "columns: 18rem; /* 288px */" },
    { value: "columns-xs", label: "columns: 20rem; /* 320px */" },
    { value: "columns-sm", label: "columns: 24rem; /* 384px */" },
    { value: "columns-md", label: "columns: 28rem; /* 448px */" },
    { value: "columns-lg", label: "columns: 32rem; /* 512px */" },
    { value: "columns-xl", label: "columns: 36rem; /* 576px */" },
    { value: "columns-2xl", label: "columns: 42rem; /* 672px */" },
    { value: "columns-3xl", label: "columns: 48rem; /* 768px */" },
    { value: "columns-4xl", label: "columns: 56rem; /* 896px */" },
    { value: "columns-5xl", label: "columns: 64rem; /* 1024px */" },
    { value: "columns-6xl", label: "columns: 72rem; /* 1152px */" },
    { value: "columns-7xl", label: "columns: 80rem; /* 1280px */" }
  ]
};

export const BreakAfter: AttributeProps = {
  type: BreakAfterType.toString(),
  header: "Break After 属性",
  title: "Break After ClassName：",
  selectPlaceholder: "break-after: xxxx",
  hasCustom: false,
  options: [
    { value: "break-after-auto", label: "break-after: auto;" },
    { value: "break-after-avoid", label: "break-after: avoid;" },
    { value: "break-after-all", label: "break-after: all;" },
    { value: "break-after-avoid-page", label: "break-after: avoid-page;" },
    { value: "break-after-page", label: "break-after: page;" },
    { value: "break-after-left", label: "break-after: left;" },
    { value: "break-after-right", label: "break-after: right;" },
    { value: "break-after-column", label: "break-after: column;" }
  ]
};

export const BreakBefore: AttributeProps = {
  type: BreakBeforeType.toString(),
  header: "Break Before 属性",
  title: "Break Before ClassName：",
  selectPlaceholder: "break-before: xxxx",
  hasCustom: false,
  options: [
    { value: "break-before-auto", label: "break-before: auto;" },
    { value: "break-before-avoid", label: "break-before: avoid;" },
    { value: "break-before-all", label: "break-before: all;" },
    { value: "break-before-avoid-page", label: "break-before: avoid-page;" },
    { value: "break-before-page", label: "break-before: page;" },
    { value: "break-before-left", label: "break-before: left;" },
    { value: "break-before-right", label: "break-before: right;" },
    { value: "break-before-column", label: "break-before: column;" }
  ]
};

export const BreakInside: AttributeProps = {
  type: BreakInsideType.toString(),
  header: "Break Inside 属性",
  title: "Break Inside ClassName：",
  selectPlaceholder: "break-inside: xxxx",
  hasCustom: false,
  options: [
    { value: "break-inside-auto", label: "break-inside: auto;" },
    { value: "break-inside-avoid", label: "break-inside: avoid;" },
    { value: "break-inside-avoid-page", label: "break-inside: avoid-page;" },
    { value: "break-inside-avoid-column", label: "break-inside: avoid-column;" }
  ]
};

export const BoxDecorationBreak: AttributeProps = {
  type: BoxDecorationBreakType.toString(),
  header: "Box Decoration Break 属性",
  title: "Box Decoration Break ClassName：",
  selectPlaceholder: "box-decoration-break: xxxx",
  hasCustom: false,
  options: [
    { value: "box-decoration-clone", label: "box-decoration-break: clone;" },
    { value: "box-decoration-slice", label: "box-decoration-break: slice;" }
  ]
};

export const BoxSizing: AttributeProps = {
  type: BoxSizingType.toString(),
  header: "Box Sizing 属性",
  title: "Box Sizing ClassName：",
  selectPlaceholder: "box-sizing: xxxx",
  hasCustom: false,
  options: [
    { value: "box-border", label: "box-sizing: border-box;" },
    { value: "box-content", label: "box-sizing: content-box;" }
  ]
};

export const Display: AttributeProps = {
  type: DisplayType.toString(),
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
};

export const Floats: AttributeProps = {
  type: FloatsType.toString(),
  header: "Float 属性",
  title: "Float ClassName：",
  selectPlaceholder: "float: xxxx",
  hasCustom: false,
  options: [
    { value: "float-right", label: "float: right;" },
    { value: "float-left", label: "float: left;" },
    { value: "float-none", label: "float: none;" }
  ]
};

export const Clear: AttributeProps = {
  type: ClearType.toString(),
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
};

export const ObjectFit: AttributeProps = {
  type: ObjectFitType.toString(),
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
};

export const ObjectPosition: AttributeProps = {
  type: ObjectPositionType.toString(),
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
    { value: "object-top", label: " object-position: top;" }
  ]
};

export const Overflow: AttributeProps = {
  type: OverflowType.toString(),
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
};

export const OverscrollBehavior: AttributeProps = {
  type: OverscrollBehaviorType.toString(),
  header: "Overscroll Behavior 属性",
  title: "Overscroll Behavior ClassName：",
  selectPlaceholder: "overscroll-behavior: xxxx",
  hasCustom: false,
  options: [
    { value: "overscroll-auto", label: "overscroll-behavior: auto;" },
    { value: "overscroll-contain", label: "overscroll-behavior: contain;" },
    { value: "overscroll-none", label: "overscroll-behavior: none;" },
    { value: "overscroll-y-auto", label: "overscroll-behavior-y: auto;" },
    { value: "overscroll-y-contain", label: "overscroll-behavior-y: contain;" },
    { value: "overscroll-y-none", label: "overscroll-behavior-y: none;" },
    { value: "overscroll-x-auto", label: "overscroll-behavior-x: auto;" },
    { value: "overscroll-x-contain", label: "overscroll-behavior-x: contain;" },
    { value: "overscroll-x-none", label: "overscroll-behavior-x: none;" }
  ]
};

export const Position: AttributeProps = {
  type: PositionType.toString(),
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
};

export const Inset: AttributeProps = {
  type: InsetType.toString(),
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
          label: "top: 0px; \nright: 0px; \nbottom: 0px; \nleft: 0px;"
        },
        { value: "inset-x-0", label: "left: 0px; \nright: 0px;" },
        { value: "inset-y-0", label: "top: 0px; \nbottom: 0px;" },
        { value: "top-0", label: "top: 0px;" },
        { value: "right-0", label: "right: 0px;" },
        { value: "bottom-0", label: "bottom: 0px;" },
        { value: "left-0", label: "left: 0px;" }
      ]
    },
    {
      label: "1px",
      options: [
        {
          value: "inset-px",
          label: "top: 1px; \nright: 1px; \nbottom: 1px; \nleft: 1px;"
        },
        { value: "inset-x-px", label: "left: 1px; \nright: 1px;" },
        { value: "inset-y-px", label: "top: 1px; \nbottom: 1px;" },
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
            "top: 0.125rem; \nright: 0.125rem; \nbottom: 0.125rem; \nleft: 0.125rem;"
        },
        { value: "inset-x-0.5", label: "left: 0.125rem; \nright: 0.125rem;" },
        { value: "inset-y-0.5", label: "top: 0.125rem; \nbottom: 0.125rem;" },
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
            "top: 0.25rem; \nright: 0.25rem; \nbottom: 0.25rem; \nleft: 0.25rem;"
        },
        { value: "inset-x-1", label: "left: 0.25rem; \nright: 0.25rem;" },
        { value: "inset-y-1", label: "top: 0.25rem; \nbottom: 0.25rem;" },
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
            "top: 0.375rem; \nright: 0.375rem; \nbottom: 0.375rem; \nleft: 0.375rem;"
        },
        { value: "inset-x-1.5", label: "left: 0.375rem; \nright: 0.375rem;" },
        { value: "inset-y-1.5", label: "top: 0.375rem; \nbottom: 0.375rem;" },
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
          label:
            "top: 0.5rem; \nright: 0.5rem; \nbottom: 0.5rem; \nleft: 0.5rem;"
        },
        { value: "inset-x-2", label: "left: 0.5rem; \nright: 0.5rem;" },
        { value: "inset-y-2", label: "top: 0.5rem; \nbottom: 0.5rem;" },
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
            "top: 0.625rem; \nright: 0.625rem; \nbottom: 0.625rem; \nleft: 0.625rem;"
        },
        { value: "inset-x-2.5", label: "left: 0.625rem; \nright: 0.625rem;" },
        { value: "inset-y-2.5", label: "top: 0.625rem; \nbottom: 0.625rem;" },
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
            "top: 0.75rem; \nright: 0.75rem; \nbottom: 0.75rem; \nleft: 0.75rem;"
        },
        { value: "inset-x-3", label: "left: 0.75rem; \nright: 0.75rem;" },
        { value: "inset-y-3", label: "top: 0.75rem; \nbottom: 0.75rem;" },
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
            "top: 0.875rem; \nright: 0.875rem; \nbottom: 0.875rem; \nleft: 0.875rem;"
        },
        { value: "inset-x-3.5", label: "left: 0.875rem; \nright: 0.875rem;" },
        { value: "inset-y-3.5", label: "top: 0.875rem; \nbottom: 0.875rem;" },
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
          label: "top: 1rem; \nright: 1rem; \nbottom: 1rem; \nleft: 1rem;"
        },
        { value: "inset-x-4", label: "left: 1rem; \nright: 1rem;" },
        { value: "inset-y-4", label: "top: 1rem; \nbottom: 1rem;" },
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
            "top: 1.25rem; \nright: 1.25rem; \nbottom: 1.25rem; \nleft: 1.25rem;"
        },
        { value: "inset-x-5", label: "left: 1.25rem; \nright: 1.25rem;" },
        { value: "inset-y-5", label: "top: 1.25rem; \nbottom: 1.25rem;" },
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
          label:
            "top: 1.5rem; \nright: 1.5rem; \nbottom: 1.5rem; \nleft: 1.5rem;"
        },
        { value: "inset-x-6", label: "left: 1.5rem; \nright: 1.5rem;" },
        { value: "inset-y-6", label: "top: 1.5rem; \nbottom: 1.5rem;" },
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
            "top: 1.75rem; \nright: 1.75rem; \nbottom: 1.75rem; \nleft: 1.75rem;"
        },
        { value: "inset-x-7", label: "left: 1.75rem; \nright: 1.75rem;" },
        { value: "inset-y-7", label: "top: 1.75rem; \nbottom: 1.75rem;" },
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
          label: "top: 2rem; \nright: 2rem; \nbottom: 2rem; \nleft: 2rem;"
        },
        { value: "inset-x-8", label: "left: 2rem; \nright: 2rem;" },
        { value: "inset-y-8", label: "top: 2rem; \nbottom: 2rem;" },
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
            "top: 2.25rem; \nright: 2.25rem; \nbottom: 2.25rem; \nleft: 2.25rem;"
        },
        { value: "inset-x-9", label: "left: 2.25rem; \nright: 2.25rem;" },
        { value: "inset-y-9", label: "top: 2.25rem; \nbottom: 2.25rem;" },
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
          label:
            "top: 2.5rem; \nright: 2.5rem; \nbottom: 2.5rem; \nleft: 2.5rem;"
        },
        { value: "inset-x-10", label: "left: 2.5rem; \nright: 2.5rem;" },
        { value: "inset-y-10", label: "top: 2.5rem; \nbottom: 2.5rem;" },
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
            "top: 2.75rem; \nright: 2.75rem; \nbottom: 2.75rem; \nleft: 2.75rem;"
        },
        { value: "inset-x-11", label: "left: 2.75rem; \nright: 2.75rem;" },
        { value: "inset-y-11", label: "top: 2.75rem; \nbottom: 2.75rem;" },
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
          label: "top: 3rem; \nright: 3rem; \nbottom: 3rem; \nleft: 3rem;"
        },
        { value: "inset-x-12", label: "left: 3rem; \nright: 3rem;" },
        { value: "inset-y-12", label: "top: 3rem; \nbottom: 3rem;" },
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
          label:
            "top: 3.5rem; \nright: 3.5rem; \nbottom: 3.5rem; \nleft: 3.5rem;"
        },
        { value: "inset-x-14", label: "left: 3.5rem; \nright: 3.5rem;" },
        { value: "inset-y-14", label: "top: 3.5rem; \nbottom: 3.5rem;" },
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
          label: "top: 4rem; \nright: 4rem; \nbottom: 4rem; \nleft: 4rem;"
        },
        { value: "inset-x-16", label: "left: 4rem; \nright: 4rem;" },
        { value: "inset-y-16", label: "top: 4rem; \nbottom: 4rem;" },
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
          label: "top: 5rem; \nright: 5rem; \nbottom: 5rem; \nleft: 5rem;"
        },
        { value: "inset-x-20", label: "left: 5rem; \nright: 5rem;" },
        { value: "inset-y-20", label: "top: 5rem; \nbottom: 5rem;" },
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
          label: "top: 6rem; \nright: 6rem; \nbottom: 6rem; \nleft: 6rem;"
        },
        { value: "inset-x-24", label: "left: 6rem; \nright: 6rem;" },
        { value: "inset-y-24", label: "top: 6rem; \nbottom: 6rem;" },
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
          label: "top: 7rem; \nright: 7rem; \nbottom: 7rem; \nleft: 7rem;"
        },
        { value: "inset-x-28", label: "left: 7rem; \nright: 7rem;" },
        { value: "inset-y-28", label: "top: 7rem; \nbottom: 7rem;" },
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
          label: "top: 8rem; \nright: 8rem; \nbottom: 8rem; \nleft: 8rem;"
        },
        { value: "inset-x-32", label: "left: 8rem; \nright: 8rem;" },
        { value: "inset-y-32", label: "top: 8rem; \nbottom: 8rem;" },
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
          label: "top: 9rem; \nright: 9rem; \nbottom: 9rem; \nleft: 9rem;"
        },
        { value: "inset-x-36", label: "left: 9rem; \nright: 9rem;" },
        { value: "inset-y-36", label: "top: 9rem; \nbottom: 9rem;" },
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
          label: "top: 10rem; \nright: 10rem; \nbottom: 10rem; \nleft: 10rem;"
        },
        { value: "inset-x-40", label: "left: 10rem; \nright: 10rem;" },
        { value: "inset-y-40", label: "top: 10rem; \nbottom: 10rem;" },
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
          label: "top: 11rem; \nright: 11rem; \nbottom: 11rem; \nleft: 11rem;"
        },
        { value: "inset-x-44", label: "left: 11rem; \nright: 11rem;" },
        { value: "inset-y-44", label: "top: 11rem; \nbottom: 11rem;" },
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
          label: "top: 12rem; \nright: 12rem; \nbottom: 12rem; \nleft: 12rem;"
        },
        { value: "inset-x-48", label: "left: 12rem; \nright: 12rem;" },
        { value: "inset-y-48", label: "top: 12rem; \nbottom: 12rem;" },
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
          label: "top: 13rem; \nright: 13rem; \nbottom: 13rem; \nleft: 13rem;"
        },
        { value: "inset-x-52", label: "left: 13rem; \nright: 13rem;" },
        { value: "inset-y-52", label: "top: 13rem; \nbottom: 13rem;" },
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
          label: "top: 14rem; \nright: 14rem; \nbottom: 14rem; \nleft: 14rem;"
        },
        { value: "inset-x-56", label: "left: 14rem; \nright: 14rem;" },
        { value: "inset-y-56", label: "top: 14rem; \nbottom: 14rem;" },
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
          label: "top: 15rem; \nright: 15rem; \nbottom: 15rem; \nleft: 15rem;"
        },
        { value: "inset-x-60", label: "left: 15rem; \nright: 15rem;" },
        { value: "inset-y-60", label: "top: 15rem; \nbottom: 15rem;" },
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
          label: "top: 16rem; \nright: 16rem; \nbottom: 16rem; \nleft: 16rem;"
        },
        { value: "inset-x-64", label: "left: 16rem; \nright: 16rem;" },
        { value: "inset-y-64", label: "top: 16rem; \nbottom: 16rem;" },
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
          label: "top: 18rem; \nright: 18rem; \nbottom: 18rem; \nleft: 18rem;"
        },
        { value: "inset-x-72", label: "left: 18rem; \nright: 18rem;" },
        { value: "inset-y-72", label: "top: 18rem; \nbottom: 18rem;" },
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
          label: "top: 20rem; \nright: 20rem; \nbottom: 20rem; \nleft: 20rem;"
        },
        { value: "inset-x-80", label: "left: 20rem; \nright: 20rem;" },
        { value: "inset-y-80", label: "top: 20rem; \nbottom: 20rem;" },
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
          label: "top: 24rem; \nright: 24rem; \nbottom: 24rem; \nleft: 24rem;"
        },
        { value: "inset-x-96", label: "left: 24rem; \nright: 24rem;" },
        { value: "inset-y-96", label: "top: 24rem; \nbottom: 24rem;" },
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
          label: "top: auto; \nright: auto; \nbottom: auto; \nleft: auto;"
        },
        { value: "inset-x-auto", label: "left: auto; \nright: auto;" },
        { value: "inset-y-auto", label: "top: auto; \nbottom: auto;" },
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
          label: "top: 50%; \nright: 50%; \nbottom: 50%; \nleft: 50%;"
        },
        { value: "inset-x-1/2", label: "left: 50%; \nright: 50%;" },
        { value: "inset-y-1/2", label: "top: 50%; \nbottom: 50%;" },
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
            "top: 33.333333%; \nright: 33.333333%; \nbottom: 33.333333%; \nleft: 33.333333%;"
        },
        {
          value: "inset-x-1/3",
          label: "left: 33.333333%; \nright: 33.333333%;"
        },
        {
          value: "inset-y-1/3",
          label: "top: 33.333333%; \nbottom: 33.333333%;"
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
            "top: 66.666667%; \nright: 66.666667%; \nbottom: 66.666667%; \nleft: 66.666667%;"
        },
        {
          value: "inset-x-2/3",
          label: "left: 66.666667%; \nright: 66.666667%;"
        },
        {
          value: "inset-y-2/3",
          label: "top: 66.666667%; \nbottom: 66.666667%;"
        },
        { value: "top-2/3", label: "top: 66.666667%;" },
        { value: "right-2/3", label: "right: 66.666667%;" },
        { value: "bottom-2/3", label: " bottom: 66.666667%;" },
        { value: "left-2/3", label: "left: 66.666667%;" }
      ]
    },
    {
      label: "25%",
      options: [
        {
          value: "inset-1/4",
          label: "top: 25%; \nright: 25%; \nbottom: 25%; \nleft: 25%;"
        },
        { value: "inset-x-1/4", label: "left: 25%; \nright: 25%;" },
        { value: "inset-y-1/4", label: "top: 25%; \nbottom: 25%;" },
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
          label: "top: 50%; \nright: 50%; \nbottom: 50%; \nleft: 50%;"
        },
        { value: "inset-x-2/4", label: "left: 50%; \nright: 50%;" },
        { value: "inset-y-2/4", label: "top: 50%; \nbottom: 50%;" },
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
          label: "top: 75%; \nright: 75%; \nbottom: 75%; \nleft: 75%;"
        },
        { value: "inset-x-3/4", label: "left: 75%; \nright: 75%;" },
        { value: "inset-y-3/4", label: "top: 75%; \nbottom: 75%;" },
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
          label: "top: 100%; \nright: 100%; \nbottom: 100%; \nleft: 100%;"
        },
        { value: "inset-x-full", label: "left: 100%; \nright: 100%;" },
        { value: "inset-y-full", label: "top: 100%; \nbottom: 100%;" },
        { value: "top-full", label: "top: 100%;" },
        { value: "right-full", label: "right: 100%;" },
        { value: "bottom-full", label: "bottom: 100%;" },
        { value: "left-full", label: "left: 100%;" }
      ]
    }
  ]
};

export const Visibility: AttributeProps = {
  type: VisibilityType.toString(),
  header: "Visibility 属性",
  title: "Visibility ClassName：",
  selectPlaceholder: "visibility: xxxx",
  hasCustom: false,
  options: [
    { value: "visible", label: "visibility: visible;" },
    { value: "invisible", label: "visibility: hidden;" },
    { value: "collapse", label: "visibility: collapse;" }
  ]
};

export const ZIndex: AttributeProps = {
  type: ZIndexType.toString(),
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
};

export default [
  AspectRatio,
  Columns,
  BreakAfter,
  BreakBefore,
  BreakInside,
  BoxDecorationBreak,
  BoxSizing,
  Display,
  Floats,
  Clear,
  ObjectFit,
  ObjectPosition,
  Overflow,
  OverscrollBehavior,
  Position,
  Inset,
  Visibility,
  ZIndex
];
