import { LANG_ENUM as EXPRESSIONS } from "./src/expressions";
import { LANG as RESPONSES } from "./src/responses";

export const Greeter = ({ expression, lang, context }) => {
  const grammar = EXPRESSIONS[lang];
  return RESPONSES[lang][grammar[expression]];
};
