const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const simpleImportSort = require("eslint-plugin-simple-import-sort");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],

    plugins: {
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^@?\\w"], ["^@"], ["^\\.."]],
          "newlines-between": "always",
        },
      ],
      "simple-import-sort/exports": "error",
      "import/order": "off",
      "sort-imports": "off",
      "no-unused-vars": "warn",
    },
  },
]);
