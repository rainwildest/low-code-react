import type { CSSProperties, FC } from "react";

export const UUID =
  (prefix = 0, i = 0) =>
  (): string => {
    const $prefix = `${prefix}`.padEnd(8, "0");
    const suffix = `${++i}`.padStart(12, "0");

    return `${$prefix}-0000-0000-0000-${suffix}`;
  };

/**
 * 插入一段 style 样式
 * @param {string} innerText 样式
 * @param {string} attribute 传入 id (#id) 或 class (.class) 属性
 * @returns void
 */
export const createStyleElement = (innerText: string, attribute?: string) => {
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");

  style.innerText = innerText;
  // style.appendChild(
  //   document.createTextNode(".test-name{background-color: red;}")
  // );

  const head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
};
