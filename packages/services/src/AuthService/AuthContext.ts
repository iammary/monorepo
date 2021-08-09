import React from "react";
import AuthService from "packages/services/src/AuthService/AuthService";
import { AuthInfo } from "packages/services/src/AuthService/authModels";

const authInfo: AuthInfo = {
  userInfo: {},
  hasRole: AuthService.hasRole,
  logout: AuthService.doLogout
};

const AuthContext = React.createContext(authInfo);

export default AuthContext;
