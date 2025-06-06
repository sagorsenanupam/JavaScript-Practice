const today = new Date()
const date = new Date('2062-10-09')
console.log(date.getFullYear());

const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleDateString('en-gb'));
// Moment.js use kore ei date time ke format kora jabe
