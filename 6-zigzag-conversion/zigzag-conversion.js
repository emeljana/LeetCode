/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let zigzag = new Map();
    let currentRow = 1;
    let direction = 1;
    for(let i=0; i<s.length;i++){
        if(zigzag.has(currentRow)){
            let letters = zigzag.get(currentRow);
            letters.push(s[i])
            zigzag.set(currentRow, letters)
        } else {
            zigzag.set(currentRow, [s[i]])
        }

        if (currentRow == 1){
            direction = 1;
        } else if (currentRow == numRows){
            direction = -1;
        }

        if (numRows > 1){
        currentRow = currentRow + direction;
        }
        
    }

    let result = []

    for(let key=1; key<=numRows; key++){
        result = result.concat(zigzag.get(key))
    }

    return result.join("");
};