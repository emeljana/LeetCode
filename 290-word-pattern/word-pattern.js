/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    let words = s.split(" ");

    const mapPattern = new Map()
    const mapWords = new Map()

    if(words.length>pattern.length || words.length<pattern.length){
        return false;
    }

    for(let i=0; i<pattern.length; i++){
        if(mapPattern.has(pattern[i]) && mapPattern.get(pattern[i]) != words[i]){
            return false;
        }

        if(mapWords.has(words[i]) && mapWords.get(words[i]) != pattern[i]){
            return false;
        }
        mapPattern.set(pattern[i], words[i]);
        mapWords.set(words[i], pattern[i]);
    }

    return true;
    
};