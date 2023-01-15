"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AppT_1 = __importDefault(require("./AppT"));
const App = ({ title }) => react_1.default.createElement("div", null,
    react_1.default.createElement(AppT_1.default, null),
    title);
exports.default = App;
//# sourceMappingURL=App.js.map