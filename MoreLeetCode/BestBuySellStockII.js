var maxProfit = function(prices) {
  var i = 0;
  var valley = prices[0];
  var peak = prices[0];
  var profit = 0;

  while (i < prices.length - 1) {
    while(i < prices.length -1 && (prices[i] >= prices[i+1])) {
      i++;
    }
    //keep advancing i until the val at next index is greater than curr index
    //then store that lessser val in a valley variable
    valley = prices[i];
    //then keep advancing i while the next val is still greater than the current val
    while(i < prices.length -1 && (prices[i] <= prices[i+1])) {
      i++;
    }
    peak = prices[i];

    //now that we have our peak and valley, take the difference and add it to profit
    profit += peak - valley;
  }

  return profit;

}


var maxProfit = function(prices) {
  var profit = 0;

  //similar to above, done with less code
  //if the next val is greater than the current val, add the difference to profit
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) { //if the current index is a peak and the previous was a valley, add to sum
      profit += (prices[i] - prices[i-1]);
    }
  }
  return profit;
}