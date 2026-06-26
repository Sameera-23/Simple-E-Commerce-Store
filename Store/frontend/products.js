let products = [];

const container =
document.getElementById("productsContainer");

async function loadProducts() {

    try {

        const response =
        await fetch(
            "http://localhost:5000/api/products"
        );

        products =
        await response.json();

        displayProducts(products);

    } catch (error) {

        console.log(error);

        alert("Cannot load products");
    }
}

function displayProducts(productList){

    container.innerHTML = "";

    productList.forEach(product => {

        container.innerHTML += `
        <div class="product-card">

            <img
                src="${product.image}"
                onclick="viewProduct(${product.id})"
                class="product-image">

            <h3>${product.name}</h3>

            <p class="rating">
                ${product.rating}
            </p>

            <p class="price">
                ₹${product.price}
            </p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>

            <button onclick="addToWishlist(${product.id})">
                Wishlist
            </button>

        </div>
        `;
    });
}

function addToCart(id){

    const product =
    products.find(p => p.id === id);

    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    cart.push({
        ...product,
        quantity: 1
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("✅ Product Added To Cart");
}

function addToWishlist(id){

    const product =
    products.find(p => p.id === id);

    let wishlist =
    JSON.parse(localStorage.getItem("wishlist"))
    || [];

    wishlist.push(product);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert("❤️ Added To Wishlist");
}

function searchProducts(){

    const searchText =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

    const filteredProducts =
    products.filter(product =>
        product.name
        .toLowerCase()
        .includes(searchText)
    );

    displayProducts(filteredProducts);
}

function viewProduct(id){

    const product =
    products.find(p => p.id === id);

    localStorage.setItem(
        "selectedProduct",
        JSON.stringify(product)
    );

    window.location.href =
    "product-details.html";
}

function logout(){

    window.location.href =
    "index.html";
}

loadProducts();