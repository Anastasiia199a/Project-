export function getAllCategories() {
  return fetch('http://localhost:3333/categories/all').then((res) =>
    res.json()
  );
}

export function getAllProducts() {
  return fetch('http://localhost:3333/products/all').then((res) => res.json());
}

export function getProductById(id) {
  return fetch(`http://localhost:3333/products/${id}`)
    .then((res) => res.json())
    .then((products) => products[0]);
}

export function sendSale(data) {
  return fetch('http://localhost:3333/sale/send/', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function sendOrder(order) {
  return fetch('http://localhost:3333/order/send/', {
    method: 'POST',
    body: JSON.stringify(order),
  }).then((res) => res.json());
}
