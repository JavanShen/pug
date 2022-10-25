module.exports = {
    root: true,
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                packageDir: [
                    './',
                    'packages/react',
                    'packages/vue',
                    'demo',
                    'preview'
                ],
                devDependencies: true
            }
        ],
        // 省略文件后缀
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        'vue/multi-word-component-names': 0,
        // 使用for...of
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
            },
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ],
        // 允许循环中的++
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        // 不强制解构
        'prefer-destructuring': ['error', { object: false, array: false }],
        // 单个方法时不强制默认导出
        'import/prefer-default-export': 'off',
        // 忽略某些引入
        'import/no-unresolved': [
            2,
            { ignore: ['@corgi/demo/react', '@corgi/demo/vue'] }
        ]
    },
    overrides: [
        {
            files: [
              "**/__tests__/*.{j,t}s?(x)",
              "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
              jest: true
            }
          }
    ],
    // 解决报错unable resolve
    settings: {
        'import/resolver': {
            typescript: {},
            node: ['.js', '.jsx', '.ts', '.tsx']
        }
    },
    ignorePatterns: ['!.*', 'node_modules']
}