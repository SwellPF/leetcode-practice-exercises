let commonChars = function(array) {
    let result = [];
    let loops = array[0].length;
    
    for (let i = 0; i < loops; i++) {
        let letter = array[0][i];
        
        if (letter === undefined) return res;
        if (array.every(word => word.indexOf(letter) !== -1 )) {
            res.push(letter);
            array = array.map(word => word.replace(letter, ''));
            i--;
        }
    }
    return result;
};