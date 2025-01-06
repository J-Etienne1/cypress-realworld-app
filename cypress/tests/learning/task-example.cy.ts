import path from "path";

describe("File Name Task", () => {
  it.skip("reads the file name and saves it as a variable", () => {
    // Specify the path to your file
    const filePath = "cypress/tests/learning/test-file.json";

    // Call the `getFileName` task to retrieve the file name
    cy.task("getFileName", filePath).then((fileName) => {
      // Assert that fileName is a string
      const fileNameStr = fileName as string;

      // Get the base name without the extension
      const baseName = path.basename(fileNameStr, path.extname(fileNameStr)); // This will return 'test-file'

      // Log the base name to the Cypress command log
      cy.log(baseName);

      // You can now use `fileNameStr` as a variable in your test
      // Log the file name to the Cypress command log
      //   cy.log(fileNameStr); // commented out as using slice in the Task

      const uniqueDateTime = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
      // Create a new formatted report name
      const reportName = `${baseName}-report-${uniqueDateTime}`;
      // Log the new formatted report name
      cy.log(reportName);

      // Rename the original file to the new report name
      cy.task("renameFile", {
        oldPath: filePath,
        newPath: `cypress/tests/learning/${reportName}.json`,
      });
    });
  });
});
