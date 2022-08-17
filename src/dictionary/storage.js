let storage = [];

const get = () => storage;

const set = (newStorage) => (storage = newStorage);

const add = (lang, expression, module, operation) => {
  if (!expression || !module) return;
  storage[lang].push({
    expression,
    module,
    operation,
  });
};

const initialize = (modules, languages) => {
  modules.forEach((moduleObj) => {
    languages.forEach((language) => {
      if (!storage[language]) storage[language] = [];
      const expressions = modules.find((m) => m.name === moduleObj.name).expressions[language];
      expressions.forEach((exp) => add(language, exp, moduleObj.name, moduleObj.module));
    });
  });
};

module.exports = {
  get,
  initialize,
  set,
};
