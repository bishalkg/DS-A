//O(n)

var climbStairs = function(n) {
  var seq = [1,1];
  for (var i = 2; i <= n; i++) {
      seq[i] = seq[i-1] + seq[i-2];
  }
  return seq[seq.length -1];



var climbStairs = function(n) {
  var cache = {};
  var fib = function(number) {
    if (cache[number]) {
      return cache[number];
    } else {
      if (number < 2) return number;
      cache[number] = fib(number -1) + fib(number -2)
      return cache[number];
    }
  }
  return fib.call(null, n+1)
};