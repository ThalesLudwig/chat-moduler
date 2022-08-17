const { chat, initialize } = require("../");
const FinderResponses = require("../src/modules/finder/src/responses");
const Greeter = require("./mocks/greeter");
const GreeterExpressionsPtBR = require("./mocks/greeter/pt-BR");
const GreeterExpressionsEnUS = require("./mocks/greeter/en-US");

const GreeterModule = {
  name: "greeter",
  expressions: {
    "pt-BR": GreeterExpressionsPtBR,
    "en-US": GreeterExpressionsEnUS,
  },
  module: Greeter,
};

describe("ChatJS - Default", () => {
  beforeEach(() => {
    const modules = [GreeterModule];
    const languages = ["en-US", "pt-BR"];
    initialize(modules, languages);
  });

  it("should handle non english sentences", () => {
    const result = chat({ data: "oi", lang: "pt-BR" });
    expect(result).toEqual(["Oi!"]);
  });

  it("should handle basic greeting", () => {
    const result = chat({ data: "hey" });
    expect(result.includes("Hi there!")).toBeTruthy();
  });

  it("should handle no response", () => {
    const result = chat({ data: "foo" });
    expect(FinderResponses["en-US"].includes(result)).toBeTruthy();
  });
});

describe("ChatJS - No Languages", () => {
  beforeEach(() => {
    const modules = [GreeterModule];
    initialize(modules);
  });

  it("should handle basic greeting and return english response", () => {
    const result = chat({ data: "hey" });
    expect(result.includes("Hi there!")).toBeTruthy();
  });
});

describe("ChatJS - No Modules", () => {
  beforeEach(() => {
    initialize();
  });

  it("should handle default response", () => {
    const result = chat({ data: "foo" });
    expect(FinderResponses["en-US"].includes(result)).toBeTruthy();
  });
});

describe("ChatJS - Custom Modules", () => {
  const CustomModule = {
    name: "foobar",
    expressions: {
      "en-US": ["foo"],
    },
    module: ({ expression, lang }) => {
      if (expression === "foo" && lang === "en-US") return "bar";
    },
  };

  beforeEach(() => {
    initialize([CustomModule, GreeterModule]);
  });

  it("should handle basic greeting", () => {
    const result = chat({ data: "hey" });
    expect(result.includes("Hi there!")).toBeTruthy();
  });

  it("should handle calling a basic custom module", () => {
    const result = chat({ data: "foo" });
    expect(result).toEqual(["bar"]);
  });
});
