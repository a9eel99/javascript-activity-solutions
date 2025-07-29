function factorial(n) {
    if (n < 0) return "Invalid input: Factorial is not defined for negative numbers";
    if (n === 0 || n === 1) return 1;
    
    return n * factorial(n - 1);
}

function calculateWorkoutRoutines(exercises) {
    const arrangements = factorial(exercises);
    console.log(`With ${exercises} exercises, you can create ${arrangements} different workout routines!`);
    return arrangements;
}
console.log(factorial(5)); 
console.log(factorial(3)); 
console.log(factorial(0));
calculateWorkoutRoutines(4);
