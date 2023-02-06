"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = __importDefault(require("./routes/main"));
const body_parser_1 = require("body-parser");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const documentation_1 = __importDefault(require("./apiDocumentation/documentation"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/api/documentations', swagger_ui_express_1.default.serve);
app.use('/api/documentations', swagger_ui_express_1.default.setup(documentation_1.default));
app.use(main_1.default);
app.use((error, req, res) => {
    const message = error.message;
    res.status(400).json(message);
});
app.listen(4000);
