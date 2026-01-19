public class Solution {
    public int RemoveDuplicates(int[] nums) 
    {
        int k = 1;

        for(int i=1; i < nums.Length; i++)
        {
            int duplicateNr = nums[i];

            int comparisonNr = nums[i - 1];

            if(duplicateNr != comparisonNr)
            {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}