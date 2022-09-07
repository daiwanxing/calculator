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
	// this parser will lint vue file and found some syntax error
	parser: "vue-eslint-parser",
	parserOptions: {
		// enable eslint lint typescript code
		parser: "@typescript-eslint/parser",
		sourceType: "module",
		// for support es9 syntax
		ecmaVersion: "es2018",
	},
	extends: [
		"eslint:recommended",
		// this plugin used to lint *.vue code, if you comment this line， eslint will not detect *.vue file code
		// remeber restart your vscode after add this line, then will be work
		"plugin:vue/vue3-strongly-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	rules: {
		"prefer-const": ["error"],
		"vue/multi-word-component-names": ["off"],
	},
	plugins: ["prettier"],
};
