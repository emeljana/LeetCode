public class Solution 
{
    public int MySqrt(int x) 
    {
        int left = 1;
        int right = x;

        while(left <= right)
        {
            int mid = (left + right) / 2;
            if(mid > x / mid)
            {
                right = mid - 1;
            }
            else
            {
                left = mid + 1;
            }
        }
        // left har precis gått förbi den sista giltiga kandidaten
        //right ligger kvar på det största tal som fortfarande funkar
        return right;
    }

}