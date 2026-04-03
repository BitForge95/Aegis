module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@scanner/(.*)$': '<rootDir>/src/scanner/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};
