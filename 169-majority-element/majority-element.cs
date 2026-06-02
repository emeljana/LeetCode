public class Solution {
    public int MajorityElement(int[] nums) {
        int candidate = 0; // vem vi tror vinner, eftersom det är ett tal från arrayen är det den vi kommer retunera.
        int count = 0; // hur mycket den leder med

        for (int i=0; i < nums.Length; i++)
        {
            if (count == 0)
            {
                candidate = nums[i];
            }
            if (nums[i] == candidate)
            {
                count++;
            }
            else
            {
                count--;
            }
        }
        return candidate;
    }
}