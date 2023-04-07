import {
  FlexBasisType,
  FlexDirectionType,
  FlexWrapType,
  FlexType,
  FlexGrowType,
  FlexShrinkType,
  OrderType,
  GridTemplateColumnsType,
  GridColumnType,
  GridTemplateRowsType,
  GridRowType,
  GridAutoFlowType,
  GridAutoColumnsType,
  GridAutoRowsType,
  GapType,
  JustifyContentType,
  JustifyItemsType,
  JustifySelfType,
  AlignContentType,
  AlignItemsType,
  AlignSelfType,
  PlaceContentType,
  PlaceItemsType,
  PlaceSelfType
} from "config/tailwind-type";

export const FlexBasis: AttributeProps = {
  type: FlexBasisType.toString(),
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
    { value: "basis-8", label: "lex-basis: 2rem; /* 32px */" },
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
};

export const FlexDirection: AttributeProps = {
  type: FlexDirectionType.toString(),
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
};

export const FlexWrap: AttributeProps = {
  type: FlexWrapType.toString(),
  header: "Flex Wrap 属性",
  title: "Flex Wrap ClassName：",
  selectPlaceholder: "flex-wrap: xxxx",
  hasCustom: false,
  options: [
    { value: "flex-wrap", label: "flex-wrap: wrap;" },
    { value: "flex-wrap-reverse", label: "flex-wrap: wrap-reverse;" },
    { value: "flex-nowrap", label: "flex-wrap: nowrap;" }
  ]
};

export const Flex: AttributeProps = {
  type: FlexType.toString(),
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
};

export const FlexGrow: AttributeProps = {
  type: FlexGrowType.toString(),
  header: "Flex Grow 属性",
  title: "Flex Grow ClassName：",
  selectPlaceholder: "flex-grow: xxxx",
  inputPlaceholder: "flex-grow: xxxx",
  hasCustom: true,
  options: [
    { value: "grow", label: "flex-grow: 1;" },
    { value: "grow-0", label: "flex-grow: 0;" }
  ]
};

export const FlexShrink: AttributeProps = {
  type: FlexShrinkType.toString(),
  header: "Flex Shrink 属性",
  title: "Flex Shrink ClassName：",
  inputPlaceholder: "flex-shrink: xxxx",
  selectPlaceholder: "flex-shrink: xxxx",
  hasCustom: false,
  options: [
    { value: "shrink", label: "flex-shrink: 1;" },
    { value: "shrink-0", label: "flex-shrink: 0;" }
  ]
};

export const Order: AttributeProps = {
  type: OrderType.toString(),
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
};

export const GridTemplateColumns: AttributeProps = {
  type: GridTemplateColumnsType.toString(),
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
    {
      value: "grid-cols-none",
      label: "grid-template-columns: none;"
    }
  ]
};

export const GridColumn: AttributeProps = {
  type: GridColumnType.toString(),
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
};

export const GridTemplateRows: AttributeProps = {
  type: GridTemplateRowsType.toString(),
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
    {
      value: "grid-rows-none",
      label: "grid-template-rows: none;"
    }
  ]
};

export const GridRow: AttributeProps = {
  type: GridRowType.toString(),
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
};

export const GridAutoFlow: AttributeProps = {
  type: GridAutoFlowType.toString(),
  header: "Grid Auto Flow 属性",
  title: "Grid Auto Flow ClassName：",
  inputPlaceholder: "grid-auto-flow: xxxx",
  selectPlaceholder: "grid-auto-flow: xxxx",
  hasCustom: false,
  options: [
    {
      value: "grid-flow-row",
      label: "grid-auto-flow: row;"
    },
    {
      value: "grid-flow-col",
      label: "grid-auto-flow: column;"
    },
    {
      value: "grid-flow-dense",
      label: "grid-auto-flow: dense;"
    },
    {
      value: "grid-flow-row-dense",
      label: "grid-auto-flow: row dense;"
    },
    {
      value: "grid-flow-col-dense",
      label: "grid-auto-flow: column dense;"
    }
  ]
};

