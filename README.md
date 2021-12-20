## Typescript

TypeScript is a structural type system

### 01. Deep Dive Typescript

### 02. Typescript in 50 Lessons

- 1.  To Enable TS in your JS file, just use `// @ts-check`
  - With the addition of //@ts-check, TypeScript became active in our JavaScript file and showed the first list of problems.
- 2. To ignore any type check, use `//@ts-ignore`
     TypeScript has two major aspects:

1. Innovation in a type system that allows the maximum type-safety for all possible JavaScript scenarios.
2. Provide the first implementation of new JavaScript features that can be transpiled to older versions of ECMAScript. This means that no language innovation happens without the proper process in TC39,15 the ECMAScript standards committee.

### 03. Programming Typescript Oreilly

### How to find availble Types

1.  install typings as global dependency --> npm install -global typings
2.  Search if its available - typings search <lib-name> --> typings search lodash
3.  typings install "<source>~<name>" --global --save --> "typings install dt~lodash --global --save"

Note. Always prefer typings from - https://github.com/DefinitelyTyped/DefinitelyTyped
