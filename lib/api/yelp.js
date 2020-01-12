"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _axios.default.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer YrSpZpEpROCZJzw9Ow60z9qseMNjoPoKrxUCoa-mbTEZ6oQdcMDpYMztCcQas1JggIsqnjwumppsM1fOHfYBMLvzhdgOxMOHVmA-V9EQ1Htkl181aB4Jw9v4TREVXnYx'
  }
});

exports.default = _default;