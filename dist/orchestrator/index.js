"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orchestrator = void 0;

var _parser = require("../parser");

var _context = require("../context");

var _dealer = require("../dealer");

var _finder = require("../modules/finder");

var _lang = require("../constants/lang");

var orchestrator = function orchestrator(input) {
  var content = (0, _parser.parser)(input); // verify what modules match with the user expression

  (0, _context.add)(content);

  if (content.intentions.length === 0) {
    // if nothing matched, Finder will return some default messages
    var nothingFound = (0, _finder.Finder)({
      context: (0, _context.get)(),
      lang: input.lang || _lang.LANG.EN_US
    });
    return nothingFound;
  }

  var response = (0, _dealer.dealer)(content, (0, _context.get)()); // Dealer will call the right Module

  return response;
};

exports.orchestrator = orchestrator;