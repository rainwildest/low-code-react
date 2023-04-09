import {
  FontFamilyType,
  FontSizeType,
  FontSmoothingType,
  FontStyleType,
  FontWeightType,
  FontVariantNumericType,
  LetterSpacingType,
  LineClampType,
  LineHeightType,
  ListStyleTypeType,
  ListStylePositionType,
  TextAlignType,
  TextColorType,
  TextDecorationType,
  TextDecorationColorType,
  TextDecorationStyleType,
  TextDecorationThicknessType,
  TextUnderlineOffsetType,
  TextTransformType,
  TextOverflowType,
  TextIndentType,
  VerticalAlignType,
  WhitespaceType,
  WordBreakType,
  HyphensType
} from "config/tailwind-type";
import { sizePixel, colors, formatColor } from "./config";

export const FontFamily: AttributeProps = {
  type: FontFamilyType.toString(),
  header: "Font Family 属性",
  title: "Font Family ClassName：",
  inputPlaceholder: "font-family: xxxx",
  selectPlaceholder: "font-family: xxxx",
  hasCustom: false,
  options: [
    {
      value: "font-sans",
      label:
        'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
    },
    {
      value: "font-serif",
      label: 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'
    },
    {
      value: "font-mono",
      label: 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
    }
  ]
};

export const FontSize: AttributeProps = {
  type: FontSizeType.toString(),
  header: "Font Size 属性",
  title: "Font Size ClassName：",
  inputPlaceholder: "font-size: xxxx",
  selectPlaceholder: "font-size: xxxx",
  hasCustom: true,
  options: [
    {
      value: "text-xs",
      label: "font-size: 0.75rem; /* 12px */ \nline-height: 1rem; /* 16px */"
    },
    {
      value: "text-sm",
      label: "font-size: 0.875rem; /* 14px */ \nline-height: 1.25rem; /* 20px */"
    },
    {
      value: "text-base",
      label: "font-size: 1rem; /* 16px */ \nline-height: 1.5rem; /* 24px */"
    },
    {
      value: "text-lg",
      label: "font-size: 1.125rem; /* 18px */ \nline-height: 1.75rem; /* 28px */"
    },
    {
      value: "text-xl",
      label: "font-size: 1.25rem; /* 20px */ \nline-height: 1.75rem; /* 28px */"
    },
    {
      value: "text-2xl",
      label: "font-size: 1.5rem; /* 24px */ \nline-height: 2rem; /* 32px */"
    },
    {
      value: "text-3xl",
      label: "font-size: 1.875rem; /* 30px */ \nline-height: 2.25rem; /* 36px */"
    },
    {
      value: "text-4xl",
      label: "font-size: 2.25rem; /* 36px */ \nline-height: 2.5rem; /* 40px */"
    },
    {
      value: "text-5xl",
      label: "font-size: 3rem; /* 48px */ \nline-height: 1;"
    },
    {
      value: "text-6xl",
      label: "font-size: 3.75rem; /* 60px */ \nline-height: 1;"
    },
    {
      value: "text-7xl",
      label: "font-size: 4.5rem; /* 72px */ \nline-height: 1;"
    },
    {
      value: "text-8xl",
      label: "font-size: 6rem; /* 96px */ \nline-height: 1;"
    },
    {
      value: "text-9xl",
      label: "font-size: 8rem; /* 128px */ \nline-height: 1;"
    }
  ]
};

export const FontSmoothing: AttributeProps = {
  type: FontSmoothingType.toString(),
  header: "Font Smoothing 属性",
  title: "Font Smoothing ClassName：",
  inputPlaceholder: "font-smoothing: xxxx",
  selectPlaceholder: "font-smoothing: xxxx",
  hasCustom: false,
  options: [
    {
      value: "antialiased",
      label: "-webkit-font-smoothing: antialiased; \n-moz-osx-font-smoothing: grayscale;"
    },
    {
      value: "subpixel-antialiased",
      label: "-webkit-font-smoothing: auto; \n-moz-osx-font-smoothing: auto;"
    }
  ]
};

