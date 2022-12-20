type AnyProps = { [key: string]: any };

type ContextMenuProps = {
  event?: MouseEvent;
  data: AnyProps;
};

type AttributeOptionsProps = {
  value?: undefined | null | string;
  label?: undefined | null | string;
  options?: Array<AttributeOptionsProps>;
};

type AttributeProps = {
  type: string;
  header: string;
  title: string;
  inputPlaceholder?: string;
  selectPlaceholder?: string;
  hasCustom: boolean;
  options: Array<AttributeOptionsProps>;
};
