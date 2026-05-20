module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  modulePathIgnorePatterns: [
    "<rootDir>/eslint.config.mjs"
  ]
};
