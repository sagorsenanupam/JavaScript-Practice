/**
 * Year will be a leap year if the year is divisible by 4
 */

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const islipi = isLeapYear(2020);
console.log(islipi);
