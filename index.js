// define product inventory
const products = [
  { name: "Apple", price: "3" },
  { name: "Banana", price: 0.3 },
  { name: "Chocolate Bar", price: 1.2 },
  { name: "Detergent", price: 5.0 },
  { name: "Eggs", price: 2.5 },
  { name: "Milk", price: 1.5 },
  { name: "Orange Juice", price: 3.0 },
  { name: "Toothpaste", price: 2.0 },
  { name: "Ice cream", price: 4.6 },
];

// Function to search products
function searchProducts() {
  const query = document.getElementById("search-input").value.toUpperCase();
  const results = products.filter((product) =>
    product.name.toUpperCase().includes(query)
  );

  displayResults(results);
}

// Function to display search results
function displayResults(results) {
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (results.length > 0) {
    results.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.textContent = `${product.name}: $${product.price}`;
      resultsContainer.appendChild(productDiv);
    });
  } else {
    resultsContainer.textContent = "No products found.";
  }
}
