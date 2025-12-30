/** @type {import('prettier').Config} */

export default {
  trailingComma: "es5",
  tabWidth: 4,
  useTabs: true,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  endOfLine: "lf",
  arrowParens: "avoid",
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: [
    "classProperties",
    "decorators-legacy",
    "typescript",
  ],
  importOrder: ["THIRD_PARTY_MODULES", "^@/(.*)$", "^../(.*)", "^./(.*)"],
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
