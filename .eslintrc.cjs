/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('eslint').ESLint.ConfigData } */
module.exports = {
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:unicorn/recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  plugins: ["simple-import-sort"],
  overrides: [
    {
      files: ["**/*.vue"],
      rules: {
        "unicorn/prevent-abbreviations": [
          "error",
          { allowList: { Props: true, props: true } },
        ],
      },
    },
    {
      files: ["**/*.spec.ts"],
      env: {
        jest: true,
      },
    },
    {
      files: ["**/*.stories.ts"],
      rules: {
        "unicorn/prevent-abbreviations": [
          "error",
          { allowList: { args: true } },
        ],
      },
    },
    {
      files: ["**/*.cjs"],
      env: {
        node: true,
      },
    },
    {
      files: ["**/vite-env.d.ts"],
      rules: {
        "unicorn/prevent-abbreviations": "off",
      },
    },
  ],
  rules: {
    "unicorn/filename-case": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
  },
};
