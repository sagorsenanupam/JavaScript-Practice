const height = [65,66,68,72,78,60,63];
let tallest = height[0];
for (let i=0;i<height.length;i++){
    if (height[i] > tallest) {
        tallest = height[i];
    }
    
}
console.log(tallest);