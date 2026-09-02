/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    profit = 0;
    lowest = 100000
    highest = 0;
    for (i=0; i<prices.length-1; i++){
        if (prices[i]<lowest){
            lowest = prices[i];
            for (j=i+1; j<=prices.length; j++){
                if(prices[j]>highest){
                    currentProfit = prices[j]-prices[i];
                    if (currentProfit > profit) {
                        profit = currentProfit;
                    }
                }
            
        }
        }
    }

    return profit;
        
        
    
};