// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.js*'
    ],
    setupFilesAfterEnv: ['<rootDir>/internals/jestSettings.js'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    moduleNameMapper: {
        '\\.(css)$': '<rootDir>/internals/__mocks__/styleMock.js'
    },

    verbose: true
}
