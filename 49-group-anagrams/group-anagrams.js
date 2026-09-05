/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    const anagrams = new Map();

    for (let i=0; i<strs.length; i++) {
        let originalStr = strs[i];
        let sortedStr = originalStr;
        if(originalStr.length!=0){
            sortedStr = strs[i].split("").sort().join("");
        }

        if(anagrams.has(sortedStr)){
            let array = anagrams.get(sortedStr);
            array.push(originalStr)
            anagrams.set(sortedStr, array);
        } else {
            anagrams.set(sortedStr, [originalStr]);
        }
    }
    const result = [];
    for (let val of anagrams.values()){
        result.push(val);
    }

    return result;
    
};