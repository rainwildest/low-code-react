import { FC, ForwardedRef, LegacyRef, useState } from "react";
import { memo, forwardRef, Fragment } from "react";
import { Input, Select } from "antd";
import _ from "lodash";

const { Option, OptGroup } = Select;
type WidthAttributeProps = {
  ref?: LegacyRef<HTMLElement>;

  title?: string;
  type?: string;
  options: Array<AnyProps>;
  hasCustom?: boolean;
  selectPlaceholder?: string;
  inputPlaceholder?: string;
  attrs: AnyProps;
  callback?: (value: AnyProps) => void;
};

const Attribute: FC<WidthAttributeProps> = forwardRef(
  ({ type, title, attrs, options, hasCustom = false, inputPlaceholder = "", selectPlaceholder = "", callback }, nodeRef: ForwardedRef<HTMLDivElement>) => {
    // const [test, setTest] = useState("");
    const onSelectedChange = (val: string) => {
      if (!attrs?.attribute) return;

      const { className } = attrs.attribute;
      if (!className || className.split(" ")?.includes(val)) return;

      let tailwindcss = attrs?.tailwindcss || {};
      tailwindcss = { ...tailwindcss, [type]: val };

      !val && (tailwindcss = _.omit({ ...tailwindcss }, [type]));

      let $className = "";
      _.keys(tailwindcss).map(key => {
        tailwindcss[key] && ($className += `${tailwindcss[key]} `);
      });

      callback &&
        callback({
          ...attrs,
          tailwindcss,
          attribute: { className: $className.trim() }
        });
    };
    console.log("attr", attrs?.tailwindcss?.[type]);
    // console.log(type);
    const onFormatType = (title: string) => {
      const index = title.indexOf("(");

      return ~index ? title.substring(index + 1, title.length - 1) : title;
    };

    // const te: AnyProps = {};

    return (
      <div ref={nodeRef}>
        <div className={hasCustom ? "pb-5" : ""}>
          <span className="pointer-events-none inline-block max-w-full truncate pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">{title}</span>
          <Select
            showSearch
            allowClear
            value={attrs?.tailwindcss?.[type]}
            className="block"
            // optionLabelProp="value"
            // optionFilterProp="label"
            placeholder={selectPlaceholder}
            onChange={onSelectedChange}
            // options={options}
          >
            {options.map(option => {
              if (option?.options) {
                return (
                  <OptGroup label={option.label} key={option.label}>
                    {option.options.map(option => (
                      <Option value={option.value} key={option.value} title={option.label}>
                        <span className="tracking-wider">{option.value}</span>
                      </Option>
                    ))}
                  </OptGroup>
                );
              }

              return (
                <Option value={option.value} key={option.value} title={option.label}>
                  <span className="tracking-wider">{option.value}</span>
                </Option>
              );
            })}
          </Select>
        </div>

        {hasCustom && (
          <div className="">
            <span className="pointer-events-none block pb-1.5 text-sm text-gray-1200 dark:text-purple-1200">自定义 {onFormatType(type)}：</span>
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
