"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_1 = require("../controllers/main");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.post("/encode", (0, express_validator_1.body)("url").isURL(), main_1.encodeFunction);
exports.default = router;
