## Requirements

- Node v20.1.0
- pnpm v8.15.5
- VSCode ESLint extension
- VSCode Prettier extension

## Pre-commit checks

Husky will perform linter and formatter checks before commits. If an error occurs, please execute `pnpm lint` or `pnpm format:fix` to resolve it.

## Project Setup

Follow these steps to set up the project:

```bash
pnpm install
```

### Start dev server

```bash
pnpm run dev
```

### Build for production

```bash
pnpm run build
```

### Preview production build locally

```bash
pnpm run preview
```

### Lint files

```bash
pnpm run lint
```

### Check Prettier format on all files

```bash
pnpm run format
```

### Format all files with Prettier

```bash
pnpm run format:fix
```
