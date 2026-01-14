public class Solution {
    public string LongestCommonPrefix(string[] strs) 
    {
        string savePrefix = "";
        for (int i=0; i < strs[0].Length; i++)
        {
            char referensChar = strs[0][i];

            for (int j=0; j < strs.Length; j++)
            {
                if(strs[j].Length <= i)
                {
                    return savePrefix;
                }

                char nextChar = strs[j][i];

                if(referensChar != nextChar)
                {
                    return savePrefix;
                }

            }
            savePrefix += referensChar;
        }
        return savePrefix;
    }
}
