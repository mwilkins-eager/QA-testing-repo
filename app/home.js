// Lógica del homepage: renderizar productos y agregar al carrito

if (!Auth.requireAuth()) {
  // requireAuth redirige a login si no hay sesión
} else {
  document.addEventListener('DOMContentLoaded', () => {
    const productsEl = document.getElementById('products');
    const cartCountEl = document.getElementById('cart-count');

    function updateCartCount() {
      cartCountEl.textContent = Cart.count();
    }

    // Renderizar productos
    productsEl.innerHTML = PRODUCTS.map(p => `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <div class="price">$${p.price}</div>
        <button class="btn btn-small add-to-cart" data-id="${p.id}">Agregar al carrito</button>
      </div>
    `).join('');

    // Evento para agregar al carrito
    productsEl.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart')) {
        const id = parseInt(e.target.dataset.id, 10);
        Cart.add(id);
        updateCartCount();

        // Feedback visual temporal
        e.target.textContent = 'Agregado ✓';
        setTimeout(() => {
          e.target.textContent = 'Agregar al carrito';
        }, 1000);
      }
    });

    updateCartCount();
  });
}
