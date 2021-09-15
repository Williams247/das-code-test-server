const router = require('express').Router();

// Sum total
let bigSum = 0;

// Function that generates random number
const handleGenerateRandomNum = () => {
    const randomNumbr = Math.floor(Math.random() * 100)
    const testFactor = randomNumbr % 2
    if (testFactor === 1) {
        if (randomNumbr + 1 === 1) {
            bigSum = randomNumbr + 2
            return bigSum
        } else {
            bigSum = randomNumbr + 2
            return bigSum
        }
    } else if (testFactor === 0) {
        if (randomNumbr + 1 === 1) {
            bigSum = randomNumbr + 2
            return bigSum
        } else {
            bigSum = randomNumbr + 1
            return bigSum
        }
    }
}

// Possible sums
let possibleSums = null;

// Funcion to create possible sums
const handleDivideSum = divisor => {
    possibleSums = [
        bigSum / divisor + 3,
        bigSum / divisor - 3,
        bigSum / divisor - 5,
        bigSum / divisor + 5
    ]
    return possibleSums
}

// Send to the client the result
router.get('/getsecret', (request, response) => {
    response.status(200).json({
        total: handleGenerateRandomNum(),
        possibleSums: handleDivideSum(4)
    })
});

module.exports = router;
