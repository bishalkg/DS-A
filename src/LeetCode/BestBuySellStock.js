//brute force approach O(n^2) quadratic
var maxProfit = function(prices) {
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
      for (var j = i+1; j < prices.length; j++) {
          var currSum = prices[j] - prices[i];
          if (currSum > max) {
              max = currSum;
          }
      }
  }
  return max;
};

//O(n)
var maxProfit = function(prices) {
  var maxprofit = 0;
  var minPrice = Infinity;
  for (var i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    if (maxprofit < (prices[i] - minPrice)) {
      maxprofit = prices[i] - minPrice;
    }
  }
  return maxprofit;
}


//this was just Kadanes algorithm in disguise -- similar to it(?)
var maxProfit = function(prices) {
  var maxprofit = 0;
  var minPrice = Infinity;
  for (var i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxprofit = Math.max(maxprofit, prices[i] - minPrice);
  }
  return maxprofit;
}