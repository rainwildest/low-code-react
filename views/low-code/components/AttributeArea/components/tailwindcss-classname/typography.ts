export const FontFamily: AttributeProps = {
  type: "font-family",
  header: "Font Family 属性",
  title: "Font Family ClassName：",
  inputPlaceholder: "font-family: xxxx",
  selectPlaceholder: "font-family: xxxx",
  hasCustom: false,
  options: [
    {
      value: "font-sans",
      label:
        '『 font-sans 』 font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
    },
    {
      value: "font-serif",
      label:
        '『 font-serif 』 font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'
    },
    {
      value: "font-mono",
      label:
        '『 font-mono 』 font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
    }
  ]
};

export const FontSize: AttributeProps = {
  type: "font-size",
  header: "Font Size 属性",
  title: "Font Size ClassName：",
  inputPlaceholder: "font-size: xxxx",
  selectPlaceholder: "font-size: xxxx",
  hasCustom: true,
  options: [
    {
      value: "text-xs",
      label:
        "『 text-xs 』 font-size: 0.75rem; /* 12px */ line-height: 1rem; /* 16px */"
    },
    {
      value: "text-sm",
      label:
        "『 text-sm 』 font-size: 0.875rem; /* 14px */ line-height: 1.25rem; /* 20px */"
    },
    {
      value: "text-base",
      label:
        "『 text-base 』 font-size: 1rem; /* 16px */ line-height: 1.5rem; /* 24px */"
    },
    {
      value: "text-lg",
      label:
        "『 text-lg 』 font-size: 1.125rem; /* 18px */ line-height: 1.75rem; /* 28px */"
    },
    {
      value: "text-xl",
      label:
        "『 text-xl 』 font-size: 1.25rem; /* 20px */ line-height: 1.75rem; /* 28px */"
    },
    {
      value: "text-2xl",
      label:
        "『 text-2xl 』 font-size: 1.5rem; /* 24px */ line-height: 2rem; /* 32px */"
    },
    {
      value: "text-3xl",
      label:
        "『 text-3xl 』 font-size: 1.875rem; /* 30px */ line-height: 2.25rem; /* 36px */"
    },
    {
      value: "text-4xl",
      label:
        "『 text-4xl 』 font-size: 2.25rem; /* 36px */ line-height: 2.5rem; /* 40px */"
    },
    {
      value: "text-5xl",
      label: "『 text-5xl 』 font-size: 3rem; /* 48px */ line-height: 1;"
    },
    {
      value: "text-6xl",
      label: "『 text-6xl 』 font-size: 3.75rem; /* 60px */ line-height: 1;"
    },
    {
      value: "text-7xl",
      label: "『 text-7xl 』 font-size: 4.5rem; /* 72px */ line-height: 1;"
    },
    {
      value: "text-8xl",
      label: "『 text-8xl 』 font-size: 6rem; /* 96px */ line-height: 1;"
    },
    {
      value: "text-9xl",
      label: "『 text-9xl 』 font-size: 8rem; /* 128px */ line-height: 1;"
    }
  ]
};

export const FontSmoothing: AttributeProps = {
  type: "font-smoothing",
  header: "Font Smoothing 属性",
  title: "Font Smoothing ClassName：",
  inputPlaceholder: "font-smoothing: xxxx",
  selectPlaceholder: "font-smoothing: xxxx",
  hasCustom: false,
  options: [
    {
      value: "antialiased",
      label:
        "『 antialiased 』 -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"
    },
    {
      value: "subpixel-antialiased",
      label:
        "『 subpixel-antialiased 』 -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;"
    }
  ]
};

export const FontStyle: AttributeProps = {
  type: "font-style",
  header: "Font Style 属性",
  title: "Font Style ClassName：",
  inputPlaceholder: "font-style: xxxx",
  selectPlaceholder: "font-style: xxxx",
  hasCustom: true,
  options: [
    {
      value: "italic",
      label: "『 italic 』 font-style: italic;"
    },
    {
      value: "not-italic",
      label: "『 not-italic 』 font-style: normal;"
    }
  ]
};

export const FontWeight: AttributeProps = {
  type: "font-weight",
  header: "Font Weight 属性",
  title: "Font Weight ClassName：",
  inputPlaceholder: "font-weight: xxxx",
  selectPlaceholder: "font-weight: xxxx",
  hasCustom: true,
  options: [
    {
      value: "font-thin",
      label: "『 font-thin 』 font-weight: 100;"
    },
    {
      value: "font-extralight",
      label: "『 font-extralight 』 font-weight: 200;"
    },
    {
      value: "font-light",
      label: "『 font-light 』 font-weight: 300;"
    },
    {
      value: "font-normal",
      label: "『 font-normal 』 font-weight: 400;"
    },
    {
      value: "font-medium",
      label: "『 font-medium 』 font-weight: 500;"
    },
    {
      value: "font-semibold",
      label: "『 font-semibold 』 font-weight: 600;"
    },
    {
      value: "font-bold",
      label: "『 font-bold 』 font-weight: 700;"
    },
    {
      value: "font-extrabold",
      label: "『 font-extrabold 』 font-weight: 800;"
    },
    {
      value: "font-black",
      label: "『 font-black 』 font-weight: 900;"
    }
  ]
};

export const FontVariantNumeric: AttributeProps = {
  type: "font-variant-numeric",
  header: "Font Variant Numeric 属性",
  title: "Font Variant Numeric ClassName：",
  inputPlaceholder: "font-variant-numeric: xxxx",
  selectPlaceholder: "font-variant-numeric: xxxx",
  hasCustom: false,
  options: [
    {
      value: "normal-nums",
      label: "『 normal-nums 』 font-variant-numeric: normal;"
    },
    {
      value: "ordinal",
      label: "『 ordinal 』 font-variant-numeric: ordinal;"
    },
    {
      value: "slashed-zero",
      label: "『 slashed-zero 』 font-variant-numeric: slashed-zero;"
    },
    {
      value: "lining-nums",
      label: "『 lining-nums 』 font-variant-numeric: lining-nums;"
    },
    {
      value: "oldstyle-nums",
      label: "『 oldstyle-nums 』 font-variant-numeric: oldstyle-nums;"
    },
    {
      value: "proportional-nums",
      label: "『 proportional-nums 』 font-variant-numeric: proportional-nums;"
    },
    {
      value: "tabular-nums",
      label: "『 tabular-nums 』 font-variant-numeric: tabular-nums;"
    },
    {
      value: "diagonal-fractions",
      label:
        "『 diagonal-fractions 』 font-variant-numeric: diagonal-fractions;"
    },
    {
      value: "stacked-fractions",
      label: "『 stacked-fractions 』 font-variant-numeric: stacked-fractions;"
    }
  ]
};

export const LetterSpacing: AttributeProps = {
  type: "letter-spacing",
  header: "Letter Spacing 属性",
  title: "Letter Spacing ClassName：",
  inputPlaceholder: "letter-spacing: xxxx",
  selectPlaceholder: "letter-spacing: xxxx",
  hasCustom: true,
  options: [
    {
      value: "tracking-tighter",
      label: "『 tracking-tighter 』 letter-spacing: -0.05em;"
    },
    {
      value: "tracking-tight",
      label: "『 tracking-tight 』 letter-spacing: -0.025em;"
    },
    {
      value: "tracking-normal",
      label: "『 tracking-normal 』 letter-spacing: 0em;"
    },
    {
      value: "tracking-wide",
      label: "『 tracking-wide 』 letter-spacing: 0.025em;"
    },
    {
      value: "tracking-wider",
      label: "『 tracking-wider 』 letter-spacing: 0.05em;"
    },
    {
      value: "tracking-widest",
      label: "『 tracking-widest 』 letter-spacing: 0.1em;"
    }
  ]
};

export const LineHeight: AttributeProps = {
  type: "line-height",
  header: "Line Height 属性",
  title: "Line Height ClassName：",
  inputPlaceholder: "line-height: xxxx",
  selectPlaceholder: "line-height: xxxx",
  hasCustom: true,
  options: [
    {
      value: "leading-3",
      label: "『 leading-3 』 line-height: .75rem; /* 12px */"
    },
    {
      value: "leading-4",
      label: "『 leading-4 』 line-height: 1rem; /* 16px */"
    },
    {
      value: "leading-5",
      label: "『 leading-5 』 line-height: 1.25rem; /* 20px */"
    },
    {
      value: "leading-6",
      label: "『 leading-6 』 line-height: 1.5rem; /* 24px */"
    },
    {
      value: "leading-7",
      label: "『 leading-7 』 line-height: 1.75rem; /* 28px */"
    },
    {
      value: "leading-8",
      label: "『 leading-8 』 line-height: 2rem; /* 32px */"
    },
    {
      value: "leading-9",
      label: "『 leading-9 』 line-height: 2.25rem; /* 36px */"
    },
    {
      value: "leading-10",
      label: "『 leading-10 』 line-height: 2.5rem; /* 40px */"
    },
    {
      value: "leading-none",
      label: "『 leading-none 』 line-height: 1;"
    },
    {
      value: "leading-tight",
      label: "『 leading-tight 』 line-height: 1.25;"
    },
    {
      value: "leading-snug",
      label: "『 leading-snug 』 line-height: 1.375;"
    },
    {
      value: "leading-normal",
      label: "『 leading-normal 』 line-height: 1.5;"
    },
    {
      value: "leading-relaxed",
      label: "『 leading-relaxed 』 line-height: 1.625;"
    },
    {
      value: "leading-loose",
      label: "『 leading-loose 』 line-height: 2;"
    }
  ]
};

export const ListStyleType: AttributeProps = {
  type: "list-style-type",
  header: "List Style Type 属性",
  title: "List Style Type ClassName：",
  inputPlaceholder: "list-style-type: xxxx",
  selectPlaceholder: "list-style-type: xxxx",
  hasCustom: true,
  options: [
    {
      value: "list-none",
      label: "『 list-none 』 list-style-type: none;"
    },
    {
      value: "list-disc",
      label: "『 list-disc 』 list-style-type: disc;"
    },
    {
      value: "list-decimal",
      label: "『 list-decimal 』 list-style-type: decimal;"
    }
  ]
};

