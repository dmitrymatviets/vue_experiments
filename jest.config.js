module.exports = {
	preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
	snapshotSerializers: [
		'jest-serializer-vue',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	collectCoverage: true,
	collectCoverageFrom: ['**/*.{ts,vue}', '!**/node_modules/**', '!**/tests/**'],
	coverageDirectory: '<rootDir>/tests/coverage',
	coverageReporters: ['html', 'text-summary'],
};
