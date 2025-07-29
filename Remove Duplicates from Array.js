function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

function removeDuplicatesReduce(arr) {
    return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);
}

function cleanContactList(phoneNumbers) {
    const originalCount = phoneNumbers.length;
    const cleanedNumbers = removeDuplicates(phoneNumbers);
    const duplicatesRemoved = originalCount - cleanedNumbers.length;
    
    console.log(`📞 Contact Cleanup Report:`);
    console.log(`Original contacts: ${originalCount}`);
    console.log(`Cleaned contacts: ${cleanedNumbers.length}`);
    console.log(`Duplicates removed: ${duplicatesRemoved}`);
    
    return cleanedNumbers;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange']));
cleanContactList(['123-456-7890', '987-654-3210', '123-456-7890', '555-123-4567']);
