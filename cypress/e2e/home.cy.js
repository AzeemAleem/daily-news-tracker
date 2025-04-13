describe("Home Page", () => {
    it("should load homepage", () => {
        cy.visit("http://localhost:3000");
        cy.contains("Most Popular");
    });
});