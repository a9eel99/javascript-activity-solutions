function findCommonElements(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}


function findCommonElementsSet(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}

function findCommonElementsUnique(arr1, arr2) {
    const common = arr1.filter(value => arr2.includes(value));
    return [...new Set(common)]; 
}

function recommendMovies(watchlist1, watchlist2) {
    const commonMovies = findCommonElementsUnique(watchlist1, watchlist2);
    
    console.log(`🎬 Movie Recommendations:`);
    console.log(`User 1 watchlist: [${watchlist1.join(', ')}]`);
    console.log(`User 2 watchlist: [${watchlist2.join(', ')}]`);
    console.log(`Recommended (common interests): [${commonMovies.join(', ')}]`);
    
    return commonMovies;
}

console.log(findCommonElements([1, 2, 3], [2, 3, 4])); 
console.log(findCommonElements(['Inception', 'Titanic', 'Avatar'], 
                              ['Avatar', 'Interstellar', 'Inception'])); 
recommendMovies(['The Matrix', 'Inception', 'Interstellar'], 
                ['Inception', 'The Dark Knight', 'Interstellar']);
