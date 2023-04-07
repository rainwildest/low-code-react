import { FC, ForwardedRef, LegacyRef, useState, Fragment } from "react";
import { memo, forwardRef } from "react";
import { tagsName } from "config/elementTypes";
import { Icon } from "components";
import { Collapse, Button } from "antd";
import { CaretRightOutlined, PlusCircleOutlined } from "@ant-design/icons";

import { attributeItems, Attribute } from "./components";

type AttributeProps = {
  ref?: LegacyRef<HTMLElement>;
  className?: string;
  attrs?: AnyProps;
  callback?: (value: AnyProps) => void;
};

const { Panel } = Collapse;

const AttributeArea: FC<AttributeProps> = forwardRef(
  ({ className, attrs, callback }, nodeRef: ForwardedRef<HTMLDivElement>) => {
    const attributes = attributeItems;
    // console.log(attrs);

    return (
      <section
        className={`absolute right-0 top-0 flex h-full w-80 flex-col overflow-auto  p-2.5 ${className}`}
        ref={nodeRef}
      >
        {attrs?.id && (
          <Fragment>
            <div className="rounded-lg bg-gray-1100 px-2 pb-2 dark:bg-purple-1100">
              <div className="flex items-center py-3">
                <Icon name="tailwindcss" className="h-6 w-6 text-sky-400" />
                <span className="pl-2.5 text-lg font-semibold text-gray-1200 dark:text-purple-1200">
                  tailwindcss 样式
                </span>
              </div>

              <div className="flex-1">
                <Collapse
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
                      className="site-collapse-custom-panel truncate"
                    >
                      <Attribute
                        title={attr.title}
                        type={attr.type}
                        options={attr.options || []}
                        hasCustom={attr?.hasCustom}
                        attrs={attrs}
                        inputPlaceholder={attr?.inputPlaceholder}
                        selectPlaceholder={attr?.selectPlaceholder}
                        callback={callback}
                      />
                    </Panel>
                  ))}
                </Collapse>
              </div>
            </div>

            <div className="mt-2 rounded-lg bg-gray-1100 px-2 pb-2 dark:bg-purple-1100">
              <div className="flex items-center py-3">
                <Icon name="option" className="h-6 w-6 text-sky-400" />
                <div className="flex flex-1 items-center justify-between">
                  <span className="pl-2.5 text-lg font-semibold text-gray-1200 dark:text-purple-1200">
                    添加自定义属性
                  </span>
                  <Button
                    type="link"
                    icon={<PlusCircleOutlined />}
                    className="p-0 text-lg"
                    title="添加属性"
                  />
                </div>
              </div>

              <div className="min-h-[80px]">
                <div className="flex flex-col items-center py-4">
                  <Icon name="empty" className="h-20 w-20 text-sky-400" />
                  <span className="block pt-2 text-sm text-gray-1200/50 dark:text-purple-1200">
                    暂无自定义属性
                  </span>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </section>
    );
  }
);

export default memo(AttributeArea);
