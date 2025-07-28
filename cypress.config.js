const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl:'https://rahulshettyacademy.com/AutomationPractice/',
    env: {
      practiceSite: 'https://practicetestautomation.com/practice-test-login/',
      rahulSite: 'https://rahulshettyacademy.com/AutomationPractice/'
    },
    
    video:true,
    videoCompression:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //experimentalStudio:true,
  },
});
