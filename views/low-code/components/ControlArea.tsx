import type { FC } from "react";
import { memo } from "react";
import Control from "./Control";
import { tagsName } from "./ItemTypes";

type ControlProps = {
  className?: string;
};

const ControlArea: FC<ControlProps> = ({ className }) => {
  const tags = [
    {
      title: "布局",
      children: [
        { name: "容器", type: tagsName.DIV, description: "" },
        { name: "导航", type: tagsName.NAV, description: "" },
        { name: "主体", type: tagsName.MAIN, description: "" },
        { name: "页头", type: tagsName.HEADER, description: "" },
        { name: "页尾", type: tagsName.FOOTER, description: "" },
        { name: "区段", type: tagsName.SECTION, description: "" }
      ]
    },
    {
      title: "基础",
      children: [
        {
          name: "文本",
          type: tagsName.SPAN,
          description: "文本标签",
          attribute: {
            content: "文本内容"
          }
        },
        {
          name: "图片",
          type: tagsName.IMG,
          description: "",
          attribute: { src: "/assets/react.svg" }
        },
        {
          name: "链接",
          type: tagsName.A,
          description: "",
          attribute: { content: "链接内容1" }
        },
        {
          name: "列表",
          type: tagsName.UL,
          description: "列表标签",
          children: [{ id: "999", name: "ssdfsdfs" }]
        },
        { name: "音频", type: tagsName.AUDIO, description: "" },
        {
          name: "视频",
          type: tagsName.VIDEO,
          description: ""
        }
      ]
    }
  ];

  return (
    <div
      className={`w-64 h-full overflow-auto absolute left-0 top-0 z-20 ${className}`}
    >
      {tags.map((item, index) => (
        <section
          className={`bg-gray-1100 dark:bg-purple-1100 px-4 rounded-lg py-4 ${
            index ? "mt-8" : ""
          }`}
          key={item.title}
        >
          <div className="pb-3 text-gray-1200 dark:text-purple-1200 text-base font-semibold">
            {item.title}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {item.children?.map(element => (
              <Control {...element} key={element.type} />
            ))}
          </div>
        </section>
      ))}

      {tags.map((item, index) => (
        <section
          className={`bg-gray-1100 dark:bg-purple-1100 px-4 rounded-lg py-4 ${
            index ? "mt-8" : ""
          }`}
          key={item.title}
        >
          <div className="pb-3 text-gray-1200 dark:text-purple-1200 text-base font-semibold">
            {item.title}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {item.children?.map(element => (
              <Control {...element} key={element.type} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default memo(ControlArea);
