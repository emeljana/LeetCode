public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        
        Dictionary<int, int> seen = new Dictionary<int, int>();

        for(int i=0; i < nums.Length; i++)
        {
            int num = nums[i];
            int complement = target - num;

            if(seen.ContainsKey(complement))
            {
                return new int[] {seen[complement], i};
            }

            seen[num] = i;
        }

        return new int[] {};
    }
}