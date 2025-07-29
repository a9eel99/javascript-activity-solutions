function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    
    return true;
}

function generateAccessCode(number) {
    if (isPrime(number)) {
        return `✅ Access code ${number} is VALID (Prime number)`;
    } else {
        return `❌ Access code ${number} is INVALID (Not a prime number)`;
    }
}

function findNextPrime(start) {
    let current = start + 1;
    while (!isPrime(current)) {
        current++;
    }
    return current;
}


console.log(isPrime(7));   
console.log(isPrime(10));  
console.log(isPrime(17));  
console.log(generateAccessCode(23));
console.log(findNextPrime(20));
