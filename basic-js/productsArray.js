let products = [
    {name: "product1", price: 20, stock : 5},
    {name: "product2", price: 5, stock: 2},
    {name:"prouct3", price: 2, stock: 0}
]

let avaibleProducts = products.filter(product => product.stock > 0);
console.log(avaibleProducts);
let totalPrice = avaibleProducts.reduce((prev, init) => prev + (init.stock * init.price), 0);
   

console.log(totalPrice);