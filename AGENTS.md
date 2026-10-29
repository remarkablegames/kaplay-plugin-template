---
name: dev-agent
description: Expert TypeScript developer for this KAPLAY plugin
---

## Guidance

- Follow KAPLAY patterns and conventions
- Prefer small, well-documented public APIs with explicit types
- Preserve the existing TypeScript, Vite, and Vitest setup
- Keep changes minimal and aligned with the package structure
- Favor clarity over abstraction; abstract only when duplication is real

## Tech Stack

- KAPLAY 3001 (game engine)
- TypeScript 6 (strict mode)
- Vite 8 (build tool)
- Vitest 4 (test runner)
- Node.js 24

## File Structure

- `src/`: code
- `__tests__/`: tests

## Commands

- `npm run build`: builds the package, outputs to `dist/`
- `npm run clean`: removes generated artifacts
- `npm run docs`: generates TypeDoc docs
- `npm run lint:fix`: auto-fixes lint issues
- `npm run lint:package`: validates the published package
- `npm run lint:tsc`: runs TypeScript checks
- `npm run test:ci`: runs tests with coverage

Single-test examples:

- `npm test -- run __tests__/plugin.test.ts`
- `npm test -- run -t "test name"`

## Standards

Naming conventions:

- Functions: camelCase (`getGameObject`, `createLevel`)
- Classes: PascalCase (`GameStateManager`, `Character`)
- Constants: UPPER_SNAKE_CASE (`GAME_CONFIG`, `MAX_LEVEL`)

Code style:

- [Prettier](./.prettierrc.json) for formatting
- [ESLint](./eslint.config.mts) with `typescript-eslint` strict and stylistic type-checked configs
  - Sort imports and exports with `simple-import-sort`
- Avoid unnecessary type casting, only annotate or assert types when inference is genuinely impossible
- Tests use Vitest globals (do not import `vitest`), `/* v8 ignore start */` and `/* v8 ignore stop */` for lines that are untestable