export const GridAutoColumns: AttributeProps = {
  type: GridAutoColumnsType.toString(),
  header: "Grid Auto Columns 属性",
  title: "Grid Auto Columns ClassName：",
  inputPlaceholder: "grid-auto-columns: xxxx",
  selectPlaceholder: "grid-auto-columns: xxxx",
  hasCustom: true,
  options: [
    {
      value: "auto-cols-auto",
      label: "grid-auto-columns: auto;"
    },
    {
      value: "auto-cols-min",
      label: "grid-auto-columns: min-content;"
    },
    {
      value: "auto-cols-max",
      label: "grid-auto-columns: max-content;"
    },
    {
      value: "auto-cols-fr",
      label: "grid-auto-columns: minmax(0, 1fr);"
    }
  ]
};

export const GridAutoRows: AttributeProps = {
  type: GridAutoRowsType.toString(),
  header: "Grid Auto Rows 属性",
  title: "Grid Auto Rows ClassName：",
  inputPlaceholder: "grid-auto-rows: xxxx",
  selectPlaceholder: "grid-auto-rows: xxxx",
  hasCustom: true,
  options: [
    {
      value: "auto-rows-auto",
      label: "grid-auto-rows: auto;"
    },
    {
      value: "auto-rows-min",
      label: "grid-auto-rows: min-content;"
    },
    {
      value: "auto-rows-max",
      label: "grid-auto-rows: max-content;"
    },
    {
      value: "auto-rows-fr",
      label: "grid-auto-rows: minmax(0, 1fr);"
    }
  ]
};

export const Gap: AttributeProps = {
  type: GapType.toString(),
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
};

export const JustifyContent: AttributeProps = {
  type: JustifyContentType.toString(),
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
};

export const JustifyItems: AttributeProps = {
  type: JustifyItemsType.toString(),
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
};

export const JustifySelf: AttributeProps = {
  type: JustifySelfType.toString(),
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
};

export const AlignContent: AttributeProps = {
  type: AlignContentType.toString(),
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
};

export const AlignItems: AttributeProps = {
  type: AlignItemsType.toString(),
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
};

export const AlignSelf: AttributeProps = {
  type: AlignSelfType.toString(),
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
};

export const PlaceContent: AttributeProps = {
  type: PlaceContentType.toString(),
  header: "Place Content 属性",
  title: "Place Content ClassName：",
  inputPlaceholder: "place-content: xxxx",
  selectPlaceholder: "place-content: xxxx",
  hasCustom: false,
  options: [
    { value: "place-content-center", label: "place-content: center;" },
    { value: "place-content-start", label: "place-content: start;" },
    { value: "place-content-end", label: "place-content: end;" },
    { value: "place-content-between", label: "place-content: space-between;" },
    { value: "place-content-around", label: "place-content: space-around;" },
    { value: "place-content-evenly", label: "place-content: space-evenly;" },
    { value: "place-content-baseline", label: "place-content: baseline;" },
    { value: "place-content-stretch", label: "place-content: stretch;" }
  ]
};

export const PlaceItems: AttributeProps = {
  type: PlaceItemsType.toString(),
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
};

export const PlaceSelf: AttributeProps = {
  type: PlaceSelfType.toString(),
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
};

export default [
  FlexBasis,
  FlexDirection,
  FlexWrap,
  Flex,
  FlexGrow,
  FlexShrink,
  Order,
  GridTemplateColumns,
  GridColumn,
  GridTemplateRows,
  GridRow,
  GridAutoFlow,
  GridAutoColumns,
  GridAutoRows,
  Gap,
  JustifyContent,
  JustifyItems,
  JustifySelf,
  AlignContent,
  AlignItems,
  AlignSelf,
  PlaceContent,
  PlaceItems,
  PlaceSelf
];
