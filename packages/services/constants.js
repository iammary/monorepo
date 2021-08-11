"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIN_REFRESH_INTERVAL = exports.MIN_VALIDITY_TO_REFRESH = exports.ErrorPages = exports.POLLING_URL = void 0;
exports.POLLING_URL = "alert/alert";
exports.ErrorPages = {
    PAGE_401: "/401",
    PAGE_404: "/404",
    PAGE_400: "/400",
    PAGE_503: "/503",
    PAGE_500: "/500",
};
// if the token expires with in min validity(in secs) , token gets refreshed
exports.MIN_VALIDITY_TO_REFRESH = 5;
exports.MIN_REFRESH_INTERVAL = 6000;
//# sourceMappingURL=constants.js.map