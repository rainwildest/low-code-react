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
  hasMultiple: true,
  options: [
    {
      label: "0px",
      options: [
        { value: "p-0", label: "padding: 0px;" },
        { value: "px-0", label: "padding-left: 0px; \npadding-right: 0px;" },
        { value: "py-0", label: "padding-top: 0px; \npadding-bottom: 0px;" },
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
        { value: "px-px", label: "padding-left: 1px; \npadding-right: 1px;" },
        { value: "py-px", label: "padding-top: 1px; \npadding-bottom: 1px;" },
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
          label: "padding-left: 0.125rem; \npadding-right: 0.125rem;"
        },
        {
          value: "py-0.5",
          label: "padding-top: 0.125rem; \npadding-bottom: 0.125rem;"
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
          label: "padding-left: 0.25rem; \npadding-right: 0.25rem;"
        },
        {
          value: "py-1",
          label: "padding-top: 0.25rem; \npadding-bottom: 0.25rem;"
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
          label: "padding-left: 0.375rem; \npadding-right: 0.375rem;"
        },
        {
          value: "py-1.5",
          label: "padding-top: 0.375rem; \npadding-bottom: 0.375rem;"
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
          label: "padding-left: 0.5rem; \npadding-right: 0.5rem;"
        },
        {
          value: "py-2",
          label: "padding-top: 0.5rem; \npadding-bottom: 0.5rem;"
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
          label: "padding-left: 0.75rem; \npadding-right: 0.75rem;"
        },
        {
          value: "py-3",
          label: "padding-top: 0.75rem; \npadding-bottom: 0.75rem;"
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
          label: "padding-left: 0.875rem; \npadding-right: 0.875rem;"
        },
        {
          value: "py-3.5",
          label: "padding-top: 0.875rem; \npadding-bottom: 0.875rem;"
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
        { value: "px-4", label: "padding-left: 1rem; \npadding-right: 1rem;" },
        { value: "py-4", label: "padding-top: 1rem; \npadding-bottom: 1rem;" },
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
          label: "padding-left: 1.25rem; \npadding-right: 1.25rem;"
        },
        {
          value: "py-5",
          label: "padding-top: 1.25rem; \npadding-bottom: 1.25rem;"
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
          label: "padding-left: 1.5rem; \npadding-right: 1.5rem;"
        },
        {
          value: "py-6",
          label: "padding-top: 1.5rem; \npadding-bottom: 1.5rem;"
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
          label: "padding-left: 1.75rem; \npadding-right: 1.75rem;"
        },
        {
          value: "py-7",
          label: "padding-top: 1.75rem; \npadding-bottom: 1.75rem;"
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
        { value: "px-8", label: "padding-left: 2rem; \npadding-right: 2rem;" },
        { value: "py-8", label: "padding-top: 2rem; \npadding-bottom: 2rem;" },
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
          label: "padding-left: 2.25rem; \npadding-right: 2.25rem;"
        },
        {
          value: "py-9",
          label: "padding-top: 2.25rem; \npadding-bottom: 2.25rem;"
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
          label: "padding-left: 2.5rem; \npadding-right: 2.5rem;"
        },
        {
          value: "py-10",
          label: "padding-top: 2.5rem; \npadding-bottom: 2.5rem;"
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
          label: "padding-left: 2.75rem; \npadding-right: 2.75rem;"
        },
        {
          value: "py-11",
          label: "padding-top: 2.75rem; \npadding-bottom: 2.75rem;"
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
        { value: "px-12", label: "padding-left: 3rem; \npadding-right: 3rem;" },
        { value: "py-12", label: "padding-top: 3rem; \npadding-bottom: 3rem;" },
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
          label: "padding-left: 3.5rem; \npadding-right: 3.5rem;"
        },
        {
          value: "py-14",
          label: "padding-top: 3.5rem; \npadding-bottom: 3.5rem;"
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
        { value: "px-16", label: "padding-left: 4rem; \npadding-right: 4rem;" },
        { value: "py-16", label: "padding-top: 4rem; \npadding-bottom: 4rem;" },
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
        { value: "px-20", label: "padding-left: 5rem; \npadding-right: 5rem;" },
        { value: "py-20", label: "padding-top: 5rem; \npadding-bottom: 5rem;" },
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
        { value: "px-24", label: "padding-left: 6rem; \npadding-right: 6rem;" },
        { value: "py-24", label: "padding-top: 6rem; \npadding-bottom: 6rem;" },
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
        { value: "px-28", label: "padding-left: 7rem; \npadding-right: 7rem;" },
        { value: "py-28", label: "padding-top: 7rem; \npadding-bottom: 7rem;" },
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
        { value: "px-32", label: "padding-left: 8rem; \npadding-right: 8rem;" },
        { value: "py-32", label: "padding-top: 8rem; \npadding-bottom: 8rem;" },
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
        { value: "px-36", label: "padding-left: 9rem; \npadding-right: 9rem;" },
        { value: "py-36", label: "padding-top: 9rem; \npadding-bottom: 9rem;" },
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
          label: "padding-left: 10rem; \npadding-right: 10rem;"
        },
        {
          value: "py-40",
          label: "padding-top: 10rem; \npadding-bottom: 10rem;"
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
          label: "padding-left: 11rem; \npadding-right: 11rem;"
        },
        {
          value: "py-44",
          label: "padding-top: 11rem; \npadding-bottom: 11rem;"
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
          label: "padding-left: 12rem; \npadding-right: 12rem;"
        },
        {
          value: "py-48",
          label: "padding-top: 12rem; \npadding-bottom: 12rem;"
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
          label: "padding-left: 13rem; \npadding-right: 13rem;"
        },
        {
          value: "py-52",
          label: "padding-top: 13rem; \npadding-bottom: 13rem;"
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
          label: "padding-left: 14rem; \npadding-right: 14rem;"
        },
        {
          value: "py-56",
          label: "padding-top: 14rem; \npadding-bottom: 14rem;"
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
          label: "padding-left: 15rem; \npadding-right: 15rem;"
        },
        {
          value: "py-60",
          label: "padding-top: 15rem; \npadding-bottom: 15rem;"
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
          label: "padding-left: 16rem; \npadding-right: 16rem;"
        },
        {
          value: "py-64",
          label: "padding-top: 16rem; \npadding-bottom: 16rem;"
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
          label: "padding-left: 18rem; \npadding-right: 18rem;"
        },
        {
          value: "py-72",
          label: "padding-top: 18rem; \npadding-bottom: 18rem;"
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
          label: "padding-left: 20rem; \npadding-right: 20rem;"
        },
        {
          value: "py-80",
          label: "padding-top: 20rem; \npadding-bottom: 20rem;"
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
          label: "padding-left: 24rem; \npadding-right: 24rem;"
        },
        {
          value: "py-96",
          label: "padding-top: 24rem; \npadding-bottom: 24rem;"
        },
        { value: "pt-96", label: "padding-top: 24rem;" },
        { value: "pr-96", label: "padding-right: 24rem;" },
        { value: "pb-96", label: "padding-bottom: 24rem;" },
        { value: "pl-96", label: "padding-left: 24rem;" }
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
  hasMultiple: true,
  options: [
    {
      label: "0px;",
      options: [
        { value: "m-0", label: "margin: 0px;" },
        { value: "mx-0", label: "margin-left: 0px; \nmargin-right: 0px;" },
        { value: "my-0", label: "margin-top: 0px; \nmargin-bottom: 0px;" },
        { value: "mt-0", label: "margin-top: 0px;" },
        { value: "mr-0", label: "margin-right: 0px;" },
        { value: "mb-0", label: "margin-bottom: 0px;" },
        { value: "ml-0", label: "margin-left: 0px;" }
      ]
    },
    {
      label: "1px;",
      options: [
        { value: "m-px", label: "margin: 1px;" },
        { value: "mx-px", label: "margin-left: 1px; \nmargin-right: 1px;" },
        { value: "my-px", label: "margin-top: 1px; \nmargin-bottom: 1px;" },
        { value: "mt-px", label: "margin-top: 1px;" },
        { value: "mr-px", label: "margin-right: 1px;" },
        { value: "mb-px", label: "margin-bottom: 1px;" },
        { value: "ml-px", label: "margin-left: 1px;" }
      ]
    },
    {
      label: "2px",
      options: [
        { value: "m-0.5", label: "margin: 0.125rem;" },
        {
          value: "mx-0.5",
          label: "margin-left: 0.125rem; \nmargin-right: 0.125rem;"
        },
        {
          value: "my-0.5",
          label: "margin-top: 0.125rem; \nmargin-bottom: 0.125rem;"
        },
        { value: "mt-0.5", label: "margin-top: 0.125rem;" },
        { value: "mr-0.5", label: "margin-right: 0.125rem;" },
        { value: "mb-0.5", label: "margin-bottom: 0.125rem;" },
        { value: "ml-0.5", label: "margin-left: 0.125rem;" }
      ]
    },
    {
      label: "4px",
      options: [
        { value: "m-1", label: "margin: 0.25rem;" },
        {
          value: "mx-1",
          label: "margin-left: 0.25rem; \nmargin-right: 0.25rem;"
        },
        {
          value: "my-1",
          label: "margin-top: 0.25rem; \nmargin-bottom: 0.25rem;"
        },
        { value: "mt-1", label: "margin-top: 0.25rem;" },
        { value: "mr-1", label: "margin-right: 0.25rem;" },
        { value: "mb-1", label: "margin-bottom: 0.25rem;" },
        { value: "ml-1", label: "margin-left: 0.25rem;" }
      ]
    },
    {
      label: "6px",
      options: [
        { value: "m-1.5", label: "margin: 0.375rem;" },
        {
          value: "mx-1.5",
          label: "margin-left: 0.375rem; \nmargin-right: 0.375rem;"
        },
        {
          value: "my-1.5",
          label: "margin-top: 0.375rem; \nmargin-bottom: 0.375rem;"
        },
        { value: "mt-1.5", label: "margin-top: 0.375rem;" },
        { value: "mr-1.5", label: "margin-right: 0.375rem;" },
        { value: "mb-1.5", label: "margin-bottom: 0.375rem;" },
        { value: "ml-1.5", label: "margin-left: 0.375rem;" }
      ]
    },
    {
      label: "8px",
      options: [
        { value: "m-2", label: "margin: 0.5rem;" },
        {
          value: "mx-2",
          label: "margin-left: 0.5rem; \nmargin-right: 0.5rem;"
        },
        {
          value: "my-2",
          label: "margin-top: 0.5rem; \nmargin-bottom: 0.5rem;"
        },
        { value: "mt-2", label: "margin-top: 0.5rem;" },
        { value: "mr-2", label: "margin-right: 0.5rem;" },
        { value: "mb-2", label: "margin-bottom: 0.5rem;" },
        { value: "ml-2", label: "margin-left: 0.5rem;" }
      ]
    },
    {
      label: "10px",
      options: [
        { value: "m-2.5", label: "margin: 0.625rem;" },
        {
          value: "mx-2.5",
          label: "margin-left: 0.625rem; \nmargin-right: 0.625rem;"
        },
        {
          value: "my-2.5",
          label: "margin-top: 0.625rem; \nmargin-bottom: 0.625rem;"
        },
        { value: "mt-2.5", label: "margin-top: 0.625rem;" },
        { value: "mr-2.5", label: "margin-right: 0.625rem;" },
        { value: "mb-2.5", label: "margin-bottom: 0.625rem;" },
        { value: "ml-2.5", label: "margin-left: 0.625rem;" }
      ]
    },
    {
      label: "12px",
      options: [
        { value: "m-3", label: "margin: 0.75rem;" },
        {
          value: "mx-3",
          label: "margin-left: 0.75rem; \nmargin-right: 0.75rem;"
        },
        {
          value: "my-3",
          label: "margin-top: 0.75rem; \nmargin-bottom: 0.75rem;"
        },
        { value: "mt-3", label: "margin-top: 0.75rem;" },
        { value: "mr-3", label: "margin-right: 0.75rem;" },
        { value: "mb-3", label: "margin-bottom: 0.75rem;" },
        { value: "ml-3", label: "margin-left: 0.75rem;" }
      ]
    },
    {
      label: "14px",
      options: [
        { value: "m-3.5", label: "margin: 0.875rem;" },
        {
          value: "mx-3.5",
          label: "margin-left: 0.875rem; \nmargin-right: 0.875rem;"
        },
        {
          value: "my-3.5",
          label: "margin-top: 0.875rem; \nmargin-bottom: 0.875rem;"
        },
        { value: "mt-3.5", label: "margin-top: 0.875rem;" },
        { value: "mr-3.5", label: "margin-right: 0.875rem;" },
        { value: "mb-3.5", label: "margin-bottom: 0.875rem;" },
        { value: "ml-3.5", label: "margin-left: 0.875rem;" }
      ]
    },
    {
      label: "16px",
      options: [
        { value: "m-4", label: "margin: 1rem;" },
        { value: "mx-4", label: "margin-left: 1rem; \nmargin-right: 1rem;" },
        { value: "my-4", label: "margin-top: 1rem;  \nmargin-bottom: 1rem;" },
        { value: "mt-4", label: "margin-top: 1rem;" },
        { value: "mr-4", label: "margin-right: 1rem;" },
        { value: "mb-4", label: "margin-bottom: 1rem;" },
        { value: "ml-4", label: "margin-left: 1rem;" }
      ]
    },
    {
      label: "20px",
      options: [
        { value: "m-5", label: "margin: 1.25rem;" },
        {
          value: "mx-5",
          label: "margin-left: 1.25rem; \nmargin-right: 1.25rem;"
        },
        {
          value: "my-5",
          label: "margin-top: 1.25rem; \nmargin-bottom: 1.25rem;"
        },
        { value: "mt-5", label: "margin-top: 1.25rem;" },
        { value: "mr-5", label: "margin-right: 1.25rem;" },
        { value: "mb-5", label: "margin-bottom: 1.25rem;" },
        { value: "ml-5", label: "margin-left: 1.25rem;" }
      ]
    },
    {
      label: "24px",
      options: [
        { value: "m-6", label: "margin: 1.5rem;" },
        {
          value: "mx-6",
          label: "margin-left: 1.5rem; \nmargin-right: 1.5rem;"
        },
        {
          value: "my-6",
          label: "margin-top: 1.5rem; \nmargin-bottom: 1.5rem;"
        },
        { value: "mt-6", label: "margin-top: 1.5rem;" },
        { value: "mr-6", label: "margin-right: 1.5rem;" },
        { value: "mb-6", label: "margin-bottom: 1.5rem;" },
        { value: "ml-6", label: "margin-left: 1.5rem;" }
      ]
    },
    {
      label: "28px",
      options: [
        { value: "m-7", label: "margin: 1.75rem;" },
        {
          value: "mx-7",
          label: "margin-left: 1.75rem; \nmargin-right: 1.75rem;"
        },
        {
          value: "my-7",
          label: "margin-top: 1.75rem; \nmargin-bottom: 1.75rem;"
        },
        { value: "mt-7", label: "margin-top: 1.75rem;" },
        { value: "mr-7", label: "margin-right: 1.75rem;" },
        { value: "mb-7", label: "margin-bottom: 1.75rem;" },
        { value: "ml-7", label: "margin-left: 1.75rem;" }
      ]
    },
    {
      label: "32px",
      options: [
        { value: "m-8", label: "margin: 2rem;" },
        { value: "mx-8", label: "margin-left: 2rem; \nmargin-right: 2rem;" },
        { value: "my-8", label: "margin-top: 2rem; \nmargin-bottom: 2rem;" },
        { value: "mt-8", label: "margin-top: 2rem;" },
        { value: "mr-8", label: "margin-right: 2rem;" },
        { value: "mb-8", label: "margin-bottom: 2rem;" },
        { value: "ml-8", label: "margin-left: 2rem;" }
      ]
    },
    {
      label: "36px",
      options: [
        { value: "m-9", label: "margin: 2.25rem;" },
        {
          value: "mx-9",
          label: "margin-left: 2.25rem; \nmargin-right: 2.25rem;"
        },
        {
          value: "my-9",
          label: "margin-top: 2.25rem; \nmargin-bottom: 2.25rem;"
        },
        { value: "mt-9", label: "margin-top: 2.25rem;" },
        { value: "mr-9", label: "margin-right: 2.25rem;" },
        { value: "mb-9", label: "margin-bottom: 2.25rem;" },
        { value: "ml-9", label: "margin-left: 2.25rem;" }
      ]
    },
    {
      label: "40px",
      options: [
        { value: "m-10", label: "margin: 2.5rem;" },
        {
          value: "mx-10",
          label: "margin-left: 2.5rem; \nmargin-right: 2.5rem;"
        },
        {
          value: "my-10",
          label: "margin-top: 2.5rem; \nmargin-bottom: 2.5rem;"
        },
        { value: "mt-10", label: "margin-top: 2.5rem;" },
        { value: "mr-10", label: "margin-right: 2.5rem;" },
        { value: "mb-10", label: "margin-bottom: 2.5rem;" },
        { value: "ml-10", label: "margin-left: 2.5rem;" }
      ]
    },
    {
      label: "44px",
      options: [
        { value: "m-11", label: "margin: 2.75rem;" },
        {
          value: "mx-11",
          label: "margin-left: 2.75rem; \nmargin-right: 2.75rem;"
        },
        {
          value: "my-11",
          label: "margin-top: 2.75rem; \nmargin-bottom: 2.75rem;"
        },
        { value: "mt-11", label: "margin-top: 2.75rem;" },
        { value: "mr-11", label: "margin-right: 2.75rem;" },
        { value: "mb-11", label: "margin-bottom: 2.75rem;" },
        { value: "ml-11", label: "margin-left: 2.75rem;" }
      ]
    },
    {
      label: "48px",
      options: [
        { value: "m-12", label: "margin: 3rem;" },
        { value: "mx-12", label: "margin-left: 3rem; \nmargin-right: 3rem;" },
        { value: "my-12", label: "margin-top: 3rem; \nmargin-bottom: 3rem;" },
        { value: "mt-12", label: "margin-top: 3rem;" },
        { value: "mr-12", label: "margin-right: 3rem;" },
        { value: "mb-12", label: "margin-bottom: 3rem;" },
        { value: "ml-12", label: "margin-left: 3rem;" }
      ]
    },
    {
      label: "56px",
      options: [
        { value: "m-14", label: "margin: 3.5rem;" },
        {
          value: "mx-14",
          label: "margin-left: 3.5rem; \nmargin-right: 3.5rem;"
        },
        {
          value: "my-14",
          label: "margin-top: 3.5rem; \nmargin-bottom: 3.5rem;"
        },
        { value: "mt-14", label: "margin-top: 3.5rem;" },
        { value: "mr-14", label: "margin-right: 3.5rem;" },
        { value: "mb-14", label: "margin-bottom: 3.5rem;" },
        { value: "ml-14", label: "margin-left: 3.5rem;" }
      ]
    },
    {
      label: "64px",
      options: [
        { value: "m-16", label: "margin: 4rem;" },
        { value: "mx-16", label: "margin-left: 4rem; \nmargin-right: 4rem;" },
        { value: "my-16", label: "margin-top: 4rem; \nmargin-bottom: 4rem;" },
        { value: "mt-16", label: "margin-top: 4rem;" },
        { value: "mr-16", label: "margin-right: 4rem;" },
        { value: "mb-16", label: "margin-bottom: 4rem;" },
        { value: "ml-16", label: "margin-left: 4rem;" }
      ]
    },
    {
      label: "80px",
      options: [
        { value: "m-20", label: "margin: 5rem;" },
        { value: "mx-20", label: "margin-left: 5rem; \nmargin-right: 5rem;" },
        { value: "my-20", label: "margin-top: 5rem; \nmargin-bottom: 5rem;" },
        { value: "mt-20", label: "margin-top: 5rem;" },
        { value: "mr-20", label: "margin-right: 5rem;" },
        { value: "mb-20", label: "margin-bottom: 5rem;" },
        { value: "ml-20", label: "margin-left: 5rem;" }
      ]
    },
    {
      label: "96px",
      options: [
        { value: "m-24", label: "margin: 6rem;" },
        { value: "mx-24", label: "margin-left: 6rem; \nmargin-right: 6rem;" },
        { value: "my-24", label: "margin-top: 6rem; \nmargin-bottom: 6rem;" },
        { value: "mt-24", label: "margin-top: 6rem;" },
        { value: "mr-24", label: "margin-right: 6rem;" },
        { value: "mb-24", label: "margin-bottom: 6rem;" },
        { value: "ml-24", label: "margin-left: 6rem;" }
      ]
    },
    {
      label: "112px",
      options: [
        { value: "m-28", label: "margin: 7rem;" },
        { value: "mx-28", label: "margin-left: 7rem; \nmargin-right: 7rem;" },
        { value: "my-28", label: "margin-top: 7rem; \nmargin-bottom: 7rem;" },
        { value: "mt-28", label: "margin-top: 7rem;" },
        { value: "mr-28", label: "margin-right: 7rem;" },
        { value: "mb-28", label: "margin-bottom: 7rem;" },
        { value: "ml-28", label: "margin-left: 7rem;" }
      ]
    },
    {
      label: "128px",
      options: [
        { value: "m-32", label: "margin: 8rem;" },
        { value: "mx-32", label: "margin-left: 8rem; \nmargin-right: 8rem;" },
        { value: "my-32", label: "margin-top: 8rem; \nmargin-bottom: 8rem;" },
        { value: "mt-32", label: "margin-top: 8rem;" },
        { value: "mr-32", label: "margin-right: 8rem;" },
        { value: "mb-32", label: "margin-bottom: 8rem;" },
        { value: "ml-32", label: "margin-left: 8rem;" }
      ]
    },
    {
      label: "144px",
      options: [
        { value: "m-36", label: "margin: 9rem;" },
        { value: "mx-36", label: "margin-left: 9rem; \nmargin-right: 9rem;" },
        { value: "my-36", label: "margin-top: 9rem; \nmargin-bottom: 9rem;" },
        { value: "mt-36", label: "margin-top: 9rem;" },
        { value: "mr-36", label: "margin-right: 9rem;" },
        { value: "mb-36", label: "margin-bottom: 9rem;" },
        { value: "ml-36", label: "margin-left: 9rem;" }
      ]
    },
    {
      label: "160px",
      options: [
        { value: "m-40", label: "margin: 10rem;" },
        { value: "mx-40", label: "margin-left: 10rem; \nmargin-right: 10rem;" },
        { value: "my-40", label: "margin-top: 10rem; \nmargin-bottom: 10rem;" },
        { value: "mt-40", label: "margin-top: 10rem;" },
        { value: "mr-40", label: "margin-right: 10rem;" },
        { value: "mb-40", label: "margin-bottom: 10rem;" },
        { value: "ml-40", label: "margin-left: 10rem;" }
      ]
    },
    {
      label: "176px",
      options: [
        { value: "m-44", label: "margin: 11rem;" },
        { value: "mx-44", label: "margin-left: 11rem; \nmargin-right: 11rem;" },
        { value: "my-44", label: "margin-top: 11rem; \nmargin-bottom: 11rem;" },
        { value: "mt-44", label: "margin-top: 11rem;" },
        { value: "mr-44", label: "margin-right: 11rem;" },
        { value: "mb-44", label: "margin-bottom: 11rem;" },
        { value: "ml-44", label: "margin-left: 11rem;" }
      ]
    },
    {
      label: "192px",
      options: [
        { value: "m-48", label: "margin: 12rem;" },
        { value: "mx-48", label: "margin-left: 12rem; \nmargin-right: 12rem;" },
        { value: "my-48", label: "margin-top: 12rem; \nmargin-bottom: 12rem;" },
        { value: "mt-48", label: "margin-top: 12rem;" },
        { value: "mr-48", label: "margin-right: 12rem;" },
        { value: "mb-48", label: "margin-bottom: 12rem;" },
        { value: "ml-48", label: "margin-left: 12rem;" }
      ]
    },
    {
      label: "208px",
      options: [
        { value: "m-52", label: "margin: 13rem;" },
        { value: "mx-52", label: "margin-left: 13rem; \nmargin-right: 13rem;" },
        { value: "my-52", label: "margin-top: 13rem; \nmargin-bottom: 13rem;" },
        { value: "mt-52", label: "margin-top: 13rem;" },
        { value: "mr-52", label: "margin-right: 13rem;" },
        { value: "mb-52", label: "margin-bottom: 13rem;" },
        { value: "ml-52", label: "margin-left: 13rem;" }
      ]
    },
    {
      label: "224px",
      options: [
        { value: "m-56", label: "margin: 14rem;" },
        { value: "mx-56", label: "margin-left: 14rem; \nmargin-right: 14rem;" },
        { value: "my-56", label: "margin-top: 14rem; \nmargin-bottom: 14rem;" },
        { value: "mt-56", label: "margin-top: 14rem;" },
        { value: "mr-56", label: "margin-right: 14rem;" },
        { value: "mb-56", label: "margin-bottom: 14rem;" },
        { value: "ml-56", label: "margin-left: 14rem;" }
      ]
    },
    {
      label: "240px",
      options: [
        { value: "m-60", label: "margin: 15rem;" },
        { value: "mx-60", label: "margin-left: 15rem; \nmargin-right: 15rem;" },
        { value: "my-60", label: "margin-top: 15rem; \nmargin-bottom: 15rem;" },
        { value: "mt-60", label: "margin-top: 15rem;" },
        { value: "mr-60", label: "margin-right: 15rem;" },
        { value: "mb-60", label: "margin-bottom: 15rem;" },
        { value: "ml-60", label: "margin-left: 15rem;" }
      ]
    },
    {
      label: "256px",
      options: [
        { value: "m-64", label: "margin: 16rem;" },
        { value: "mx-64", label: "margin-left: 16rem; \nmargin-right: 16rem;" },
        { value: "my-64", label: "margin-top: 16rem; \nmargin-bottom: 16rem;" },
        { value: "mt-64", label: "margin-top: 16rem;" },
        { value: "mr-64", label: "margin-right: 16rem;" },
        { value: "mb-64", label: "margin-bottom: 16rem;" },
        { value: "ml-64", label: "margin-left: 16rem;" }
      ]
    },
    {
      label: "288px",
      options: [
        { value: "m-72", label: "margin: 18rem;" },
        { value: "mx-72", label: "margin-left: 18rem; \nmargin-right: 18rem;" },
        { value: "my-72", label: "margin-top: 18rem; \nmargin-bottom: 18rem;" },
        { value: "mt-72", label: "margin-top: 18rem;" },
        { value: "mr-72", label: "margin-right: 18rem;" },
        { value: "mb-72", label: "margin-bottom: 18rem;" },
        { value: "ml-72", label: "margin-left: 18rem;" }
      ]
    },
    {
      label: "320px",
      options: [
        { value: "m-80", label: "margin: 20rem;" },
        { value: "mx-80", label: "margin-left: 20rem; \nmargin-right: 20rem;" },
        { value: "my-80", label: "margin-top: 20rem; \nmargin-bottom: 20rem;" },
        { value: "mt-80", label: "margin-top: 20rem;" },
        { value: "mr-80", label: "margin-right: 20rem;" },
        { value: "mb-80", label: "margin-bottom: 20rem;" },
        { value: "ml-80", label: "margin-left: 20rem;" }
      ]
    },
    {
      label: "384px",
      options: [
        { value: "m-96", label: "margin: 24rem;" },
        { value: "mx-96", label: "margin-left: 24rem; \nmargin-right: 24rem;" },
        { value: "my-96", label: "margin-top: 24rem; \nmargin-bottom: 24rem;" },
        { value: "mt-96", label: "margin-top: 24rem;" },
        { value: "mr-96", label: "margin-right: 24rem;" },
        { value: "mb-96", label: "margin-bottom: 24rem;" },
        { value: "ml-96", label: "margin-left: 24rem;" }
      ]
    },
    {
      label: "auto",
      options: [
        { value: "m-auto", label: "margin: auto;" },
        { value: "mx-auto", label: "margin-left: auto; \nmargin-right: auto;" },
        { value: "my-auto", label: "margin-top: auto; \nmargin-bottom: auto;" },
        { value: "mt-auto", label: "margin-top: auto;" },
        { value: "mr-auto", label: "margin-right: auto;" },
        { value: "mb-auto", label: "margin-bottom: auto;" },
        { value: "ml-auto", label: "margin-left: auto;" }
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
    { value: "space-x-0 > * + *", label: "margin-left: 0px;" },
    { value: "space-y-0 > * + *", label: "margin-top: 0px;" },
    { value: "space-x-0.5 > * + *", label: "margin-left: 0.125rem; /* 2px */" },
    { value: "space-y-0.5 > * + *", label: "margin-top: 0.125rem; /* 2px */" },
    { value: "space-x-1 > * + *", label: "margin-left: 0.25rem; /* 4px */" },
    { value: "space-y-1 > * + *", label: "margin-top: 0.25rem; /* 4px */" },
    { value: "space-x-1.5 > * + *", label: "margin-left: 0.375rem; /* 6px */" },
    { value: "space-y-1.5 > * + *", label: "margin-top: 0.375rem; /* 6px */" },
    { value: "space-x-2 > * + *", label: "margin-left: 0.5rem; /* 8px */" },
    { value: "space-y-2 > * + *", label: "margin-top: 0.5rem; /* 8px */" },
    {
      value: "space-x-2.5 > * + *",
      label: "margin-left: 0.625rem; /* 10px */"
    },
    { value: "space-y-2.5 > * + *", label: "margin-top: 0.625rem; /* 10px */" },
    { value: "space-x-3 > * + *", label: "margin-left: 0.75rem; /* 12px */" },
    { value: "space-y-3 > * + *", label: "margin-top: 0.75rem; /* 12px */" },
    {
      value: "space-x-3.5 > * + *",
      label: "margin-left: 0.875rem; /* 14px */"
    },
    { value: "space-y-3.5 > * + *", label: "margin-top: 0.875rem; /* 14px */" },
    { value: "space-x-4 > * + *", label: "margin-left: 1rem; /* 16px */" },
    { value: "space-y-4 > * + *", label: "margin-top: 1rem; /* 16px */" },
    { value: "space-x-5 > * + *", label: "margin-left: 1.25rem; /* 20px */" },
    { value: "space-y-5 > * + *", label: "margin-top: 1.25rem; /* 20px */" },
    { value: "space-x-6 > * + *", label: "margin-left: 1.5rem; /* 24px */" },
    { value: "space-y-6 > * + *", label: "margin-top: 1.5rem; /* 24px */" },
    { value: "space-x-7 > * + *", label: "margin-left: 1.75rem; /* 28px */" },
    { value: "space-y-7 > * + *", label: "margin-top: 1.75rem; /* 28px */" },
    { value: "space-x-8 > * + *", label: "margin-left: 2rem; /* 32px */" },
    { value: "space-y-8 > * + *", label: "margin-top: 2rem; /* 32px */" },
    { value: "space-x-9 > * + *", label: "margin-left: 2.25rem; /* 36px */" },
    { value: "space-y-9 > * + *", label: "margin-top: 2.25rem; /* 36px */" },
    { value: "space-x-10 > * + *", label: "margin-left: 2.5rem; /* 40px */" },
    { value: "space-y-10 > * + *", label: "margin-top: 2.5rem; /* 40px */" },
    { value: "space-x-11 > * + *", label: "margin-left: 2.75rem; /* 44px */" },
    { value: "space-y-11 > * + *", label: "margin-top: 2.75rem; /* 44px */" },
    { value: "space-x-12 > * + *", label: "margin-left: 3rem; /* 48px */" },
    { value: "space-y-12 > * + *", label: "margin-top: 3rem; /* 48px */" },
    { value: "space-x-14 > * + *", label: "margin-left: 3.5rem; /* 56px */" },
    { value: "space-y-14 > * + *", label: "margin-top: 3.5rem; /* 56px */" },
    { value: "space-x-16 > * + *", label: "margin-left: 4rem; /* 64px */" },
    { value: "space-y-16 > * + *", label: "margin-top: 4rem; /* 64px */" },
    { value: "space-x-20 > * + *", label: "margin-left: 5rem; /* 80px */" },
    { value: "space-y-20 > * + *", label: "margin-top: 5rem; /* 80px */" },
    { value: "space-x-24 > * + *", label: "margin-left: 6rem; /* 96px */" },
    { value: "space-y-24 > * + *", label: "margin-top: 6rem; /* 96px */" },
    { value: "space-x-28 > * + *", label: "margin-left: 7rem; /* 112px */" },
    { value: "space-y-28 > * + *", label: "margin-top: 7rem; /* 112px */" },
    { value: "space-x-32 > * + *", label: "margin-left: 8rem; /* 128px */" },
    { value: "space-y-32 > * + *", label: "margin-top: 8rem; /* 128px */" },
    { value: "space-x-36 > * + *", label: "margin-left: 9rem; /* 144px */" },
    { value: "space-y-36 > * + *", label: "margin-top: 9rem; /* 144px */" },
    { value: "space-x-40 > * + *", label: "margin-left: 10rem; /* 160px */" },
    { value: "space-y-40 > * + *", label: "margin-top: 10rem; /* 160px */" },
    { value: "space-x-44 > * + *", label: "margin-left: 11rem; /* 176px */" },
    { value: "space-y-44 > * + *", label: "margin-top: 11rem; /* 176px */" },
    { value: "space-x-48 > * + *", label: "margin-left: 12rem; /* 192px */" },
    { value: "space-y-48 > * + *", label: "margin-top: 12rem; /* 192px */" },
    { value: "space-x-52 > * + *", label: "margin-left: 13rem; /* 208px */" },
    { value: "space-y-52 > * + *", label: "margin-top: 13rem; /* 208px */" },
    { value: "space-x-56 > * + *", label: "margin-left: 14rem; /* 224px */" },
    { value: "space-y-56 > * + *", label: "margin-top: 14rem; /* 224px */" },
    { value: "space-x-60 > * + *", label: "margin-left: 15rem; /* 240px */" },
    { value: "space-y-60 > * + *", label: "margin-top: 15rem; /* 240px */" },
    { value: "space-x-64 > * + *", label: "margin-left: 16rem; /* 256px */" },
    { value: "space-y-64 > * + *", label: "margin-top: 16rem; /* 256px */" },
    { value: "space-x-72 > * + *", label: "margin-left: 18rem; /* 288px */" },
    { value: "space-y-72 > * + *", label: "margin-top: 18rem; /* 288px */" },
    { value: "space-x-80 > * + *", label: "margin-left: 20rem; /* 320px */" },
    { value: "space-y-80 > * + *", label: "margin-top: 20rem; /* 320px */" },
    { value: "space-x-96 > * + *", label: "margin-left: 24rem; /* 384px */" },
    { value: "space-y-96 > * + *", label: "margin-top: 24rem; /* 384px */" },
    { value: "space-x-px > * + *", label: "margin-left: 1px;" },
    { value: "space-y-px > * + *", label: "margin-top: 1px;" },
    { value: "space-y-reverse > * + *", label: "--tw-space-y-reverse: 1;" },
    { value: "space-x-reverse > * + *", label: "--tw-space-x-reverse: 1;" }
  ]
};

export default [Padding, Margin, SpaceBetween];