export const FontStyle: AttributeProps = {
  type: FontStyleType.toString(),
  header: "Font Style 属性",
  title: "Font Style ClassName：",
  inputPlaceholder: "font-style: xxxx",
  selectPlaceholder: "font-style: xxxx",
  hasCustom: true,
  options: [
    { value: "italic", label: "font-style: italic;" },
    { value: "not-italic", label: "font-style: normal;" }
  ]
};

export const FontWeight: AttributeProps = {
  type: FontWeightType.toString(),
  header: "Font Weight 属性",
  title: "Font Weight ClassName：",
  inputPlaceholder: "font-weight: xxxx",
  selectPlaceholder: "font-weight: xxxx",
  hasCustom: true,
  options: [
    { value: "font-thin", label: "font-weight: 100;" },
    { value: "font-extralight", label: "font-weight: 200;" },
    { value: "font-light", label: "font-weight: 300;" },
    { value: "font-normal", label: "font-weight: 400;" },
    { value: "font-medium", label: "font-weight: 500;" },
    { value: "font-semibold", label: "font-weight: 600;" },
    { value: "font-bold", label: "font-weight: 700;" },
    { value: "font-extrabold", label: "font-weight: 800;" },
    { value: "font-black", label: "font-weight: 900;" }
  ]
};

export const FontVariantNumeric: AttributeProps = {
  type: FontVariantNumericType.toString(),
  header: "Font Variant Numeric 属性",
  title: "Font Variant Numeric ClassName：",
  inputPlaceholder: "font-variant-numeric: xxxx",
  selectPlaceholder: "font-variant-numeric: xxxx",
  hasCustom: false,
  options: [
    { value: "normal-nums", label: "font-variant-numeric: normal;" },
    { value: "ordinal", label: "font-variant-numeric: ordinal;" },
    { value: "slashed-zero", label: "font-variant-numeric: slashed-zero;" },
    { value: "lining-nums", label: "font-variant-numeric: lining-nums;" },
    { value: "oldstyle-nums", label: "font-variant-numeric: oldstyle-nums;" },
    { value: "proportional-nums", label: "font-variant-numeric: proportional-nums;" },
    { value: "tabular-nums", label: "font-variant-numeric: tabular-nums;" },
    { value: "diagonal-fractions", label: "font-variant-numeric: diagonal-fractions;" },
    { value: "stacked-fractions", label: "font-variant-numeric: stacked-fractions;" }
  ]
};

export const LetterSpacing: AttributeProps = {
  type: LetterSpacingType.toString(),
  header: "Letter Spacing 属性",
  title: "Letter Spacing ClassName：",
  inputPlaceholder: "letter-spacing: xxxx",
  selectPlaceholder: "letter-spacing: xxxx",
  hasCustom: true,
  options: [
    { value: "tracking-tighter", label: "letter-spacing: -0.05em;" },
    { value: "tracking-tight", label: "letter-spacing: -0.025em;" },
    { value: "tracking-normal", label: "letter-spacing: 0em;" },
    { value: "tracking-wide", label: "letter-spacing: 0.025em;" },
    { value: "tracking-wider", label: "letter-spacing: 0.05em;" },
    { value: "tracking-widest", label: "letter-spacing: 0.1em;" }
  ]
};

const lineClampsIndex = [...new Array(6).fill(0).map((_, index) => index + 1), "none"];
export const LineClamp: AttributeProps = {
  type: LineClampType.toString(),
  header: "Line Clamp 属性",
  title: "Line Clamp ClassName：",
  inputPlaceholder: "line-clamp",
  selectPlaceholder: "line-clamp",
  hasCustom: true,
  options: [
    ...lineClampsIndex.map(item => ({
      value: `line-clamp-${item}`,
      label: `overflow: hidden; \ndisplay: -webkit-box; \n-webkit-box-orient: vertical; \n-webkit-line-clamp: ${item};`
    }))
  ]
};

