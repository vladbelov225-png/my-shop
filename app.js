const products = [
  { id: 1, title: 'Ноутбук 15"',       category: 'Компьютеры', price: 85000 },
  { id: 2, title: 'Монитор 27"',       category: 'Компьютеры', price: 28000 },
  { id: 3, title: 'Клавиатура',        category: 'Аксессуары', price: 6500 },
  { id: 4, title: 'Мышь беспроводная', category: 'Аксессуары', price: 2500 },
  { id: 5, title: 'Блок питания 600W',       category: 'Компьютеры', price: 3700 },
  { id: 6, title: 'Корпус пк',       category: 'Компьютеры', price: 2900 },
  { id: 7, title: 'ИБП',       category: 'Сетевое оборудование', price: 9500 },
  { id: 8, title: 'Наушники игровые', category: 'Аксессуары', price: 4200 },
  { id: 9, title: 'Веб-камера Full HD', category: 'Аксессуары', price: 5800 }
];
let cart = [];

const catalog = document.getElementById('catalog');
const cartCount = document.getElementById('cart-count');
const cartSum = document.getElementById('cart-sum');
const clearCartBtn = document.getElementById('clear-cart');

function renderProducts() {
  catalog.innerHTML = products.map(p => `
    <div class="card">
      <div class="category">${p.category}</div>
      <h3>${p.title}</h3>
      <div class="price">${Number(p.price).toLocaleString('ru-RU')} ₽</div>
      <button data-id="${p.id}">В корзину</button>
    </div>
  `).join('');
}

function renderCart() {
  cartCount.textContent = cart.length;
  cartSum.textContent = cart
    .reduce((sum, p) => sum + Number(p.price), 0)
    .toLocaleString('ru-RU');
}

catalog.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;
  const product = products.find(p => p.id === Number(e.target.dataset.id));
  cart.push(product);
  renderCart();
});

clearCartBtn.addEventListener('click', () => {
    cart = [];
    renderCart();
});

renderProducts();