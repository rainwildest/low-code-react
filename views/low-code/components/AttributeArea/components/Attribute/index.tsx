import { FC, ForwardedRef, LegacyRef, useState } from "react";
import { memo, forwardRef, Fragment } from "react";
import { Input, Select } from "antd";

type WidthAttributeProps = {
  ref?: LegacyRef<HTMLElement>;

  title?: string;
  type?: string;
  hasCustom?: boolean;
  placeholder?: string;
  callback?: (value: AnyProps) => void;
};

const Attribute: FC<WidthAttributeProps> = forwardRef(
  (
    { type, title, hasCustom = false, placeholder = "", callback },
    nodeRef: ForwardedRef<HTMLDivElement>
  ) => {
    const [test, setTest] = useState("");

    return (
      <Fragment>
        <div className={hasCustom ? "pb-5" : ""}>
          <span className="inline-block max-w-full truncate pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">
            {title}
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
        {hasCustom && (
          <div className="">
            <span className="inline-block pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">
              自定义 {type}：
            </span>
            <Input
              allowClear
              placeholder={placeholder}
              value={test}
              onChange={val => {
                setTest(val.target.value);
                console.log(val.target.value);
                callback && callback({});
              }}
            />
          </div>
        )}
      </Fragment>
    );
  }
);

export default memo(Attribute);