export const ListStylePosition: AttributeProps = {
  type: "list-style-position",
  header: "List Style Position 属性",
  title: "List Style Position ClassName：",
  inputPlaceholder: "list-style-position: xxxx",
  selectPlaceholder: "list-style-position: xxxx",
  hasCustom: false,
  options: [
    {
      value: "list-inside",
      label: "『 list-inside 』 list-style-position: inside;"
    },
    {
      value: "list-outside",
      label: "『 list-outside 』 list-style-position: outside;"
    }
  ]
};

export const TextAlign: AttributeProps = {
  type: "text-align",
  header: "Text Align 属性",
  title: "Text Align ClassName：",
  inputPlaceholder: "text-align: xxxx",
  selectPlaceholder: "text-align: xxxx",
  hasCustom: false,
  options: [
    {
      value: "text-left",
      label: "『 text-left 』 text-align: left;"
    },
    {
      value: "text-center",
      label: "『 text-center 』 text-align: center;"
    },
    {
      value: "text-right",
      label: "『 text-right 』 text-align: right;"
    },
    {
      value: "text-justify",
      label: "『 text-justify 』 text-align: justify;"
    },
    {
      value: "text-start",
      label: "『 text-start 』 text-align: start;"
    },
    {
      value: "text-end",
      label: "『 text-end 』 text-align: end;"
    }
  ]
};

