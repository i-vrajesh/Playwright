// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');

module.exports = defineConfig({ //exporting defineConfig variable (JS object) across all the files in project 
  testDir: './tests',//directing to tests folder in directory level like glue
  reporter : 'html',//default reporter, we can add allure also
  timeout: 100*1000, //explicitly overriding 30s default timeout
  expect: {
    timeout: 5000,//timeout for assertions overriding 30s default timeout
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        browserName: 'chromium', //firefox, webkit
        headless: false, //headmode or headless
        screenshot:'only-on-failure', //only when error
        trace: 'on', //logging like log4j
        viewport: {width:720,height:720},
      },
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'] ,//['iPhone 11'] can mention available devices
        ignoreHTTPSErrors: true,
        permissions:['geolocation'],
      },
    },
    {
      name: 'webkit',
      use: { 
        browserName: 'webkit', 
        headless: false, //headmode or headless
        screenshot:'off', //for every action
        trace: 'on', //logging like log4j
      },
    },
  ],
});

