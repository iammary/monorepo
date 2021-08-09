import React from "react";
import AuthService from "@thecaffeinateddev/services/AuthService/AuthService";
import { AuthInfo } from "@thecaffeinateddev/services/AuthService/authModels";

const authInfo: AuthInfo = {
  userInfo: {},
  hasRole: AuthService.hasRole,
  logout: AuthService.doLogout
};

const AuthContext = React.createContext(authInfo);

export default AuthContext;
