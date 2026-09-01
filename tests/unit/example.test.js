const { expect } = require('chai');

describe('Ejemplo de prueba unitaria', () => {
  it('debería sumar dos números correctamente', () => {
    const resultado = 1 + 2;
    expect(resultado).to.equal(3);
  });

  it('debería validar que una cadena no esté vacía', () => {
    const texto = 'QA Testing';
    expect(texto).to.not.be.empty;
  });
});
