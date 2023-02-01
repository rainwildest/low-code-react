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
