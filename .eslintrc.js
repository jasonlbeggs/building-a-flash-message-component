module.exports = {
  "root": true,
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "prettier",
    "plugin:vue/recommended"
  ],
  "plugins": [
    "vue",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
        "tabWidth": 2,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "trailingComma": "es5",
        "bracketSpacing": true,
        "arrowParens": "avoid"
      }
    ],
    "indent": [
      2,
      2
    ],
    "semi": 2,
    "quotes": [
      "error",
      "single",
      "avoid-escape"
    ],
    "no-else-return": 1,
    "no-unreachable": 1,
    "no-empty": 1,
    "no-duplicate-case": 1,
    "block-scoped-var": 2,
    "vue/max-attributes-per-line": 0
  }
}