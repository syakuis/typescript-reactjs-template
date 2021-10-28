module.exports = {
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/(dist|node_modules)/'],
  watchPathIgnorePatterns: [],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts)x?$',
  transform: {
    '^.+\\.(ts)x?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  testEnvironment: 'node',
};
