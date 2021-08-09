import axios from "axios";
import { ErrorPages, POLLING_URL } from "packages/services/src/constants";
import AuthService from "packages/services/src/AuthService";

// eslint-disable-next-line no-underscore-dangle
const _axios = axios.create();

const configs = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${AuthService.getToken()}`,
  },
  params: {},
};

export const HttpServiceConfigure = () => {
  _axios.interceptors.request.use((config) => {
    // eslint-disable-next-line no-param-reassign
    config = { ...config, ...configs };
    if (AuthService.isLoggedIn()) {
      // @ts-ignore
      if (!config.url?.toLowerCase().includes(POLLING_URL)) {
        const cb = () => {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${AuthService.getToken()}`;
          return Promise.resolve(config);
        };
        return AuthService.updateToken(cb);
      }
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${AuthService.getToken()}`;
      return Promise.resolve(config);
    }
    return {};
  });

  _axios.interceptors.response.use(handleSuccess, handleError);
};

const handleSuccess = (response: any) => {
  return response;
};

const handleError = (error: any) => {
  if (error.response) {
  }
  return Promise.reject(error);
};

const redirectTo = (document: any, path: string) => {
  // eslint-disable-next-line no-param-reassign
  document.location = path;
};

const getAxiosClient = () => _axios;

export class HttpService {
  get = (path: string) => {
    return getAxiosClient().get(path, configs);
  };
  getWithParam = (path: string, queries?: object) => {
    const tempConfigs = { ...configs };
    if (queries && Object.keys(queries).length > 0) {
      tempConfigs.params = queries;
    }
    return getAxiosClient().get(path, tempConfigs);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  post = (path: string, payload: object, callback?: any) => {
    return getAxiosClient().post(path, payload, configs);
  };

  put = (path: string, payload: object) => {
    return getAxiosClient().put(path, payload, configs);
  };

  patch = (path: string, payload: object) => {
    return getAxiosClient().patch(path, payload, configs);
  };

  delete = (path: string) => {
    return getAxiosClient().delete(path, configs);
  };
}

// should we call this by default? or not?
HttpServiceConfigure();

export const HttpServiceV2 = {
  ..._axios,
  getWithParam: (path: string, queries?: object) => {
    const tempConfigs = { ...configs };
    if (queries && Object.keys(queries).length > 0) {
      tempConfigs.params = queries;
    }
    return _axios.get(path, tempConfigs);
  },
};

export default HttpService;
