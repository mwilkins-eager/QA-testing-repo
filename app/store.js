// Datos de productos (simulando una API)
const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999, image: 'https://picsum.photos/seed/laptop/200/120' },
  { id: 2, name: 'Mouse', price: 25, image: 'https://picsum.photos/seed/mouse/200/120' },
  { id: 3, name: 'Teclado', price: 45, image: 'https://picsum.photos/seed/keyboard/200/120' },
  { id: 4, name: 'Monitor', price: 200, image: 'https://picsum.photos/seed/monitor/200/120' },
  { id: 5, name: 'Auriculares', price: 80, image: 'https://picsum.photos/seed/headphones/200/120' },
  { id: 6, name: 'Webcam', price: 60, image: 'https://picsum.photos/seed/webcam/200/120' },
];

// Gestión del carrito en localStorage
const Cart = {
  get() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  },
  save(items) {
    localStorage.setItem('cart', JSON.stringify(items));
  },
  add(productId) {
    const items = this.get();
    const existing = items.find(i => i.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ id: productId, qty: 1 });
    }
    this.save(items);
    return items;
  },
  remove(productId) {
    const items = this.get().filter(i => i.id !== productId);
    this.save(items);
    return items;
  },
  clear() {
    localStorage.removeItem('cart');
  },
  count() {
    return this.get().reduce((sum, i) => sum + i.qty, 0);
  },
  total() {
    return this.get().reduce((sum, i) => {
      const p = PRODUCTS.find(pr => pr.id === i.id);
      return sum + (p ? p.price * i.qty : 0);
    }, 0);
  },
};

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}
