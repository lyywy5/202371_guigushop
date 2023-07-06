// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 

  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    "no-extra-parens": 0,
    "no-undef": 0,
    "space-before-function-paren": 0,
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "generator-star-spacing": "off",
    "no-tabs":"off",
    "no-unused-vars":"off",
    "no-console":"off",
    "no-irregular-whitespace":"off",
    "no-debugger": "off",
    "indent":["off",2],
    'comma-dangle': 0,
    "tabWidth": 4,
    'array-callback-return': 1,
    "comma-dangle": ["error", "only-multiline"],
    "skipBlankLines": true
    
  }
}
