module.exports = {
  root: true,
  plugins: ["vuejs-accessibility"],
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:vuejs-accessibility/recommended",
  ],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "no-console": "off",
    "vue/require-v-for-key": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
