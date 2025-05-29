// productPage.js

const productId = localStorage.getItem('selectedProductId');
const product = products.find(p => p.id == productId);

if (product) {
  const mainImg = document.getElementById("mainimg");
  const nameEl = document.getElementById("product-name");
  const priceEl = document.getElementById("product-price");
  const descEl = document.getElementById("product-description");
  const catEl = document.getElementById("product-category");
  const smallImagesDiv = document.getElementById("small-images");

  if (mainImg) mainImg.src = product.images[0];
  if (nameEl) nameEl.innerText = product.name;
  if (priceEl) priceEl.innerText = "$" + product.price;
  if (descEl) descEl.innerText = product.description;
  if (catEl) catEl.innerText = product.category;

  if (smallImagesDiv && Array.isArray(product.images)) {
    smallImagesDiv.innerHTML = '';

    product.images.forEach(img => {
      const div = document.createElement("div");
      div.className = "small-image-col";
      div.innerHTML = `<img src="${img}" width="100%" class="small-img" alt="">`;

      // Add click event to change main image
      div.querySelector('img').addEventListener('click', () => {
        if (mainImg) mainImg.src = img;
      });

      smallImagesDiv.appendChild(div);
    });
  }
} else {
  const detailEl = document.getElementById("prodetail");
  if (detailEl) detailEl.innerHTML = "<h2>Product not found</h2>";
}
