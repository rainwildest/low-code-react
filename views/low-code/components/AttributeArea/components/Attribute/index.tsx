import { FC, ForwardedRef, LegacyRef, useState } from "react";
import { memo, forwardRef, Fragment } from "react";
import { Input, Select } from "antd";
import _ from "lodash";

const { Option } = Select;
type WidthAttributeProps = {
  ref?: LegacyRef<HTMLElement>;

  title?: string;
  type?: string;
  options: Array<AnyProps>;
  hasCustom?: boolean;
  selectPlaceholder?: string;
  inputPlaceholder?: string;
  value: AnyProps;
  callback?: (value: AnyProps) => void;
};

const Attribute: FC<WidthAttributeProps> = forwardRef(
  (
    {
      type,
      title,
      value,
      options,
      hasCustom = false,
      inputPlaceholder = "",
      selectPlaceholder = "",
      callback
    },
    nodeRef: ForwardedRef<HTMLDivElement>
  ) => {
    // const [test, setTest] = useState("");
    const onSelectedChange = (val: string) => {
      // setTest(val);
      if (!value?.attribute) return;

      const { className } = value.attribute;
      if (!className || className.split(" ")?.includes(val)) return;
      console.log(val, className?.split(" ")?.includes(val));

      console.log(value);
      callback &&
        callback({
          ...value,
          attribute: { className: `${className || ""} ${val}`.trim() }
        });
    };

    console.log(type);

    return (
      <div ref={nodeRef}>
        <div className={hasCustom ? "pb-5" : ""}>
          <span className="pointer-events-none inline-block max-w-full truncate pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">
            {title}
          </span>
          <Select
            showSearch
            allowClear
            className="block"
            optionLabelProp="value"
            optionFilterProp="label"
            placeholder={selectPlaceholder}
            onChange={onSelectedChange}
            options={options}
          >
            {/* {options.map(option => (
              <Option
                value={option.value}
                label={option.label}
                key={option.label}
              >
                <div className="">
                  {!!option.value && (
                    <span className="inline-block max-w-full truncate pr-2.5">
                      {option.label}
                    </span>
                  )}

                  {!option.value && "请选择"}
                </div>
              </Option>
            ))} */}
          </Select>
        </div>
        {hasCustom && (
          <div className="">
            <span className="pointer-events-none block pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">
              自定义 {type}：
            </span>
            <Input
              allowClear
              placeholder={inputPlaceholder}
              // value={test}
              onChange={val => {
                // setTest(val.target.value);
                console.log(val.target.value);
                callback && callback({});
              }}
            />
          </div>
        )}
      </div>
    );
  }
);

export default memo(Attribute);
