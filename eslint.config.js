import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["off"],
      "@typescript-eslint/no-unused-vars": ["warn",
        {
          argsIgnorePattern: '^_', // Ignore arguments that start with an underscore (standard practice)
          ignoreRestSiblings: true, // Ignore unused rest siblings
          args: 'after-used', // Only flag unused arguments that are never used
          varsIgnorePattern: '^.*$', // Don't apply any pattern rules for unused variable names
        },
      ],
      "@typescript-eslint/no-explicit-any": ["warn"],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    
    },
  },
)
