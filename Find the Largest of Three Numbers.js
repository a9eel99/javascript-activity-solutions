function findLargestSales(region1, region2, region3) {
    const largest = Math.max(region1, region2, region3);
    console.log(`Sales Analysis:`);
    console.log(`Region 1: $${region1}`);
    console.log(`Region 2: $${region2}`);
    console.log(`Region 3: $${region3}`);
    console.log(`🏆 Top performing region: $${largest}`);
    return largest;
}

function findLargestManual(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}

findLargestSales(500, 700, 650);
findLargestSales(1200, 900, 1500); 
