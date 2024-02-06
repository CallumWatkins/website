module.exports = {
  trailingComma: "all",
  overrides: [
    {
      files: ["tsconfig.json"],
      options: {
        parser: "jsonc",
      },
    },
  ],
};
