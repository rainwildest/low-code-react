import { tagsName } from "./ItemTypes";

const tags = {
  [tagsName.DIV]: (props: AnyProps) => <div {...props} />,
  [tagsName.NAV]: (props: AnyProps) => <nav {...props} />,
  [tagsName.MAIN]: (props: AnyProps) => <main {...props} />,
  [tagsName.HEADER]: (props: AnyProps) => <header {...props} />,
  [tagsName.FOOTER]: (props: AnyProps) => <footer {...props} />,
  [tagsName.SECTION]: (props: AnyProps) => <section {...props} />,

  [tagsName.A]: (props: AnyProps) => <a {...props} />,
  [tagsName.SPAN]: (props: AnyProps) => <span {...props} />,
  [tagsName.AUDIO]: (props: AnyProps) => <audio {...props} />,
  [tagsName.VIDEO]: (props: AnyProps) => <video {...props} />,
  [tagsName.UL]: ({ children, ...props }: { children: AnyProps[] }) => (
    <ul {...props}>
      {children.map(option =>
        option.value && option.label ? (
          <li value={option.value} key={option.value}>
            {option.label}
          </li>
        ) : null
      )}
    </ul>
  ),

  select: ({ children, ...props }: { children: AnyProps[] }) => (
    <select {...props}>
      {children.map(option =>
        option.value && option.label ? (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ) : null
      )}
    </select>
  )
};

export default tags;
