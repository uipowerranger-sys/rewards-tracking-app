export default {
    testEnvironment: "jsdom",

    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.js"
    ],

    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    }
};