/*eslint-env node*/
module.exports = {
  roots: ['<rootDir>'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)(x)' // This will match any .js or .jsx file inside any __tests__ directory
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  testPathIgnorePatterns: [
    '/node_modules/', // Ignore node_modules directory
    '/dist/', // Ignore dist directory, if exists
    '/build/' // Ignore build directory, if exists
  ],
  verbose: true
}
