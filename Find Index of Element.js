function findIndex(arr, value) {
    return arr.indexOf(value);
}

function findAllIndices(arr, value) {
    return arr.map((item, index) => item === value ? index : -1)
              .filter(index => index !== -1);
}

function findIndexCondition(arr, condition) {
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) return i;
    }
    return -1;
}

function findSongInPlaylist(playlist, songTitle) {
    const index = findIndex(playlist, songTitle);
    
    if (index === -1) {
        console.log(` Song "${songTitle}" not found in playlist`);
    } else {
        console.log(` Song "${songTitle}" found at position ${index + 1}`);
        console.log(`Previous: ${index > 0 ? playlist[index - 1] : 'None'}`);
        console.log(`Next: ${index < playlist.length - 1 ? playlist[index + 1] : 'None'}`);
    }
    
    return index;
}

console.log(findIndex([10, 20, 30], 20)); 
console.log(findIndex(['Song A', 'Song B', 'Song C'], 'Song B')); 

const playlist = ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California', 'Sweet Child O Mine'];
findSongInPlaylist(playlist, 'Hotel California');
findSongInPlaylist(playlist, 'Imagine');
