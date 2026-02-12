import { createConfigForNuxt } from "@nuxt/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier";
import vuejsAccessibility from "eslint-plugin-vuejs-accessibility";

export default createConfigForNuxt(
  {},
  ...vuejsAccessibility.configs["flat/recommended"],
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
