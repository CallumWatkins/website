import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginVueA11y from "eslint-plugin-vuejs-accessibility";

export default withNuxt(
  {
    ignores: ["functions/worker-configuration.d.ts"],
  },
  {
    name: "project/nuxt-entrypoint-overrides",
    files: ["app/error.vue", "app/pages/index.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
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
