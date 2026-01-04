const products = [
  {
    id: 1,
    brand: "Glowify",
    name: "Vitamin C Serum",
    price: 29.90,
    commission: 12,
    image: "https://via.placeholder.com/400x400"
  },
  {
    id: 2,
    brand: "FlexTech",
    name: "Phone Tripod",
    price: 24.90,
    commission: 15,
    image: "https://via.placeholder.com/400x400"
  }
];

const grid = document.getElementById("productGrid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" />
    <div class="product-info">
      <h3>${product.brand}</h3>
      <p>${product.name}</p>
      <p>€${product.price}</p>
      <span class="badge">${product.commission}% commission</span>
      <button class="button" onclick="openProduct(${product.id})">
        Get link
      </button>
    </div>
  `;
  grid.appendChild(card);
});

function openProduct(id) {
  window.location.href = `product.html?id=${id}`;
}
