"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AuthService_1 = __importDefault(require("../AuthService/AuthService"));
const authInfo = {
    userInfo: {},
    hasRole: AuthService_1.default.hasRole,
    logout: AuthService_1.default.doLogout
};
const AuthContext = react_1.default.createContext(authInfo);
exports.default = AuthContext;
//# sourceMappingURL=AuthContext.js.map