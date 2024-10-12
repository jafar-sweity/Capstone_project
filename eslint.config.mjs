import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // For browser globals
        ...globals.node, // For Node.js globals (e.g., process, require)
        ...globals.jest, // Add this if you're using Jest for testing
        // If you're using Mocha, replace `globals.jest` with `globals.mocha`
      },
    },
  },
  pluginJs.configs.recommended,
];
