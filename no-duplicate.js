/**
 * array has some duplicate elements
 * []
 */

const biriyaniKhor = ['abul', 'babul', 'cabul', 'dabul', 'abul', 'babul'];
const numbers = [1,5,4,1,2,5,4,3]

function noDuplicate(arr){
    const unique = [];
    for (const item of arr){
        if (unique.includes(item) ===false){
            unique.push(item);
        }

    }
    console.log(unique);
}
noDuplicate(biriyaniKhor);