const { defaults } = require('jest-config');

module.exports = {
 // Below is configuration for setup with Typescript
 setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
 moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
 // Below is fix for .scss files with Jest
 transform: {
  '^.+\\.jsx?$': 'babel-jest',
  '^.+\\.tsx?$': 'ts-jest',
  '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
 }
};
