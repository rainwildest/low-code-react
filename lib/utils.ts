import type { CSSProperties, FC } from "react";

export const UUID =
  (prefix = 0, i = 0) =>
  (): string => {
    const $prefix = `${prefix}`.padEnd(8, "0");
    const suffix = `${++i}`.padStart(12, "0");

    return `${$prefix}-0000-0000-0000-${suffix}`;
  };

/**
 * @description 数据类型判断
 * @param {unknown} value
 * @returns string
 */
export const typeOf = (value: unknown): string => {
  /* 使用原型链来实现这一方法 */
  let res = Object.prototype.toString.call(value);

  /* 字符串分割 */
  res = res.split(" ")[1];

  /* 字符串切割 */
  res = res.substring(0, res.length - 1);

  return res.toLowerCase();
};

/**
 * 合并 className
 * @param {string} defaultClassName
 * @param {string} className
 * @returns string
 */
export const mergeClassName = (
  className: string,
  defaultClassName = ""
): string => {
  const classNameSplit = className.split(" ");
  const defaultClassNameSplit = defaultClassName.split(" ");

  /* 去重 */
  const classNameArray = new Set([...defaultClassNameSplit, ...classNameSplit]);

  return [...classNameArray].join(" ").replace(/^\s+|\s+$/g, "");
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
