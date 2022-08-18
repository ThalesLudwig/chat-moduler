"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chat = chat;
exports.initialize = initialize;

var _lang = require("./constants/lang");

var _storage = require("./dictionary/storage");

var _orchestrator = require("./orchestrator");

function initialize() {
  var modules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var languages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [_lang.LANG.EN_US];
  (0, _storage.set)([]);
  (0, _storage.initialize)(modules, languages);
}

function chat(_ref) {
  var data = _ref.data,
      _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? _lang.LANG.EN_US : _ref$lang;
  var content = (0, _orchestrator.orchestrator)({
    data: data,
    lang: lang
  });
  return content;
}