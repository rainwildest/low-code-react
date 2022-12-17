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

    return (
      <Fragment>
        <div className="pb-5">
          <span className="inline-block pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">
            Width ClassName：
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
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
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
        <div className="">
          <span className="inline-block pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">
            自定义 Width：
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
      </Fragment>
    );
  }
);

export default memo(WidthAttribute);
