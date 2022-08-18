declare module "chat-moduler" {
  export function chat(arg1: Chat): void;
  export function initialize(arg1: Module[], arg2?: string[]): void;
}

interface Chat {
  data: string;
  lang?: string;
}

interface Context {
  input: string;
  lang: string;
  intentions: Operation[];
}

interface Operation {
  expression?: string;
  lang?: string;
  context?: Context[];
}

interface Module {
  name: string;
  expressions: {
    [key: string]: string[];
  };
  module: (arg: Operation) => any;
}