export const LineHeight: AttributeProps = {
  type: LineHeightType.toString(),
  header: "Line Height 属性",
  title: "Line Height ClassName：",
  inputPlaceholder: "line-height: xxxx",
  selectPlaceholder: "line-height: xxxx",
  hasCustom: true,
  options: [
    { value: "leading-3", label: "line-height: .75rem; /* 12px */" },
    { value: "leading-4", label: "line-height: 1rem; /* 16px */" },
    { value: "leading-5", label: "line-height: 1.25rem; /* 20px */" },
    { value: "leading-6", label: "line-height: 1.5rem; /* 24px */" },
    { value: "leading-7", label: "line-height: 1.75rem; /* 28px */" },
    { value: "leading-8", label: "line-height: 2rem; /* 32px */" },
    { value: "leading-9", label: "line-height: 2.25rem; /* 36px */" },
    { value: "leading-10", label: "line-height: 2.5rem; /* 40px */" },
    { value: "leading-none", label: "line-height: 1;" },
    { value: "leading-tight", label: "line-height: 1.25;" },
    { value: "leading-snug", label: "line-height: 1.375;" },
    { value: "leading-normal", label: "line-height: 1.5;" },
    { value: "leading-relaxed", label: "line-height: 1.625;" },
    { value: "leading-loose", label: "line-height: 2;" }
  ]
};

export const ListStyleType: AttributeProps = {
  type: ListStyleTypeType.toString(),
  header: "List Style Type 属性",
  title: "List Style Type ClassName：",
  inputPlaceholder: "list-style-type: xxxx",
  selectPlaceholder: "list-style-type: xxxx",
  hasCustom: true,
  options: [
    { value: "list-none", label: "list-style-type: none;" },
    { value: "list-disc", label: "list-style-type: disc;" },
    { value: "list-decimal", label: "list-style-type: decimal;" }
  ]
};

export const ListStylePosition: AttributeProps = {
  type: ListStylePositionType.toString(),
  header: "List Style Position 属性",
  title: "List Style Position ClassName：",
  inputPlaceholder: "list-style-position: xxxx",
  selectPlaceholder: "list-style-position: xxxx",
  hasCustom: false,
  options: [
    { value: "list-inside", label: "list-style-position: inside;" },
    { value: "list-outside", label: "list-style-position: outside;" }
  ]
};

export const TextAlign: AttributeProps = {
  type: TextAlignType.toString(),
  header: "Text Align 属性",
  title: "Text Align ClassName：",
  inputPlaceholder: "text-align: xxxx",
  selectPlaceholder: "text-align: xxxx",
  hasCustom: false,
  options: [
    { value: "text-left", label: "text-align: left;" },
    { value: "text-center", label: "text-align: center;" },
    { value: "text-right", label: "text-align: right;" },
    { value: "text-justify", label: "text-align: justify;" },
    { value: "text-start", label: "text-align: start;" },
    { value: "text-end", label: "text-align: end;" }
  ]
};

export const TextColor: AttributeProps = {
  type: TextColorType.toString(),
  header: "Text Color 属性",
  title: "Text Color ClassName：",
  inputPlaceholder: "color: xxxx",
  selectPlaceholder: "color: xxxx",
  hasCustom: false,
  options: [...formatColor("text", "color", colors)]
};

export const TextDecoration: AttributeProps = {
  type: TextDecorationType.toString(),
  header: "Text Decoration 属性",
  title: "Text Decoration ClassName：",
  inputPlaceholder: "text-decoration-line: xxxx",
  selectPlaceholder: "text-decoration-line: xxxx",
  hasCustom: false,
  options: [
    { value: "underline", label: "text-decoration-line: underline;" },
    { value: "overline", label: "text-decoration-line: overline;" },
    { value: "line-through", label: "text-decoration-line: line-through;" },
    { value: "no-underline", label: "text-decoration-line: none;" }
  ]
};

