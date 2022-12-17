import { FC, ForwardedRef, LegacyRef, useState } from "react";
import { memo, forwardRef, Fragment } from "react";
import { Input, Select, Collapse } from "antd";

type HeightAttributeProps = {
  ref?: LegacyRef<HTMLElement>;
  className?: string;
};
const { Panel } = Collapse;

const HeightAttribute: FC<HeightAttributeProps> = forwardRef(
  ({ className }, nodeRef: ForwardedRef<HTMLDivElement>) => {
    const [test, setTest] = useState("");

    return (
      <Fragment>
        <div className="pb-5">
          <span className="inline-block pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">
            height className：
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
            自定义 height：
          </span>
          <Input
            placeholder="0px"
            value={test}
            onChange={val => {
              setTest(val.target.value);
              console.log(val.target.value);
            }}
          />
        </div>
      </Fragment>
    );
  }
);

export default memo(HeightAttribute);
