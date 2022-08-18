import { parser } from "../parser";
import { add as addToContext, get as getContext } from "../context";
import { dealer } from "../dealer";
import { Finder } from "../modules/finder";
import { LANG } from "../constants/lang";

export const orchestrator = (input) => {
  const content = parser(input); // verify what modules match with the user expression
  addToContext(content);

  if (content.intentions.length === 0) {
    // if nothing matched, Finder will return some default messages
    const nothingFound = Finder({
      context: getContext(),
      lang: input.lang || LANG.EN_US,
    });
    return nothingFound;
  }
  const response = dealer(content, getContext()); // Dealer will call the right Module
  return response;
};
