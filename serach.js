
let param = new URLSearchParams(window.location.search)
let query = param.get("q");

fetch("https://dummyjson.com/products")
.then(res=>res.json())
.then(data =>{
    let products = data.products;
    let filtered = products.filter((p)=>{
        return   p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    })
    
    // let products = data.products;
    let container = document.getElementById("results");
    filtered.forEach(product => {
      
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
    //   document.getElementsByTagName("title").innerText=`Searching for ${query}`
      document.getElementById("heading").innerText=`Searching for ${query}`

    })
})
.catch((error)=>{
    console.log("Errors",error);


})