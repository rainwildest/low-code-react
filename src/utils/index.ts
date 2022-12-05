export const UUID =
  (prefix = 0, i = 0) =>
  (): string => {
    const $prefix = `${prefix}`.padEnd(8, "0");
    const suffix = `${++i}`.padStart(12, "0");

    return `${$prefix}-0000-0000-0000-${suffix}`;
  };
