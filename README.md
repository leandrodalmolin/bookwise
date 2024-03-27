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
- E2E tests: `pnpm cypress:open`
- Storybook dev: `pnpm storybook`
- Storybook build: `pnpm build-storybook`

## Running E2E Tests

It's recommended to run the tests against the production code to more closely resemble how the app will behave.

Run `pnpm run build && pnpm run start` to build the app, then run `pnpm run cypress:open` in another terminal window to start Cypress and run your E2E testing suite.

## Prisma ORM

Whenever the Prisma schema is updated, the database schema needs to be updated using either `pnpm dlx prisma migrate dev` or `pnpm dlx prisma db push`. This will keep the database schema in sync with the Prisma schema. The commands will also regenerate Prisma Client, [read the docs for more](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql).

- Migration: `pnpm dlx prisma migrate dev`
- View and manipulate database: `pnpm dlx prisma studio`
- Seed DB with pre-existing data: `pnpm dlx prisma db seed`
