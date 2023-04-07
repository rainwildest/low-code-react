import fs from "fs";
import path from "path";
import data from "./data/format-data";

type AnyProps = { [key: string]: any };

const format: AnyProps[] = [];

const file = path.resolve(__dirname, "./json/format.json");

try {
  fs.accessSync(file);
  console.log("file does exist, clearing...\n");

  // 文件存在则删除改文件
  fs.rmSync(file);

  console.log("clear complete.\n");
} catch (err) {
  console.error("File does not exist.\n");

  const dir = path.resolve(__dirname, "./json");

  try {
    fs.accessSync(dir);
  } catch (err) {
    fs.mkdirSync(dir);
  }
}

const handle = (value: string, label: string) => {
  const first = label.substring(0, 2);
  const second = label.substring(2);

  return { value: value, label: `${first}${value}${second}` };
};

data.forEach((val: AnyProps) => {
  if (val?.options) {
    const $format: AnyProps = [];
    val.options.forEach((option: AnyProps) => {
      $format.push(handle(option.value, option.label));
    });

    format.push({ ...val, options: $format });
  } else {
    format.push(handle(val.value, val.label));
  }
});

// 异步写入数据到文件
fs.writeFile(file, JSON.stringify(format, null, 2), { encoding: "utf8" }, err => {
  console.log(err);
});
