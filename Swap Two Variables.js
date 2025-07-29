function swapProducts() {
    let productA = "Laptop";
    let productB = "Tablet";
    
    console.log("Before swap:");
    console.log("Product A:", productA);
    console.log("Product B:", productB);
    
    [productA, productB] = [productB, productA];
    
    console.log("After swap:");
    console.log("Product A:", productA); // "Tablet"
    console.log("Product B:", productB); // "Laptop"
    
    return { productA, productB };
}
function swapWithTemp(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

function swapWithoutTemp(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}

swapProducts();
