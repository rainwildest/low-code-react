import fs from "fs";
import path from "path";
import data from "./data";

type AnyProps = { [key: string]: any };

const format: AnyProps = [];

const file = path.resolve(__dirname, "./json/file.json");

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

data.forEach(val => {
  const index = val.indexOf("	");

  const header = val.substring(0, index);
  const footer = val.substring(index + 1);

  format.push({ value: header, label: `『 ${header} 』 ${footer}` });
});

// 异步写入数据到文件
fs.writeFile(file, JSON.stringify(format, null, 2), { encoding: "utf8" }, err => {
  // console.log(err);
});
