module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"        
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],  
    "rules": {"@typescript-eslint/no-unused-vars": [
        "error", { "varsIgnorePattern": "^_", "argsIgnorePattern": "^_" }
      ] 
    }
}
