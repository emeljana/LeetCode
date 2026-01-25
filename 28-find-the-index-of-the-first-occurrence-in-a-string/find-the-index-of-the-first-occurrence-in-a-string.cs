public class Solution 
{
    public int StrStr(string haystack, string needle) 
    {
        int match = 0;
        for(int i=0; i < haystack.Length; i++)
        {
            if(needle[match] == haystack[i])
            {
                match++;
                if(needle.Length == match)
                {
                    return i - match + 1 ;
                }
                
            }
            else
            {
                i = i - match;
                match = 0;
            }

        }
        return -1;
    }
}