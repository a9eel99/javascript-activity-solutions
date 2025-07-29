function factorialLoop(n) {
    if (n < 0) return "Invalid input";
    
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function generateMathProblem(number) {
    const result = factorialLoop(number);
    console.log(`Math Problem: What is ${number}! ?`);
    console.log(`Answer: ${number}! = ${result}`);
    return result;
}

function compareFactorialMethods(n) {
    console.time('Loop Method');
    const loopResult = factorialLoop(n);
    console.timeEnd('Loop Method');
    
    return loopResult;
}
console.log(factorialLoop(5)); 
console.log(factorialLoop(0)); 
generateMathProblem(6);
