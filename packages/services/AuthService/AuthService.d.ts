import * as Keycloak from "keycloak-js";
declare const AuthService: {
    initKeycloak: (onAuthenticatedCallback: () => {}) => void;
    doLogin: (options?: Keycloak.KeycloakLoginOptions) => Keycloak.KeycloakPromise<void, void>;
    doLogout: (options?: Keycloak.KeycloakLogoutOptions) => Keycloak.KeycloakPromise<void, void>;
    isLoggedIn: () => boolean;
    getToken: () => string;
    updateToken: (successCallback: () => {}) => Promise<void | {}>;
    getUserInfo: () => Keycloak.KeycloakPromise<Keycloak.KeycloakProfile, void>;
    hasRole: (roles: Array<string>) => boolean;
};
export default AuthService;
//# sourceMappingURL=AuthService.d.ts.map