export const TextDecorationColor: AttributeProps = {
  type: TextDecorationColorType.toString(),
  header: "Text Decoration Color 属性",
  title: "Text Decoration Color ClassName：",
  inputPlaceholder: "text-decoration-color: xxxx",
  selectPlaceholder: "text-decoration-color: xxxx",
  hasCustom: true,
  options: [...formatColor("decoration", "text-decoration-color", colors)]
};

export const TextDecorationStyle: AttributeProps = {
  type: TextDecorationStyleType.toString(),
  header: "Text Decoration Style 属性",
  title: "Text Decoration Style ClassName：",
  inputPlaceholder: "text-decoration-style: xxxx",
  selectPlaceholder: "text-decoration-style: xxxx",
  hasCustom: false,
  options: [
    { value: "decoration-solid", label: "text-decoration-style: solid;" },
    { value: "decoration-double", label: "text-decoration-style: double;" },
    { value: "decoration-dotted", label: "text-decoration-style: dotted;" },
    { value: "decoration-dashed", label: "text-decoration-style: dashed;" },
    { value: "decoration-wavy", label: "text-decoration-style: wavy;" }
  ]
};

export const TextDecorationThickness: AttributeProps = {
  type: TextDecorationThicknessType.toString(),
  header: "Text Decoration Thickness 属性",
  title: "Text Decoration Thickness ClassName：",
  inputPlaceholder: "text-decoration-thickness: xxxx",
  selectPlaceholder: "text-decoration-thickness: xxxx",
  hasCustom: true,
  options: [
    { value: "decoration-auto", label: "text-decoration-thickness: auto;" },
    { value: "decoration-from-font", label: "text-decoration-thickness: from-font;" },
    { value: "decoration-0", label: "text-decoration-thickness: 0px;" },
    { value: "decoration-1", label: "text-decoration-thickness: 1px;" },
    { value: "decoration-2", label: "text-decoration-thickness: 2px;" },
    { value: "decoration-4", label: "text-decoration-thickness: 4px;" },
    { value: "decoration-8", label: "text-decoration-thickness: 8px;" }
  ]
};

export const TextUnderlineOffset: AttributeProps = {
  type: TextUnderlineOffsetType.toString(),
  header: "Text Underline Offset 属性",
  title: "Text Underline Offset ClassName：",
  inputPlaceholder: "text-underline-offset: xxxx",
  selectPlaceholder: "text-underline-offset: xxxx",
  hasCustom: true,
  options: [
    { value: "underline-offset-auto", label: "text-underline-offset: auto;" },
    { value: "underline-offset-0", label: "text-underline-offset: 0px;" },
    { value: "underline-offset-1", label: "text-underline-offset: 1px;" },
    { value: "underline-offset-2", label: "text-underline-offset: 2px;" },
    { value: "underline-offset-4", label: "text-underline-offset: 4px;" },
    { value: "underline-offset-8", label: "text-underline-offset: 8px;" }
  ]
};

export const TextTransform: AttributeProps = {
  type: TextTransformType.toString(),
  header: "Text Transform 属性",
  title: "Text Transform ClassName：",
  inputPlaceholder: "text-transform: xxxx",
  selectPlaceholder: "text-transform: xxxx",
  hasCustom: false,
  options: [
    { value: "uppercase", label: "text-transform: uppercase;" },
    { value: "lowercase", label: "text-transform: lowercase;" },
    { value: "capitalize", label: "text-transform: capitalize;" },
    { value: "normal-case", label: "text-transform: none;" }
  ]
};

export const TextOverflow: AttributeProps = {
  type: TextOverflowType.toString(),
  header: "Text Overflow 属性",
  title: "Text Overflow ClassName：",
  inputPlaceholder: "text-overflow: xxxx",
  selectPlaceholder: "text-overflow: xxxx",
  hasCustom: false,
  options: [
    {
      value: "truncate",
      label: "overflow: hidden; \ntext-overflow: ellipsis; \nwhite-space: nowrap;"
    },
    { value: "text-ellipsis", label: "text-overflow: ellipsis;" },
    { value: "text-clip", label: "text-overflow: clip;" }
  ]
};

