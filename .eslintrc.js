module.exports = {
  root: true,
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "no-console": "off",
  },
};
