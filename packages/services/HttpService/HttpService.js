"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpServiceV2 = exports.HttpService = exports.HttpServiceConfigure = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
const AuthService_1 = __importDefault(require("../AuthService"));
// eslint-disable-next-line no-underscore-dangle
const _axios = axios_1.default.create();
const configs = {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${AuthService_1.default.getToken()}`,
    },
    params: {},
};
const HttpServiceConfigure = () => {
    _axios.interceptors.request.use((config) => {
        var _a;
        // eslint-disable-next-line no-param-reassign
        config = Object.assign(Object.assign({}, config), configs);
        if (AuthService_1.default.isLoggedIn()) {
            // @ts-ignore
            if (!((_a = config.url) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(constants_1.POLLING_URL))) {
                const cb = () => {
                    // eslint-disable-next-line no-param-reassign
                    config.headers.Authorization = `Bearer ${AuthService_1.default.getToken()}`;
                    return Promise.resolve(config);
                };
                return AuthService_1.default.updateToken(cb);
            }
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${AuthService_1.default.getToken()}`;
            return Promise.resolve(config);
        }
        return {};
    });
    _axios.interceptors.response.use(handleSuccess, handleError);
};
exports.HttpServiceConfigure = HttpServiceConfigure;
const handleSuccess = (response) => {
    return response;
};
const handleError = (error) => {
    return Promise.reject(error);
};
// const redirectTo = (document: any, path: string) => {
//   // eslint-disable-next-line no-param-reassign
//   document.location = path;
// };
const getAxiosClient = () => _axios;
class HttpService {
    constructor() {
        this.get = (path) => {
            return getAxiosClient().get(path, configs);
        };
        this.getWithParam = (path, queries) => {
            const tempConfigs = Object.assign({}, configs);
            if (queries && Object.keys(queries).length > 0) {
                tempConfigs.params = queries;
            }
            return getAxiosClient().get(path, tempConfigs);
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.post = (path, payload, callback) => {
            return getAxiosClient().post(path, payload, configs);
        };
        this.put = (path, payload) => {
            return getAxiosClient().put(path, payload, configs);
        };
        this.patch = (path, payload) => {
            return getAxiosClient().patch(path, payload, configs);
        };
        this.delete = (path) => {
            return getAxiosClient().delete(path, configs);
        };
    }
}
exports.HttpService = HttpService;
// should we call this by default? or not?
exports.HttpServiceConfigure();
exports.HttpServiceV2 = Object.assign(Object.assign({}, _axios), { getWithParam: (path, queries) => {
        const tempConfigs = Object.assign({}, configs);
        if (queries && Object.keys(queries).length > 0) {
            tempConfigs.params = queries;
        }
        return _axios.get(path, tempConfigs);
    } });
exports.default = HttpService;
//# sourceMappingURL=HttpService.js.map