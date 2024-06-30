import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2020, // تنظیم نسخه ECMAScript
      globals: {
        ...globals.browser,
        ...globals.node, // اضافه کردن globals مربوط به Node.js
        ...globals.jest, // اضافه کردن globals مربوط به Jest
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      // قوانین مورد نظر خود را اینجا اضافه کنید
    },
  },
];
