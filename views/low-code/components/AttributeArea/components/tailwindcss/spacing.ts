import {
  PaddingType,
  MarginType,
  SpaceBetweenType
} from "config/tailwind-type";

export const Padding: AttributeProps = {
  type: PaddingType.toString(),
  header: "Padding 属性",
  title: "Padding ClassName：",
  inputPlaceholder: "padding: xxxx",
  selectPlaceholder: "padding: xxxx",
  hasCustom: true,
  options: [
    {
      label: "0px",
      options: [
        {
          value: "p-0",
          label: "『 p-0 』 padding: 0px;"
        },
        {
          value: "px-0",
          label: "『 px-0 』 padding-left: 0px; padding-right: 0px;"
        },
        {
          value: "py-0",
          label: "『 py-0 』 padding-top: 0px; padding-bottom: 0px;"
        },
        {
          value: "pt-0",
          label: "『 pt-0 』 padding-top: 0px;"
        },
        {
          value: "pr-0",
          label: "『 pr-0 』 padding-right: 0px;"
        },
        {
          value: "pb-0",
          label: "『 pb-0 』 padding-bottom: 0px;"
        },
        {
          value: "pl-0",
          label: "『 pl-0 』 padding-left: 0px;"
        }
      ]
    },
    {
      label: "1px",
      options: [
        {
          value: "p-px",
          label: "『 p-px 』 padding: 1px;"
        },
        {
          value: "px-px",
          label: "『 px-px 』 padding-left: 1px; padding-right: 1px;"
        },
        {
          value: "py-px",
          label: "『 py-px 』 padding-top: 1px; padding-bottom: 1px;"
        },
        {
          value: "pt-px",
          label: "『 pt-px 』 padding-top: 1px;"
        },
        {
          value: "pr-px",
          label: "『 pr-px 』 padding-right: 1px;"
        },
        {
          value: "pb-px",
          label: "『 pb-px 』 padding-bottom: 1px;"
        },
        {
          value: "pl-px",
          label: "『 pl-px 』 padding-left: 1px;"
        }
      ]
    },
    {
      label: "2px",
      options: [
        {
          value: "p-0.5",
          label: "『 p-0.5 』 padding: 0.125rem;"
        },
        {
          value: "px-0.5",
          label: "『 px-0.5 』 padding-left: 0.125rem; padding-right: 0.125rem;"
        },
        {
          value: "py-0.5",
          label: "『 py-0.5 』 padding-top: 0.125rem; padding-bottom: 0.125rem;"
        },
        {
          value: "pt-0.5",
          label: "『 pt-0.5 』 padding-top: 0.125rem;"
        },
        {
          value: "pr-0.5",
          label: "『 pr-0.5 』 padding-right: 0.125rem;"
        },
        {
          value: "pb-0.5",
          label: "『 pb-0.5 』 padding-bottom: 0.125rem;"
        },
        {
          value: "pl-0.5",
          label: "『 pl-0.5 』 padding-left: 0.125rem;"
        }
      ]
    },
    {
      label: "4px",
      options: [
        {
          value: "p-1",
          label: "『 p-1 』 padding: 0.25rem;"
        },
        {
          value: "px-1",
          label: "『 px-1 』 padding-left: 0.25rem; padding-right: 0.25rem;"
        },
        {
          value: "py-1",
          label: "『 py-1 』 padding-top: 0.25rem; padding-bottom: 0.25rem;"
        },
        {
          value: "pt-1",
          label: "『 pt-1 』 padding-top: 0.25rem;"
        },
        {
          value: "pr-1",
          label: "『 pr-1 』 padding-right: 0.25rem;"
        },
        {
          value: "pb-1",
          label: "『 pb-1 』 padding-bottom: 0.25rem;"
        },
        {
          value: "pl-1",
          label: "『 pl-1 』 padding-left: 0.25rem;"
        }
      ]
    },
    {
      label: "6px",
      options: [
        {
          value: "p-1.5",
          label: "『 p-1.5 』 padding: 0.375rem;"
        },
        {
          value: "px-1.5",
          label: "『 px-1.5 』 padding-left: 0.375rem; padding-right: 0.375rem;"
        },
        {
          value: "py-1.5",
          label: "『 py-1.5 』 padding-top: 0.375rem; padding-bottom: 0.375rem;"
        },
        {
          value: "pt-1.5",
          label: "『 pt-1.5 』 padding-top: 0.375rem;"
        },
        {
          value: "pr-1.5",
          label: "『 pr-1.5 』 padding-right: 0.375rem;"
        },
        {
          value: "pb-1.5",
          label: "『 pb-1.5 』 padding-bottom: 0.375rem;"
        },
        {
          value: "pl-1.5",
          label: "『 pl-1.5 』 padding-left: 0.375rem;"
        }
      ]
    },
    {
      label: "8px",
      options: [
        {
          value: "p-2",
          label: "『 p-2 』 padding: 0.5rem;"
        },
        {
          value: "px-2",
          label: "『 px-2 』 padding-left: 0.5rem; padding-right: 0.5rem;"
        },
        {
          value: "py-2",
          label: "『 py-2 』 padding-top: 0.5rem; padding-bottom: 0.5rem;"
        },
        {
          value: "pt-2",
          label: "『 pt-2 』 padding-top: 0.5rem;"
        },
        {
          value: "pr-2",
          label: "『 pr-2 』 padding-right: 0.5rem;"
        },
        {
          value: "pb-2",
          label: "『 pb-2 』 padding-bottom: 0.5rem;"
        },
        {
          value: "pl-2",
          label: "『 pl-2 』 padding-left: 0.5rem;"
        }
      ]
    },
    {
      label: "10px",
      options: [
        {
          value: "p-2.5",
          label: "『 p-2.5 』 padding: 0.625rem;"
        },
        {
          value: "px-2.5",
          label: "『 px-2.5 』 padding-left: 0.625rem; padding-right: 0.625rem;"
        },
        {
          value: "py-2.5",
          label: "『 py-2.5 』 padding-top: 0.625rem; padding-bottom: 0.625rem;"
        },
        {
          value: "pt-2.5",
          label: "『 pt-2.5 』 padding-top: 0.625rem;"
        },
        {
          value: "pr-2.5",
          label: "『 pr-2.5 』 padding-right: 0.625rem;"
        },
        {
          value: "pb-2.5",
          label: "『 pb-2.5 』 padding-bottom: 0.625rem;"
        },
        {
          value: "pl-2.5",
          label: "『 pl-2.5 』 padding-left: 0.625rem;"
        }
      ]
    },
    {
      label: "12px",
      options: [
        {
          value: "p-3",
          label: "『 p-3 』 padding: 0.75rem;"
        },
        {
          value: "px-3",
          label: "『 px-3 』 padding-left: 0.75rem; padding-right: 0.75rem;"
        },
        {
          value: "py-3",
          label: "『 py-3 』 padding-top: 0.75rem; padding-bottom: 0.75rem;"
        },
        {
          value: "pt-3",
          label: "『 pt-3 』 padding-top: 0.75rem;"
        },
        {
          value: "pr-3",
          label: "『 pr-3 』 padding-right: 0.75rem;"
        },
        {
          value: "pb-3",
          label: "『 pb-3 』 padding-bottom: 0.75rem;"
        },
        {
          value: "pl-3",
          label: "『 pl-3 』 padding-left: 0.75rem;"
        }
      ]
    },
    {
      label: "14px",
      options: [
        {
          value: "p-3.5",
          label: "『 p-3.5 』 padding: 0.875rem;"
        },
        {
          value: "px-3.5",
          label: "『 px-3.5 』 padding-left: 0.875rem; padding-right: 0.875rem;"
        },
        {
          value: "py-3.5",
          label: "『 py-3.5 』 padding-top: 0.875rem; padding-bottom: 0.875rem;"
        },
        {
          value: "pt-3.5",
          label: "『 pt-3.5 』 padding-top: 0.875rem;"
        },
        {
          value: "pr-3.5",
          label: "『 pr-3.5 』 padding-right: 0.875rem;"
        },
        {
          value: "pb-3.5",
          label: "『 pb-3.5 』 padding-bottom: 0.875rem;"
        },
        {
          value: "pl-3.5",
          label: "『 pl-3.5 』 padding-left: 0.875rem;"
        }
      ]
    },
    {
      label: "16px",
      options: [
        {
          value: "p-4",
          label: "『 p-4 』 padding: 1rem;"
        },
        {
          value: "px-4",
          label: "『 px-4 』 padding-left: 1rem; padding-right: 1rem;"
        },
        {
          value: "py-4",
          label: "『 py-4 』 padding-top: 1rem; padding-bottom: 1rem;"
        },
        {
          value: "pt-4",
          label: "『 pt-4 』 padding-top: 1rem;"
        },
        {
          value: "pr-4",
          label: "『 pr-4 』 padding-right: 1rem;"
        },
        {
          value: "pb-4",
          label: "『 pb-4 』 padding-bottom: 1rem;"
        },
        {
          value: "pl-4",
          label: "『 pl-4 』 padding-left: 1rem;"
        }
      ]
    },
    {
      label: "20px",
      options: [
        {
          value: "p-5",
          label: "『 p-5 』 padding: 1.25rem;"
        },
        {
          value: "px-5",
          label: "『 px-5 』 padding-left: 1.25rem; padding-right: 1.25rem;"
        },
        {
          value: "py-5",
          label: "『 py-5 』 padding-top: 1.25rem; padding-bottom: 1.25rem;"
        },
        {
          value: "pt-5",
          label: "『 pt-5 』 padding-top: 1.25rem;"
        },
        {
          value: "pr-5",
          label: "『 pr-5 』 padding-right: 1.25rem;"
        },
        {
          value: "pb-5",
          label: "『 pb-5 』 padding-bottom: 1.25rem;"
        },
        {
          value: "pl-5",
          label: "『 pl-5 』 padding-left: 1.25rem;"
        }
      ]
    },
    {
      label: "24px",
      options: [
        {
          value: "p-6",
          label: "『 p-6 』 padding: 1.5rem;"
        },
        {
          value: "px-6",
          label: "『 px-6 』 padding-left: 1.5rem; padding-right: 1.5rem;"
        },
        {
          value: "py-6",
          label: "『 py-6 』 padding-top: 1.5rem; padding-bottom: 1.5rem;"
        },
        {
          value: "pt-6",
          label: "『 pt-6 』 padding-top: 1.5rem;"
        },
        {
          value: "pr-6",
          label: "『 pr-6 』 padding-right: 1.5rem;"
        },
        {
          value: "pb-6",
          label: "『 pb-6 』 padding-bottom: 1.5rem;"
        },
        {
          value: "pl-6",
          label: "『 pl-6 』 padding-left: 1.5rem;"
        }
      ]
    },
    {
      label: "28px",
      options: [
        {
          value: "p-7",
          label: "『 p-7 』 padding: 1.75rem;"
        },
        {
          value: "px-7",
          label: "『 px-7 』 padding-left: 1.75rem; padding-right: 1.75rem;"
        },
        {
          value: "py-7",
          label: "『 py-7 』 padding-top: 1.75rem; padding-bottom: 1.75rem;"
        },
        {
          value: "pt-7",
          label: "『 pt-7 』 padding-top: 1.75rem;"
        },
        {
          value: "pr-7",
          label: "『 pr-7 』 padding-right: 1.75rem;"
        },
        {
          value: "pb-7",
          label: "『 pb-7 』 padding-bottom: 1.75rem;"
        },
        {
          value: "pl-7",
          label: "『 pl-7 』 padding-left: 1.75rem;"
        }
      ]
    },
    {
      label: "32px",
      options: [
        {
          value: "p-8",
          label: "『 p-8 』 padding: 2rem;"
        },
        {
          value: "px-8",
          label: "『 px-8 』 padding-left: 2rem; padding-right: 2rem;"
        },
        {
          value: "py-8",
          label: "『 py-8 』 padding-top: 2rem; padding-bottom: 2rem;"
        },
        {
          value: "pt-8",
          label: "『 pt-8 』 padding-top: 2rem;"
        },
        {
          value: "pr-8",
          label: "『 pr-8 』 padding-right: 2rem;"
        },
        {
          value: "pb-8",
          label: "『 pb-8 』 padding-bottom: 2rem;"
        },
        {
          value: "pl-8",
          label: "『 pl-8 』 padding-left: 2rem;"
        }
      ]
    },
    {
      label: "36px",
      options: [
        {
          value: "p-9",
          label: "『 p-9 』 padding: 2.25rem;"
        },
        {
          value: "px-9",
          label: "『 px-9 』 padding-left: 2.25rem; padding-right: 2.25rem;"
        },
        {
          value: "py-9",
          label: "『 py-9 』 padding-top: 2.25rem; padding-bottom: 2.25rem;"
        },
        {
          value: "pt-9",
          label: "『 pt-9 』 padding-top: 2.25rem;"
        },
        {
          value: "pr-9",
          label: "『 pr-9 』 padding-right: 2.25rem;"
        },
        {
          value: "pb-9",
          label: "『 pb-9 』 padding-bottom: 2.25rem;"
        },
        {
          value: "pl-9",
          label: "『 pl-9 』 padding-left: 2.25rem;"
        }
      ]
    },
    {
      label: "40px",
      options: [
        {
          value: "p-10",
          label: "『 p-10 』 padding: 2.5rem;"
        },
        {
          value: "px-10",
          label: "『 px-10 』 padding-left: 2.5rem; padding-right: 2.5rem;"
        },
        {
          value: "py-10",
          label: "『 py-10 』 padding-top: 2.5rem; padding-bottom: 2.5rem;"
        },
        {
          value: "pt-10",
          label: "『 pt-10 』 padding-top: 2.5rem;"
        },
        {
          value: "pr-10",
          label: "『 pr-10 』 padding-right: 2.5rem;"
        },
        {
          value: "pb-10",
          label: "『 pb-10 』 padding-bottom: 2.5rem;"
        },
        {
          value: "pl-10",
          label: "『 pl-10 』 padding-left: 2.5rem;"
        }
      ]
    },
    {
      label: "44px",
      options: [
        {
          value: "p-11",
          label: "『 p-11 』 padding: 2.75rem;"
        },
        {
          value: "px-11",
          label: "『 px-11 』 padding-left: 2.75rem; padding-right: 2.75rem;"
        },
        {
          value: "py-11",
          label: "『 py-11 』 padding-top: 2.75rem; padding-bottom: 2.75rem;"
        },
        {
          value: "pt-11",
          label: "『 pt-11 』 padding-top: 2.75rem;"
        },
        {
          value: "pr-11",
          label: "『 pr-11 』 padding-right: 2.75rem;"
        },
        {
          value: "pb-11",
          label: "『 pb-11 』 padding-bottom: 2.75rem;"
        },
        {
          value: "pl-11",
          label: "『 pl-11 』 padding-left: 2.75rem;"
        }
      ]
    },
    {
      label: "48px",
      options: [
        {
          value: "p-12",
          label: "『 p-12 』 padding: 3rem;"
        },
        {
          value: "px-12",
          label: "『 px-12 』 padding-left: 3rem; padding-right: 3rem;"
        },
        {
          value: "py-12",
          label: "『 py-12 』 padding-top: 3rem; padding-bottom: 3rem;"
        },
        {
          value: "pt-12",
          label: "『 pt-12 』 padding-top: 3rem;"
        },
        {
          value: "pr-12",
          label: "『 pr-12 』 padding-right: 3rem;"
        },
        {
          value: "pb-12",
          label: "『 pb-12 』 padding-bottom: 3rem;"
        },
        {
          value: "pl-12",
          label: "『 pl-12 』 padding-left: 3rem;"
        }
      ]
    },
    {
      label: "56px",
      options: [
        {
          value: "p-14",
          label: "『 p-14 』 padding: 3.5rem;"
        },
        {
          value: "px-14",
          label: "『 px-14 』 padding-left: 3.5rem; padding-right: 3.5rem;"
        },
        {
          value: "py-14",
          label: "『 py-14 』 padding-top: 3.5rem; padding-bottom: 3.5rem;"
        },
        {
          value: "pt-14",
          label: "『 pt-14 』 padding-top: 3.5rem;"
        },
        {
          value: "pr-14",
          label: "『 pr-14 』 padding-right: 3.5rem;"
        },
        {
          value: "pb-14",
          label: "『 pb-14 』 padding-bottom: 3.5rem;"
        },
        {
          value: "pl-14",
          label: "『 pl-14 』 padding-left: 3.5rem;"
        }
      ]
    },
    {
      label: "『  』 64px",
      options: [
        {
          value: "p-16",
          label: "『 p-16 』 padding: 4rem;"
        },
        {
          value: "px-16",
          label: "『 px-16 』 padding-left: 4rem; padding-right: 4rem;"
        },
        {
          value: "py-16",
          label: "『 py-16 』 padding-top: 4rem; padding-bottom: 4rem;"
        },
        {
          value: "pt-16",
          label: "『 pt-16 』 padding-top: 4rem;"
        },
        {
          value: "pr-16",
          label: "『 pr-16 』 padding-right: 4rem;"
        },
        {
          value: "pb-16",
          label: "『 pb-16 』 padding-bottom: 4rem;"
        },
        {
          value: "pl-16",
          label: "『 pl-16 』 padding-left: 4rem;"
        }
      ]
    },
    {
      label: "『  』 80px",
      options: [
        {
          value: "p-20",
          label: "『 p-20 』 padding: 5rem;"
        },
        {
          value: "px-20",
          label: "『 px-20 』 padding-left: 5rem; padding-right: 5rem;"
        },
        {
          value: "py-20",
          label: "『 py-20 』 padding-top: 5rem; padding-bottom: 5rem;"
        },
        {
          value: "pt-20",
          label: "『 pt-20 』 padding-top: 5rem;"
        },
        {
          value: "pr-20",
          label: "『 pr-20 』 padding-right: 5rem;"
        },
        {
          value: "pb-20",
          label: "『 pb-20 』 padding-bottom: 5rem;"
        },
        {
          value: "pl-20",
          label: "『 pl-20 』 padding-left: 5rem;"
        }
      ]
    },
    {
      label: "96px",
      options: [
        {
          value: "p-24",
          label: "『 p-24 』 padding: 6rem;"
        },
        {
          value: "px-24",
          label: "『 px-24 』 padding-left: 6rem; padding-right: 6rem;"
        },
        {
          value: "py-24",
          label: "『 py-24 』 padding-top: 6rem; padding-bottom: 6rem;"
        },
        {
          value: "pt-24",
          label: "『 pt-24 』 padding-top: 6rem;"
        },
        {
          value: "pr-24",
          label: "『 pr-24 』 padding-right: 6rem;"
        },
        {
          value: "pb-24",
          label: "『 pb-24 』 padding-bottom: 6rem;"
        },
        {
          value: "pl-24",
          label: "『 pl-24 』 padding-left: 6rem;"
        }
      ]
    },
    {
      label: "112px",
      options: [
        {
          value: "p-28",
          label: "『 p-28 』 padding: 7rem;"
        },
        {
          value: "px-28",
          label: "『 px-28 』 padding-left: 7rem; padding-right: 7rem;"
        },
        {
          value: "py-28",
          label: "『 py-28 』 padding-top: 7rem; padding-bottom: 7rem;"
        },
        {
          value: "pt-28",
          label: "『 pt-28 』 padding-top: 7rem;"
        },
        {
          value: "pr-28",
          label: "『 pr-28 』 padding-right: 7rem;"
        },
        {
          value: "pb-28",
          label: "『 pb-28 』 padding-bottom: 7rem;"
        },
        {
          value: "pl-28",
          label: "『 pl-28 』 padding-left: 7rem;"
        }
      ]
    },
    {
      label: "128px",
      options: [
        {
          value: "p-32",
          label: "『 p-32 』 padding: 8rem;"
        },
        {
          value: "px-32",
          label: "『 px-32 』 padding-left: 8rem; padding-right: 8rem;"
        },
        {
          value: "py-32",
          label: "『 py-32 』 padding-top: 8rem; padding-bottom: 8rem;"
        },
        {
          value: "pt-32",
          label: "『 pt-32 』 padding-top: 8rem;"
        },
        {
          value: "pr-32",
          label: "『 pr-32 』 padding-right: 8rem;"
        },
        {
          value: "pb-32",
          label: "『 pb-32 』 padding-bottom: 8rem;"
        },
        {
          value: "pl-32",
          label: "『 pl-32 』 padding-left: 8rem;"
        }
      ]
    },
    {
      label: "144px",
      options: [
        {
          value: "p-36",
          label: "『 p-36 』 padding: 9rem;"
        },
        {
          value: "px-36",
          label: "『 px-36 』 padding-left: 9rem; padding-right: 9rem;"
        },
        {
          value: "py-36",
          label: "『 py-36 』 padding-top: 9rem; padding-bottom: 9rem;"
        },
        {
          value: "pt-36",
          label: "『 pt-36 』 padding-top: 9rem;"
        },
        {
          value: "pr-36",
          label: "『 pr-36 』 padding-right: 9rem;"
        },
        {
          value: "pb-36",
          label: "『 pb-36 』 padding-bottom: 9rem;"
        },
        {
          value: "pl-36",
          label: "『 pl-36 』 padding-left: 9rem;"
        }
      ]
    },
    {
      label: "160px",
      options: [
        {
          value: "p-40",
          label: "『 p-40 』 padding: 10rem;"
        },
        {
          value: "px-40",
          label: "『 px-40 』 padding-left: 10rem; padding-right: 10rem;"
        },
        {
          value: "py-40",
          label: "『 py-40 』 padding-top: 10rem; padding-bottom: 10rem;"
        },
        {
          value: "pt-40",
          label: "『 pt-40 』 padding-top: 10rem;"
        },
        {
          value: "pr-40",
          label: "『 pr-40 』 padding-right: 10rem;"
        },
        {
          value: "pb-40",
          label: "『 pb-40 』 padding-bottom: 10rem;"
        },
        {
          value: "pl-40",
          label: "『 pl-40 』 padding-left: 10rem;"
        }
      ]
    },
    {
      label: "176px",
      options: [
        {
          value: "p-44",
          label: "『 p-44 』 padding: 11rem;"
        },
        {
          value: "px-44",
          label: "『 px-44 』 padding-left: 11rem; padding-right: 11rem;"
        },
        {
          value: "py-44",
          label: "『 py-44 』 padding-top: 11rem; padding-bottom: 11rem;"
        },
        {
          value: "pt-44",
          label: "『 pt-44 』 padding-top: 11rem;"
        },
        {
          value: "pr-44",
          label: "『 pr-44 』 padding-right: 11rem;"
        },
        {
          value: "pb-44",
          label: "『 pb-44 』 padding-bottom: 11rem;"
        },
        {
          value: "pl-44",
          label: "『 pl-44 』 padding-left: 11rem;"
        }
      ]
    },
    {
      label: "192px",
      options: [
        {
          value: "p-48",
          label: "『 p-48 』 padding: 12rem;"
        },
        {
          value: "px-48",
          label: "『 px-48 』 padding-left: 12rem; padding-right: 12rem;"
        },
        {
          value: "py-48",
          label: "『 py-48 』 padding-top: 12rem; padding-bottom: 12rem;"
        },
        {
          value: "pt-48",
          label: "『 pt-48 』 padding-top: 12rem;"
        },
        {
          value: "pr-48",
          label: "『 pr-48 』 padding-right: 12rem;"
        },
        {
          value: "pb-48",
          label: "『 pb-48 』 padding-bottom: 12rem;"
        },
        {
          value: "pl-48",
          label: "『 pl-48 』 padding-left: 12rem;"
        }
      ]
    },
    {
      label: "208px",
      options: [
        {
          value: "p-52",
          label: "『 p-52 』 padding: 13rem;"
        },
        {
          value: "px-52",
          label: "『 px-52 』 padding-left: 13rem; padding-right: 13rem;"
        },
        {
          value: "py-52",
          label: "『 py-52 』 padding-top: 13rem; padding-bottom: 13rem;"
        },
        {
          value: "pt-52",
          label: "『 pt-52 』 padding-top: 13rem;"
        },
        {
          value: "pr-52",
          label: "『 pr-52 』 padding-right: 13rem;"
        },
        {
          value: "pb-52",
          label: "『 pb-52 』 padding-bottom: 13rem;"
        },
        {
          value: "pl-52",
          label: "『 pl-52 』 padding-left: 13rem;"
        }
      ]
    },
    {
      label: "224px",
      options: [
        {
          value: "p-56",
          label: "『 p-56 』 padding: 14rem;"
        },
        {
          value: "px-56",
          label: "『 px-56 』 padding-left: 14rem; padding-right: 14rem;"
        },
        {
          value: "py-56",
          label: "『 py-56 』 padding-top: 14rem; padding-bottom: 14rem;"
        },
        {
          value: "pt-56",
          label: "『 pt-56 』 padding-top: 14rem;"
        },
        {
          value: "pr-56",
          label: "『 pr-56 』 padding-right: 14rem;"
        },
        {
          value: "pb-56",
          label: "『 pb-56 』 padding-bottom: 14rem;"
        },
        {
          value: "pl-56",
          label: "『 pl-56 』 padding-left: 14rem;"
        }
      ]
    },
    {
      label: "240px",
      options: [
        {
          value: "p-60",
          label: "『 p-60 』 padding: 15rem;"
        },
        {
          value: "px-60",
          label: "『 px-60 』 padding-left: 15rem; padding-right: 15rem;"
        },
        {
          value: "py-60",
          label: "『 py-60 』 padding-top: 15rem; padding-bottom: 15rem;"
        },
        {
          value: "pt-60",
          label: "『 pt-60 』 padding-top: 15rem;"
        },
        {
          value: "pr-60",
          label: "『 pr-60 』 padding-right: 15rem;"
        },
        {
          value: "pb-60",
          label: "『 pb-60 』 padding-bottom: 15rem;"
        },
        {
          value: "pl-60",
          label: "『 pl-60 』 padding-left: 15rem;"
        }
      ]
    },
    {
      label: "256px",
      options: [
        {
          value: "p-64",
          label: "『 p-64 』 padding: 16rem;"
        },
        {
          value: "px-64",
          label: "『 px-64 』 padding-left: 16rem; padding-right: 16rem;"
        },
        {
          value: "py-64",
          label: "『 py-64 』 padding-top: 16rem; padding-bottom: 16rem;"
        },
        {
          value: "pt-64",
          label: "『 pt-64 』 padding-top: 16rem;"
        },
        {
          value: "pr-64",
          label: "『 pr-64 』 padding-right: 16rem;"
        },
        {
          value: "pb-64",
          label: "『 pb-64 』 padding-bottom: 16rem;"
        },
        {
          value: "pl-64",
          label: "『 pl-64 』 padding-left: 16rem;"
        }
      ]
    },
    {
      label: "288px",
      options: [
        {
          value: "p-72",
          label: "『 p-72 』 padding: 18rem;"
        },
        {
          value: "px-72",
          label: "『 px-72 』 padding-left: 18rem; padding-right: 18rem;"
        },
        {
          value: "py-72",
          label: "『 py-72 』 padding-top: 18rem; padding-bottom: 18rem;"
        },
        {
          value: "pt-72",
          label: "『 pt-72 』 padding-top: 18rem;"
        },
        {
          value: "pr-72",
          label: "『 pr-72 』 padding-right: 18rem;"
        },
        {
          value: "pb-72",
          label: "『 pb-72 』 padding-bottom: 18rem;"
        },
        {
          value: "pl-72",
          label: "『 pl-72 』 padding-left: 18rem;"
        }
      ]
    },
    {
      label: "320px",
      options: [
        {
          value: "p-80",
          label: "『 p-80 』 padding: 20rem;"
        },
        {
          value: "px-80",
          label: "『 px-80 』 padding-left: 20rem; padding-right: 20rem;"
        },
        {
          value: "py-80",
          label: "『 py-80 』 padding-top: 20rem; padding-bottom: 20rem;"
        },
        {
          value: "pt-80",
          label: "『 pt-80 』 padding-top: 20rem;"
        },
        {
          value: "pr-80",
          label: "『 pr-80 』 padding-right: 20rem;"
        },
        {
          value: "pb-80",
          label: "『 pb-80 』 padding-bottom: 20rem;"
        },
        {
          value: "pl-80",
          label: "『 pl-80 』 padding-left: 20rem;"
        }
      ]
    },
    {
      label: "384px",
      options: [
        {
          value: "p-96",
          label: "『 p-96 』 padding: 24rem;"
        },
        {
          value: "px-96",
          label: "『 px-96 』 padding-left: 24rem; padding-right: 24rem;"
        },
        {
          value: "py-96",
          label: "『 py-96 』 padding-top: 24rem; padding-bottom: 24rem;"
        },
        {
          value: "pt-96",
          label: "『 pt-96 』 padding-top: 24rem;"
        },
        {
          value: "pr-96",
          label: "『 pr-96 』 padding-right: 24rem;"
        },
        {
          value: "pb-96",
          label: "『 pb-96 』 padding-bottom: 24rem;"
        },
        {
          value: "pl-96",
          label: "『 pl-96 』 padding-left: 24rem;"
        }
      ]
    }
  ]
};

