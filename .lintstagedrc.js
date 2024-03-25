const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const buildPrettierCommand = (filenames) =>
  `pnpm prettier --check ${filenames.join(' ')}`

module.exports = {
  '**/*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '**/*.{js,jsx,ts,tsx,md,json}': [buildPrettierCommand],
}
