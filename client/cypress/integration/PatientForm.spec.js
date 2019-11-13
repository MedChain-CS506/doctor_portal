describe("PatientForm test", function() {
  it("tests that PatientForm contains correct fields", function() {
    cy.visit("http://localhost:3000/patient-form");
    cy.get("#aadhar");
    cy.get("#first-name");
    cy.get("#last-name");
    cy.get("#sex");
    cy.get("#weight");
    cy.get("#date-of-birth");
    cy.get("#notes");
  });

  it("tests that correct input can be used on PatientForm", function() {
    cy.visit("http://localhost:3000/patient-form");
    cy.get("#aadhar").type("000011112222");
    cy.get("#patient-form").contains("000011112222");
    cy.get("#first-name").type("testFirstName");
    cy.get("#patient-form").contains("testFirstName");
    cy.get("#last-name").type("testLastName");
    cy.get("#patient-form").contains("testLastName");
    cy.get("#sex")
      .find("#sex-choices")
      .find("label")
      .first()
      .click();
    //cy.get("#sex").find("#sex-choices").find('label').first().should('be.selected')
    cy.get("#weight").type("65");
    cy.get("#patient-form").contains("65");
    cy.get("#date-of-birth").type("2000-01-01");
    cy.get("#patient-form").contains("2000-01-01");
    cy.get("#notes").type("no diseases or allergies");
    cy.get("#patient-form").contains("no diseases or allergies");
  });

  it("tests that incorrect input is correctly noted", function() {
    cy.visit("http://localhost:3000/patient-form");
    cy.get("#aadhar").type("000011112222extralength");
    cy.get("#patient-form").contains("aadhar must be at most 12 characters");
    cy.get("#weight").type("invalidString");
    cy.expect("#patient-form").to.not.contains("invalidString");
  });
});
