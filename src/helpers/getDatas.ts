import {readFileSync} from "fs";

export const getDatas = () => {
  const datas = readFileSync('database.json');
  let buffer = Buffer.from(datas);
  return JSON.parse(buffer.toString());
}
