function isPalindrome(username) {
    const cleanStr = username.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}
function validateUsername(username) {
    if (isPalindrome(username)) {
        return `❌ Username "${username}" is rejected (palindrome detected)`;
    } else {
        return `✅ Username "${username}" is approved`;
    }
}
console.log(isPalindrome('madam'));   
console.log(isPalindrome('racecar'));  
console.log(isPalindrome('user123'));  
console.log(isPalindrome('A man, a plan, a canal, Panama'));

console.log(validateUsername('madam'));
console.log(validateUsername('user123'));
