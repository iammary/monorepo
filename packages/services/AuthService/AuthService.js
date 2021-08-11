"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Keycloak = __importStar(require("keycloak-js"));
const constants_1 = require("../constants");
// const base = window as any;
// //keycloak init options for https://keycloak-dev-pad-new.csc-dev.podium.io
// /* let initOptions: KeyCloakInitOptions = {
//   url: base.env.KEYCLOAK_URI, realm: base.env.KEYCLOAK_REALM, clientId: base.env.KEYCLOAK_CLIENT,  onLoad: 'login-required'
// } */
// keycloak init options for - localhost
const initOptions = {
    // @ts-ignore
    url: process.env.REACT_APP_KEYCLOAK_URI,
    // @ts-ignore
    realm: process.env.REACT_APP_REALM,
    // @ts-ignore
    clientId: process.env.REACT_APP_CLIENT,
    onLoad: "login-required",
};
// eslint-disable-next-line no-underscore-dangle
const _kc = Keycloak.default(initOptions);
/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({ onLoad: initOptions.onLoad }).then(() => {
        onAuthenticatedCallback();
    });
};
const doLogin = _kc.login;
const doLogout = _kc.logout;
const getToken = () => _kc.token;
const isLoggedIn = () => !!_kc.token;
const updateToken = (successCallback) => _kc
    .updateToken(constants_1.MIN_VALIDITY_TO_REFRESH)
    .then(successCallback)
    .catch(doLogout);
const getUserInfo = () => _kc.loadUserProfile();
const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));
const AuthService = {
    initKeycloak,
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    updateToken,
    getUserInfo,
    hasRole,
};
exports.default = AuthService;
//# sourceMappingURL=AuthService.js.map