module.exports = {
    env: {
        jest: true,
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        indent: ['error', 4],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'no-debugger': 'off',
        'no-console': 'off',
        'no-unused-vars': 'warn',
        quotes: [
            'error',
            'single'
        ]
    }
}
