const { defaults } = require('jest-config');

module.exports = {
 // Below is configuration for setup with Typescript
 setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
 moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
 // Below is fix for .scss files with Jest
 transform: {
  '^.+\\.jsx?$': 'babel-jest',
  '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
 }
};
