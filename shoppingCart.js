const products = [
    {name: 'Shampoo',price: 300,quantity:2},
    {name: 'Soap',price: 100,quantity:1},
    {name: 'Toothpaste',price: 150,quantity:2},
    {name: 'Conditioner',price: 400,quantity:3},
    {name: 'Lotion',price: 250,quantity:1},
]

function cartTotal(products){
    let total = 0;
    for (const product of products) {
        total += product.price * product.quantity;
    }
    return total;
}
const shoppingCost = cartTotal(products);
console.log(shoppingCost);