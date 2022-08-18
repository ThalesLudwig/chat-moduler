"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LANG = void 0;

var _lang = require("../../../constants/lang");

var _LANG;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Generates additional contextual responses
 */
var PT_BR = {
  ATTEMPT_1: ["Estranho, não entendi essa também. :/", "Desculpe de novo, mas não entendi.", "Acho que estou com algum bug hoje, mas continuo não entendendo."],
  ATTEMPT_2: ["Isso está ficando constragendor, mas realmente não estou entendendo.", "Está fazendo de propósito? Porque eu não entendi de novo.", "Olha... Hoje está complicado. Não estou te entendendo. :("]
};
var EN_US = {
  ATTEMPT_1: ["Weird, I didn't get that either. :/", "Sorry again, but I can't understand that.", "I think I have a bug today, because I still don't understand you."],
  ATTEMPT_2: ["This is getting embarrassing, but I REALLY can't understand you.", "Are you doing this on purpose? Because I didn't get it again.", "Look... Today is a bad day. I can't understand you. :("]
};
var LANG = (_LANG = {}, _defineProperty(_LANG, _lang.LANG.PT_BR, PT_BR), _defineProperty(_LANG, _lang.LANG.EN_US, EN_US), _LANG);
exports.LANG = LANG;