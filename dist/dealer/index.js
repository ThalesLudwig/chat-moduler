"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dealer = void 0;

var _storage = require("../dictionary/storage");

var dealer = function dealer(data, context) {
  var responses = [];
  if (!data) return [];
  data.intentions.forEach(function (_ref) {
    var module = _ref.module,
        expression = _ref.expression;
    var storage = (0, _storage.get)();
    var moduleOperation = storage[data.lang].find(function (items) {
      return items.module === module;
    }).operation;
    var response = moduleOperation({
      expression: expression,
      lang: data.lang,
      context: context
    });
    responses.push(response);
  });
  return responses;
};

exports.dealer = dealer;