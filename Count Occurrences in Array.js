function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}

function countOccurrencesReduce(arr, value) {
    return arr.reduce((count, item) => item === value ? count + 1 : count, 0);
}

function countOccurrencesLoop(arr, value) {
    let count = 0;
    for (let item of arr) {
        if (item === value) count++;
    }
    return count;
}

function checkInventory(inventory, productId) {
    const count = countOccurrences(inventory, productId);
    let status = '';
    
    if (count === 0) status = ' Out of stock';
    else if (count <= 5) status = ' Low stock';
    else if (count <= 20) status = 'Normal stock';
    else status = ' High stock';
    
    console.log(`Inventory Check - Product ${productId}:`);
    console.log(`Quantity: ${count} units`);
    console.log(`Status: ${status}`);
    
    return count;
}

const inventory = ['A001', 'B002', 'A001', 'C003', 'A001', 'B002'];
console.log(countOccurrences(inventory, 'A001')); // 3
checkInventory(inventory, 'A001');
checkInventory(inventory, 'D004'); 
