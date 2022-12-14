import type { FC, ForwardedRef, LegacyRef } from "react";
import { memo, forwardRef } from "react";
import Control from "./Control";
import { tagsName } from "./ItemTypes";

type ControlProps = {
  ref?: LegacyRef<HTMLElement>;
  className?: string;
};

const ControlArea: FC<ControlProps> = forwardRef(
  ({ className }, nodeRef: ForwardedRef<HTMLDivElement>) => {
    const tags = [
      {
        title: "布局",
        children: [
          {
            name: "容器",
            type: tagsName.DIV,
            description: "",
            attribute: {
              className: "px-2.5 py-2.5 min-h-[50px]"
            }
          },
          {
            name: "导航",
            type: tagsName.NAV,
            description: "",
            attribute: {
              className: "px-2.5 py-2.5 min-h-[50px]"
            }
          },
          {
            name: "主体",
            type: tagsName.MAIN,
            description: "",
            attribute: {
              className: "px-2.5 py-2.5 min-h-[50px]"
            }
          },
          {
            name: "页头",
            type: tagsName.HEADER,
            description: "",
            attribute: {
              className: "px-2.5 py-2.5 min-h-[50px]"
            }
          },
          {
            name: "页尾",
            type: tagsName.FOOTER,
            description: "",
            attribute: {
              className: "px-2.5 py-2.5 min-h-[50px]"
            }
          },
          {
            name: "区段",
            type: tagsName.SECTION,
            description: "",
            attribute: {
              className: "px-2.5 py-2.5 min-h-[50px]"
            }
          }
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
              content: "文本内容",
              className: "inline-block px-2.5 py-2.5"
            }
          },
          {
            name: "图片",
            type: tagsName.IMG,
            description: "",
            attribute: {
              src: "/assets/react.svg",
              className: "inline-block"
            }
          },
          {
            name: "链接",
            type: tagsName.A,
            description: "",
            attribute: {
              content: "链接内容1",
              className: "inline-block px-2.5 py-2.5"
            }
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
        ref={nodeRef}
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
      </div>
    );
  }
);

export default memo(ControlArea);
