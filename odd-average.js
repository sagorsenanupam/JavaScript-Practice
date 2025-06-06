/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */
function oddAverage(arr) {
    let sum = 0;
    let count = 0;
    for (const number of numbers){
        if (number%2===1){
            sum += number;
            count++
        }

    }
    const result = sum/count;
    return result;


}
const numbers = [49,51,65,85,96]
const avg = oddAverage(numbers);
console.log(avg); 