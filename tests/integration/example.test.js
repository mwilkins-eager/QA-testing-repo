const { expect } = require('chai');

describe('Ejemplo de prueba de integración', () => {
  it('debería verificar la integración entre dos módulos', () => {
    const moduloA = { valor: 10 };
    const moduloB = { multiplicador: 2 };
    const resultado = moduloA.valor * moduloB.multiplicador;
    expect(resultado).to.equal(20);
  });
});
