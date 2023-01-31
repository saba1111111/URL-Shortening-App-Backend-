"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const main_1 = require("../controllers/main");
const router = (0, express_1.Router)();
router.post("/encode", (0, express_validator_1.body)("url").isURL(), main_1.encodeFunction);
router.post("/decode", (0, express_validator_1.body)("link").isURL(), main_1.decodeFunction);
router.get("/allUrls", main_1.fetchAllUrls);
exports.default = router;
