import { LANG } from "./constants/lang";
import { set, initialize as initStore } from "./dictionary/storage";
import { orchestrator } from "./orchestrator";

export function initialize(modules = [], languages = [LANG.EN_US]) {
  set([]);
  initStore(modules, languages);
}

export function chat({ data, lang = LANG.EN_US }) {
  const content = orchestrator({ data, lang });
  return content;
}
