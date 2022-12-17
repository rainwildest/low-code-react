import { FC, ForwardedRef, LegacyRef, useState } from "react";
import { memo, forwardRef } from "react";
import { tagsName } from "../ItemTypes";
import { Icon } from "components";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { WidthAttribute, HeightAttribute } from "./components";

type AttributeProps = {
  ref?: LegacyRef<HTMLElement>;
  className?: string;
};

const { Panel } = Collapse;

const AttributeArea: FC<AttributeProps> = forwardRef(
  ({ className }, nodeRef: ForwardedRef<HTMLDivElement>) => {
    const [test, setTest] = useState("");

    return (
      <section
        className={`absolute right-0 top-0 h-full w-72 p-2.5 ${className} ${test}`}
        ref={nodeRef}
      >
        <div className="flex items-center justify-center pb-6">
          <Icon name="tailwindcss" className="h-10 w-10 text-sky-400" />
          <span className="pl-2.5 text-2xl font-semibold text-gray-1200 dark:text-purple-1200">
            tailwindcss
          </span>
          <span className="pt-1 pl-1 text-xs font-semibold text-gray-1200 dark:text-purple-1200">
            样式配置
          </span>
        </div>

        <Collapse
          accordion
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined
              className="text-gray-1200 dark:text-purple-1200"
              rotate={isActive ? 90 : 0}
            />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header="width 属性"
            key="1"
            className="site-collapse-custom-panel"
          >
            <WidthAttribute />
          </Panel>

          <Panel
            header="height 属性"
            key="2"
            className="site-collapse-custom-panel"
          >
            <HeightAttribute />
          </Panel>
        </Collapse>
      </section>
    );
  }
);

export default memo(AttributeArea);
