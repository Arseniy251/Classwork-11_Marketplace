let productsGrid = document.getElementById("products-grid");
let productsArray = [];

let url =
	"https://my-json-server.typicode.com/Arseniy251/Classwork-11_Marketplace/";

fetch(url + "products/").then(async function (response) {
	let products = await response.json();

	productsGrid.innerHTML = "";
	products.forEach((product) => {
		productsArray.push(product);

		let productElement = document.createElement("div");
		productElement.classList.add("product");
		productElement.innerHTML = `
            <h2 class="product-name">${product.name}</h2>
            <img class="product-photo" src="${product.photo_url}" alt="${product.name}">
            <p class="product-description"><b>Description:</b> ${product.description}</p>
            <a href="#">Seller Profile</a>
            <button>Buy now</button>
        `;
		productsGrid.append(productElement);
	});
});
