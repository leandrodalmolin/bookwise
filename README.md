## Requirements

- Node v20.1.0
- pnpm v8.15.5
- VSCode ESLint extension
- VSCode Prettier extension

## Pre-commit checks

Husky will perform the following checks before commits:

- ESLint check
- Prettier format check
- Unit tests

You can fix lint or format errors running:

- `pnpm lint --fix`
- `pnpm format:fix`

## Project Setup

- Install: `pnpm install`
- Dev server: `pnpm dev`
- Production build: `pnpm build`
- Preview production build: `pnpm preview`
- Lint: `pnpm lint`
- Prettier format check: `pnpm format`
- Prettier format fix: `pnpm format:fix`
- Unit tests: `pnpm test`
