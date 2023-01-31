"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeFunction = void 0;
const express_validator_1 = require("express-validator");
const bitly_1 = require("bitly");
const fs_1 = require("fs");
const getDatas_1 = require("../helpers/getDatas");
require("dotenv").config();
const encodeFunction = async (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        return res.status(400).json({ message: errors });
    const { url } = req.body;
    try {
        const datas = await (0, getDatas_1.getDatas)();
        const checkInDatabase = datas.length ? datas.filter(u => u.long_url === url.trim()).length : 0;
        const bitly = new bitly_1.BitlyClient(process.env.ACCESS_TOKEN || "", {});
        const result = await bitly.shorten(url);
        if (!checkInDatabase)
            (0, fs_1.writeFileSync)('database.json', JSON.stringify([...datas, { long_url: result.long_url, link: result.link, id: result.id }]));
        res.json({ urlInfo: { long_url: result.long_url, link: result.link, id: result.id } });
    }
    catch (error) {
        if ((0, bitly_1.isBitlyErrResponse)(error)) {
            res.status(400).json({ message: error.description });
        }
        else {
            next(error);
        }
    }
};
exports.encodeFunction = encodeFunction;
