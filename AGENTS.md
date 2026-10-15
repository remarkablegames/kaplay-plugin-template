---
name: dev-agent
description: Expert TypeScript developer for this KAPLAY plugin
---

## Guidance

- Prefer small, well-documented public APIs with explicit types
- Preserve the existing TypeScript, Vite, and Vitest setup
- Keep changes minimal and aligned with the package structure
- Favor clarity over abstraction; abstract only when duplication is real

## Tech Stack

- KAPLAY 3001
- TypeScript 6 (strict mode)
- Vite 8 (build tool)
- Vitest 4 (test runner)
- Node.js 24

## File Structure

- `src/` – code
- `__tests__/` – tests

## Commands

- `npm run build`: builds the package
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

- TypeScript is `strict`; avoid implicit `any`
- Tests use Vitest globals (do not import `vitest`)
- Enforce 100% test coverage
- Use Conventional Commits: `type(scope): description`

- `npm run test:ci`
- `npm run lint:package`
