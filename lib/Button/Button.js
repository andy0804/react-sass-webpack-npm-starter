"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const bind_1 = __importDefault(require("classnames/bind"));
const Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
const cx = bind_1.default.bind(Button_module_scss_1.default);
const Button = () => {
    return (react_1.default.createElement("div", { className: cx('Button') },
        react_1.default.createElement("div", { className: cx('wrapper') }, "Button Modules conming from Library...")));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map