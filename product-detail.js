const products = [
  {
    id: 1,
    brand: "Glowify",
    name: "Vitamin C Serum",
    description: "High quality vitamin C serum for daily skincare.",
    price: 29.90,
    commission: 12,
    image: "https://via.placeholder.com/600x600"
  }
];

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));
const product = products.find(p => p.id === productId);

const container = document.getElementById("productDetail");

if (product) {
  container.innerHTML = `
    <img src="${product.image}" style="width:100%; border-radius:12px;" />
    <h2>${product.brand}</h2>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p><strong>Price:</strong> €${product.price}</p>
    <p><strong>Commission:</strong> ${product.commission}%</p>
    <button class="button">Generate affiliate link</button>
  `;
}
