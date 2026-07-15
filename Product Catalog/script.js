const products = [

{
    name:"Laptop",
    price:"₹55,000",
    description:"A18, 8GB RAM, 512GB SSD",
    image:"resources/laptop.webp"
},

{
    name:"Smartphone",
    price:"₹18,999",
    description:"8GB RAM, 128GB Storage",
    image:"resources/phone.webp"
},

{
    name:"Headphones",
    price:"₹2,999",
    description:"Wireless Bluetooth Headphones",
    image:"resources/headphones.webp"
}

];

let output = "";

products.forEach(function(product){

output += `

<div class="card">

<img src="${product.image}">

<h2>${product.name}</h2>

<p class="price">${product.price}</p>

<p>${product.description}</p>

<button onclick="buyProduct('${product.name}')">
Buy Now
</button>

</div>

`;

});

document.getElementById("products").innerHTML = output;

function buyProduct(productName){

alert(productName + " added to cart!");

}