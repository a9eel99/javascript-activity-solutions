function findMinimum(arr) {
    return Math.min(...arr);
}

function findMinimumLoop(arr) {
    if (arr.length === 0) return undefined;
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function analyzeBudget(monthlyExpenses) {
    const minExpense = findMinimum(monthlyExpenses);
    const minMonth = monthlyExpenses.indexOf(minExpense) + 1;
    const maxExpense = Math.max(...monthlyExpenses);
    const average = Math.round(monthlyExpenses.reduce((a, b) => a + b, 0) / monthlyExpenses.length);
    
    console.log(`💰 Budget Analysis:`);
    console.log(`Best month: Month ${minMonth} with $${minExpense}`);
    console.log(`Highest expense: $${maxExpense}`);
    console.log(`Monthly average: $${average}`);
    console.log(`Savings potential: $${maxExpense - minExpense}`);
    
    return minExpense;
}

console.log(findMinimum([1, 2, 3, 4])); 
console.log(findMinimum([500, 200, 300, 100])); 
analyzeBudget([1200, 800, 950, 1100, 750, 900]);
