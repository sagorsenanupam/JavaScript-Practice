const disha = 56;
const salman = 45;
if (disha > salman) {
  console.log("Disha wins");
}else{
    console.log("Salman wins");
}

// inside a function
function getMax(num1,num2){
    if (num1 > num2) {
        return num1;
    }else{
        return num2;
    }
}
const max = getMax(10, 20);
console.log('max of two is,',max)