export const TextColor: AttributeProps = {
  type: "color",
  header: "Text Color 属性",
  title: "Text Color ClassName：",
  inputPlaceholder: "color: xxxx",
  selectPlaceholder: "color: xxxx",
  hasCustom: false,
  options: [
    {
      value: "text-inherit",
      label: "『 text-inherit 』 color: inherit;"
    },
    {
      value: "text-current",
      label: "『 text-current 』 color: currentColor;"
    },
    {
      value: "text-transparent",
      label: "『 text-transparent 』 color: transparent;"
    },
    {
      value: "text-black",
      label: "『 text-black 』 color: rgb(0 0 0);"
    },
    {
      value: "text-white",
      label: "『 text-white 』 color: rgb(255 255 255);"
    },
    {
      value: "text-slate-50",
      label: "『 text-slate-50 』 color: rgb(248 250 252);"
    },
    {
      value: "text-slate-100",
      label: "『 text-slate-100 』 color: rgb(241 245 249);"
    },
    {
      value: "text-slate-200",
      label: "『 text-slate-200 』 color: rgb(226 232 240);"
    },
    {
      value: "text-slate-300",
      label: "『 text-slate-300 』 color: rgb(203 213 225);"
    },
    {
      value: "text-slate-400",
      label: "『 text-slate-400 』 color: rgb(148 163 184);"
    },
    {
      value: "text-slate-500",
      label: "『 text-slate-500 』 color: rgb(100 116 139);"
    },
    {
      value: "text-slate-600",
      label: "『 text-slate-600 』 color: rgb(71 85 105);"
    },
    {
      value: "text-slate-700",
      label: "『 text-slate-700 』 color: rgb(51 65 85);"
    },
    {
      value: "text-slate-800",
      label: "『 text-slate-800 』 color: rgb(30 41 59);"
    },
    {
      value: "text-slate-900",
      label: "『 text-slate-900 』 color: rgb(15 23 42);"
    },
    {
      value: "text-gray-50",
      label: "『 text-gray-50 』 color: rgb(249 250 251);"
    },
    {
      value: "text-gray-100",
      label: "『 text-gray-100 』 color: rgb(243 244 246);"
    },
    {
      value: "text-gray-200",
      label: "『 text-gray-200 』 color: rgb(229 231 235);"
    },
    {
      value: "text-gray-300",
      label: "『 text-gray-300 』 color: rgb(209 213 219);"
    },
    {
      value: "text-gray-400",
      label: "『 text-gray-400 』 color: rgb(156 163 175);"
    },
    {
      value: "text-gray-500",
      label: "『 text-gray-500 』 color: rgb(107 114 128);"
    },
    {
      value: "text-gray-600",
      label: "『 text-gray-600 』 color: rgb(75 85 99);"
    },
    {
      value: "text-gray-700",
      label: "『 text-gray-700 』 color: rgb(55 65 81);"
    },
    {
      value: "text-gray-800",
      label: "『 text-gray-800 』 color: rgb(31 41 55);"
    },
    {
      value: "text-gray-900",
      label: "『 text-gray-900 』 color: rgb(17 24 39);"
    },
    {
      value: "text-zinc-50",
      label: "『 text-zinc-50 』 color: rgb(250 250 250);"
    },
    {
      value: "text-zinc-100",
      label: "『 text-zinc-100 』 color: rgb(244 244 245);"
    },
    {
      value: "text-zinc-200",
      label: "『 text-zinc-200 』 color: rgb(228 228 231);"
    },
    {
      value: "text-zinc-300",
      label: "『 text-zinc-300 』 color: rgb(212 212 216);"
    },
    {
      value: "text-zinc-400",
      label: "『 text-zinc-400 』 color: rgb(161 161 170);"
    },
    {
      value: "text-zinc-500",
      label: "『 text-zinc-500 』 color: rgb(113 113 122);"
    },
    {
      value: "text-zinc-600",
      label: "『 text-zinc-600 』 color: rgb(82 82 91);"
    },
    {
      value: "text-zinc-700",
      label: "『 text-zinc-700 』 color: rgb(63 63 70);"
    },
    {
      value: "text-zinc-800",
      label: "『 text-zinc-800 』 color: rgb(39 39 42);"
    },
    {
      value: "text-zinc-900",
      label: "『 text-zinc-900 』 color: rgb(24 24 27);"
    },
    {
      value: "text-neutral-50",
      label: "『 text-neutral-50 』 color: rgb(250 250 250);"
    },
    {
      value: "text-neutral-100",
      label: "『 text-neutral-100 』 color: rgb(245 245 245);"
    },
    {
      value: "text-neutral-200",
      label: "『 text-neutral-200 』 color: rgb(229 229 229);"
    },
    {
      value: "text-neutral-300",
      label: "『 text-neutral-300 』 color: rgb(212 212 212);"
    },
    {
      value: "text-neutral-400",
      label: "『 text-neutral-400 』 color: rgb(163 163 163);"
    },
    {
      value: "text-neutral-500",
      label: "『 text-neutral-500 』 color: rgb(115 115 115);"
    },
    {
      value: "text-neutral-600",
      label: "『 text-neutral-600 』 color: rgb(82 82 82);"
    },
    {
      value: "text-neutral-700",
      label: "『 text-neutral-700 』 color: rgb(64 64 64);"
    },
    {
      value: "text-neutral-800",
      label: "『 text-neutral-800 』 color: rgb(38 38 38);"
    },
    {
      value: "text-neutral-900",
      label: "『 text-neutral-900 』 color: rgb(23 23 23);"
    },
    {
      value: "text-stone-50",
      label: "『 text-stone-50 』 color: rgb(250 250 249);"
    },
    {
      value: "text-stone-100",
      label: "『 text-stone-100 』 color: rgb(245 245 244);"
    },
    {
      value: "text-stone-200",
      label: "『 text-stone-200 』 color: rgb(231 229 228);"
    },
    {
      value: "text-stone-300",
      label: "『 text-stone-300 』 color: rgb(214 211 209);"
    },
    {
      value: "text-stone-400",
      label: "『 text-stone-400 』 color: rgb(168 162 158);"
    },
    {
      value: "text-stone-500",
      label: "『 text-stone-500 』 color: rgb(120 113 108);"
    },
    {
      value: "text-stone-600",
      label: "『 text-stone-600 』 color: rgb(87 83 78);"
    },
    {
      value: "text-stone-700",
      label: "『 text-stone-700 』 color: rgb(68 64 60);"
    },
    {
      value: "text-stone-800",
      label: "『 text-stone-800 』 color: rgb(41 37 36);"
    },
    {
      value: "text-stone-900",
      label: "『 text-stone-900 』 color: rgb(28 25 23);"
    },
    {
      value: "text-red-50",
      label: "『 text-red-50 』 color: rgb(254 242 242);"
    },
    {
      value: "text-red-100",
      label: "『 text-red-100 』 color: rgb(254 226 226);"
    },
    {
      value: "text-red-200",
      label: "『 text-red-200 』 color: rgb(254 202 202);"
    },
    {
      value: "text-red-300",
      label: "『 text-red-300 』 color: rgb(252 165 165);"
    },
    {
      value: "text-red-400",
      label: "『 text-red-400 』 color: rgb(248 113 113);"
    },
    {
      value: "text-red-500",
      label: "『 text-red-500 』 color: rgb(239 68 68);"
    },
    {
      value: "text-red-600",
      label: "『 text-red-600 』 color: rgb(220 38 38);"
    },
    {
      value: "text-red-700",
      label: "『 text-red-700 』 color: rgb(185 28 28);"
    },
    {
      value: "text-red-800",
      label: "『 text-red-800 』 color: rgb(153 27 27);"
    },
    {
      value: "text-red-900",
      label: "『 text-red-900 』 color: rgb(127 29 29);"
    },
    {
      value: "text-orange-50",
      label: "『 text-orange-50 』 color: rgb(255 247 237);"
    },
    {
      value: "text-orange-100",
      label: "『 text-orange-100 』 color: rgb(255 237 213);"
    },
    {
      value: "text-orange-200",
      label: "『 text-orange-200 』 color: rgb(254 215 170);"
    },
    {
      value: "text-orange-300",
      label: "『 text-orange-300 』 color: rgb(253 186 116);"
    },
    {
      value: "text-orange-400",
      label: "『 text-orange-400 』 color: rgb(251 146 60);"
    },
    {
      value: "text-orange-500",
      label: "『 text-orange-500 』 color: rgb(249 115 22);"
    },
    {
      value: "text-orange-600",
      label: "『 text-orange-600 』 color: rgb(234 88 12);"
    },
    {
      value: "text-orange-700",
      label: "『 text-orange-700 』 color: rgb(194 65 12);"
    },
    {
      value: "text-orange-800",
      label: "『 text-orange-800 』 color: rgb(154 52 18);"
    },
    {
      value: "text-orange-900",
      label: "『 text-orange-900 』 color: rgb(124 45 18);"
    },
    {
      value: "text-amber-50",
      label: "『 text-amber-50 』 color: rgb(255 251 235);"
    },
    {
      value: "text-amber-100",
      label: "『 text-amber-100 』 color: rgb(254 243 199);"
    },
    {
      value: "text-amber-200",
      label: "『 text-amber-200 』 color: rgb(253 230 138);"
    },
    {
      value: "text-amber-300",
      label: "『 text-amber-300 』 color: rgb(252 211 77);"
    },
    {
      value: "text-amber-400",
      label: "『 text-amber-400 』 color: rgb(251 191 36);"
    },
    {
      value: "text-amber-500",
      label: "『 text-amber-500 』 color: rgb(245 158 11);"
    },
    {
      value: "text-amber-600",
      label: "『 text-amber-600 』 color: rgb(217 119 6);"
    },
    {
      value: "text-amber-700",
      label: "『 text-amber-700 』 color: rgb(180 83 9);"
    },
    {
      value: "text-amber-800",
      label: "『 text-amber-800 』 color: rgb(146 64 14);"
    },
    {
      value: "text-amber-900",
      label: "『 text-amber-900 』 color: rgb(120 53 15);"
    },
    {
      value: "text-yellow-50",
      label: "『 text-yellow-50 』 color: rgb(254 252 232);"
    },
    {
      value: "text-yellow-100",
      label: "『 text-yellow-100 』 color: rgb(254 249 195);"
    },
    {
      value: "text-yellow-200",
      label: "『 text-yellow-200 』 color: rgb(254 240 138);"
    },
    {
      value: "text-yellow-300",
      label: "『 text-yellow-300 』 color: rgb(253 224 71);"
    },
    {
      value: "text-yellow-400",
      label: "『 text-yellow-400 』 color: rgb(250 204 21);"
    },
    {
      value: "text-yellow-500",
      label: "『 text-yellow-500 』 color: rgb(234 179 8);"
    },
    {
      value: "text-yellow-600",
      label: "『 text-yellow-600 』 color: rgb(202 138 4);"
    },
    {
      value: "text-yellow-700",
      label: "『 text-yellow-700 』 color: rgb(161 98 7);"
    },
    {
      value: "text-yellow-800",
      label: "『 text-yellow-800 』 color: rgb(133 77 14);"
    },
    {
      value: "text-yellow-900",
      label: "『 text-yellow-900 』 color: rgb(113 63 18);"
    },
    {
      value: "text-lime-50",
      label: "『 text-lime-50 』 color: rgb(247 254 231);"
    },
    {
      value: "text-lime-100",
      label: "『 text-lime-100 』 color: rgb(236 252 203);"
    },
    {
      value: "text-lime-200",
      label: "『 text-lime-200 』 color: rgb(217 249 157);"
    },
    {
      value: "text-lime-300",
      label: "『 text-lime-300 』 color: rgb(190 242 100);"
    },
    {
      value: "text-lime-400",
      label: "『 text-lime-400 』 color: rgb(163 230 53);"
    },
    {
      value: "text-lime-500",
      label: "『 text-lime-500 』 color: rgb(132 204 22);"
    },
    {
      value: "text-lime-600",
      label: "『 text-lime-600 』 color: rgb(101 163 13);"
    },
    {
      value: "text-lime-700",
      label: "『 text-lime-700 』 color: rgb(77 124 15);"
    },
    {
      value: "text-lime-800",
      label: "『 text-lime-800 』 color: rgb(63 98 18);"
    },
    {
      value: "text-lime-900",
      label: "『 text-lime-900 』 color: rgb(54 83 20);"
    },
    {
      value: "text-green-50",
      label: "『 text-green-50 』 color: rgb(240 253 244);"
    },
    {
      value: "text-green-100",
      label: "『 text-green-100 』 color: rgb(220 252 231);"
    },
    {
      value: "text-green-200",
      label: "『 text-green-200 』 color: rgb(187 247 208);"
    },
    {
      value: "text-green-300",
      label: "『 text-green-300 』 color: rgb(134 239 172);"
    },
    {
      value: "text-green-400",
      label: "『 text-green-400 』 color: rgb(74 222 128);"
    },
    {
      value: "text-green-500",
      label: "『 text-green-500 』 color: rgb(34 197 94);"
    },
    {
      value: "text-green-600",
      label: "『 text-green-600 』 color: rgb(22 163 74);"
    },
    {
      value: "text-green-700",
      label: "『 text-green-700 』 color: rgb(21 128 61);"
    },
    {
      value: "text-green-800",
      label: "『 text-green-800 』 color: rgb(22 101 52);"
    },
    {
      value: "text-green-900",
      label: "『 text-green-900 』 color: rgb(20 83 45);"
    },
    {
      value: "text-emerald-50",
      label: "『 text-emerald-50 』 color: rgb(236 253 245);"
    },
    {
      value: "text-emerald-100",
      label: "『 text-emerald-100 』 color: rgb(209 250 229);"
    },
    {
      value: "text-emerald-200",
      label: "『 text-emerald-200 』 color: rgb(167 243 208);"
    },
    {
      value: "text-emerald-300",
      label: "『 text-emerald-300 』 color: rgb(110 231 183);"
    },
    {
      value: "text-emerald-400",
      label: "『 text-emerald-400 』 color: rgb(52 211 153);"
    },
    {
      value: "text-emerald-500",
      label: "『 text-emerald-500 』 color: rgb(16 185 129);"
    },
    {
      value: "text-emerald-600",
      label: "『 text-emerald-600 』 color: rgb(5 150 105);"
    },
    {
      value: "text-emerald-700",
      label: "『 text-emerald-700 』 color: rgb(4 120 87);"
    },
    {
      value: "text-emerald-800",
      label: "『 text-emerald-800 』 color: rgb(6 95 70);"
    },
    {
      value: "text-emerald-900",
      label: "『 text-emerald-900 』 color: rgb(6 78 59);"
    },
    {
      value: "text-teal-50",
      label: "『 text-teal-50 』 color: rgb(240 253 250);"
    },
    {
      value: "text-teal-100",
      label: "『 text-teal-100 』 color: rgb(204 251 241);"
    },
    {
      value: "text-teal-200",
      label: "『 text-teal-200 』 color: rgb(153 246 228);"
    },
    {
      value: "text-teal-300",
      label: "『 text-teal-300 』 color: rgb(94 234 212);"
    },
    {
      value: "text-teal-400",
      label: "『 text-teal-400 』 color: rgb(45 212 191);"
    },
    {
      value: "text-teal-500",
      label: "『 text-teal-500 』 color: rgb(20 184 166);"
    },
    {
      value: "text-teal-600",
      label: "『 text-teal-600 』 color: rgb(13 148 136);"
    },
    {
      value: "text-teal-700",
      label: "『 text-teal-700 』 color: rgb(15 118 110);"
    },
    {
      value: "text-teal-800",
      label: "『 text-teal-800 』 color: rgb(17 94 89);"
    },
    {
      value: "text-teal-900",
      label: "『 text-teal-900 』 color: rgb(19 78 74);"
    },
    {
      value: "text-cyan-50",
      label: "『 text-cyan-50 』 color: rgb(236 254 255);"
    },
    {
      value: "text-cyan-100",
      label: "『 text-cyan-100 』 color: rgb(207 250 254);"
    },
    {
      value: "text-cyan-200",
      label: "『 text-cyan-200 』 color: rgb(165 243 252);"
    },
    {
      value: "text-cyan-300",
      label: "『 text-cyan-300 』 color: rgb(103 232 249);"
    },
    {
      value: "text-cyan-400",
      label: "『 text-cyan-400 』 color: rgb(34 211 238);"
    },
    {
      value: "text-cyan-500",
      label: "『 text-cyan-500 』 color: rgb(6 182 212);"
    },
    {
      value: "text-cyan-600",
      label: "『 text-cyan-600 』 color: rgb(8 145 178);"
    },
    {
      value: "text-cyan-700",
      label: "『 text-cyan-700 』 color: rgb(14 116 144);"
    },
    {
      value: "text-cyan-800",
      label: "『 text-cyan-800 』 color: rgb(21 94 117);"
    },
    {
      value: "text-cyan-900",
      label: "『 text-cyan-900 』 color: rgb(22 78 99);"
    },
    {
      value: "text-sky-50",
      label: "『 text-sky-50 』 color: rgb(240 249 255);"
    },
    {
      value: "text-sky-100",
      label: "『 text-sky-100 』 color: rgb(224 242 254);"
    },
    {
      value: "text-sky-200",
      label: "『 text-sky-200 』 color: rgb(186 230 253);"
    },
    {
      value: "text-sky-300",
      label: "『 text-sky-300 』 color: rgb(125 211 252);"
    },
    {
      value: "text-sky-400",
      label: "『 text-sky-400 』 color: rgb(56 189 248);"
    },
    {
      value: "text-sky-500",
      label: "『 text-sky-500 』 color: rgb(14 165 233);"
    },
    {
      value: "text-sky-600",
      label: "『 text-sky-600 』 color: rgb(2 132 199);"
    },
    {
      value: "text-sky-700",
      label: "『 text-sky-700 』 color: rgb(3 105 161);"
    },
    {
      value: "text-sky-800",
      label: "『 text-sky-800 』 color: rgb(7 89 133);"
    },
    {
      value: "text-sky-900",
      label: "『 text-sky-900 』 color: rgb(12 74 110);"
    },
    {
      value: "text-blue-50",
      label: "『 text-blue-50 』 color: rgb(239 246 255);"
    },
    {
      value: "text-blue-100",
      label: "『 text-blue-100 』 color: rgb(219 234 254);"
    },
    {
      value: "text-blue-200",
      label: "『 text-blue-200 』 color: rgb(191 219 254);"
    },
    {
      value: "text-blue-300",
      label: "『 text-blue-300 』 color: rgb(147 197 253);"
    },
    {
      value: "text-blue-400",
      label: "『 text-blue-400 』 color: rgb(96 165 250);"
    },
    {
      value: "text-blue-500",
      label: "『 text-blue-500 』 color: rgb(59 130 246);"
    },
    {
      value: "text-blue-600",
      label: "『 text-blue-600 』 color: rgb(37 99 235);"
    },
    {
      value: "text-blue-700",
      label: "『 text-blue-700 』 color: rgb(29 78 216);"
    },
    {
      value: "text-blue-800",
      label: "『 text-blue-800 』 color: rgb(30 64 175);"
    },
    {
      value: "text-blue-900",
      label: "『 text-blue-900 』 color: rgb(30 58 138);"
    },
    {
      value: "text-indigo-50",
      label: "『 text-indigo-50 』 color: rgb(238 242 255);"
    },
    {
      value: "text-indigo-100",
      label: "『 text-indigo-100 』 color: rgb(224 231 255);"
    },
    {
      value: "text-indigo-200",
      label: "『 text-indigo-200 』 color: rgb(199 210 254);"
    },
    {
      value: "text-indigo-300",
      label: "『 text-indigo-300 』 color: rgb(165 180 252);"
    },
    {
      value: "text-indigo-400",
      label: "『 text-indigo-400 』 color: rgb(129 140 248);"
    },
    {
      value: "text-indigo-500",
      label: "『 text-indigo-500 』 color: rgb(99 102 241);"
    },
    {
      value: "text-indigo-600",
      label: "『 text-indigo-600 』 color: rgb(79 70 229);"
    },
    {
      value: "text-indigo-700",
      label: "『 text-indigo-700 』 color: rgb(67 56 202);"
    },
    {
      value: "text-indigo-800",
      label: "『 text-indigo-800 』 color: rgb(55 48 163);"
    },
    {
      value: "text-indigo-900",
      label: "『 text-indigo-900 』 color: rgb(49 46 129);"
    },
    {
      value: "text-violet-50",
      label: "『 text-violet-50 』 color: rgb(245 243 255);"
    },
    {
      value: "text-violet-100",
      label: "『 text-violet-100 』 color: rgb(237 233 254);"
    },
    {
      value: "text-violet-200",
      label: "『 text-violet-200 』 color: rgb(221 214 254);"
    },
    {
      value: "text-violet-300",
      label: "『 text-violet-300 』 color: rgb(196 181 253);"
    },
    {
      value: "text-violet-400",
      label: "『 text-violet-400 』 color: rgb(167 139 250);"
    },
    {
      value: "text-violet-500",
      label: "『 text-violet-500 』 color: rgb(139 92 246);"
    },
    {
      value: "text-violet-600",
      label: "『 text-violet-600 』 color: rgb(124 58 237);"
    },
    {
      value: "text-violet-700",
      label: "『 text-violet-700 』 color: rgb(109 40 217);"
    },
    {
      value: "text-violet-800",
      label: "『 text-violet-800 』 color: rgb(91 33 182);"
    },
    {
      value: "text-violet-900",
      label: "『 text-violet-900 』 color: rgb(76 29 149);"
    },
    {
      value: "text-purple-50",
      label: "『 text-purple-50 』 color: rgb(250 245 255);"
    },
    {
      value: "text-purple-100",
      label: "『 text-purple-100 』 color: rgb(243 232 255);"
    },
    {
      value: "text-purple-200",
      label: "『 text-purple-200 』 color: rgb(233 213 255);"
    },
    {
      value: "text-purple-300",
      label: "『 text-purple-300 』 color: rgb(216 180 254);"
    },
    {
      value: "text-purple-400",
      label: "『 text-purple-400 』 color: rgb(192 132 252);"
    },
    {
      value: "text-purple-500",
      label: "『 text-purple-500 』 color: rgb(168 85 247);"
    },
    {
      value: "text-purple-600",
      label: "『 text-purple-600 』 color: rgb(147 51 234);"
    },
    {
      value: "text-purple-700",
      label: "『 text-purple-700 』 color: rgb(126 34 206);"
    },
    {
      value: "text-purple-800",
      label: "『 text-purple-800 』 color: rgb(107 33 168);"
    },
    {
      value: "text-purple-900",
      label: "『 text-purple-900 』 color: rgb(88 28 135);"
    },
    {
      value: "text-fuchsia-50",
      label: "『 text-fuchsia-50 』 color: rgb(253 244 255);"
    },
    {
      value: "text-fuchsia-100",
      label: "『 text-fuchsia-100 』 color: rgb(250 232 255);"
    },
    {
      value: "text-fuchsia-200",
      label: "『 text-fuchsia-200 』 color: rgb(245 208 254);"
    },
    {
      value: "text-fuchsia-300",
      label: "『 text-fuchsia-300 』 color: rgb(240 171 252);"
    },
    {
      value: "text-fuchsia-400",
      label: "『 text-fuchsia-400 』 color: rgb(232 121 249);"
    },
    {
      value: "text-fuchsia-500",
      label: "『 text-fuchsia-500 』 color: rgb(217 70 239);"
    },
    {
      value: "text-fuchsia-600",
      label: "『 text-fuchsia-600 』 color: rgb(192 38 211);"
    },
    {
      value: "text-fuchsia-700",
      label: "『 text-fuchsia-700 』 color: rgb(162 28 175);"
    },
    {
      value: "text-fuchsia-800",
      label: "『 text-fuchsia-800 』 color: rgb(134 25 143);"
    },
    {
      value: "text-fuchsia-900",
      label: "『 text-fuchsia-900 』 color: rgb(112 26 117);"
    },
    {
      value: "text-pink-50",
      label: "『 text-pink-50 』 color: rgb(253 242 248);"
    },
    {
      value: "text-pink-100",
      label: "『 text-pink-100 』 color: rgb(252 231 243);"
    },
    {
      value: "text-pink-200",
      label: "『 text-pink-200 』 color: rgb(251 207 232);"
    },
    {
      value: "text-pink-300",
      label: "『 text-pink-300 』 color: rgb(249 168 212);"
    },
    {
      value: "text-pink-400",
      label: "『 text-pink-400 』 color: rgb(244 114 182);"
    },
    {
      value: "text-pink-500",
      label: "『 text-pink-500 』 color: rgb(236 72 153);"
    },
    {
      value: "text-pink-600",
      label: "『 text-pink-600 』 color: rgb(219 39 119);"
    },
    {
      value: "text-pink-700",
      label: "『 text-pink-700 』 color: rgb(190 24 93);"
    },
    {
      value: "text-pink-800",
      label: "『 text-pink-800 』 color: rgb(157 23 77);"
    },
    {
      value: "text-pink-900",
      label: "『 text-pink-900 』 color: rgb(131 24 67);"
    },
    {
      value: "text-rose-50",
      label: "『 text-rose-50 』 color: rgb(255 241 242);"
    },
    {
      value: "text-rose-100",
      label: "『 text-rose-100 』 color: rgb(255 228 230);"
    },
    {
      value: "text-rose-200",
      label: "『 text-rose-200 』 color: rgb(254 205 211);"
    },
    {
      value: "text-rose-300",
      label: "『 text-rose-300 』 color: rgb(253 164 175);"
    },
    {
      value: "text-rose-400",
      label: "『 text-rose-400 』 color: rgb(251 113 133);"
    },
    {
      value: "text-rose-500",
      label: "『 text-rose-500 』 color: rgb(244 63 94);"
    },
    {
      value: "text-rose-600",
      label: "『 text-rose-600 』 color: rgb(225 29 72);"
    },
    {
      value: "text-rose-700",
      label: "『 text-rose-700 』 color: rgb(190 18 60);"
    },
    {
      value: "text-rose-800",
      label: "『 text-rose-800 』 color: rgb(159 18 57);"
    },
    {
      value: "text-rose-900",
      label: "『 text-rose-900 』 color: rgb(136 19 55);"
    }
  ]
};