export const Margin: AttributeProps = {
  type: MarginType.toString(),
  header: "Margin 属性",
  title: "Margin ClassName：",
  inputPlaceholder: "margin: xxxx",
  selectPlaceholder: "margin: xxxx",
  hasCustom: true,
  options: [
    {
      label: "0px;",
      options: [
        {
          value: "m-0",
          label: "『 m-0 』 margin: 0px;"
        },
        {
          value: "mx-0",
          label: "『 mx-0 』 margin-left: 0px; margin-right: 0px;"
        },
        {
          value: "my-0",
          label: "『 my-0 』 margin-top: 0px; margin-bottom: 0px;"
        },
        {
          value: "mt-0",
          label: "『 mt-0 』 margin-top: 0px;"
        },
        {
          value: "mr-0",
          label: "『 mr-0 』 margin-right: 0px;"
        },
        {
          value: "mb-0",
          label: "『 mb-0 』 margin-bottom: 0px;"
        },
        {
          value: "ml-0",
          label: "『 ml-0 』 margin-left: 0px;"
        }
      ]
    },
    {
      label: "1px;",
      options: [
        {
          value: "m-px",
          label: "『 m-px 』 margin: 1px;"
        },
        {
          value: "mx-px",
          label: "『 mx-px 』 margin-left: 1px; margin-right: 1px;"
        },
        {
          value: "my-px",
          label: "『 my-px 』 margin-top: 1px; margin-bottom: 1px;"
        },
        {
          value: "mt-px",
          label: "『 mt-px 』 margin-top: 1px;"
        },
        {
          value: "mr-px",
          label: "『 mr-px 』 margin-right: 1px;"
        },
        {
          value: "mb-px",
          label: "『 mb-px 』 margin-bottom: 1px;"
        },
        {
          value: "ml-px",
          label: "『 ml-px 』 margin-left: 1px;"
        }
      ]
    },
    {
      label: "2px",
      options: [
        {
          value: "m-0.5",
          label: "『 m-0.5 』 margin: 0.125rem;"
        },
        {
          value: "mx-0.5",
          label: "『 mx-0.5 』 margin-left: 0.125rem; margin-right: 0.125rem;"
        },
        {
          value: "my-0.5",
          label: "『 my-0.5 』 margin-top: 0.125rem; margin-bottom: 0.125rem;"
        },
        {
          value: "mt-0.5",
          label: "『 mt-0.5 』 margin-top: 0.125rem;"
        },
        {
          value: "mr-0.5",
          label: "『 mr-0.5 』 margin-right: 0.125rem;"
        },
        {
          value: "mb-0.5",
          label: "『 mb-0.5 』 margin-bottom: 0.125rem;"
        },
        {
          value: "ml-0.5",
          label: "『 ml-0.5 』 margin-left: 0.125rem;"
        }
      ]
    },
    {
      label: "4px",
      options: [
        {
          value: "m-1",
          label: "『 m-1 』 margin: 0.25rem;"
        },
        {
          value: "mx-1",
          label: "『 mx-1 』 margin-left: 0.25rem; margin-right: 0.25rem;"
        },
        {
          value: "my-1",
          label: "『 my-1 』 margin-top: 0.25rem; margin-bottom: 0.25rem;"
        },
        {
          value: "mt-1",
          label: "『 mt-1 』 margin-top: 0.25rem;"
        },
        {
          value: "mr-1",
          label: "『 mr-1 』 margin-right: 0.25rem;"
        },
        {
          value: "mb-1",
          label: "『 mb-1 』 margin-bottom: 0.25rem;"
        },
        {
          value: "ml-1",
          label: "『 ml-1 』 margin-left: 0.25rem;"
        }
      ]
    },
    {
      label: "6px",
      options: [
        {
          value: "m-1.5",
          label: "『 m-1.5 』 margin: 0.375rem;"
        },
        {
          value: "mx-1.5",
          label: "『 mx-1.5 』 margin-left: 0.375rem; margin-right: 0.375rem;"
        },
        {
          value: "my-1.5",
          label: "『 my-1.5 』 margin-top: 0.375rem; margin-bottom: 0.375rem;"
        },
        {
          value: "mt-1.5",
          label: "『 mt-1.5 』 margin-top: 0.375rem;"
        },
        {
          value: "mr-1.5",
          label: "『 mr-1.5 』 margin-right: 0.375rem;"
        },
        {
          value: "mb-1.5",
          label: "『 mb-1.5 』 margin-bottom: 0.375rem;"
        },
        {
          value: "ml-1.5",
          label: "『 ml-1.5 』 margin-left: 0.375rem;"
        }
      ]
    },
    {
      label: "8px",
      options: [
        {
          value: "m-2",
          label: "『 m-2 』 margin: 0.5rem;"
        },
        {
          value: "mx-2",
          label: "『 mx-2 』 margin-left: 0.5rem; margin-right: 0.5rem;"
        },
        {
          value: "my-2",
          label: "『 my-2 』 margin-top: 0.5rem; margin-bottom: 0.5rem;"
        },
        {
          value: "mt-2",
          label: "『 mt-2 』 margin-top: 0.5rem;"
        },
        {
          value: "mr-2",
          label: "『 mr-2 』 margin-right: 0.5rem;"
        },
        {
          value: "mb-2",
          label: "『 mb-2 』 margin-bottom: 0.5rem;"
        },
        {
          value: "ml-2",
          label: "『 ml-2 』 margin-left: 0.5rem;"
        }
      ]
    },
    {
      label: "10px",
      options: [
        {
          value: "m-2.5",
          label: "『 m-2.5 』 margin: 0.625rem;"
        },
        {
          value: "mx-2.5",
          label: "『 mx-2.5 』 margin-left: 0.625rem; margin-right: 0.625rem;"
        },
        {
          value: "my-2.5",
          label: "『 my-2.5 』 margin-top: 0.625rem; margin-bottom: 0.625rem;"
        },
        {
          value: "mt-2.5",
          label: "『 mt-2.5 』 margin-top: 0.625rem;"
        },
        {
          value: "mr-2.5",
          label: "『 mr-2.5 』 margin-right: 0.625rem;"
        },
        {
          value: "mb-2.5",
          label: "『 mb-2.5 』 margin-bottom: 0.625rem;"
        },
        {
          value: "ml-2.5",
          label: "『 ml-2.5 』 margin-left: 0.625rem;"
        }
      ]
    },
    {
      label: "12px",
      options: [
        {
          value: "m-3",
          label: "『 m-3 』 margin: 0.75rem;"
        },
        {
          value: "mx-3",
          label: "『 mx-3 』 margin-left: 0.75rem; margin-right: 0.75rem;"
        },
        {
          value: "my-3",
          label: "『 my-3 』 margin-top: 0.75rem; margin-bottom: 0.75rem;"
        },
        {
          value: "mt-3",
          label: "『 mt-3 』 margin-top: 0.75rem;"
        },
        {
          value: "mr-3",
          label: "『 mr-3 』 margin-right: 0.75rem;"
        },
        {
          value: "mb-3",
          label: "『 mb-3 』 margin-bottom: 0.75rem;"
        },
        {
          value: "ml-3",
          label: "『 ml-3 』 margin-left: 0.75rem;"
        }
      ]
    },
    {
      label: "14px",
      options: [
        {
          value: "m-3.5",
          label: "『 m-3.5 』 margin: 0.875rem;"
        },
        {
          value: "mx-3.5",
          label: "『 mx-3.5 』 margin-left: 0.875rem; margin-right: 0.875rem;"
        },
        {
          value: "my-3.5",
          label: "『 my-3.5 』 margin-top: 0.875rem; margin-bottom: 0.875rem;"
        },
        {
          value: "mt-3.5",
          label: "『 mt-3.5 』 margin-top: 0.875rem;"
        },
        {
          value: "mr-3.5",
          label: "『 mr-3.5 』 margin-right: 0.875rem;"
        },
        {
          value: "mb-3.5",
          label: "『 mb-3.5 』 margin-bottom: 0.875rem;"
        },
        {
          value: "ml-3.5",
          label: "『 ml-3.5 』 margin-left: 0.875rem;"
        }
      ]
    },
    {
      label: "16px",
      options: [
        {
          value: "m-4",
          label: "『 m-4 』 margin: 1rem;"
        },
        {
          value: "mx-4",
          label: "『 mx-4 』 margin-left: 1rem; margin-right: 1rem;"
        },
        {
          value: "my-4",
          label: "『 my-4 』 margin-top: 1rem;  margin-bottom: 1rem;"
        },
        {
          value: "mt-4",
          label: "『 mt-4 』 margin-top: 1rem;"
        },
        {
          value: "mr-4",
          label: "『 mr-4 』 margin-right: 1rem;"
        },
        {
          value: "mb-4",
          label: "『 mb-4 』 margin-bottom: 1rem;"
        },
        {
          value: "ml-4",
          label: "『 ml-4 』 margin-left: 1rem;"
        }
      ]
    },
    {
      label: "20px",
      options: [
        {
          value: "m-5",
          label: "『 m-5 』 margin: 1.25rem;"
        },
        {
          value: "mx-5",
          label: "『 mx-5 』 margin-left: 1.25rem; margin-right: 1.25rem;"
        },
        {
          value: "my-5",
          label: "『 my-5 』 margin-top: 1.25rem; margin-bottom: 1.25rem;"
        },
        {
          value: "mt-5",
          label: "『 mt-5 』 margin-top: 1.25rem;"
        },
        {
          value: "mr-5",
          label: "『 mr-5 』 margin-right: 1.25rem;"
        },
        {
          value: "mb-5",
          label: "『 mb-5 』 margin-bottom: 1.25rem;"
        },
        {
          value: "ml-5",
          label: "『 ml-5 』 margin-left: 1.25rem;"
        }
      ]
    },
    {
      label: "24px",
      options: [
        {
          value: "m-6",
          label: "『 m-6 』 margin: 1.5rem;"
        },
        {
          value: "mx-6",
          label: "『 mx-6 』 margin-left: 1.5rem; margin-right: 1.5rem;"
        },
        {
          value: "my-6",
          label: "『 my-6 』 margin-top: 1.5rem; margin-bottom: 1.5rem;"
        },
        {
          value: "mt-6",
          label: "『 mt-6 』 margin-top: 1.5rem;"
        },
        {
          value: "mr-6",
          label: "『 mr-6 』 margin-right: 1.5rem;"
        },
        {
          value: "mb-6",
          label: "『 mb-6 』 margin-bottom: 1.5rem;"
        },
        {
          value: "ml-6",
          label: "『 ml-6 』 margin-left: 1.5rem;"
        }
      ]
    },
    {
      label: "28px",
      options: [
        {
          value: "m-7",
          label: "『 m-7 』 margin: 1.75rem;"
        },
        {
          value: "mx-7",
          label: "『 mx-7 』 margin-left: 1.75rem; margin-right: 1.75rem;"
        },
        {
          value: "my-7",
          label: "『 my-7 』 margin-top: 1.75rem; margin-bottom: 1.75rem;"
        },
        {
          value: "mt-7",
          label: "『 mt-7 』 margin-top: 1.75rem;"
        },
        {
          value: "mr-7",
          label: "『 mr-7 』 margin-right: 1.75rem;"
        },
        {
          value: "mb-7",
          label: "『 mb-7 』 margin-bottom: 1.75rem;"
        },
        {
          value: "ml-7",
          label: "『 ml-7 』 margin-left: 1.75rem;"
        }
      ]
    },
    {
      label: "32px",
      options: [
        {
          value: "m-8",
          label: "『 m-8 』 margin: 2rem;"
        },
        {
          value: "mx-8",
          label: "『 mx-8 』 margin-left: 2rem; margin-right: 2rem;"
        },
        {
          value: "my-8",
          label: "『 my-8 』 margin-top: 2rem; margin-bottom: 2rem;"
        },
        {
          value: "mt-8",
          label: "『 mt-8 』 margin-top: 2rem;"
        },
        {
          value: "mr-8",
          label: "『 mr-8 』 margin-right: 2rem;"
        },
        {
          value: "mb-8",
          label: "『 mb-8 』 margin-bottom: 2rem;"
        },
        {
          value: "ml-8",
          label: "『 ml-8 』 margin-left: 2rem;"
        }
      ]
    },
    {
      label: "36px",
      options: [
        {
          value: "m-9",
          label: "『 m-9 』 margin: 2.25rem;"
        },
        {
          value: "mx-9",
          label: "『 mx-9 』 margin-left: 2.25rem; margin-right: 2.25rem;"
        },
        {
          value: "my-9",
          label: "『 my-9 』 margin-top: 2.25rem; margin-bottom: 2.25rem;"
        },
        {
          value: "mt-9",
          label: "『 mt-9 』 margin-top: 2.25rem;"
        },
        {
          value: "mr-9",
          label: "『 mr-9 』 margin-right: 2.25rem;"
        },
        {
          value: "mb-9",
          label: "『 mb-9 』 margin-bottom: 2.25rem;"
        },
        {
          value: "ml-9",
          label: "『 ml-9 』 margin-left: 2.25rem;"
        }
      ]
    },
    {
      label: "40px",
      options: [
        {
          value: "m-10",
          label: "『 m-10 』 margin: 2.5rem;"
        },
        {
          value: "mx-10",
          label: "『 mx-10 』 margin-left: 2.5rem; margin-right: 2.5rem;"
        },
        {
          value: "my-10",
          label: "『 my-10 』 margin-top: 2.5rem; margin-bottom: 2.5rem;"
        },
        {
          value: "mt-10",
          label: "『 mt-10 』 margin-top: 2.5rem;"
        },
        {
          value: "mr-10",
          label: "『 mr-10 』 margin-right: 2.5rem;"
        },
        {
          value: "mb-10",
          label: "『 mb-10 』 margin-bottom: 2.5rem;"
        },
        {
          value: "ml-10",
          label: "『 ml-10 』 margin-left: 2.5rem;"
        }
      ]
    },
    {
      label: "44px",
      options: [
        {
          value: "m-11",
          label: "『 m-11 』 margin: 2.75rem;"
        },
        {
          value: "mx-11",
          label: "『 mx-11 』 margin-left: 2.75rem; margin-right: 2.75rem;"
        },
        {
          value: "my-11",
          label: "『 my-11 』 margin-top: 2.75rem; margin-bottom: 2.75rem;"
        },
        {
          value: "mt-11",
          label: "『 mt-11 』 margin-top: 2.75rem;"
        },
        {
          value: "mr-11",
          label: "『 mr-11 』 margin-right: 2.75rem;"
        },
        {
          value: "mb-11",
          label: "『 mb-11 』 margin-bottom: 2.75rem;"
        },
        {
          value: "ml-11",
          label: "『 ml-11 』 margin-left: 2.75rem;"
        }
      ]
    },
    {
      label: "48px",
      options: [
        {
          value: "m-12",
          label: "『 m-12 』 margin: 3rem;"
        },
        {
          value: "mx-12",
          label: "『 mx-12 』 margin-left: 3rem; margin-right: 3rem;"
        },
        {
          value: "my-12",
          label: "『 my-12 』 margin-top: 3rem; margin-bottom: 3rem;"
        },
        {
          value: "mt-12",
          label: "『 mt-12 』 margin-top: 3rem;"
        },
        {
          value: "mr-12",
          label: "『 mr-12 』 margin-right: 3rem;"
        },
        {
          value: "mb-12",
          label: "『 mb-12 』 margin-bottom: 3rem;"
        },
        {
          value: "ml-12",
          label: "『 ml-12 』 margin-left: 3rem;"
        }
      ]
    },
    {
      label: "56px",
      options: [
        {
          value: "m-14",
          label: "『 m-14 』 margin: 3.5rem;"
        },
        {
          value: "mx-14",
          label: "『 mx-14 』 margin-left: 3.5rem; margin-right: 3.5rem;"
        },
        {
          value: "my-14",
          label: "『 my-14 』 margin-top: 3.5rem; margin-bottom: 3.5rem;"
        },
        {
          value: "mt-14",
          label: "『 mt-14 』 margin-top: 3.5rem;"
        },
        {
          value: "mr-14",
          label: "『 mr-14 』 margin-right: 3.5rem;"
        },
        {
          value: "mb-14",
          label: "『 mb-14 』 margin-bottom: 3.5rem;"
        },
        {
          value: "ml-14",
          label: "『 ml-14 』 margin-left: 3.5rem;"
        }
      ]
    },
    {
      label: "『  』 64px",
      options: [
        {
          value: "m-16",
          label: "『 m-16 』 margin: 4rem;"
        },
        {
          value: "mx-16",
          label: "『 mx-16 』 margin-left: 4rem; margin-right: 4rem;"
        },
        {
          value: "my-16",
          label: "『 my-16 』 margin-top: 4rem; margin-bottom: 4rem;"
        },
        {
          value: "mt-16",
          label: "『 mt-16 』 margin-top: 4rem;"
        },
        {
          value: "mr-16",
          label: "『 mr-16 』 margin-right: 4rem;"
        },
        {
          value: "mb-16",
          label: "『 mb-16 』 margin-bottom: 4rem;"
        },
        {
          value: "ml-16",
          label: "『 ml-16 』 margin-left: 4rem;"
        }
      ]
    },
    {
      label: "『  』 80px",
      options: [
        {
          value: "m-20",
          label: "『 m-20 』 margin: 5rem;"
        },
        {
          value: "mx-20",
          label: "『 mx-20 』 margin-left: 5rem; margin-right: 5rem;"
        },
        {
          value: "my-20",
          label: "『 my-20 』 margin-top: 5rem; margin-bottom: 5rem;"
        },
        {
          value: "mt-20",
          label: "『 mt-20 』 margin-top: 5rem;"
        },
        {
          value: "mr-20",
          label: "『 mr-20 』 margin-right: 5rem;"
        },
        {
          value: "mb-20",
          label: "『 mb-20 』 margin-bottom: 5rem;"
        },
        {
          value: "ml-20",
          label: "『 ml-20 』 margin-left: 5rem;"
        }
      ]
    },
    {
      label: "96px",
      options: [
        {
          value: "m-24",
          label: "『 m-24 』 margin: 6rem;"
        },
        {
          value: "mx-24",
          label: "『 mx-24 』 margin-left: 6rem; margin-right: 6rem;"
        },
        {
          value: "my-24",
          label: "『 my-24 』 margin-top: 6rem; margin-bottom: 6rem;"
        },
        {
          value: "mt-24",
          label: "『 mt-24 』 margin-top: 6rem;"
        },
        {
          value: "mr-24",
          label: "『 mr-24 』 margin-right: 6rem;"
        },
        {
          value: "mb-24",
          label: "『 mb-24 』 margin-bottom: 6rem;"
        },
        {
          value: "ml-24",
          label: "『 ml-24 』 margin-left: 6rem;"
        }
      ]
    },
    {
      label: "112px",
      options: [
        {
          value: "m-28",
          label: "『 m-28 』 margin: 7rem;"
        },
        {
          value: "mx-28",
          label: "『 mx-28 』 margin-left: 7rem; margin-right: 7rem;"
        },
        {
          value: "my-28",
          label: "『 my-28 』 margin-top: 7rem; margin-bottom: 7rem;"
        },
        {
          value: "mt-28",
          label: "『 mt-28 』 margin-top: 7rem;"
        },
        {
          value: "mr-28",
          label: "『 mr-28 』 margin-right: 7rem;"
        },
        {
          value: "mb-28",
          label: "『 mb-28 』 margin-bottom: 7rem;"
        },
        {
          value: "ml-28",
          label: "『 ml-28 』 margin-left: 7rem;"
        }
      ]
    },
    {
      label: "128px",
      options: [
        {
          value: "m-32",
          label: "『 m-32 』 margin: 8rem;"
        },
        {
          value: "mx-32",
          label: "『 mx-32 』 margin-left: 8rem; margin-right: 8rem;"
        },
        {
          value: "my-32",
          label: "『 my-32 』 margin-top: 8rem; margin-bottom: 8rem;"
        },
        {
          value: "mt-32",
          label: "『 mt-32 』 margin-top: 8rem;"
        },
        {
          value: "mr-32",
          label: "『 mr-32 』 margin-right: 8rem;"
        },
        {
          value: "mb-32",
          label: "『 mb-32 』 margin-bottom: 8rem;"
        },
        {
          value: "ml-32",
          label: "『 ml-32 』 margin-left: 8rem;"
        }
      ]
    },
    {
      label: "144px",
      options: [
        {
          value: "m-36",
          label: "『 m-36 』 margin: 9rem;"
        },
        {
          value: "mx-36",
          label: "『 mx-36 』 margin-left: 9rem; margin-right: 9rem;"
        },
        {
          value: "my-36",
          label: "『 my-36 』 margin-top: 9rem; margin-bottom: 9rem;"
        },
        {
          value: "mt-36",
          label: "『 mt-36 』 margin-top: 9rem;"
        },
        {
          value: "mr-36",
          label: "『 mr-36 』 margin-right: 9rem;"
        },
        {
          value: "mb-36",
          label: "『 mb-36 』 margin-bottom: 9rem;"
        },
        {
          value: "ml-36",
          label: "『 ml-36 』 margin-left: 9rem;"
        }
      ]
    },
    {
      label: "160px",
      options: [
        {
          value: "m-40",
          label: "『 m-40 』 margin: 10rem;"
        },
        {
          value: "mx-40",
          label: "『 mx-40 』 margin-left: 10rem; margin-right: 10rem;"
        },
        {
          value: "my-40",
          label: "『 my-40 』 margin-top: 10rem; margin-bottom: 10rem;"
        },
        {
          value: "mt-40",
          label: "『 mt-40 』 margin-top: 10rem;"
        },
        {
          value: "mr-40",
          label: "『 mr-40 』 margin-right: 10rem;"
        },
        {
          value: "mb-40",
          label: "『 mb-40 』 margin-bottom: 10rem;"
        },
        {
          value: "ml-40",
          label: "『 ml-40 』 margin-left: 10rem;"
        }
      ]
    },
    {
      label: "176px",
      options: [
        {
          value: "m-44",
          label: "『 m-44 』 margin: 11rem;"
        },
        {
          value: "mx-44",
          label: "『 mx-44 』 margin-left: 11rem; margin-right: 11rem;"
        },
        {
          value: "my-44",
          label: "『 my-44 』 margin-top: 11rem; margin-bottom: 11rem;"
        },
        {
          value: "mt-44",
          label: "『 mt-44 』 margin-top: 11rem;"
        },
        {
          value: "mr-44",
          label: "『 mr-44 』 margin-right: 11rem;"
        },
        {
          value: "mb-44",
          label: "『 mb-44 』 margin-bottom: 11rem;"
        },
        {
          value: "ml-44",
          label: "『 ml-44 』 margin-left: 11rem;"
        }
      ]
    },
    {
      label: "192px",
      options: [
        {
          value: "m-48",
          label: "『 m-48 』 margin: 12rem;"
        },
        {
          value: "mx-48",
          label: "『 mx-48 』 margin-left: 12rem; margin-right: 12rem;"
        },
        {
          value: "my-48",
          label: "『 my-48 』 margin-top: 12rem; margin-bottom: 12rem;"
        },
        {
          value: "mt-48",
          label: "『 mt-48 』 margin-top: 12rem;"
        },
        {
          value: "mr-48",
          label: "『 mr-48 』 margin-right: 12rem;"
        },
        {
          value: "mb-48",
          label: "『 mb-48 』 margin-bottom: 12rem;"
        },
        {
          value: "ml-48",
          label: "『 ml-48 』 margin-left: 12rem;"
        }
      ]
    },
    {
      label: "208px",
      options: [
        {
          value: "m-52",
          label: "『 m-52 』 margin: 13rem;"
        },
        {
          value: "mx-52",
          label: "『 mx-52 』 margin-left: 13rem; margin-right: 13rem;"
        },
        {
          value: "my-52",
          label: "『 my-52 』 margin-top: 13rem; margin-bottom: 13rem;"
        },
        {
          value: "mt-52",
          label: "『 mt-52 』 margin-top: 13rem;"
        },
        {
          value: "mr-52",
          label: "『 mr-52 』 margin-right: 13rem;"
        },
        {
          value: "mb-52",
          label: "『 mb-52 』 margin-bottom: 13rem;"
        },
        {
          value: "ml-52",
          label: "『 ml-52 』 margin-left: 13rem;"
        }
      ]
    },
    {
      label: "224px",
      options: [
        {
          value: "m-56\t",
          label: "『 m-56\t 』 margin: 14rem;"
        },
        {
          value: "mx-56",
          label: "『 mx-56 』 margin-left: 14rem; margin-right: 14rem;"
        },
        {
          value: "my-56",
          label: "『 my-56 』 margin-top: 14rem; margin-bottom: 14rem;"
        },
        {
          value: "mt-56",
          label: "『 mt-56 』 margin-top: 14rem;"
        },
        {
          value: "mr-56",
          label: "『 mr-56 』 margin-right: 14rem;"
        },
        {
          value: "mb-56",
          label: "『 mb-56 』 margin-bottom: 14rem;"
        },
        {
          value: "ml-56",
          label: "『 ml-56 』 margin-left: 14rem;"
        }
      ]
    },
    {
      label: "240px",
      options: [
        {
          value: "m-60",
          label: "『 m-60 』 margin: 15rem;"
        },
        {
          value: "mx-60",
          label: "『 mx-60 』 margin-left: 15rem; margin-right: 15rem;"
        },
        {
          value: "my-60",
          label: "『 my-60 』 margin-top: 15rem; margin-bottom: 15rem;"
        },
        {
          value: "mt-60",
          label: "『 mt-60 』 margin-top: 15rem;"
        },
        {
          value: "mr-60",
          label: "『 mr-60 』 margin-right: 15rem;"
        },
        {
          value: "mb-60",
          label: "『 mb-60 』 margin-bottom: 15rem;"
        },
        {
          value: "ml-60",
          label: "『 ml-60 』 margin-left: 15rem;"
        }
      ]
    },
    {
      label: "256px",
      options: [
        {
          value: "m-64",
          label: "『 m-64 』 margin: 16rem;"
        },
        {
          value: "mx-64",
          label: "『 mx-64 』 margin-left: 16rem; margin-right: 16rem;"
        },
        {
          value: "my-64",
          label: "『 my-64 』 margin-top: 16rem; margin-bottom: 16rem;"
        },
        {
          value: "mt-64",
          label: "『 mt-64 』 margin-top: 16rem;"
        },
        {
          value: "mr-64",
          label: "『 mr-64 』 margin-right: 16rem;"
        },
        {
          value: "mb-64",
          label: "『 mb-64 』 margin-bottom: 16rem;"
        },
        {
          value: "ml-64",
          label: "『 ml-64 』 margin-left: 16rem;"
        }
      ]
    },
    {
      label: "288px",
      options: [
        {
          value: "m-72",
          label: "『 m-72 』 margin: 18rem;"
        },
        {
          value: "mx-72",
          label: "『 mx-72 』 margin-left: 18rem; margin-right: 18rem;"
        },
        {
          value: "my-72",
          label: "『 my-72 』 margin-top: 18rem; margin-bottom: 18rem;"
        },
        {
          value: "mt-72",
          label: "『 mt-72 』 margin-top: 18rem;"
        },
        {
          value: "mr-72",
          label: "『 mr-72 』 margin-right: 18rem;"
        },
        {
          value: "mb-72",
          label: "『 mb-72 』 margin-bottom: 18rem;"
        },
        {
          value: "ml-72",
          label: "『 ml-72 』 margin-left: 18rem;"
        }
      ]
    },
    {
      label: "320px",
      options: [
        {
          value: "m-80",
          label: "『 m-80 』 margin: 20rem;"
        },
        {
          value: "mx-80",
          label: "『 mx-80 』 margin-left: 20rem; margin-right: 20rem;"
        },
        {
          value: "my-80",
          label: "『 my-80 』 margin-top: 20rem; margin-bottom: 20rem;"
        },
        {
          value: "mt-80",
          label: "『 mt-80 』 margin-top: 20rem;"
        },
        {
          value: "mr-80",
          label: "『 mr-80 』 margin-right: 20rem;"
        },
        {
          value: "mb-80",
          label: "『 mb-80 』 margin-bottom: 20rem;"
        },
        {
          value: "ml-80",
          label: "『 ml-80 』 margin-left: 20rem;"
        }
      ]
    },
    {
      label: "384px",
      options: [
        {
          value: "m-96",
          label: "『 m-96 』 margin: 24rem;"
        },
        {
          value: "mx-96",
          label: "『 mx-96 』 margin-left: 24rem; margin-right: 24rem;"
        },
        {
          value: "my-96",
          label: "『 my-96 』 margin-top: 24rem; margin-bottom: 24rem;"
        },
        {
          value: "mt-96",
          label: "『 mt-96 』 margin-top: 24rem;"
        },
        {
          value: "mr-96",
          label: "『 mr-96 』 margin-right: 24rem;"
        },
        {
          value: "mb-96",
          label: "『 mb-96 』 margin-bottom: 24rem;"
        },
        {
          value: "ml-96",
          label: "『 ml-96 』 margin-left: 24rem;"
        }
      ]
    },
    {
      label: "auto",
      options: [
        {
          value: "m-auto",
          label: "『 m-auto 』 margin: auto;"
        },
        {
          value: "mx-auto",
          label: "『 mx-auto 』 margin-left: auto; margin-right: auto;"
        },
        {
          value: "my-auto",
          label: "『 my-auto 』 margin-top: auto; margin-bottom: auto;"
        },
        {
          value: "mt-auto",
          label: "『 mt-auto 』 margin-top: auto;"
        },
        {
          value: "mr-auto",
          label: "『 mr-auto 』 margin-right: auto;"
        },
        {
          value: "mb-auto",
          label: "『 mb-auto 』 margin-bottom: auto;"
        },
        {
          value: "ml-auto",
          label: "『 ml-auto 』 margin-left: auto;"
        }
      ]
    }
  ]
};

export const SpaceBetween: AttributeProps = {
  type: SpaceBetweenType.toString(),
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
};

export default [Padding, Margin, SpaceBetween];
