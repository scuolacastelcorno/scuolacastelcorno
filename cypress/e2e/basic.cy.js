describe("site navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Scuola di Alpinismo");
  });

  it("navigates to the courses page", () => {
    cy.get('a[href="/corsi"]').eq(0).click({force: true});
    cy.url().should("include", "/corsi");
    cy.get("h1").contains(/Stagione/i);
  });

  it("navigates to the school page", () => {
    cy.get('a[href="/scuola"]').eq(0).click({force: true});
    cy.url().should("include", "/scuola");
    cy.get("h1").contains(/La Scuola/i);
  });

  it("navigates to the contact page", () => {
    cy.get('a[href="/contact"]').eq(0).click({force: true});
    cy.url().should("include", "/contact");
    cy.get("h1").contains(/Contatti/i);
  });
});

describe("courses", () => {
  it("lists the current courses", () => {
    cy.visit("/corsi");
    cy.get("ul#blog-list li").should("have.length", 4);
  });
});
