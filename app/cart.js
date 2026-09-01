// Lógica del carrito: listar items, calcular total, finalizar compra

if (!Auth.requireAuth()) {
  // requireAuth redirige a login si no hay sesión
} else {
  document.addEventListener('DOMContentLoaded', () => {
    const cartItemsEl = document.getElementById('cart-items');
    const cartSummaryEl = document.getElementById('cart-summary');
    const cartTotalEl = document.getElementById('cart-total');
    const emptyMsgEl = document.getElementById('empty-msg');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutMsg = document.getElementById('checkout-msg');
    const clearBtn = document.getElementById('clear-btn');

    function render() {
      const items = Cart.get();
      const count = items.reduce((s, i) => s + i.qty, 0);

      if (count === 0) {
        cartItemsEl.innerHTML = '';
        cartSummaryEl.hidden = true;
        emptyMsgEl.hidden = false;
        return;
      }

      emptyMsgEl.hidden = true;
      cartSummaryEl.hidden = false;
      checkoutMsg.hidden = true;

      cartItemsEl.innerHTML = items.map(item => {
        const p = getProduct(item.id);
        return `
          <div class="cart-item">
            <div>
              <strong>${p.name}</strong> - $${p.price} x ${item.qty} = $${p.price * item.qty}
            </div>
            <button class="btn btn-small btn-secondary remove-item" data-id="${item.id}">Quitar</button>
          </div>
        `;
      }).join('');

      cartTotalEl.textContent = Cart.total();
    }

    // Quitar item
    cartItemsEl.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-item')) {
        const id = parseInt(e.target.dataset.id, 10);
        Cart.remove(id);
        render();
      }
    });

    // Finalizar compra
    checkoutBtn.addEventListener('click', () => {
      Cart.clear();
      checkoutMsg.hidden = false;
      cartItemsEl.innerHTML = '';
      cartSummaryEl.hidden = true;
      emptyMsgEl.hidden = false;
    });

    // Vaciar carrito
    clearBtn.addEventListener('click', () => {
      Cart.clear();
      render();
    });

    render();
  });
}
