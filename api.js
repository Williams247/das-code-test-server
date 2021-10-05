// Express router
const router = require("express").Router();

let bigPrime = 0;
let arr = [];
let sumsExpected = 4;

const isPrime = (num) => {
  // Checks to see if the number is lesser than 2, because prime numbers starts from 2 upwards
  if (num < 2) return false;
  // Loop to generate prime numbers
  for (var i = 2; i < num; i++) {
    // Checks for even numbers
    if (num % i == 0) return false;
  }
  // Returns the right number as a whole prime
  return true;
};

const handleGenerateRandomNum = () => {
  // Runs a loop check from 0 - 100
  for (var i = 0; i < 100; i++) {
    // When the function is invoked, the number returned is validated for prime numbers
    if (isPrime(i)) {
      // Prime numbers appended to an array
      arr.push(i);
    }
    // When i is the last number which is 97 (Prime range)
    if (i === 97) {
      bigPrime = arr[Math.floor(Math.random() * arr.length)];
      console.log(bigPrime);
      let val = Math.floor(bigPrime / sumsExpected);
      let diff = bigPrime - val * sumsExpected;
      const realSums = [val - diff, val + diff, val, val + diff];
      console.log(realSums);
      return {
        total: bigPrime,
        possibleSums: realSums
      }
    }
  }
};

// Send to the client the result
module.exports = router.get("/getsecret", (request, response) => {
  response.status(200).json({
    result: handleGenerateRandomNum()
  });
});
