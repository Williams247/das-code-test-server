// Express router
const router = require('express').Router();

// Random total
let randomSum = 0;

// Function that generates random number
const handleGenerateRandomNum = () => {
    const randomNumbr = Math.floor(Math.random() * 100)
    const testFactor = randomNumbr % 2
    if (testFactor === 0) {
        randomSum = randomNumbr + 3
        console.log(randomNumbr + 3)
    } else if (testFactor === 1) {
        randomSum = randomNumbr
        console.log(randomNumbr)
    }
}

// Possible sums
let possibleSums = null;

let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;

// Funcion to create possible sums
const handleDivideSum = () => {
   // Sums
    p1 = Math.floor(randomSum / 4) - 2
    p2 = Math.floor(randomSum / 4) + 1
    p3 = Math.floor(randomSum / 4) + 1
    p4 = Math.floor(randomSum / 4) - 3

    possibleSums = [p1, p2, p3, p4]
    
    const totalPrimeSum = p1 + p2 + p3 + p4

    return {
        possibleSums: possibleSums,
        total: (Math.abs(totalPrimeSum))
    }
}

// Send to the client the result
router.get('/getsecret', (request, response) => {
    handleGenerateRandomNum();
    response.status(200).json({
        result: handleDivideSum()
    });
});

module.exports = router;
