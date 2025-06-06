// 12 inches = 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

// feet inch

function inchToFeet2(inch) {
  const feet = inch / 12;
  const feetnumber = parseInt(feet);
  const inchnumber = inch % 12;
  const result = feetnumber + "ft " + inchnumber + "inch.";
  return result;
}
const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);
