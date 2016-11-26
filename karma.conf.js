// Karma configuration

module.exports = function (config) {
    config.set({
        basePath: '',
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'dist/main.js',
            'tests/*.spec.js'
        ],

        reporters: ['progress'],

        port: 9876,
        colors: true,

        logLevel: config.LOG_INFO,

        browsers: ['Chrome'],
        frameworks: ['jasmine'],

        captureTimeout: 60000,

        autoWatch: true,
        singleRun: false
    });
};