// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/mukosoft-app-angular'),
      subdir: '.',
      reporters: [
        { type: 'lcovonly', subdir: '.' },
        { type: 'cobertura', subdir: '.', file: 'cobertura-coverage.xml' }
      ]
    },
    junitReporter: {
      outputDir: './reports/karma/'
    },
    reporters: ['junit', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['HeadlessChrome'],
    customLaunchers: {
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: [
          "--no-sandbox",
          "--no-proxy-server",
          "--disable-web-security",
          "--disable-gpu",
          "--js-flags=--max-old-space-size=8196",
        ],
      }
    },
    singleRun: true,
    failOnEmptyTestSuite: false
  });
};
