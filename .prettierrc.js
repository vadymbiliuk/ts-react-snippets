module.exports = {
  printWidth: 80,
  singleQuote: true,
  overrides: [
    {
      files: ["**/*.css", "**/*.scss", "**/*.html", "**/*.json"],
      options: {
        singleQuote: false,
      },
    },
  ],
  trailingComma: "all",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  semi: true,
};
