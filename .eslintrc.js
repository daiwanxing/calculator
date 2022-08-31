/**
 * @type { import("eslint").ESLint.ConfigData }
 */
module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
        browser: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaVersion: "es2018"
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-strongly-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "prefer-const": ["error"],
        'vue/no-unused-vars': 'error',
        "@typescript-eslint/no-unused-vars": ["error"],
        "vue/html-indent": ["error", 4, {
            "baseIndent": 1,
            "ignores": []
          }]
    },
}