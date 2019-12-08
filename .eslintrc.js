module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-standard',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        'max-len': ["error", { "code": 155 }]
    },
};
