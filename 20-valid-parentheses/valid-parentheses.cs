public class Solution {
    public bool IsValid(string s) 
    {
        Stack <char> matchedBrackets = new Stack<char>();

        for (int i=0; i < s.Length; i++)
        {
            char currentChar = s[i];

            if( currentChar == '(' || currentChar == '[' || currentChar == '{')
            {
                matchedBrackets.Push(currentChar);
            }
            else
            {
                if(matchedBrackets.Count == 0)
                {
                    return false;
                }
            
                char topChar = matchedBrackets.Peek();

                if( topChar == '(' && currentChar == ')' || 
                topChar == '[' && currentChar == ']' ||
                topChar == '{' && currentChar == '}')
                {
                    matchedBrackets.Pop();
                }
                else
                {
                    return false;
                }
            }
        }
        return matchedBrackets.Count == 0;
    }
}