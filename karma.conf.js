// Karma configuration
// Generated on Mon Aug 26 2013 20:17:56 GMT+0200 (Rom, sommertid)

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath:'',


        // frameworks to use
        frameworks:['jasmine'],


        // list of files / patterns to load in the browser
        files:[
            'src/main/webapp/lib/sugar-1.3.9.min.js',
            'src/main/webapp/lib/jquery-2.0.3.min.js',
            'src/main/webapp/lib/angular-1.2.0/angular.min.js',
            'src/main/webapp/lib/angular-1.2.0/angular-mocks.js',
            'src/main/webapp/lib/angular-1.2.0/angular-resource.min.js',
            'src/main/webapp/lib/angular-1.2.0/angular-route.min.js',
            'src/main/webapp/lib/ui-bootstrap-tpls-0.5.0.min.js',
            'src/main/webapp/app/kata/util.js',
            'src/main/webapp/app/kata/app.js',
            'src/main/webapp/app/kata/**/*.js',
            'src/test/webapp/app/**/*.js'

        ],


        // list of files to exclude
        exclude:[

        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters:['progress'],


        // web server port
        port:9876,


        // enable / disable colors in the output (reporters and logs)
        colors:true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel:config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch:true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers:['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout:60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun:false
    });
};

