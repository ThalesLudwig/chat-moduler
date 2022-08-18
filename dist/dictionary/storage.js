"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.initialize = exports.get = void 0;
var storage = [];

var get = function get() {
  return storage;
};

exports.get = get;

var set = function set(newStorage) {
  return storage = newStorage;
};

exports.set = set;

var add = function add(lang, expression, module, operation) {
  if (!expression || !module) return;
  storage[lang].push({
    expression: expression,
    module: module,
    operation: operation
  });
};

var initialize = function initialize(modules, languages) {
  modules.forEach(function (moduleObj) {
    languages.forEach(function (language) {
      if (!storage[language]) storage[language] = [];
      var expressions = modules.find(function (m) {
        return m.name === moduleObj.name;
      }).expressions[language];
      expressions.forEach(function (exp) {
        return add(language, exp, moduleObj.name, moduleObj.module);
      });
    });
  });
};

exports.initialize = initialize;