export const TextDecoration: AttributeProps = {
  type: "text-decoration-line",
  header: "Text Decoration 属性",
  title: "Text Decoration ClassName：",
  inputPlaceholder: "text-decoration-line: xxxx",
  selectPlaceholder: "text-decoration-line: xxxx",
  hasCustom: false,
  options: [
    {
      value: "underline",
      label: "『 underline 』 text-decoration-line: underline;"
    },
    {
      value: "overline",
      label: "『 overline 』 text-decoration-line: overline;"
    },
    {
      value: "line-through",
      label: "『 line-through 』 text-decoration-line: line-through;"
    },
    {
      value: "no-underline",
      label: "『 no-underline 』 text-decoration-line: none;"
    }
  ]
};

export const TextDecorationColor: AttributeProps = {
  type: "text-decoration-color",
  header: "Text Decoration Color 属性",
  title: "Text Decoration Color ClassName：",
  inputPlaceholder: "text-decoration-color: xxxx",
  selectPlaceholder: "text-decoration-color: xxxx",
  hasCustom: true,
  options: [
    {
      value: "decoration-inherit",
      label: "『 decoration-inherit 』 text-decoration-color: inherit;"
    },
    {
      value: "decoration-current",
      label: "『 decoration-current 』 text-decoration-color: currentColor;"
    },
    {
      value: "decoration-transparent",
      label: "『 decoration-transparent 』 text-decoration-color: transparent;"
    },
    {
      value: "decoration-black",
      label: "『 decoration-black 』 text-decoration-color: #000;"
    },
    {
      value: "decoration-white",
      label: "『 decoration-white 』 text-decoration-color: #fff;"
    },
    {
      value: "decoration-slate-50",
      label: "『 decoration-slate-50 』 text-decoration-color: #f8fafc;"
    },
    {
      value: "decoration-slate-100",
      label: "『 decoration-slate-100 』 text-decoration-color: #f1f5f9;"
    },
    {
      value: "decoration-slate-200",
      label: "『 decoration-slate-200 』 text-decoration-color: #e2e8f0;"
    },
    {
      value: "decoration-slate-300",
      label: "『 decoration-slate-300 』 text-decoration-color: #cbd5e1;"
    },
    {
      value: "decoration-slate-400",
      label: "『 decoration-slate-400 』 text-decoration-color: #94a3b8;"
    },
    {
      value: "decoration-slate-500",
      label: "『 decoration-slate-500 』 text-decoration-color: #64748b;"
    },
    {
      value: "decoration-slate-600",
      label: "『 decoration-slate-600 』 text-decoration-color: #475569;"
    },
    {
      value: "decoration-slate-700",
      label: "『 decoration-slate-700 』 text-decoration-color: #334155;"
    },
    {
      value: "decoration-slate-800",
      label: "『 decoration-slate-800 』 text-decoration-color: #1e293b;"
    },
    {
      value: "decoration-slate-900",
      label: "『 decoration-slate-900 』 text-decoration-color: #0f172a;"
    },
    {
      value: "decoration-gray-50",
      label: "『 decoration-gray-50 』 text-decoration-color: #f9fafb;"
    },
    {
      value: "decoration-gray-100",
      label: "『 decoration-gray-100 』 text-decoration-color: #f3f4f6;"
    },
    {
      value: "decoration-gray-200",
      label: "『 decoration-gray-200 』 text-decoration-color: #e5e7eb;"
    },
    {
      value: "decoration-gray-300",
      label: "『 decoration-gray-300 』 text-decoration-color: #d1d5db;"
    },
    {
      value: "decoration-gray-400",
      label: "『 decoration-gray-400 』 text-decoration-color: #9ca3af;"
    },
    {
      value: "decoration-gray-500",
      label: "『 decoration-gray-500 』 text-decoration-color: #6b7280;"
    },
    {
      value: "decoration-gray-600",
      label: "『 decoration-gray-600 』 text-decoration-color: #4b5563;"
    },
    {
      value: "decoration-gray-700",
      label: "『 decoration-gray-700 』 text-decoration-color: #374151;"
    },
    {
      value: "decoration-gray-800",
      label: "『 decoration-gray-800 』 text-decoration-color: #1f2937;"
    },
    {
      value: "decoration-gray-900",
      label: "『 decoration-gray-900 』 text-decoration-color: #111827;"
    },
    {
      value: "decoration-zinc-50",
      label: "『 decoration-zinc-50 』 text-decoration-color: #fafafa;"
    },
    {
      value: "decoration-zinc-100",
      label: "『 decoration-zinc-100 』 text-decoration-color: #f4f4f5;"
    },
    {
      value: "decoration-zinc-200",
      label: "『 decoration-zinc-200 』 text-decoration-color: #e4e4e7;"
    },
    {
      value: "decoration-zinc-300",
      label: "『 decoration-zinc-300 』 text-decoration-color: #d4d4d8;"
    },
    {
      value: "decoration-zinc-400",
      label: "『 decoration-zinc-400 』 text-decoration-color: #a1a1aa;"
    },
    {
      value: "decoration-zinc-500",
      label: "『 decoration-zinc-500 』 text-decoration-color: #71717a;"
    },
    {
      value: "decoration-zinc-600",
      label: "『 decoration-zinc-600 』 text-decoration-color: #52525b;"
    },
    {
      value: "decoration-zinc-700",
      label: "『 decoration-zinc-700 』 text-decoration-color: #3f3f46;"
    },
    {
      value: "decoration-zinc-800",
      label: "『 decoration-zinc-800 』 text-decoration-color: #27272a;"
    },
    {
      value: "decoration-zinc-900",
      label: "『 decoration-zinc-900 』 text-decoration-color: #18181b;"
    },
    {
      value: "decoration-neutral-50",
      label: "『 decoration-neutral-50 』 text-decoration-color: #fafafa;"
    },
    {
      value: "decoration-neutral-100",
      label: "『 decoration-neutral-100 』 text-decoration-color: #f5f5f5;"
    },
    {
      value: "decoration-neutral-200",
      label: "『 decoration-neutral-200 』 text-decoration-color: #e5e5e5;"
    },
    {
      value: "decoration-neutral-300",
      label: "『 decoration-neutral-300 』 text-decoration-color: #d4d4d4;"
    },
    {
      value: "decoration-neutral-400",
      label: "『 decoration-neutral-400 』 text-decoration-color: #a3a3a3;"
    },
    {
      value: "decoration-neutral-500",
      label: "『 decoration-neutral-500 』 text-decoration-color: #737373;"
    },
    {
      value: "decoration-neutral-600",
      label: "『 decoration-neutral-600 』 text-decoration-color: #525252;"
    },
    {
      value: "decoration-neutral-700",
      label: "『 decoration-neutral-700 』 text-decoration-color: #404040;"
    },
    {
      value: "decoration-neutral-800",
      label: "『 decoration-neutral-800 』 text-decoration-color: #262626;"
    },
    {
      value: "decoration-neutral-900",
      label: "『 decoration-neutral-900 』 text-decoration-color: #171717;"
    },
    {
      value: "decoration-stone-50",
      label: "『 decoration-stone-50 』 text-decoration-color: #fafaf9;"
    },
    {
      value: "decoration-stone-100",
      label: "『 decoration-stone-100 』 text-decoration-color: #f5f5f4;"
    },
    {
      value: "decoration-stone-200",
      label: "『 decoration-stone-200 』 text-decoration-color: #e7e5e4;"
    },
    {
      value: "decoration-stone-300",
      label: "『 decoration-stone-300 』 text-decoration-color: #d6d3d1;"
    },
    {
      value: "decoration-stone-400",
      label: "『 decoration-stone-400 』 text-decoration-color: #a8a29e;"
    },
    {
      value: "decoration-stone-500",
      label: "『 decoration-stone-500 』 text-decoration-color: #78716c;"
    },
    {
      value: "decoration-stone-600",
      label: "『 decoration-stone-600 』 text-decoration-color: #57534e;"
    },
    {
      value: "decoration-stone-700",
      label: "『 decoration-stone-700 』 text-decoration-color: #44403c;"
    },
    {
      value: "decoration-stone-800",
      label: "『 decoration-stone-800 』 text-decoration-color: #292524;"
    },
    {
      value: "decoration-stone-900",
      label: "『 decoration-stone-900 』 text-decoration-color: #1c1917;"
    },
    {
      value: "decoration-red-50",
      label: "『 decoration-red-50 』 text-decoration-color: #fef2f2;"
    },
    {
      value: "decoration-red-100",
      label: "『 decoration-red-100 』 text-decoration-color: #fee2e2;"
    },
    {
      value: "decoration-red-200",
      label: "『 decoration-red-200 』 text-decoration-color: #fecaca;"
    },
    {
      value: "decoration-red-300",
      label: "『 decoration-red-300 』 text-decoration-color: #fca5a5;"
    },
    {
      value: "decoration-red-400",
      label: "『 decoration-red-400 』 text-decoration-color: #f87171;"
    },
    {
      value: "decoration-red-500",
      label: "『 decoration-red-500 』 text-decoration-color: #ef4444;"
    },
    {
      value: "decoration-red-600",
      label: "『 decoration-red-600 』 text-decoration-color: #dc2626;"
    },
    {
      value: "decoration-red-700",
      label: "『 decoration-red-700 』 text-decoration-color: #b91c1c;"
    },
    {
      value: "decoration-red-800",
      label: "『 decoration-red-800 』 text-decoration-color: #991b1b;"
    },
    {
      value: "decoration-red-900",
      label: "『 decoration-red-900 』 text-decoration-color: #7f1d1d;"
    },
    {
      value: "decoration-orange-50",
      label: "『 decoration-orange-50 』 text-decoration-color: #fff7ed;"
    },
    {
      value: "decoration-orange-100",
      label: "『 decoration-orange-100 』 text-decoration-color: #ffedd5;"
    },
    {
      value: "decoration-orange-200",
      label: "『 decoration-orange-200 』 text-decoration-color: #fed7aa;"
    },
    {
      value: "decoration-orange-300",
      label: "『 decoration-orange-300 』 text-decoration-color: #fdba74;"
    },
    {
      value: "decoration-orange-400",
      label: "『 decoration-orange-400 』 text-decoration-color: #fb923c;"
    },
    {
      value: "decoration-orange-500",
      label: "『 decoration-orange-500 』 text-decoration-color: #f97316;"
    },
    {
      value: "decoration-orange-600",
      label: "『 decoration-orange-600 』 text-decoration-color: #ea580c;"
    },
    {
      value: "decoration-orange-700",
      label: "『 decoration-orange-700 』 text-decoration-color: #c2410c;"
    },
    {
      value: "decoration-orange-800",
      label: "『 decoration-orange-800 』 text-decoration-color: #9a3412;"
    },
    {
      value: "decoration-orange-900",
      label: "『 decoration-orange-900 』 text-decoration-color: #7c2d12;"
    },
    {
      value: "decoration-amber-50",
      label: "『 decoration-amber-50 』 text-decoration-color: #fffbeb;"
    },
    {
      value: "decoration-amber-100",
      label: "『 decoration-amber-100 』 text-decoration-color: #fef3c7;"
    },
    {
      value: "decoration-amber-200",
      label: "『 decoration-amber-200 』 text-decoration-color: #fde68a;"
    },
    {
      value: "decoration-amber-300",
      label: "『 decoration-amber-300 』 text-decoration-color: #fcd34d;"
    },
    {
      value: "decoration-amber-400",
      label: "『 decoration-amber-400 』 text-decoration-color: #fbbf24;"
    },
    {
      value: "decoration-amber-500",
      label: "『 decoration-amber-500 』 text-decoration-color: #f59e0b;"
    },
    {
      value: "decoration-amber-600",
      label: "『 decoration-amber-600 』 text-decoration-color: #d97706;"
    },
    {
      value: "decoration-amber-700",
      label: "『 decoration-amber-700 』 text-decoration-color: #b45309;"
    },
    {
      value: "decoration-amber-800",
      label: "『 decoration-amber-800 』 text-decoration-color: #92400e;"
    },
    {
      value: "decoration-amber-900",
      label: "『 decoration-amber-900 』 text-decoration-color: #78350f;"
    },
    {
      value: "decoration-yellow-50",
      label: "『 decoration-yellow-50 』 text-decoration-color: #fefce8;"
    },
    {
      value: "decoration-yellow-100",
      label: "『 decoration-yellow-100 』 text-decoration-color: #fef9c3;"
    },
    {
      value: "decoration-yellow-200",
      label: "『 decoration-yellow-200 』 text-decoration-color: #fef08a;"
    },
    {
      value: "decoration-yellow-300",
      label: "『 decoration-yellow-300 』 text-decoration-color: #fde047;"
    },
    {
      value: "decoration-yellow-400",
      label: "『 decoration-yellow-400 』 text-decoration-color: #facc15;"
    },
    {
      value: "decoration-yellow-500",
      label: "『 decoration-yellow-500 』 text-decoration-color: #eab308;"
    },
    {
      value: "decoration-yellow-600",
      label: "『 decoration-yellow-600 』 text-decoration-color: #ca8a04;"
    },
    {
      value: "decoration-yellow-700",
      label: "『 decoration-yellow-700 』 text-decoration-color: #a16207;"
    },
    {
      value: "decoration-yellow-800",
      label: "『 decoration-yellow-800 』 text-decoration-color: #854d0e;"
    },
    {
      value: "decoration-yellow-900",
      label: "『 decoration-yellow-900 』 text-decoration-color: #713f12;"
    },
    {
      value: "decoration-lime-50",
      label: "『 decoration-lime-50 』 text-decoration-color: #f7fee7;"
    },
    {
      value: "decoration-lime-100",
      label: "『 decoration-lime-100 』 text-decoration-color: #ecfccb;"
    },
    {
      value: "decoration-lime-200",
      label: "『 decoration-lime-200 』 text-decoration-color: #d9f99d;"
    },
    {
      value: "decoration-lime-300",
      label: "『 decoration-lime-300 』 text-decoration-color: #bef264;"
    },
    {
      value: "decoration-lime-400",
      label: "『 decoration-lime-400 』 text-decoration-color: #a3e635;"
    },
    {
      value: "decoration-lime-500",
      label: "『 decoration-lime-500 』 text-decoration-color: #84cc16;"
    },
    {
      value: "decoration-lime-600",
      label: "『 decoration-lime-600 』 text-decoration-color: #65a30d;"
    },
    {
      value: "decoration-lime-700",
      label: "『 decoration-lime-700 』 text-decoration-color: #4d7c0f;"
    },
    {
      value: "decoration-lime-800",
      label: "『 decoration-lime-800 』 text-decoration-color: #3f6212;"
    },
    {
      value: "decoration-lime-900",
      label: "『 decoration-lime-900 』 text-decoration-color: #365314;"
    },
    {
      value: "decoration-green-50",
      label: "『 decoration-green-50 』 text-decoration-color: #f0fdf4;"
    },
    {
      value: "decoration-green-100",
      label: "『 decoration-green-100 』 text-decoration-color: #dcfce7;"
    },
    {
      value: "decoration-green-200",
      label: "『 decoration-green-200 』 text-decoration-color: #bbf7d0;"
    },
    {
      value: "decoration-green-300",
      label: "『 decoration-green-300 』 text-decoration-color: #86efac;"
    },
    {
      value: "decoration-green-400",
      label: "『 decoration-green-400 』 text-decoration-color: #4ade80;"
    },
    {
      value: "decoration-green-500",
      label: "『 decoration-green-500 』 text-decoration-color: #22c55e;"
    },
    {
      value: "decoration-green-600",
      label: "『 decoration-green-600 』 text-decoration-color: #16a34a;"
    },
    {
      value: "decoration-green-700",
      label: "『 decoration-green-700 』 text-decoration-color: #15803d;"
    },
    {
      value: "decoration-green-800",
      label: "『 decoration-green-800 』 text-decoration-color: #166534;"
    },
    {
      value: "decoration-green-900",
      label: "『 decoration-green-900 』 text-decoration-color: #14532d;"
    },
    {
      value: "decoration-emerald-50",
      label: "『 decoration-emerald-50 』 text-decoration-color: #ecfdf5;"
    },
    {
      value: "decoration-emerald-100",
      label: "『 decoration-emerald-100 』 text-decoration-color: #d1fae5;"
    },
    {
      value: "decoration-emerald-200",
      label: "『 decoration-emerald-200 』 text-decoration-color: #a7f3d0;"
    },
    {
      value: "decoration-emerald-300",
      label: "『 decoration-emerald-300 』 text-decoration-color: #6ee7b7;"
    },
    {
      value: "decoration-emerald-400",
      label: "『 decoration-emerald-400 』 text-decoration-color: #34d399;"
    },
    {
      value: "decoration-emerald-500",
      label: "『 decoration-emerald-500 』 text-decoration-color: #10b981;"
    },
    {
      value: "decoration-emerald-600",
      label: "『 decoration-emerald-600 』 text-decoration-color: #059669;"
    },
    {
      value: "decoration-emerald-700",
      label: "『 decoration-emerald-700 』 text-decoration-color: #047857;"
    },
    {
      value: "decoration-emerald-800",
      label: "『 decoration-emerald-800 』 text-decoration-color: #065f46;"
    },
    {
      value: "decoration-emerald-900",
      label: "『 decoration-emerald-900 』 text-decoration-color: #064e3b;"
    },
    {
      value: "decoration-teal-50",
      label: "『 decoration-teal-50 』 text-decoration-color: #f0fdfa;"
    },
    {
      value: "decoration-teal-100",
      label: "『 decoration-teal-100 』 text-decoration-color: #ccfbf1;"
    },
    {
      value: "decoration-teal-200",
      label: "『 decoration-teal-200 』 text-decoration-color: #99f6e4;"
    },
    {
      value: "decoration-teal-300",
      label: "『 decoration-teal-300 』 text-decoration-color: #5eead4;"
    },
    {
      value: "decoration-teal-400",
      label: "『 decoration-teal-400 』 text-decoration-color: #2dd4bf;"
    },
    {
      value: "decoration-teal-500",
      label: "『 decoration-teal-500 』 text-decoration-color: #14b8a6;"
    },
    {
      value: "decoration-teal-600",
      label: "『 decoration-teal-600 』 text-decoration-color: #0d9488;"
    },
    {
      value: "decoration-teal-700",
      label: "『 decoration-teal-700 』 text-decoration-color: #0f766e;"
    },
    {
      value: "decoration-teal-800",
      label: "『 decoration-teal-800 』 text-decoration-color: #115e59;"
    },
    {
      value: "decoration-teal-900",
      label: "『 decoration-teal-900 』 text-decoration-color: #134e4a;"
    },
    {
      value: "decoration-cyan-50",
      label: "『 decoration-cyan-50 』 text-decoration-color: #ecfeff;"
    },
    {
      value: "decoration-cyan-100",
      label: "『 decoration-cyan-100 』 text-decoration-color: #cffafe;"
    },
    {
      value: "decoration-cyan-200",
      label: "『 decoration-cyan-200 』 text-decoration-color: #a5f3fc;"
    },
    {
      value: "decoration-cyan-300",
      label: "『 decoration-cyan-300 』 text-decoration-color: #67e8f9;"
    },
    {
      value: "decoration-cyan-400",
      label: "『 decoration-cyan-400 』 text-decoration-color: #22d3ee;"
    },
    {
      value: "decoration-cyan-500",
      label: "『 decoration-cyan-500 』 text-decoration-color: #06b6d4;"
    },
    {
      value: "decoration-cyan-600",
      label: "『 decoration-cyan-600 』 text-decoration-color: #0891b2;"
    },
    {
      value: "decoration-cyan-700",
      label: "『 decoration-cyan-700 』 text-decoration-color: #0e7490;"
    },
    {
      value: "decoration-cyan-800",
      label: "『 decoration-cyan-800 』 text-decoration-color: #155e75;"
    },
    {
      value: "decoration-cyan-900",
      label: "『 decoration-cyan-900 』 text-decoration-color: #164e63;"
    },
    {
      value: "decoration-sky-50",
      label: "『 decoration-sky-50 』 text-decoration-color: #f0f9ff;"
    },
    {
      value: "decoration-sky-100",
      label: "『 decoration-sky-100 』 text-decoration-color: #e0f2fe;"
    },
    {
      value: "decoration-sky-200",
      label: "『 decoration-sky-200 』 text-decoration-color: #bae6fd;"
    },
    {
      value: "decoration-sky-300",
      label: "『 decoration-sky-300 』 text-decoration-color: #7dd3fc;"
    },
    {
      value: "decoration-sky-400",
      label: "『 decoration-sky-400 』 text-decoration-color: #38bdf8;"
    },
    {
      value: "decoration-sky-500",
      label: "『 decoration-sky-500 』 text-decoration-color: #0ea5e9;"
    },
    {
      value: "decoration-sky-600",
      label: "『 decoration-sky-600 』 text-decoration-color: #0284c7;"
    },
    {
      value: "decoration-sky-700",
      label: "『 decoration-sky-700 』 text-decoration-color: #0369a1;"
    },
    {
      value: "decoration-sky-800",
      label: "『 decoration-sky-800 』 text-decoration-color: #075985;"
    },
    {
      value: "decoration-sky-900",
      label: "『 decoration-sky-900 』 text-decoration-color: #0c4a6e;"
    },
    {
      value: "decoration-blue-50",
      label: "『 decoration-blue-50 』 text-decoration-color: #eff6ff;"
    },
    {
      value: "decoration-blue-100",
      label: "『 decoration-blue-100 』 text-decoration-color: #dbeafe;"
    },
    {
      value: "decoration-blue-200",
      label: "『 decoration-blue-200 』 text-decoration-color: #bfdbfe;"
    },
    {
      value: "decoration-blue-300",
      label: "『 decoration-blue-300 』 text-decoration-color: #93c5fd;"
    },
    {
      value: "decoration-blue-400",
      label: "『 decoration-blue-400 』 text-decoration-color: #60a5fa;"
    },
    {
      value: "decoration-blue-500",
      label: "『 decoration-blue-500 』 text-decoration-color: #3b82f6;"
    },
    {
      value: "decoration-blue-600",
      label: "『 decoration-blue-600 』 text-decoration-color: #2563eb;"
    },
    {
      value: "decoration-blue-700",
      label: "『 decoration-blue-700 』 text-decoration-color: #1d4ed8;"
    },
    {
      value: "decoration-blue-800",
      label: "『 decoration-blue-800 』 text-decoration-color: #1e40af;"
    },
    {
      value: "decoration-blue-900",
      label: "『 decoration-blue-900 』 text-decoration-color: #1e3a8a;"
    },
    {
      value: "decoration-indigo-50",
      label: "『 decoration-indigo-50 』 text-decoration-color: #eef2ff;"
    },
    {
      value: "decoration-indigo-100",
      label: "『 decoration-indigo-100 』 text-decoration-color: #e0e7ff;"
    },
    {
      value: "decoration-indigo-200",
      label: "『 decoration-indigo-200 』 text-decoration-color: #c7d2fe;"
    },
    {
      value: "decoration-indigo-300",
      label: "『 decoration-indigo-300 』 text-decoration-color: #a5b4fc;"
    },
    {
      value: "decoration-indigo-400",
      label: "『 decoration-indigo-400 』 text-decoration-color: #818cf8;"
    },
    {
      value: "decoration-indigo-500",
      label: "『 decoration-indigo-500 』 text-decoration-color: #6366f1;"
    },
    {
      value: "decoration-indigo-600",
      label: "『 decoration-indigo-600 』 text-decoration-color: #4f46e5;"
    },
    {
      value: "decoration-indigo-700",
      label: "『 decoration-indigo-700 』 text-decoration-color: #4338ca;"
    },
    {
      value: "decoration-indigo-800",
      label: "『 decoration-indigo-800 』 text-decoration-color: #3730a3;"
    },
    {
      value: "decoration-indigo-900",
      label: "『 decoration-indigo-900 』 text-decoration-color: #312e81;"
    },
    {
      value: "decoration-violet-50",
      label: "『 decoration-violet-50 』 text-decoration-color: #f5f3ff;"
    },
    {
      value: "decoration-violet-100",
      label: "『 decoration-violet-100 』 text-decoration-color: #ede9fe;"
    },
    {
      value: "decoration-violet-200",
      label: "『 decoration-violet-200 』 text-decoration-color: #ddd6fe;"
    },
    {
      value: "decoration-violet-300",
      label: "『 decoration-violet-300 』 text-decoration-color: #c4b5fd;"
    },
    {
      value: "decoration-violet-400",
      label: "『 decoration-violet-400 』 text-decoration-color: #a78bfa;"
    },
    {
      value: "decoration-violet-500",
      label: "『 decoration-violet-500 』 text-decoration-color: #8b5cf6;"
    },
    {
      value: "decoration-violet-600",
      label: "『 decoration-violet-600 』 text-decoration-color: #7c3aed;"
    },
    {
      value: "decoration-violet-700",
      label: "『 decoration-violet-700 』 text-decoration-color: #6d28d9;"
    },
    {
      value: "decoration-violet-800",
      label: "『 decoration-violet-800 』 text-decoration-color: #5b21b6;"
    },
    {
      value: "decoration-violet-900",
      label: "『 decoration-violet-900 』 text-decoration-color: #4c1d95;"
    },
    {
      value: "decoration-purple-50",
      label: "『 decoration-purple-50 』 text-decoration-color: #faf5ff;"
    },
    {
      value: "decoration-purple-100",
      label: "『 decoration-purple-100 』 text-decoration-color: #f3e8ff;"
    },
    {
      value: "decoration-purple-200",
      label: "『 decoration-purple-200 』 text-decoration-color: #e9d5ff;"
    },
    {
      value: "decoration-purple-300",
      label: "『 decoration-purple-300 』 text-decoration-color: #d8b4fe;"
    },
    {
      value: "decoration-purple-400",
      label: "『 decoration-purple-400 』 text-decoration-color: #c084fc;"
    },
    {
      value: "decoration-purple-500",
      label: "『 decoration-purple-500 』 text-decoration-color: #a855f7;"
    },
    {
      value: "decoration-purple-600",
      label: "『 decoration-purple-600 』 text-decoration-color: #9333ea;"
    },
    {
      value: "decoration-purple-700",
      label: "『 decoration-purple-700 』 text-decoration-color: #7e22ce;"
    },
    {
      value: "decoration-purple-800",
      label: "『 decoration-purple-800 』 text-decoration-color: #6b21a8;"
    },
    {
      value: "decoration-purple-900",
      label: "『 decoration-purple-900 』 text-decoration-color: #581c87;"
    },
    {
      value: "decoration-fuchsia-50",
      label: "『 decoration-fuchsia-50 』 text-decoration-color: #fdf4ff;"
    },
    {
      value: "decoration-fuchsia-100",
      label: "『 decoration-fuchsia-100 』 text-decoration-color: #fae8ff;"
    },
    {
      value: "decoration-fuchsia-200",
      label: "『 decoration-fuchsia-200 』 text-decoration-color: #f5d0fe;"
    },
    {
      value: "decoration-fuchsia-300",
      label: "『 decoration-fuchsia-300 』 text-decoration-color: #f0abfc;"
    },
    {
      value: "decoration-fuchsia-400",
      label: "『 decoration-fuchsia-400 』 text-decoration-color: #e879f9;"
    },
    {
      value: "decoration-fuchsia-500",
      label: "『 decoration-fuchsia-500 』 text-decoration-color: #d946ef;"
    },
    {
      value: "decoration-fuchsia-600",
      label: "『 decoration-fuchsia-600 』 text-decoration-color: #c026d3;"
    },
    {
      value: "decoration-fuchsia-700",
      label: "『 decoration-fuchsia-700 』 text-decoration-color: #a21caf;"
    },
    {
      value: "decoration-fuchsia-800",
      label: "『 decoration-fuchsia-800 』 text-decoration-color: #86198f;"
    },
    {
      value: "decoration-fuchsia-900",
      label: "『 decoration-fuchsia-900 』 text-decoration-color: #701a75;"
    },
    {
      value: "decoration-pink-50",
      label: "『 decoration-pink-50 』 text-decoration-color: #fdf2f8;"
    },
    {
      value: "decoration-pink-100",
      label: "『 decoration-pink-100 』 text-decoration-color: #fce7f3;"
    },
    {
      value: "decoration-pink-200",
      label: "『 decoration-pink-200 』 text-decoration-color: #fbcfe8;"
    },
    {
      value: "decoration-pink-300",
      label: "『 decoration-pink-300 』 text-decoration-color: #f9a8d4;"
    },
    {
      value: "decoration-pink-400",
      label: "『 decoration-pink-400 』 text-decoration-color: #f472b6;"
    },
    {
      value: "decoration-pink-500",
      label: "『 decoration-pink-500 』 text-decoration-color: #ec4899;"
    },
    {
      value: "decoration-pink-600",
      label: "『 decoration-pink-600 』 text-decoration-color: #db2777;"
    },
    {
      value: "decoration-pink-700",
      label: "『 decoration-pink-700 』 text-decoration-color: #be185d;"
    },
    {
      value: "decoration-pink-800",
      label: "『 decoration-pink-800 』 text-decoration-color: #9d174d;"
    },
    {
      value: "decoration-pink-900",
      label: "『 decoration-pink-900 』 text-decoration-color: #831843;"
    },
    {
      value: "decoration-rose-50",
      label: "『 decoration-rose-50 』 text-decoration-color: #fff1f2;"
    },
    {
      value: "decoration-rose-100",
      label: "『 decoration-rose-100 』 text-decoration-color: #ffe4e6;"
    },
    {
      value: "decoration-rose-200",
      label: "『 decoration-rose-200 』 text-decoration-color: #fecdd3;"
    },
    {
      value: "decoration-rose-300",
      label: "『 decoration-rose-300 』 text-decoration-color: #fda4af;"
    },
    {
      value: "decoration-rose-400",
      label: "『 decoration-rose-400 』 text-decoration-color: #fb7185;"
    },
    {
      value: "decoration-rose-500",
      label: "『 decoration-rose-500 』 text-decoration-color: #f43f5e;"
    },
    {
      value: "decoration-rose-600",
      label: "『 decoration-rose-600 』 text-decoration-color: #e11d48;"
    },
    {
      value: "decoration-rose-700",
      label: "『 decoration-rose-700 』 text-decoration-color: #be123c;"
    },
    {
      value: "decoration-rose-800",
      label: "『 decoration-rose-800 』 text-decoration-color: #9f1239;"
    },
    {
      value: "decoration-rose-900",
      label: "『 decoration-rose-900 』 text-decoration-color: #881337;"
    }
  ]
};

