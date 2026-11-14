import neostandard from 'neostandard';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { fixupConfigRules } from '@eslint/compat';

export default [
	{ ignores: ['dist'] },
	...neostandard(),
	// eslint-plugin-react 7.x still calls context APIs removed in ESLint 10; drop the shim once it supports v10
	...fixupConfigRules([
		react.configs.flat.recommended,
		react.configs.flat['jsx-runtime']
	]),
	{
		files: ['**/*.{js,jsx}'],
		plugins: { 'react-hooks': reactHooks },
		languageOptions: {
			globals: globals.browser,
			parserOptions: { ecmaFeatures: { jsx: true } }
		},
		settings: { react: { version: 'detect' } },
		rules: {
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'react/prop-types': 'off'
		}
	},
	prettier
];
