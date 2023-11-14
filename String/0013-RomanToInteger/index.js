// Roman numerals
const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function convertRomanToInteger(str) {
  let sum = 0;
  for (let index = 0; index < str.length; index++) {
    // first index
    const current = romans[str[index]];
    // second index
    const next = romans[str[index+1]] || 0;
    // comparision
    if (next > current) sum -= current
    else sum += current
  }
  return sum
}




// Runable for NodeJS
// > node index.js
// ~ Happy Coding !
(() => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Roman Input : ', num => {
    console.log(`Roman -> ${num}`);
    console.log(`Int -> ${convertRomanToInteger(num)}`);
    readline.close();
  });
})();
