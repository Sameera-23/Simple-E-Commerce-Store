const product =
JSON.parse(
    localStorage.getItem("selectedProduct")
);

if(!product){

    alert("No product selected!");

    window.location.href =
    "products.html";
}

let quantity = 1;

document.getElementById("productImage").src =
product.image;

document.getElementById("productName").innerText =
product.name;

document.getElementById("productPrice").innerText =
"₹" + product.price;

document.getElementById("productDescription").innerText =
"Premium quality outfit with modern design and comfortable fabric.";

function increaseQty(){

    quantity++;

    document.getElementById("quantity")
    .innerText = quantity;
}

function decreaseQty(){

    if(quantity > 1){

        quantity--;

        document.getElementById("quantity")
        .innerText = quantity;
    }
}

function addToCart(){

    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    const cartItem = {

        ...product,

        quantity: quantity
    };

    cart.push(cartItem);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("✅ Product Added To Cart");
}

function addToWishlist(){

    let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

    wishlist.push(product);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert("❤️ Added To Wishlist");
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
}function logout(){

    window.location.href =
    "index.html";
}