module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": ["error", 4],
        "quotes": ["error", "double", {
            "avoidEscape": true,
            "allowTemplateLiterals": true,
        }],
        "semi": ["error", "always"]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
