// @ts-check
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import globals from "globals";

export default [
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Parses .astro files (frontmatter as TS, template, and <script> blocks)
  ...astro.configs.recommended,

  // Client-side <script> blocks run in the browser, not Node
  {
    files: ["**/*.astro", "**/*.astro/*.ts", "**/*.astro/*.js"],
    languageOptions: {
      globals: globals.browser,
    },
  },
];
