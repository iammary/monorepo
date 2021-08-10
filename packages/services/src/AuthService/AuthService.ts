import * as Keycloak from "keycloak-js";

import { MIN_VALIDITY_TO_REFRESH } from "../constants";
import { KeyCloakInitOptions } from "../AuthService/authModels";

// const base = window as any;
// //keycloak init options for https://keycloak-dev-pad-new.csc-dev.podium.io
// /* let initOptions: KeyCloakInitOptions = {
//   url: base.env.KEYCLOAK_URI, realm: base.env.KEYCLOAK_REALM, clientId: base.env.KEYCLOAK_CLIENT,  onLoad: 'login-required'
// } */

// keycloak init options for - localhost
const initOptions: KeyCloakInitOptions = {
  // @ts-ignore
  url: process.env.REACT_APP_KEYCLOAK_URI,
  // @ts-ignore
  realm: process.env.REACT_APP_REALM!,
  // @ts-ignore
  clientId: process.env.REACT_APP_CLIENT!,
  onLoad: "login-required",
};

// eslint-disable-next-line no-underscore-dangle
const _kc: Keycloak.KeycloakInstance = Keycloak.default(initOptions);

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback: () => {}) => {
  _kc.init({ onLoad: initOptions.onLoad }).then(() => {
    onAuthenticatedCallback();
  });
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback: () => {}) =>
  _kc
    .updateToken(MIN_VALIDITY_TO_REFRESH)
    .then(successCallback)
    .catch(doLogout);

const getUserInfo = () => _kc.loadUserProfile();

const hasRole = (roles: Array<string>) =>
  roles.some((role) => _kc.hasRealmRole(role));

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

export default AuthService;
