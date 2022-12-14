/**
 * lint-staged config
 * @ref https://www.npmjs.com/package/lint-staged
 * @desc generated at 2022/12/14 21:31:52 by streakingman-cli@1.12.0
 */

module.exports = {
    '*.{[tj]s,[tj]sx,[cm]js}': ['eslint --fix'],
    '*.json': ['prettier --write'],

    '*.{css,scss}': ['stylelint --fix'],
};
