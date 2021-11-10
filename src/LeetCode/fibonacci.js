
//O(2^N) exponential!!
var fibonacci = function(number) {
  if (number < 2) return number;
  return fibonacci(number -1) + fibonacci(number -2);
}


//O(n) linear!!! This beats the recursive approach
var fibonacciIterative = function(number) {
  var seq = [0, 1];
  for (var i = 2; i < number + 1; i++) {
    array.push(seq[i - 1] + seq[i - 2]);
  }
  return seq[number];
}
console.log(fibonacci(8))