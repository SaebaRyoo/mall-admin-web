// const path = require('path');
module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    root: true,
    extends: [
      'eslint:recommended', // eslint默认规则
      'plugin:react/recommended', // 开启react默认规则
      'plugin:@typescript-eslint/eslint-recommended' // ts默认规则
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      // project: path.resolve(__dirname, './tsconfig.json'),
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'no-var': 1,
      'no-console': 1,
      'consistent-return': 1,
      'default-case': 1,
      'no-alert': 2,
      'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			'react/display-name': "off", // 关闭该规则，在使用匿名箭头函数返回一个组件时，Eslint会认为正在定义一个新组件而未为其设置任何名称。或者使用function xx(){} 声明一个函数
			'react/prop-types': 'off',
			"no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn"
    },
  };
