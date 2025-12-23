/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  proseWrap: "always",
  arrowParens: "always",
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 80,
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      options: {
        parser: "typescript",
      },
    },
  ],
};
