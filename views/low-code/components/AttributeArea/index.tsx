import { FC, ForwardedRef, LegacyRef, useState } from "react";
import { memo, forwardRef } from "react";
import { tagsName } from "../ItemTypes";
import { Icon } from "components";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { WidthAttribute, HeightAttribute, LayoutAttribute } from "./components";

type AttributeProps = {
  ref?: LegacyRef<HTMLElement>;
  className?: string;
};

const { Panel } = Collapse;

const AttributeArea: FC<AttributeProps> = forwardRef(
  ({ className }, nodeRef: ForwardedRef<HTMLDivElement>) => {
    const [test, setTest] = useState("");

    const attributeComponents = [
      { name: "Layout 属性", key: "layout", component: LayoutAttribute },
      { name: "Width 属性", key: "width", component: WidthAttribute },
      { name: "Height 属性", key: "height", component: HeightAttribute }
    ];

    return (
      <section
        className={`absolute right-0 top-0 h-full w-72 p-2.5 flex flex-col ${className} ${test}`}
        ref={nodeRef}
      >
        <div className="flex items-center justify-center pb-5">
          <Icon name="tailwindcss" className="h-10 w-10 text-sky-400" />
          <span className="pl-2.5 text-2xl font-semibold text-gray-1200 dark:text-purple-1200">
            tailwindcss
          </span>
          <span className="pt-1 pl-1 text-xs font-semibold text-gray-1200 dark:text-purple-1200">
            样式配置
          </span>
        </div>

        <div className="flex-1 overflow-auto rounded-lg">
          <Collapse
            accordion
            bordered={false}
            defaultActiveKey={[attributeComponents[0].key]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined
                className="text-gray-1200 dark:text-purple-1200"
                rotate={isActive ? 90 : 0}
              />
            )}
            className="site-collapse-custom-collapse"
          >
            {attributeComponents.map(item => {
              const Attribute = item.component;

              return (
                Attribute && (
                  <Panel
                    key={item.key}
                    header={item.name}
                    className="site-collapse-custom-panel"
                  >
                    <Attribute
                      callback={val => {
                        console.log(val);
                      }}
                    />
                  </Panel>
                )
              );
            })}
          </Collapse>
        </div>
      </section>
    );
  }
);

export default memo(AttributeArea);
