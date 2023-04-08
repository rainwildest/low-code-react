import { PaddingType, MarginType, SpaceBetweenType } from "config/tailwind-type";
import _ from "lodash";
import { sizePixel } from "./config";

export const Padding: AttributeProps = {
  type: PaddingType.toString(),
  header: "Padding 属性",
  title: "Padding ClassName：",
  inputPlaceholder: "padding: xxxx",
  selectPlaceholder: "padding: xxxx",
  hasCustom: true,
  hasMultiple: true,
  options: [
    ...sizePixel.map(item => ({
      label: item.pixel.replace(";", " "),
      options: [
        { value: `p-${item.name}`, label: `padding: ${item.pixel}` },
        { value: `px-${item.name}`, label: `padding-left: ${item.pixel} \npadding-right: ${item.pixel}` },
        { value: `py-${item.name}`, label: `padding-top: ${item.pixel} \npadding-bottom: ${item.pixel}` },
        { value: `pt-${item.name}`, label: `padding-top: ${item.pixel}` },
        { value: `pr-${item.name}`, label: `padding-right: ${item.pixel}` },
        { value: `pb-${item.name}`, label: `padding-bottom: ${item.pixel}` },
        { value: `pl-${item.name}`, label: `padding-left: ${item.pixel}` }
      ]
    }))
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
    ...[...sizePixel, { name: "auto", pixel: "auto;" }].map(item => ({
      label: item.pixel.replace(";", " "),
      options: [
        { value: `m-${item.name}`, label: `margin: ${item.pixel}` },
        { value: `mx-${item.name}`, label: `margin-left: ${item.pixel} \nmargin-right: ${item.pixel}` },
        { value: `my-${item.name}`, label: `margin-top: ${item.pixel} \nmargin-bottom: ${item.pixel}` },
        { value: `mt-${item.name}`, label: `margin-top: ${item.pixel}` },
        { value: `mr-${item.name}`, label: `margin-right: ${item.pixel}` },
        { value: `mb-${item.name}`, label: `margin-bottom: ${item.pixel}` },
        { value: `ml-${item.name}`, label: `margin-left: ${item.pixel}` }
      ]
    }))
  ]
};

const between = sizePixel.map(item => [
  { value: `space-x-${item.name} > * + *`, label: `margin-left: ${item.pixel}` },
  { value: `space-y-${item.name} > * + *`, label: `margin-top: ${item.pixel}` }
]);

export const SpaceBetween: AttributeProps = {
  type: SpaceBetweenType.toString(),
  header: "Space Between",
  title: "Space Between ClassName：",
  inputPlaceholder: "space-between: xxxx",
  selectPlaceholder: "space-between: xxxx",
  hasCustom: false,
  options: [
    ..._.flattenDeep(between),

    { value: "space-y-reverse > * + *", label: "--tw-space-y-reverse: 1;" },
    { value: "space-x-reverse > * + *", label: "--tw-space-x-reverse: 1;" }
  ]
};

export default [Padding, Margin, SpaceBetween];
