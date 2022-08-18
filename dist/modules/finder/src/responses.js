"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LANG = void 0;

var _lang = require("../../../constants/lang");

var _LANG;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PT_BR = ["Não entendi. Pode reformular a frase?", "Acho que ainda não sou capaz de responder isso.", "Lamento, minhas respostas são limitadas. Tente fazer as perguntas certas. ;)", "Desculpe, não consigo responder isso."];
var EN_US = ["I don't get it. Can you rephrase that?", "I think I'm not able to answer that yet.", "I'm sorry. My responses are limited. You must ask the right questions. ;)", "Sorry, I can't answer that."];
var LANG = (_LANG = {}, _defineProperty(_LANG, _lang.LANG.PT_BR, PT_BR), _defineProperty(_LANG, _lang.LANG.EN_US, EN_US), _LANG);
exports.LANG = LANG;