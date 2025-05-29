// js/main.js

function renderProducts(containerId, productList) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  productList.forEach(product => {
    const card = document.createElement('div');
    card.className = 'pro';

    // Click event only in JS (best practice)
    card.addEventListener('click', () => {
      viewProduct(product.id);
    });

    // Clean and minimal innerHTML
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="des">
        <span>${product.brand}</span>
        <h5>${product.name}</h5>
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>   
        </div>
        <h4>$${product.price}</h4>
      </div>
      <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
    `;

    container.appendChild(card);
  });
}

function viewProduct(id) {
  localStorage.setItem('selectedProductId', id);
  window.location.href = 'product.html';
}
