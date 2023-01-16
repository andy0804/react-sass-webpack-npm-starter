"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const bind_1 = __importDefault(require("classnames/bind"));
const AppT_module_scss_1 = __importDefault(require("./AppT.module.scss"));
const Button_1 = __importDefault(require("./Button/Button"));
const cx = bind_1.default.bind(AppT_module_scss_1.default);
const AppT = () => {
    return (react_1.default.createElement("div", { className: cx('AppT') },
        react_1.default.createElement("div", { className: cx('wrapper') }, "CSS Modules conming from Library..."),
        react_1.default.createElement(Button_1.default, null)));
};
exports.default = AppT;
//# sourceMappingURL=AppT.js.map