fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    let products = data.products;
    let container = document.getElementById("products");
    console.log("Products", products);
    products.forEach(product => {

      let card = document.createElement("div");
      card.className = "card";

      let img = document.createElement("img");
      img.src = product.thumbnail;

      let title = document.createElement("h3");
      title.innerText = product.title;

      let price = document.createElement("p");
      price.innerText = "₹ " + product.price;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);

      container.appendChild(card);
      card.addEventListener("click", () => {
        console.log("Card clicked", product.id);
        
        window.location.href = `product.html?id=${product.id}`;
      });
    });
  })
  .catch(err => console.log(err));



const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (!query) return;

  // Save to localStorage

  let history = JSON.parse(localStorage.getItem("searchHistory")) || [];

  if (!history.includes(query)) {
     history.push({
    query: query,
    time: Date.now()
  });
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }

  
  // Redirect with query param
  window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  searchInput.value = "";
});














const suggestionBox = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  console.log("Suggestion working");

  const text = searchInput.value.toLowerCase();
  const history = JSON.parse(localStorage.getItem("searchHistory")) || [];

  // Filter based on query field
  const matches = history.filter(item =>
    item.query.toLowerCase().includes(text)
  );

  // Clear previous suggestions
  suggestionBox.innerHTML = "";

  // Show suggestions
  matches.forEach(item => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.innerText = item.query;

    div.addEventListener("click", () => {
      searchInput.value = item.query;
      suggestionBox.innerHTML = "";
    });

    suggestionBox.appendChild(div);
  });
});







//product description

// let card = document.getElementsByClassName("card");

// card.addEventListener("click", () => {
//   console.log("onclick card",card);
//   window.location.href = `product.html?id=${product.id}`;
// });