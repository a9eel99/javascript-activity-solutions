function findMaximum(arr) {
    return Math.max(...arr);
}

function findMaximumLoop(arr) {
    if (arr.length === 0) return undefined;
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMaximumReduce(arr) {
    return arr.reduce((max, current) => current > max ? current : max);
}

function analyzeStepData(dailySteps) {
    const maxSteps = findMaximum(dailySteps);
    const maxDay = dailySteps.indexOf(maxSteps) + 1;
    const average = Math.round(dailySteps.reduce((a, b) => a + b, 0) / dailySteps.length);
    
    console.log(`📊 Step Analysis:`);
    console.log(`Best day: Day ${maxDay} with ${maxSteps.toLocaleString()} steps`);
    console.log(`Daily average: ${average.toLocaleString()} steps`);
    console.log(`Goal exceeded by: ${maxSteps - 10000} steps`);
    
    return maxSteps;
}

console.log(findMaximum([1, 2, 3, 4]));
console.log(findMaximum([1000, 1500, 1200, 1800])); 
analyzeStepData([8500, 12000, 9800, 15000, 11200, 7800, 13500]);