export const TextIndent: AttributeProps = {
  type: TextIndentType.toString(),
  header: "Text Indent 属性",
  title: "Text Indent ClassName：",
  inputPlaceholder: "text-indent: xxxx",
  selectPlaceholder: "text-indent: xxxx",
  hasCustom: true,
  options: [
    ...sizePixel.map(item => ({
      value: `indent-${item.name}`,
      label: `text-indent: ${item.pixel}`
    }))
  ]
};

export const VerticalAlign: AttributeProps = {
  type: VerticalAlignType.toString(),
  header: "Vertical Align 属性",
  title: "Vertical Align ClassName：",
  inputPlaceholder: "vertical-align: xxxx",
  selectPlaceholder: "vertical-align: xxxx",
  hasCustom: false,
  options: [
    { value: "align-baseline", label: "vertical-align: baseline;" },
    { value: "align-top", label: "vertical-align: top;" },
    { value: "align-middle", label: "vertical-align: middle;" },
    { value: "align-bottom", label: "vertical-align: bottom;" },
    { value: "align-text-top", label: "vertical-align: text-top;" },
    { value: "align-text-bottom", label: "vertical-align: text-bottom;" },
    { value: "align-sub", label: "vertical-align: sub;" },
    { value: "align-super", label: "vertical-align: super;" }
  ]
};

export const Whitespace: AttributeProps = {
  type: WhitespaceType.toString(),
  header: "Whitespace 属性",
  title: "Whitespace ClassName：",
  inputPlaceholder: "white-space: xxxx",
  selectPlaceholder: "white-space: xxxx",
  hasCustom: false,
  options: [
    { value: "whitespace-normal", label: "white-space: normal;" },
    { value: "whitespace-nowrap", label: "white-space: nowrap;" },
    { value: "whitespace-pre", label: "white-space: pre;" },
    { value: "whitespace-pre-line", label: "white-space: pre-line;" },
    { value: "whitespace-pre-wrap", label: "white-space: pre-wrap;" }
  ]
};

export const WordBreak: AttributeProps = {
  type: WordBreakType.toString(),
  header: "Word Break 属性",
  title: "Word Break ClassName：",
  inputPlaceholder: "word-break: xxxx",
  selectPlaceholder: "word-break: xxxx",
  hasCustom: false,
  options: [
    {
      value: "break-normal",
      label: "overflow-wrap: normal; \nword-break: normal;"
    },
    { value: "break-words", label: "overflow-wrap: break-word;" },
    { value: "break-all", label: "word-break: break-all;" },
    { value: "break-keep", label: "word-break: keep-all;" }
  ]
};

// const hyphensAttrs = ["none", "manual", "auto"];
export const Hyphens: AttributeProps = {
  type: HyphensType.toString(),
  header: "Hyphens 属性",
  title: "Hyphens ClassName：",
  inputPlaceholder: "hyphens: xxxx",
  selectPlaceholder: "hyphens: xxxx",
  hasCustom: false,
  // options: [...hyphensAttrs.map(item => ({ value: `hyphens-${item}`, label: `hyphens: ${item};` }))]
  options: [
    { value: "hyphens-none", label: "hyphens: none;" },
    { value: "hyphens-manual", label: "hyphens: manual;" },
    { value: "hyphens-auto", label: "hyphens: auto;" }
  ]
};

export default [
  FontFamily,
  FontSize,
  FontSmoothing,
  FontStyle,
  FontWeight,
  FontVariantNumeric,
  LetterSpacing,
  LineClamp,
  LineHeight,
  ListStyleType,
  ListStylePosition,
  TextAlign,
  TextColor,
  TextDecoration,
  TextDecorationColor,
  TextDecorationStyle,
  TextDecorationThickness,
  TextUnderlineOffset,
  TextTransform,
  TextOverflow,
  TextIndent,
  VerticalAlign,
  Whitespace,
  WordBreak,
  Hyphens
];