export const TextDecorationStyle: AttributeProps = {
  type: "text-decoration-style",
  header: "Text Decoration Style 属性",
  title: "Text Decoration Style ClassName：",
  inputPlaceholder: "text-decoration-style: xxxx",
  selectPlaceholder: "text-decoration-style: xxxx",
  hasCustom: false,
  options: [
    {
      value: "decoration-solid",
      label: "『 decoration-solid 』 text-decoration-style: solid;"
    },
    {
      value: "decoration-double",
      label: "『 decoration-double 』 text-decoration-style: double;"
    },
    {
      value: "decoration-dotted",
      label: "『 decoration-dotted 』 text-decoration-style: dotted;"
    },
    {
      value: "decoration-dashed",
      label: "『 decoration-dashed 』 text-decoration-style: dashed;"
    },
    {
      value: "decoration-wavy",
      label: "『 decoration-wavy 』 text-decoration-style: wavy;"
    }
  ]
};

export const TextDecorationThickness: AttributeProps = {
  type: "text-decoration-thickness",
  header: "Text Decoration Thickness 属性",
  title: "Text Decoration Thickness ClassName：",
  inputPlaceholder: "text-decoration-thickness: xxxx",
  selectPlaceholder: "text-decoration-thickness: xxxx",
  hasCustom: true,
  options: [
    {
      value: "decoration-auto",
      label: "『 decoration-auto 』 text-decoration-thickness: auto;"
    },
    {
      value: "decoration-from-font",
      label: "『 decoration-from-font 』 text-decoration-thickness: from-font;"
    },
    {
      value: "decoration-0",
      label: "『 decoration-0 』 text-decoration-thickness: 0px;"
    },
    {
      value: "decoration-1",
      label: "『 decoration-1 』 text-decoration-thickness: 1px;"
    },
    {
      value: "decoration-2",
      label: "『 decoration-2 』 text-decoration-thickness: 2px;"
    },
    {
      value: "decoration-4",
      label: "『 decoration-4 』 text-decoration-thickness: 4px;"
    },
    {
      value: "decoration-8",
      label: "『 decoration-8 』 text-decoration-thickness: 8px;"
    }
  ]
};

