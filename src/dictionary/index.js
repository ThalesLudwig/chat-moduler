import { get } from "./storage";

function dictionary(data, lang) {
  const source = get()[lang] || [];

  const expressionsFound = source.filter(({ expression }) => {
    // TO DO - improve matching logic
    return data.toUpperCase().includes(expression.toUpperCase());
  });

  return expressionsFound;
}

module.exports = dictionary;
