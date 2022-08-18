"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomIndexFor = void 0;

var getRandomIndexFor = function getRandomIndexFor(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

exports.getRandomIndexFor = getRandomIndexFor;