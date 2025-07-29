function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function scheduleBuses(route1Interval, route2Interval) {
    const meetingTime = lcm(route1Interval, route2Interval);
    console.log(`🚌 Bus Schedule Analysis:`);
    console.log(`Route 1 interval: every ${route1Interval} minutes`);
    console.log(`Route 2 interval: every ${route2Interval} minutes`);
    console.log(`Both buses meet at station every ${meetingTime} minutes`);
    return meetingTime;
}

function lcmMultiple(numbers) {
    return numbers.reduce((acc, num) => lcm(acc, num));
}
console.log(lcm(4, 6));   
console.log(lcm(8, 14)); 
scheduleBuses(15, 20);    
console.log(lcmMultiple([4, 6, 8])); 
