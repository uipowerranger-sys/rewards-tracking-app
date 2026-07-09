import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jest from "eslint-plugin-jest";


export default [

  js.configs.recommended,


  {
    files: [
      "src/**/*.{js,jsx}"
    ],


    languageOptions: {

      ecmaVersion: "latest",

      sourceType: "module",

      parserOptions: {

        ecmaFeatures: {
          jsx: true
        }

      },


      globals: {

        ...globals.browser,

        ...globals.jest

      }

    },


    plugins: {

      react,

      "react-hooks": reactHooks,

      jest

    },


    settings: {

      react: {

        version: "detect"

      }

    },


    rules: {

      "react/react-in-jsx-scope": "off",

      "react/prop-types": "off",

      "no-unused-vars": "warn"

    }

  }

];