const LANG = require("./src/constants/lang");
const storage = require("./src/dictionary/storage");
const orchestrator = require("./src/orchestrator");

function initialize(modules = [], languages = [LANG.EN_US]) {
  storage.set([]);
  storage.initialize(modules, languages);
}

function chat({ data, lang = LANG.EN_US }) {
  const content = orchestrator({ data, lang });
  return content;
}

module.exports = {
  chat,
  initialize,
};
