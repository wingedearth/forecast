module.exports = {
	env: {
		commonjs: true,
		browser: true,
		es6: true,
		node: true
	},
	extends: ['plugin:react/recommended', 'standard', 'prettier'],
	settings: {
		react: {
			version: 'detect'
		}
	},
	parser: 'babel-eslint',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true
		},
		ecmaVersion: 2021,
		sourceType: 'module'
	},
	plugins: ['prettier', 'react'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				tabWidth: 4,
				useTabs: true,
				singleQuote: true,
				printWidth: 100,
				trailingComma: 'none'
			}
		],
		'comma-dangle': ['error', 'never'],
		semi: ['error', 'always'],
		'no-tabs': 0
	}
};
