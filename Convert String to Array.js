function stringToArray(str) {
    return str.split('');
}

function stringToWords(str) {
    return str.split(' ');
}

function stringToLines(str) {
    return str.split('\n');
}

function analyzeText(text) {
    const characters = stringToArray(text);
    const words = stringToWords(text);
    const lines = stringToLines(text);
    
    const analysis = {
        totalCharacters: characters.length,
        totalWords: words.filter(word => word.trim() !== '').length,
        totalLines: lines.length,
        vowels: characters.filter(char => 'aeiouAEIOU'.includes(char)).length,
        consonants: characters.filter(char => /[a-zA-Z]/.test(char) && !'aeiouAEIOU'.includes(char)).length,
        spaces: characters.filter(char => char === ' ').length
    };
    
    console.log(`Text Analysis:`);
    console.log(`Characters: ${analysis.totalCharacters}`);
    console.log(`Words: ${analysis.totalWords}`);
    console.log(`Lines: ${analysis.totalLines}`);
    console.log(`Vowels: ${analysis.vowels}`);
    console.log(`Consonants: ${analysis.consonants}`);
    
    return characters;
}
console.log(stringToArray('hello')); 
console.log(stringToArray('JavaScript')); 
analyzeText('Hello World!\nThis is a test.');
