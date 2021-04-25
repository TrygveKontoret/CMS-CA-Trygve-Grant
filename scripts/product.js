const query = document.location.search;
const parameter = new URLSearchParams(query);
const id = parameter.get("id");

const url = `https://trygvegrant.no/wp-json/wc/store/products/${id}`;
const out = document.querySelector(".flower");

flower = (productPage) => {
    console.log(productPage);
    document.title = `${productPage.name} - Flower Power`;
    for (image of productPage.images){
    let products = 
    `<div>
        <h2>${productPage.name}</h2>
        <img><img src="${image.src}"></img>
        <p>${productPage.description}</p>
        <p>Price: ${productPage.prices.currency_symbol}${productPage.prices.price}</p>
    </div>`;
    out.innerHTML += products;
    }
};


fetch(url)
    .then(response => response.json())
    .then(data => flower(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Erorr!"})
    .finally(()=> out.classList.remove("spinner"));
