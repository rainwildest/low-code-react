import { BackgroundAttachmentType } from "config/tailwind-type";

const attachments = ["fixed", "local", "scroll"];
export const BackgroundAttachment = {
  type: BackgroundAttachmentType.toString(),
  header: "Background Attachment 属性",
  title: "Background Attachment ClassName：",
  inputPlaceholder: "background-attachment: xxxx",
  selectPlaceholder: "background-attachment: xxxx",
  hasCustom: false,
  options: [...attachments.map(item => ({ value: `bg-${item}`, label: `background-attachment: ${item};` }))]
  // options: [
  //   { value: "hyphens-none", label: "hyphens: none;" },
  //   { value: "hyphens-manual", label: "hyphens: manual;" },
  //   { value: "hyphens-auto", label: "hyphens: auto;" }
  // ]
};

export default [BackgroundAttachment];
