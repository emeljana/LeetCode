public class Solution {
    public int SearchInsert(int[] nums, int target) {
        // index på nums arrayn
        int left = 0;
        int right = nums.Length - 1;
        // loopen går tills left är större än right, om inte likamed och returneras direkt.
        while(left <= right)
        {
            int mid = (left + right) / 2;

            if(nums[mid] == target)
            {
                return mid;
            }
            else if(target > nums[mid])
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }
        // när left är större än right, blir left det nya indexet som target sätts in på om den inte hittas i arrayn.
        return left;
    }
}