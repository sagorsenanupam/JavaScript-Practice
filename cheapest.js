const phones = [
    {name: "iPhone 14", price: 20000,camera: "12MP",color: "Black"},
    {name: "samsung", price: 25000,camera: "16MP",color: "blue"},
    {name: "Walton", price: 10000,camera: "5MP",color: "white"},
    {name: "HTC", price: 40000,camera: "12MP",color: "Black"},
    {name: "Xioami", price: 30000,camera: "12MP",color: "Black"},
    
]

function getCheapestPhone(phones){
    let min = phones[0];
    for (const phone of phones){
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}
function getCostlyPhone(phones){
    let max = phones[0];
    for (const phone of phones){
        if (phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}
const cheap = getCheapestPhone(phones);
console.log(cheap);
const costly = getCostlyPhone(phones);
console.log(costly);