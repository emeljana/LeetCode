/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;

    matches = 0;

    while(j<t.length){
        if(s[i]!=t[j]){
            j++;
        } else if (s[i]==t[j]){
            matches += 1;
            i++;
            j++;
        }

        if(matches == s.length){
            return true;
        }
    }

    if(s.length == 0 && t.length >= 0){
        return true;
    }

    return false;
    
};