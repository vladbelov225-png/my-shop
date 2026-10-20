const products = [
  { id: 1, title: 'Ноутбук 15"',       category: 'Компьютеры', price: 85000 },
  { id: 2, title: 'Монитор 27"',       category: 'Компьютеры', price: 28000 },
  { id: 3, title: 'Клавиатура',        category: 'Аксессуары', price: 6500 },
  { id: 1, title: 'Блок питания 600W',       category: 'Компьютеры', price: 3700 },
  { id: 1, title: 'Корпус пк',       category: 'Компьютеры', price: 2900 },
  { id: 1, title: 'ИБП',       category: 'Сетевое оборудование', price: 9500 },
  { id: 4, title: 'Мышь беспроводная', category: 'Аксессуары', price: 2500 }
];

const catalog = document.getElementById('catalog');

function renderProducts() {
  catalog.innerHTML = products.map(p => `
    <div class="card">
      <div class="category">${p.category}</div>
      <h3>${p.title}</h3>
      <div class="price">${p.price.toLocaleString('ru-RU')} ₽</div>
      <button data-id="${p.id}">В корзину</button>
    </div>
  `).join('');
}

catalog.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const productId = Number(event.target.dataset.id);
    const product = products.find(p => p.id === productId);
    if (product) {
      console.log(product.title);
    }
  }
});


renderProducts();