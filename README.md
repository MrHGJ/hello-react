项目搭建参考：https://github.com/vortesnail/blog/issues/14


代码格式：
需要安装以及配置如下：
//package.json
 "devDependencies": {
    "@commitlint/cli": "^13.2.0",
    "@commitlint/config-conventional": "^13.2.0",
    "@typescript-eslint/eslint-plugin": "~4.10.0",
    "@typescript-eslint/parser": "~4.10.0",
    "babel-eslint": "~8.2.6",
    "eslint": "~7.16.0",
    "eslint-config-prettier": "~7.1.0",
    "eslint-config-standard": "~16.0.2",
    "eslint-plugin-import": "~2.22.1",
    "eslint-plugin-node": "~11.1.0",
    "eslint-plugin-prettier": "~3.3.0",
    "eslint-plugin-promise": "~4.2.1",
    "eslint-plugin-react": "~7.21.5",
    "eslint-plugin-react-hooks": "~4.2.0",
    "husky": "^7.0.2",
    "lint-staged": "^11.1.2",
    "prettier": "^2.4.1",
    "stylelint": "^13.13.1",
    "stylelint-config-prettier": "^8.0.2",
    "stylelint-config-recess-order": "^2.5.0",
    "stylelint-config-recommended-scss": "^4.3.0",
    "stylelint-config-standard": "^22.0.0",
    "stylelint-scss": "^3.21.0",
    "typescript": "^4.4.3"
  },
  "dependencies": {},
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "git add"
    ],
    "*.{css,scss}": [
      "stylelint --fix",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
    }
  }
