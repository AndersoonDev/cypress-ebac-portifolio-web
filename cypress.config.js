const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'k2uyor',  
  e2e: {  
    baseUrl: "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {    

      // implement node event listeners here
    },
  },
});