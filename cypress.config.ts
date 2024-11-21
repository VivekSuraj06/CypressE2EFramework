import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

const setupNodeEvents =  async (on, config) => {
  await addCucumberPreprocessorPlugin(on,config);
  on(
    "file:preprocessor",
    createBundler({
      plugins:[createEsbuildPlugin(config)],
    })
  );
  return config;
}


export default defineConfig({
  e2e: {
    specPattern : "cypress/e2e/features/*.feature",
    supportFile : "cypress/support/e2e.ts",
    setupNodeEvents,
  },
  defaultCommandTimeout:3000,
  pageLoadTimeout:6000
});
