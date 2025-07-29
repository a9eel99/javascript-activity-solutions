function sumOfDigits(number) {
    return Math.abs(number)
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
}

function calculateRewardPoints(purchaseId) {
    const points = sumOfDigits(purchaseId);
    console.log(`Purchase ID: ${purchaseId}`);
    console.log(`Reward Points: ${points}`);
    return points;
}

function sumOfDigitsLoop(number) {
    let sum = 0;
    number = Math.abs(number);
    
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    
    return sum;
}

console.log(sumOfDigits(1234)); 
console.log(sumOfDigits(987)); 
calculateRewardPoints(56789);  
