"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Finder = void 0;

var _responses = require("./src/responses");

var _context = require("./src/context");

var _getRandomIndex = require("../../helpers/getRandomIndex");

var Finder = function Finder(_ref) {
  var lang = _ref.lang,
      context = _ref.context;
  var grammar = _responses.LANG[lang];
  var contextResponses = _context.LANG[lang];
  var contextFirstAttempt = context[context.length - 2];
  var contextSecondAttempt = context[context.length - 3];

  if ((contextFirstAttempt === null || contextFirstAttempt === void 0 ? void 0 : contextFirstAttempt.intentions.length) === 0 && (contextSecondAttempt === null || contextSecondAttempt === void 0 ? void 0 : contextSecondAttempt.intentions.length) === 0) {
    return (0, _getRandomIndex.getRandomIndexFor)(contextResponses.ATTEMPT_2);
  } else if ((contextFirstAttempt === null || contextFirstAttempt === void 0 ? void 0 : contextFirstAttempt.intentions.length) === 0) {
    return (0, _getRandomIndex.getRandomIndexFor)(contextResponses.ATTEMPT_1);
  }

  return (0, _getRandomIndex.getRandomIndexFor)(grammar);
};

exports.Finder = Finder;