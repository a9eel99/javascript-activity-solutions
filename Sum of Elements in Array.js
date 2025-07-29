function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function sumArrayLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function sumArrayForEach(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
}

function calculateCartTotal(prices) {
    const total = sumArray(prices);
    const tax = total * 0.08; 
    const finalTotal = total + tax;
    
    console.log(`🛒 Shopping Cart Summary:`);
    console.log(`Subtotal: $${total.toFixed(2)}`);
    console.log(`Tax (8%): $${tax.toFixed(2)}`);
    console.log(`Total: $${finalTotal.toFixed(2)}`);
    
    return finalTotal;
}

console.log(sumArray([1, 2, 3, 4]));       
console.log(sumArray([100, 200, 50]));      
calculateCartTotal([29.99, 15.50, 8.99]);  
