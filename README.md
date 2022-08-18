# chat-moduler

A conversation tool in Javascript based in modules.

<br/>

## About the project

Chat-Moduler is an multilingual, context-aware, open-source chatbot built on the idea of being entirely modular. It gives you the freedom of implementing your module logic and returning the data in whatever structure best suits your application, ready
to receive a string (the user input), route it to the appropriate modules based on the words or expressions found, and returning a valid response.
It is currently in early development.

<br/>

## Getting Started

```
npm i chat-moduler
```

or with yarn

```
yarn add chat-moduler
```

<br/>

## Usage

### Call the module loader:

```
import { initialize } from "chat-moduler";

initialize([myCustomModule, otherModule], ["en-US", "pt-BR"]);
```

If the language array is not provided, en-US will always be used as default.
<br/>
At least one module must be provided to the modules array.

### Call the chat engine:

```
import { chat } from "chat-moduler";

chat({ data: "Hola!", lang: "es-ES" });
```

If the language, en-US will always be used as default.

<br/>

## Modules

All Modules are simple Javascript objects with <i>name</i>, <i>expressions</i>, and the <i>module</i> itself, a function that will receive as argument an object with three properties: **lang**, **context**, and **expression**, and return the expected response with no specific format.

- lang: the language currently used by the user, such as "en-US" or "pt-BR"
- context: an array of previous user inputs
- expression: the word or expression inputed by the user that was recognized by the module

```
const MyModule = {
    name: "myCustomModule",
    expressions: {
        "en-US": ["hi", "hey", "how are you"],
        "pt-BR": ["oi", "ola", "como vai"],
    },
    module: ({ expression, lang, context }) => {
        // YOUR LOGIC HERE
        return desiredResponse;
    }
};
```

The expressions should always be provided without diacritics.
Inside the module, you are free to implement whatever logic suits best your application and return the data format desired.

<br/>

## Roadmap

- Better Typescript support;
- Improve the expression-matching logic;

<br/>

## Contributing

I am accepting contributions. Any contributions you make, be it bug fixes or new features, are greatly appreciated.

<br/>

## License

Distributed under the ISC License.

<br/>

## Contact

- Twitter: [@thalesludwig](https://twitter.com/thalesludwig)
- Linkedin: [in/thalesludwig](https://linkedin.com/in/thalesludwig)
- E-mail: thales.ludwig@gmail.com