export const TextUnderlineOffset: AttributeProps = {
  type: "text-underline-offset",
  header: "Text Underline Offset 属性",
  title: "Text Underline Offset ClassName：",
  inputPlaceholder: "text-underline-offset: xxxx",
  selectPlaceholder: "text-underline-offset: xxxx",
  hasCustom: true,
  options: [
    {
      value: "underline-offset-auto",
      label: "『 underline-offset-auto 』 text-underline-offset: auto;"
    },
    {
      value: "underline-offset-0",
      label: "『 underline-offset-0 』 text-underline-offset: 0px;"
    },
    {
      value: "underline-offset-1",
      label: "『 underline-offset-1 』 text-underline-offset: 1px;"
    },
    {
      value: "underline-offset-2",
      label: "『 underline-offset-2 』 text-underline-offset: 2px;"
    },
    {
      value: "underline-offset-4",
      label: "『 underline-offset-4 』 text-underline-offset: 4px;"
    },
    {
      value: "underline-offset-8",
      label: "『 underline-offset-8 』 text-underline-offset: 8px;"
    }
  ]
};

export const TextTransform: AttributeProps = {
  type: "text-transform",
  header: "Text Transform 属性",
  title: "Text Transform ClassName：",
  inputPlaceholder: "text-transform: xxxx",
  selectPlaceholder: "text-transform: xxxx",
  hasCustom: false,
  options: [
    {
      value: "uppercase",
      label: "『 uppercase 』 text-transform: uppercase;"
    },
    {
      value: "lowercase",
      label: "『 lowercase 』 text-transform: lowercase;"
    },
    {
      value: "capitalize",
      label: "『 capitalize 』 text-transform: capitalize;"
    },
    {
      value: "normal-case",
      label: "『 normal-case 』 text-transform: none;"
    }
  ]
};

