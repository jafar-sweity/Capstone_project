// jest.config.js
export default {
  testEnvironment: "node", // Use 'node' for testing Node.js applications
  transform: {
    "^.+\\.js$": "babel-jest", // Use Babel to transform .js files
  },
  moduleFileExtensions: ["js", "json", "node"], // Specify the file extensions Jest should recognize
  transformIgnorePatterns: [], // Allows transforming dependencies in node_modules if necessary
};
