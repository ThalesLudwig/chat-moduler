"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.add = void 0;
var contextMemory = [];

var get = function get() {
  return contextMemory;
};

exports.get = get;

var add = function add(data) {
  contextMemory.push(data);
  return contextMemory;
};

exports.add = add;