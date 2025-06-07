const products = [
    {name: 'Shampoo',price: 300},
    {name: 'Soap',price: 100},
    {name: 'Toothpaste',price: 150},
    {name: 'Conditioner',price: 400},
    {name: 'Lotion',price: 250},
]

function getShoppingTotal(products){
    let sum = 0;
    for (const product of products){
        sum+=product.price;
    }
    return sum;

}
const total = getShoppingTotal(products);
console.log(total);