import { FC, ForwardedRef, LegacyRef, useState } from "react";
import { memo, forwardRef, Fragment } from "react";
import { Input, Select } from "antd";

type WidthAttributeProps = {
  ref?: LegacyRef<HTMLElement>;
  className?: string;

  callback?: (value: AnyProps) => void;
};

const WidthAttribute: FC<WidthAttributeProps> = forwardRef(
  ({ className, callback }, nodeRef: ForwardedRef<HTMLDivElement>) => {
    const [test, setTest] = useState("");
    const layouts = [
      { name: "Display ClassName：", custom: false },
      { name: "Floats ClassName：", custom: false },
      { name: "Clear ClassName：", custom: false },
      { name: "Object Fit ClassName：", custom: false },
      { name: "Overflow ClassName：", custom: false },
      { name: "Overscroll Behavior ClassName：", custom: false },
      { name: "Position ClassName：", custom: false },
      { name: "Top / Right / Bottom / Left ClassName：", custom: false }
    ];

    return (
      <Fragment>
        {layouts.map((layout, index) => {
          return (
            <section className={index ? "pt-5" : ""}>
              <div className={index && layout.custom ? "pb-5" : ""}>
                <span className="inline-block pb-1.5 text-sm text-gray-1200 dark:text-purple-1200 truncate">
                  {layout.name}
                </span>
                <Select
                  showSearch
                  allowClear
                  className="block"
                  placeholder="Select a person"
                  optionFilterProp="children"
                  // onChange={onChange}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "jack",
                      label: "Jack"
                    },
                    {
                      value: "lucy",
                      label: "Lucy"
                    },
                    {
                      value: "tom",
                      label: "Tom"
                    }
                  ]}
                />
              </div>
              {layout.custom && (
                <div className="">
                  <span className="inline-block pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">
                    自定义 width：
                  </span>
                  <Input
                    allowClear
                    placeholder="0px"
                    value={test}
                    onChange={val => {
                      setTest(val.target.value);
                      console.log(val.target.value);
                      callback && callback({});
                    }}
                  />
                </div>
              )}
            </section>
          );
        })}
      </Fragment>
    );
  }
);

export default memo(WidthAttribute);
