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
        "printWidth": 100,
        "tabWidth": 2,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "trailingComma": "none",
        "bracketSpacing": true,
        "arrowParens": "avoid"
      }
    ],
    "comma-dangle": ["warn", "never"],
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
    "vue/max-attributes-per-line": 0,
    "vue/html-self-closing": [
      "error", {
        "html": {
          "void": "always",
          "normal": "always",
          "component": "always",
        },
        "svg": "always",
        "math": "always",
      }
    ]
  }
}