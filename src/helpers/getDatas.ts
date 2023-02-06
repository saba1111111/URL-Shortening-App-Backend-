<<<<<<< HEAD
import {writeFileSync,readFileSync} from "fs";
=======
import {readFileSync} from "fs";
>>>>>>> d4d9c0d60bc0910dce221bcf84482e34f109a7fb

export const getDatas = () => {
  const datas = readFileSync('database.json');
  let buffer = Buffer.from(datas);
  return JSON.parse(buffer.toString());
}
