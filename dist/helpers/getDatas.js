"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatas = void 0;
const fs_1 = require("fs");
const getDatas = () => {
    const datas = (0, fs_1.readFileSync)('database.json');
    let buffer = Buffer.from(datas);
    return JSON.parse(buffer.toString());
};
exports.getDatas = getDatas;