export const TextOverflow: AttributeProps = {
  type: "text-overflow",
  header: "Text Overflow 属性",
  title: "Text Overflow ClassName：",
  inputPlaceholder: "text-overflow: xxxx",
  selectPlaceholder: "text-overflow: xxxx",
  hasCustom: false,
  options: [
    {
      value: "truncate",
      label:
        "『 truncate 』 overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
    },
    {
      value: "text-ellipsis",
      label: "『 text-ellipsis 』 text-overflow: ellipsis;"
    },
    {
      value: "text-clip",
      label: "『 text-clip 』 text-overflow: clip;"
    }
  ]
};

export const TextIndent: AttributeProps = {
  type: "text-indent",
  header: "Text Indent 属性",
  title: "Text Indent ClassName：",
  inputPlaceholder: "text-indent: xxxx",
  selectPlaceholder: "text-indent: xxxx",
  hasCustom: true,
  options: [
    {
      value: "indent-0",
      label: "『 indent-0 』 text-indent: 0px;"
    },
    {
      value: "indent-px",
      label: "『 indent-px 』 text-indent: 1px;"
    },
    {
      value: "indent-0.5",
      label: "『 indent-0.5 』 text-indent: 0.125rem; /* 2px */"
    },
    {
      value: "indent-1",
      label: "『 indent-1 』 text-indent: 0.25rem; /* 4px */"
    },
    {
      value: "indent-1.5",
      label: "『 indent-1.5 』 text-indent: 0.375rem; /* 6px */"
    },
    {
      value: "indent-2",
      label: "『 indent-2 』 text-indent: 0.5rem; /* 8px */"
    },
    {
      value: "indent-2.5",
      label: "『 indent-2.5 』 text-indent: 0.625rem; /* 10px */"
    },
    {
      value: "indent-3",
      label: "『 indent-3 』 text-indent: 0.75rem; /* 12px */"
    },
    {
      value: "indent-3.5",
      label: "『 indent-3.5 』 text-indent: 0.875rem; /* 14px */"
    },
    {
      value: "indent-4",
      label: "『 indent-4 』 text-indent: 1rem; /* 16px */"
    },
    {
      value: "indent-5",
      label: "『 indent-5 』 text-indent: 1.25rem; /* 20px */"
    },
    {
      value: "indent-6",
      label: "『 indent-6 』 text-indent: 1.5rem; /* 24px */"
    },
    {
      value: "indent-7",
      label: "『 indent-7 』 text-indent: 1.75rem; /* 28px */"
    },
    {
      value: "indent-8",
      label: "『 indent-8 』 text-indent: 2rem; /* 32px */"
    },
    {
      value: "indent-9",
      label: "『 indent-9 』 text-indent: 2.25rem; /* 36px */"
    },
    {
      value: "indent-10",
      label: "『 indent-10 』 text-indent: 2.5rem; /* 40px */"
    },
    {
      value: "indent-11",
      label: "『 indent-11 』 text-indent: 2.75rem; /* 44px */"
    },
    {
      value: "indent-12",
      label: "『 indent-12 』 text-indent: 3rem; /* 48px */"
    },
    {
      value: "indent-14",
      label: "『 indent-14 』 text-indent: 3.5rem; /* 56px */"
    },
    {
      value: "indent-16",
      label: "『 indent-16 』 text-indent: 4rem; /* 64px */"
    },
    {
      value: "indent-20",
      label: "『 indent-20 』 text-indent: 5rem; /* 80px */"
    },
    {
      value: "indent-24",
      label: "『 indent-24 』 text-indent: 6rem; /* 96px */"
    },
    {
      value: "indent-28",
      label: "『 indent-28 』 text-indent: 7rem; /* 112px */"
    },
    {
      value: "indent-32",
      label: "『 indent-32 』 text-indent: 8rem; /* 128px */"
    },
    {
      value: "indent-36",
      label: "『 indent-36 』 text-indent: 9rem; /* 144px */"
    },
    {
      value: "indent-40",
      label: "『 indent-40 』 text-indent: 10rem; /* 160px */"
    },
    {
      value: "indent-44",
      label: "『 indent-44 』 text-indent: 11rem; /* 176px */"
    },
    {
      value: "indent-48",
      label: "『 indent-48 』 text-indent: 12rem; /* 192px */"
    },
    {
      value: "indent-52",
      label: "『 indent-52 』 text-indent: 13rem; /* 208px */"
    },
    {
      value: "indent-56",
      label: "『 indent-56 』 text-indent: 14rem; /* 224px */"
    },
    {
      value: "indent-60",
      label: "『 indent-60 』 text-indent: 15rem; /* 240px */"
    },
    {
      value: "indent-64",
      label: "『 indent-64 』 text-indent: 16rem; /* 256px */"
    },
    {
      value: "indent-72",
      label: "『 indent-72 』 text-indent: 18rem; /* 288px */"
    },
    {
      value: "indent-80",
      label: "『 indent-80 』 text-indent: 20rem; /* 320px */"
    },
    {
      value: "indent-96",
      label: "『 indent-96 』 text-indent: 24rem; /* 384px */"
    }
  ]
};

