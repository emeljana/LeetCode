public class Solution {
    public int RemoveDuplicates(int[] nums) 
    {
        int k = 0;

        for(int i=0; i < nums.Length; i++)
        {
            if(i == nums.Length - 1  || nums[i] != nums[i+1])
            {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}