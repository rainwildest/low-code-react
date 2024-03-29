import type { CSSProperties, FC } from "react";
import storage from "./storage";
import { EventEmitter } from "events";
import _ from "lodash";

export const UUID =
  (prefix = 0, i = 0) =>
  (): string => {
    const $prefix = `${prefix}`.padEnd(8, "0");
    const suffix = `${++i}`.padStart(12, "0");

    return `${$prefix}-0000-0000-0000-${suffix}`;
  };

/**
 * @brief 数据类型判断
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
 * @brief 合并 className
 * @param {string} defaultClassName
 * @param {string} className
 * @returns string
 */
export const mergeClassName = (className: string, defaultClassName = ""): string => {
  const classNameSplit = className.split(" ");
  const defaultClassNameSplit = defaultClassName.split(" ");

  /* 去重 */
  const classNameArray = new Set([...defaultClassNameSplit, ...classNameSplit]);

  return [...classNameArray].join(" ").replace(/^\s+|\s+$/g, "");
};

/**
 * @brief 插入一段 style 样式
 * @param {string} innerText 样式
 * @param {string} attribute 传入 id (#id) 或 class (.class) 属性
 * @returns void
 */
export const createStyleElement = (innerText: string, attribute?: AnyProps) => {
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");

  _.keys(attribute).forEach(key => {
    style.setAttribute(key, attribute[key]);
  });

  style.innerText = innerText;
  // style.appendChild(
  //   document.createTextNode(".test-name{background-color: red;}")
  // );

  const head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
};

export const isNull = (value: any) => {
  return value === "" || value === undefined || value === null;
};

export const setTheme = () => {
  if (storage.get("theme") === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
};

export const emitter = new EventEmitter();

export const hasClass = (selector: string, target: string) => {
  const node = document.querySelector(selector);
  const classNames = node.getAttribute("class").split(" ");

  return classNames.includes(target);
};
