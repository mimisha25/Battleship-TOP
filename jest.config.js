module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // This tells Jest to use Babel to transform JS files
    },
    testEnvironment: 'jsdom',
};
