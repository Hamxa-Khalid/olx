import "cypress-file-upload";
export const uploadFile = (fileInputSelector, filePath) => {
  cy.get(fileInputSelector).attachFile(filePath);
};
