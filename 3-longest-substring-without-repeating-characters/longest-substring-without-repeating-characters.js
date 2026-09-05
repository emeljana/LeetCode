/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let substring = new Map();

    let longestSubstring = 0;

    let left = 0;

    for (let i=0; i<s.length;i++){
        if(substring.has(s[i])){
            let duplicate = substring.get(s[i]);
            substring.set(s[i], i)
            if(duplicate>=left){
                left = duplicate + 1;
            }
            

        } else {
            substring.set(s[i], i)
        }
        if(i - left + 1 > longestSubstring){
                longestSubstring = i - left +1;
            }
    }

    return longestSubstring;
     
};