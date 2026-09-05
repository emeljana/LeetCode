/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let substring = new Map();

    let longestSubstring = 0;

    for (let i=0; i<s.length;i++){
        if(substring.has(s[i])){
            let duplicate = substring.get(s[i]);
            substring.set(s[i], i)
            for(let [key,val] of substring){
                if (val < duplicate){
                    substring.delete(key);
                }
            }

        } else {
            substring.set(s[i], i)
        }
        if(substring.size > longestSubstring){
                longestSubstring = substring.size;
            }
    }

    return longestSubstring;
    
};