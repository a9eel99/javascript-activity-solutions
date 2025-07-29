function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let sequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    
    return sequence;
}

function generateStepGoals(days) {
    const fibSequence = fibonacci(days);
    console.log(`Your ${days}-day step count goals (Fibonacci pattern):`);
    fibSequence.forEach((steps, index) => {
        console.log(`Day ${index + 1}: ${steps * 1000} steps`);
    });
    return fibSequence;
}
console.log(fibonacci(8));
generateStepGoals(7);
