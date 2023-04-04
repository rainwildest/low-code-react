import { tagsName } from "config/elementTypes";
import { typeOf, mergeClassName } from "lib/utils";

const tags = {
  [tagsName.DIV]: (props: AnyProps) => <div {...props} />,
  [tagsName.NAV]: (props: AnyProps) => <nav {...props} />,
  [tagsName.MAIN]: (props: AnyProps) => <main {...props} />,
  [tagsName.HEADER]: (props: AnyProps) => <header {...props} />,
  [tagsName.FOOTER]: (props: AnyProps) => <footer {...props} />,
  [tagsName.SECTION]: (props: AnyProps) => <section {...props} />,

  [tagsName.A]: ({ content = "链接内容", ...props }) => (
    <a {...props}>{content}</a>
  ),
  [tagsName.SPAN]: ({ content = "文本内容", ...props }) => (
    <span {...props}>{content}</span>
  ),
  [tagsName.AUDIO]: (props: AnyProps) => <audio {...props} />,
  [tagsName.VIDEO]: (props: AnyProps) => <video {...props} />,
  [tagsName.IMG]: (props: any) => <img {...props} alt=""></img>,

  [tagsName.UL]: ({ children, ...props }) => {
    return (
      <ul {...props}>
        {/* {children.map(option =>
        option?.name ? <li key={option.name}>{option.name}</li> : null
      )} */}
      </ul>
    );
  },

  select: ({ children, ...props }: { children: AnyProps[] }) => (
    <select {...props}>
      {children.map(option =>
        option?.value && option?.label ? (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ) : null
      )}
    </select>
  )
};

export default tags;
