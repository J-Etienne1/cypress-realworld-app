import path from "path";
import _ from "lodash";
import axios from "axios";
import dotenv from "dotenv";
import Promise from "bluebird";
import codeCoverageTask from "@cypress/code-coverage/task";
import { devServer } from "@cypress/vite-dev-server";
import { defineConfig } from "cypress";
import { mergeConfig, loadEnv } from "vite";
import fs from "fs";
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

dotenv.config({ path: ".env.local" });
dotenv.config();

let awsConfig = {
  default: undefined,
};

try {
  awsConfig = require(path.join(__dirname, "./aws-exports-es5.js"));
} catch (e) {}

module.exports = defineConfig({
  projectId: "z4jycd",
  retries: {
    runMode: 2,
  },
  env: {
    apiUrl: "http://localhost:3001",
    mobileViewportWidthBreakpoint: 414,
    coverage: false,
    codeCoverage: {
      url: "http://localhost:3001/__coverage__",
      exclude: "cypress/**/*.*",
    },
    defaultPassword: process.env.SEED_DEFAULT_USER_PASSWORD,
    paginationPageSize: process.env.PAGINATION_PAGE_SIZE,
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,

    // Auth0
    auth0_username: process.env.AUTH0_USERNAME,
    auth0_password: process.env.AUTH0_PASSWORD,
    auth0_domain: process.env.VITE_AUTH0_DOMAIN,

    // Okta
    okta_username: process.env.OKTA_USERNAME,
    okta_password: process.env.OKTA_PASSWORD,
    okta_domain: process.env.VITE_OKTA_DOMAIN,
    okta_client_id: process.env.VITE_OKTA_CLIENTID,
    okta_programmatic_login: process.env.OKTA_PROGRAMMATIC_LOGIN || false,

    // Amazon Cognito
    cognito_username: process.env.AWS_COGNITO_USERNAME,
    cognito_password: process.env.AWS_COGNITO_PASSWORD,
    cognito_domain: process.env.AWS_COGNITO_DOMAIN,
    cognito_programmatic_login: false,
    awsConfig: awsConfig.default,

    // Google
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.VITE_GOOGLE_CLIENTID,
    googleClientSecret: process.env.VITE_GOOGLE_CLIENT_SECRET,
  },
  component: {
    devServer(devServerConfig) {
      const viteConfig = require("./vite.config.ts");
      const conf = {
        define: {
          "process.env": loadEnv("development", process.cwd(), "VITE"),
        },
        server: {
          /**
           * start the CT dev server on a different port than the full RWA
           * so users can switch between CT and E2E testing without having to
           * stop/start the RWA dev server.
           */
          port: 3002,
        },
      };

      const resolvedViteConfig = mergeConfig(viteConfig, conf);
      return devServer({
        ...devServerConfig,
        framework: "react",
        viteConfig: resolvedViteConfig,
      });
    },
    // specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
    specPattern: "src/**/*.{cy,spec}.{js,jsx,ts,tsx}",

    supportFile: "cypress/support/component.ts",
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    // specPattern: "cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
    specPattern: "cypress/tests/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    watchForFileChanges: false,
    supportFile: "cypress/support/e2e.ts",
    viewportHeight: 1000,
    viewportWidth: 1280,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      on(
        "before:browser:launch",
        (
          browser = {
            family: "chromium",
            name: "",
            channel: "",
            displayName: "",
            version: "",
            majorVersion: "",
            path: "",
            isHeaded: false,
            isHeadless: false,
          },
          launchOptions
        ) => {
          prepareAudit(launchOptions);
        }
      );

      const testDataApiEndpoint = `${config.env.apiUrl}/testData`;

      const queryDatabase = ({ entity, query }, callback) => {
        const fetchData = async (attrs) => {
          const { data } = await axios.get(`${testDataApiEndpoint}/${entity}`);
          return callback(data, attrs);
        };

        return Array.isArray(query) ? Promise.map(query, fetchData) : fetchData(query);
      };

      on("task", {
        async "db:seed"() {
          // seed database with test data
          const { data } = await axios.post(`${testDataApiEndpoint}/seed`);
          return data;
        },

        // fetch test data from a database (MySQL, PostgreSQL, etc...)
        "filter:database"(queryPayload) {
          return queryDatabase(queryPayload, (data, attrs) => _.filter(data.results, attrs));
        },
        "find:database"(queryPayload) {
          return queryDatabase(queryPayload, (data, attrs) => _.find(data.results, attrs));
        },
      });

      // Custom Task I created to get a file name
      on("task", {
        getFileName(filePath: string) {
          // const fileName = path.basename(filePath);
          const fileName = path.basename(filePath);
          if (fs.existsSync(filePath)) {
            // Remove the last four characters ('.json') to get the base name
            return fileName.slice(0, -4);
          } else {
            throw new Error(`File not found: ${filePath}`);
          }
        },

        // Custom Task I created to rename file
        renameFile({ oldPath, newPath }: { oldPath: string; newPath: string }) {
          if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
            return `File renamed to ${newPath}`;
          } else {
            throw new Error(`File not found: ${oldPath}`);
          }
        },
      });

      on("task", {
        lighthouse: lighthouse(),
      });

      on("task", {
        saveLighthouseReport({ report, filename }: { report: string; filename: string }) {
          const reportsDir = path.resolve(__dirname, "cypress", "performance-report");

          // Create the directory if it doesn't exist
          if (!fs.existsSync(reportsDir)) {
            fs.mkdirSync(reportsDir, { recursive: true });
          }

          const filePath = path.join(reportsDir, filename);

          // Write the report to the file
          fs.writeFileSync(filePath, report, "utf8");
          console.log(`Lighthouse report saved to ${filePath}`);
          return null;
        },
      });

      codeCoverageTask(on, config);
      return config;
    },
  },
});
