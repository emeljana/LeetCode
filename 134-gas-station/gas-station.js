/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    let currentGas = 0;
    let requiredGas = 0;
    let currentCost = 0;
    let startingPoint = 0;

    for(let i=0;i<gas.length;i++){
        currentGas += gas[i];
        currentCost += cost[i];
        if (currentGas<cost[i]){
            requiredGas = requiredGas + currentCost - currentGas;
            currentGas = 0;
            currentCost = 0;
            startingPoint = i+1;
        } else {
            currentGas = currentGas - currentCost;
            currentCost = 0;
        }
    }

    if(currentGas < requiredGas){
        return -1;
    }
    
    return startingPoint;
};