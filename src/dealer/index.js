const dealer = (data, context) => {
  const responses = [];
  if (!data) return [];

  data.intentions.forEach(({ module, expression }) => {
    const storage = require("../dictionary/storage").get();
    const moduleOperation = storage[data.lang].find((items) => items.module === module).operation;
    const response = moduleOperation({
      expression,
      lang: data.lang,
      context,
    });
    responses.push(response);
  });

  return responses;
};

module.exports = dealer;
