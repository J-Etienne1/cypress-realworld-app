describe("File Name Task", () => {
  it("reads the file name and saves it as a variable", () => {
    const filePath = "cypress/tests/learning/test-file-NEW.json"; // Specify the path to your file

    // Call the `getFileName` task to retrieve the file name
    cy.task("getFileName", filePath).then((fileName) => {
      // Assert that fileName is a string
      const fileNameStr = fileName as string;
      // Log the file name to the Cypress command log
      cy.log(fileNameStr);
      // You can now use `fileNameStr` as a variable in your test
    });
  });
});
