module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'plugin:prettier/recommended'
	],
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['**/*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	parserOptions: {
		project: './tsconfig.eslint.json',
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	settings: {
		// 'import/parsers': {
		// 	'@typescript-eslint/parser': ['.cjs', '.js', '.ts', '.svelte']
		// },
		// 'import/resolver': {
		// 	typescript: {
		// 		alwaysTryTypes: true
		// 	}
		// }
	},
	rules: {
		'import/no-extraneous-dependencies': 0
	}
};
