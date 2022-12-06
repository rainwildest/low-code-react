import type { FC } from "react";
import { memo } from "react";
import Control from "./Control";
import { tagsName } from "./ItemTypes";

export interface BoxProps {
  name: string;
  type: string;
}

const ControlArea: FC = () => {
  const tags = [
    {
      title: "布局",
      children: [
        { name: "容器", type: tagsName.DIV, description: "" },
        { name: "导航", type: "NAV", description: "" },
        { name: "主体", type: tagsName.MAIN, description: "" },
        { name: "页头", type: "HEADER", description: "" },
        { name: "页尾", type: "FOOTER", description: "" },
        { name: "区段", type: "SECTION", description: "" }
      ]
    },
    {
      title: "基础",
      children: [
        { name: "文本", type: "SPAN", description: "文本标签" },
        { name: "图片", type: "IMG", description: "" },
        { name: "链接", type: tagsName.A, description: "" },
        { name: "列表", type: "UL", description: "列表标签" },
        { name: "音频", type: "AUDIO", description: "" },
        { name: "视频", type: "VIDEO", description: "" }
      ]
    }
  ];

  return (
    <div>
      {tags.map(item => (
        <section key={item.title}>
          <div>{item.title}</div>
          <div className="grid grid-cols-2">
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
