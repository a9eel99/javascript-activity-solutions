function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseStringLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function reverseStringRecursive(str) {
    if (str === '') return '';
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

function createPuzzle(word) {
    const reversed = reverseString(word);
    console.log(` Guess the word from this hint: "${reversed}"`);
    return reversed;
}

console.log(reverseString('hello'));  
console.log(reverseString('game'));  
console.log(reverseString('javascript')); 
createPuzzle('ADVENTURE'); 
