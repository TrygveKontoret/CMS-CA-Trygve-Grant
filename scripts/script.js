const url = "https://trygvegrant.no/wp-json/wc/store/products/";
const out = document.querySelector(".products");

productsAll = (products) => {
        console.log(products);
        out.innerHTML = "";
        for (product of products) {
            console.log(product);
            let newProduct = ` `
            for (image of product.images) {
                newProduct += `
                <div>
                <a href="/product.html?id=${product.id}"><img src="${image.thumbnail}"></a>
                <h3>${product.name}</h3>
                <p>£${product.prices.price}</p>
                <a href="/product.html?id=${product.id}">
                <button>View</button>
                </a>
                </div>`;
                out.innerHTML += newProduct;
            }
        }
    }

fetch(url)
    .then(response => response.json())
    .then(data => productsAll(data))
    .catch(error => {
        console.error(error);
        out.innerHTML = "Something went wrong!"})
    .finally(()=> out.classList.remove("spinner"));