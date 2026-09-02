/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    profit = 0;
    lowest = prices[0]
    for (i=0; i<prices.length; i++){
        if (prices[i]<lowest){
            lowest = prices[i];
        } else if (prices[i] - lowest > profit){
            profit = prices[i] - lowest
        }
    }

    return profit;
        
        
    
};