export const VerticalAlign: AttributeProps = {
  type: "vertical-align",
  header: "Vertical Align 属性",
  title: "Vertical Align ClassName：",
  inputPlaceholder: "vertical-align: xxxx",
  selectPlaceholder: "vertical-align: xxxx",
  hasCustom: true,
  options: [
    {
      value: "align-baseline",
      label: "『 align-baseline 』 vertical-align: baseline;"
    },
    {
      value: "align-top",
      label: "『 align-top 』 vertical-align: top;"
    },
    {
      value: "align-middle",
      label: "『 align-middle 』 vertical-align: middle;"
    },
    {
      value: "align-bottom",
      label: "『 align-bottom 』 vertical-align: bottom;"
    },
    {
      value: "align-text-top",
      label: "『 align-text-top 』 vertical-align: text-top;"
    },
    {
      value: "align-text-bottom",
      label: "『 align-text-bottom 』 vertical-align: text-bottom;"
    },
    {
      value: "align-sub",
      label: "『 align-sub 』 vertical-align: sub;"
    },
    {
      value: "align-super",
      label: "『 align-super 』 vertical-align: super;"
    }
  ]
};

export const Whitespace: AttributeProps = {
  type: "white-space",
  header: "Whitespace 属性",
  title: "Whitespace ClassName：",
  inputPlaceholder: "white-space: xxxx",
  selectPlaceholder: "white-space: xxxx",
  hasCustom: false,
  options: [
    {
      value: "whitespace-normal",
      label: "『 whitespace-normal 』 white-space: normal;"
    },
    {
      value: "whitespace-nowrap",
      label: "『 whitespace-nowrap 』 white-space: nowrap;"
    },
    {
      value: "whitespace-pre",
      label: "『 whitespace-pre 』 white-space: pre;"
    },
    {
      value: "whitespace-pre-line",
      label: "『 whitespace-pre-line 』 white-space: pre-line;"
    },
    {
      value: "whitespace-pre-wrap",
      label: "『 whitespace-pre-wrap 』 white-space: pre-wrap;"
    }
  ]
};

export const WordBreak: AttributeProps = {
  type: "word-break",
  header: "Word Break 属性",
  title: "Word Break ClassName：",
  inputPlaceholder: "word-break: xxxx",
  selectPlaceholder: "word-break: xxxx",
  hasCustom: false,
  options: [
    {
      value: "break-normal",
      label: "『 break-normal 』 overflow-wrap: normal; word-break: normal;"
    },
    {
      value: "break-words",
      label: "『 break-words 』 overflow-wrap: break-word;"
    },
    {
      value: "break-all",
      label: "『 break-all 』 word-break: break-all;"
    },
    {
      value: "break-keep",
      label: "『 break-keep 』 word-break: keep-all;"
    }
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
  WordBreak
];
