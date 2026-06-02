public class Solution {
    public IList<string> SummaryRanges(int[] nums) {
        List<string> result = new List<string>();

        if(nums.Length == 0)
        {
            return result;
        }
        int start = nums[0];


        for(int i=1; i < nums.Length; i++)
        {
            if(nums[i] == nums[i-1] + 1)
            {
                continue;
            }

            int end = nums[i-1];

            if(start == end)
            {
                result.Add($"{start}");
            }
            else
            {
                result.Add($"{start}->{end}");
            }
            start = nums[i];
        }

        int last = nums[nums.Length - 1];

        if(start == last)
        {
            result.Add($"{start}");
        }
        else 
        {
            result.Add($"{start}->{last}");
        }

        return result;
    }
}