module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__test__/__mocks__/fileMock.js',
    "@/sdk/(.*)$": "<rootDir>/sdk/$1",
    "@/api": "<rootDir>/api/index",
    "@/api/(.*)$": "<rootDir>/api/$1",
    "@/sdk": "<rootDir>/sdk/index",
    "@/components": "<rootDir>/components/index",
    "@/connectors": "<rootDir>/connectors/index",
    "@/connectors/(.*)$": "<rootDir>/connectors/$1",
    "@/constants/(.*)$": "<rootDir>/constants/$1",
    "@/constants": "<rootDir>/constants/index",
    "@/design-system": "<rootDir>/design-system",
    "@/design-system/(.*)$": "<rootDir>/design-system/$1",
    "@/state/(.*)$": "<rootDir>/state/$1",
    "@/constants": "<rootDir>/constants/index",
    "@/svg/(.*)$": "<rootDir>/components/svg/$1",
    "@/svg": "<rootDir>/components/svg/index",
    "@/utils/(.*)$": "<rootDir>/utils/$1",
    "@/utils": "<rootDir>/utils/index",
    "@/elements/(.*)$": "<rootDir>/elements/$1",
    "@/elements": "<rootDir>/elements/index",
    "@/hooks/(.*)$": "<rootDir>/hooks/$1",
    "@/hooks": "<rootDir>/hooks/index",
    "@/interface": "<rootDir>/interface/index",
    "@/views/(.*)$": "<rootDir>/views/$1",
  },
  moduleDirectories: ['node_modules']
};