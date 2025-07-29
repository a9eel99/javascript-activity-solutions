function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}


function gcdRecursive(a, b) {
    if (b === 0) return Math.abs(a);
    return gcdRecursive(b, a % b);
}

function analyzeCompression(num1, num2) {
    const divisor = gcd(num1, num2);
    console.log(`Data Analysis:`);
    console.log(`Numbers: ${num1}, ${num2}`);
    console.log(`GCD: ${divisor}`);
    console.log(`Compression ratio: ${num1/divisor}:${num2/divisor}`);
    return divisor;
}


console.log(gcd(56, 98)); 
console.log(gcd(48, 18));  
console.log(gcd(17, 13)); 
analyzeCompression(120, 80); 
