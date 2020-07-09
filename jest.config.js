module.exports = {
    globals: {
        "ts-jest"; {
            tsConfig: "tsconfig.json"
        }
    }, 
    moduleFileExtensions: [
        "ts", 
        "js",
        "jsx" 
    ], 
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    }
    testMatch: [
        "**/test/**/*.test.(ts|js|jsx)"
    ],
    testEnvironment: "node"
};