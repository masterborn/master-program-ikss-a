module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    "react/jsx-curly-brace-presence": ["error", { props: "never" }],
    "@typescript-eslint/no-empty-function": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "no-confusing-arrow": "off",
    "max-nested-callbacks": ["error", 3],
    "no-else-return": "error",
    "react/jsx-no-useless-fragment": "error",
    // Enforces linebreak after import
    "import/newline-after-import": ["error", { count: 1 }],
    // Sorts import order and enforces break between aliased and node_module imports
    "import/order": [
      "error",
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          ["sibling", "index"],
        ],
        "newlines-between": "always",
        pathGroups: [
          // React imports always go to the top
          {
            group: "builtin",
            pattern: "react",
            position: "before",
          },
          { group: "internal", pattern: "@api" },
          { group: "internal", pattern: "@api/**" },
          { group: "internal", pattern: "@components/**" },
          { group: "internal", pattern: "@consts/**" },
          { group: "internal", pattern: "@config/**" },
          { group: "internal", pattern: "@providers" },
          { group: "internal", pattern: "@features/**" },
          { group: "internal", pattern: "@tests/**" },
          { group: "internal", pattern: "@hooks" },
          { group: "internal", pattern: "@hooks/**" },
          { group: "internal", pattern: "@layouts" },
          { group: "internal", pattern: "@layouts/**" },
          { group: "internal", pattern: "@theme" },
          { group: "internal", pattern: "@theme/**" },
          { group: "internal", pattern: "@utils" },
          { group: "internal", pattern: "@utils/**" },
          { group: "internal", pattern: "@views" },
          { group: "internal", pattern: "@views/**" },
          // Assets are always last and are separated by line break
          {
            group: "internal",
            pattern: "@assets/**",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "@typescript-eslint/no-explicit-any": ["error"],
    "react/no-array-index-key": "error",
  },
  overrides: [
    {
      // This allows 'require' to be used within files
      files: [".eslintrc.js", "next.config.mjs", "jest.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
};