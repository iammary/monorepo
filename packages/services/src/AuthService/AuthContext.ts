import React from "react";
import AuthService from "../AuthService/AuthService";
import { AuthInfo } from "../AuthService/authModels";

const authInfo: AuthInfo = {
  userInfo: {},
  hasRole: AuthService.hasRole,
  logout: AuthService.doLogout
};

const AuthContext = React.createContext(authInfo);

export default AuthContext;
