export declare const HttpServiceConfigure: () => void;
export declare class HttpService {
    get: (path: string) => Promise<import("axios").AxiosResponse<any>>;
    getWithParam: (path: string, queries?: object) => Promise<import("axios").AxiosResponse<any>>;
    post: (path: string, payload: object, callback?: any) => Promise<import("axios").AxiosResponse<any>>;
    put: (path: string, payload: object) => Promise<import("axios").AxiosResponse<any>>;
    patch: (path: string, payload: object) => Promise<import("axios").AxiosResponse<any>>;
    delete: (path: string) => Promise<import("axios").AxiosResponse<any>>;
}
export declare const HttpServiceV2: {
    getWithParam: (path: string, queries?: object) => Promise<import("axios").AxiosResponse<any>>;
    defaults: import("axios").AxiosRequestConfig;
    interceptors: {
        request: import("axios").AxiosInterceptorManager<import("axios").AxiosRequestConfig>;
        response: import("axios").AxiosInterceptorManager<import("axios").AxiosResponse<any>>;
    };
    getUri(config?: import("axios").AxiosRequestConfig): string;
    request<T = any, R = import("axios").AxiosResponse<T>>(config: import("axios").AxiosRequestConfig): Promise<R>;
    get<T_1 = any, R_1 = import("axios").AxiosResponse<T_1>>(url: string, config?: import("axios").AxiosRequestConfig): Promise<R_1>;
    delete<T_2 = any, R_2 = import("axios").AxiosResponse<T_2>>(url: string, config?: import("axios").AxiosRequestConfig): Promise<R_2>;
    head<T_3 = any, R_3 = import("axios").AxiosResponse<T_3>>(url: string, config?: import("axios").AxiosRequestConfig): Promise<R_3>;
    options<T_4 = any, R_4 = import("axios").AxiosResponse<T_4>>(url: string, config?: import("axios").AxiosRequestConfig): Promise<R_4>;
    post<T_5 = any, R_5 = import("axios").AxiosResponse<T_5>>(url: string, data?: any, config?: import("axios").AxiosRequestConfig): Promise<R_5>;
    put<T_6 = any, R_6 = import("axios").AxiosResponse<T_6>>(url: string, data?: any, config?: import("axios").AxiosRequestConfig): Promise<R_6>;
    patch<T_7 = any, R_7 = import("axios").AxiosResponse<T_7>>(url: string, data?: any, config?: import("axios").AxiosRequestConfig): Promise<R_7>;
};
export default HttpService;
//# sourceMappingURL=HttpService.d.ts.map