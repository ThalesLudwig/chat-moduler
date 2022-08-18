"use strict";

var _storage = require("./storage");

function dictionary(data, lang) {
  var source = (0, _storage.get)()[lang] || [];
  var expressionsFound = source.filter(function (_ref) {
    var expression = _ref.expression;
    // TO DO - improve matching logic
    return data.toUpperCase().includes(expression.toUpperCase());
  });
  return expressionsFound;
}

module.exports = dictionary;