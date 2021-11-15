var maxProfit = function(prices) {
  var i = 0;
  var valley = prices[0];
  var peak = prices[0];
  var profit = 0;

  while (i < prices.length - 1) {
    while(i < prices.length -1 && (prices[i] >= prices[i+1])) {
      i++;
    }
    valley = prices[i];
    while(i < prices.length -1 && (prices[i] <= prices[i+1])) {
      i++;
    }
    peak = prices[i];

    profit += peak - valley;
  }

  return profit;

}


var maxProfit = function(prices) {
  var profit = 0;

  for (var i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {
      profit += (prices[i] - prices[i-1]);
    }
  }
  return profit;
}