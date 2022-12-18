import { FC, ForwardedRef, LegacyRef, useState } from "react";
import { memo, forwardRef } from "react";
import { tagsName } from "../ItemTypes";
import { Icon } from "components";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { Attribute } from "./components";

type AttributeProps = {
  ref?: LegacyRef<HTMLElement>;
  className?: string;
};

const { Panel } = Collapse;

const AttributeArea: FC<AttributeProps> = forwardRef(
  ({ className }, nodeRef: ForwardedRef<HTMLDivElement>) => {
    const attributes = [
      {
        header: "Width 属性",
        title: "Width ClassName：",
        type: "width",
        hasCustom: true,
        placeholder: "0px"
      },
      {
        header: "Height 属性",
        title: "Height ClassName：",
        type: "height",
        hasCustom: true,
        placeholder: "0px"
      }
    ];

    return (
      <section
        className={`absolute right-0 top-0 flex h-full w-72 flex-col p-2.5 ${className}`}
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
            defaultActiveKey={[attributes[0].type]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined
                className="text-gray-1200 dark:text-purple-1200"
                rotate={isActive ? 90 : 0}
              />
            )}
            className="site-collapse-custom-collapse"
          >
            {attributes.map(attr => (
              <Panel
                key={attr.type}
                header={attr.header}
                className="site-collapse-custom-panel"
              >
                <Attribute
                  title={attr.title}
                  type={attr.type}
                  hasCustom={attr?.hasCustom}
                  placeholder={attr?.placeholder}
                />
              </Panel>
            ))}
          </Collapse>
        </div>
      </section>
    );
  }
);

export default memo(AttributeArea);
