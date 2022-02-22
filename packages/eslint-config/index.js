
module.exports = {
    "env": {
        "es2021": true,
        "mocha": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint", "prettier"],
    "rules": {
        "@typescript-eslint/ban-ts-comment": "off",
        "prettier/prettier": "off"
    }
}
