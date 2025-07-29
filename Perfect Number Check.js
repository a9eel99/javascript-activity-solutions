function isPerfect(n) {
    if (n <= 1) return false;
    
    let sum = 1; 
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) { 
                sum += n / i;
            }
        }
    }
    
    return sum === n;
}

function findDivisors(n) {
    let divisors = [];
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function analyzePerfectNumber(n) {
    const divisors = findDivisors(n);
    const sum = divisors.reduce((a, b) => a + b, 0);
    const isPerfectNum = sum === n;
    
    console.log(`Number: ${n}`);
    console.log(`Divisors: [${divisors.join(', ')}]`);
    console.log(`Sum of divisors: ${sum}`);
    console.log(`Is perfect: ${isPerfectNum ? '✅' : '❌'}`);
    
    return isPerfectNum;
}

console.log(isPerfect(6));   
console.log(isPerfect(28));  
console.log(isPerfect(12));  
analyzePerfectNumber(6);
analyzePerfectNumber(28);
