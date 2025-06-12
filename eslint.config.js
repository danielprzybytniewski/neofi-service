import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // --- SIMPLE IMPORT SORT RULES ---
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            [
              "^react", // React imports first
              "^\\u0000", // Side effect imports (e.g., import './styles.css')
              "^node:", // Node.js built-in modules
              "^@?\\w", // External packages (npm)
              "^@", // Main alias path (e.g., @/components)
              "^[^.]", // Other absolute imports (additional aliases)
              "^\\.", // Relative imports (./ and ../)
            ],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
);
