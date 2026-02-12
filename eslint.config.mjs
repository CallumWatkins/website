import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginVueA11y from "eslint-plugin-vuejs-accessibility";

export default withNuxt(
  ...pluginVueA11y.configs["flat/recommended"],
  {
    name: "project/custom-rules",
    rules: {
      "comma-dangle": ["error", "always-multiline"],
      "no-console": "off",
      "vue/require-v-for-key": "off",
    },
  },
  eslintConfigPrettier,
);
