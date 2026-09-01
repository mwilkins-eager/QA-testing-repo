describe('Ejemplo de prueba End-to-End', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('debería cargar la página principal', () => {
    cy.title().should('not.be.empty');
  });

  it('debería mostrar el encabezado correcto', () => {
    cy.get('h1').should('be.visible');
  });
});
