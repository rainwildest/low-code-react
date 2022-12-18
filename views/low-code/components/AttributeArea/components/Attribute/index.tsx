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
  callback?: (value: AnyProps) => void;
};

const Attribute: FC<WidthAttributeProps> = forwardRef(
  (
    {
      type,
      title,
      options,
      hasCustom = false,
      inputPlaceholder = "",
      selectPlaceholder = "",
      callback
    },
    nodeRef: ForwardedRef<HTMLDivElement>
  ) => {
    const [test, setTest] = useState("");
    const onSelectedChange = (val: string) => {
      setTest(test);
    };
    return (
      <Fragment>
        <div className={hasCustom ? "pb-5" : ""}>
          <span className="inline-block pointer-events-none max-w-full truncate pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">
            {title}
          </span>
          <Select
            showSearch
            allowClear
            className="block"
            optionLabelProp="value"
            placeholder={selectPlaceholder}
            onChange={onSelectedChange}
          >
            {options.map(option => (
              <Option value={option.value} label={option.label}>
                <div className="">
                  {option.value && (
                    <span className="pr-2.5">{option.label}</span>
                  )}

                  {!option.value && "请选择"}
                </div>
              </Option>
            ))}
          </Select>
        </div>
        {hasCustom && (
          <div className="">
            <span className="inline-block pointer-events-none pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">
              自定义 {_.capitalize(type)}：
            </span>
            <Input
              allowClear
              placeholder={inputPlaceholder}
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
