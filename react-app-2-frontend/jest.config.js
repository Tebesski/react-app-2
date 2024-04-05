export default {
   preset: "ts-jest",
   testEnvironment: "jest-environment-jsdom",
   transform: {
      "^.+\\.tsx?$": "ts-jest",
   },
   moduleNameMapper: {
      "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/tests/__mocks__/fileMock.js",
      "^.+\\.(css|less|scss|sass)$": "<rootDir>/tests/__mock__/styleMock.js",
      "^@/(.*)$": "<rootDir>/src/$1",
   },
}
