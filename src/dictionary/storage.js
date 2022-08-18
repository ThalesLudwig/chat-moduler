let storage = [];

export const get = () => storage;

export const set = (newStorage) => (storage = newStorage);

const add = (lang, expression, module, operation) => {
  if (!expression || !module) return;
  storage[lang].push({
    expression,
    module,
    operation,
  });
};

export const initialize = (modules, languages) => {
  modules.forEach((moduleObj) => {
    languages.forEach((language) => {
      if (!storage[language]) storage[language] = [];
      const expressions = modules.find((m) => m.name === moduleObj.name).expressions[language];
      expressions.forEach((exp) => add(language, exp, moduleObj.name, moduleObj.module));
    });
  });
};
