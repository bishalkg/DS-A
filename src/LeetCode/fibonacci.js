
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
// console.log(fibonacci(8))


//recursive with memoization O(n), but increased space
var fibmemo1 = function(number) {
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
  return fib.call(null, number)
}

var fibmemo2 = function() {
  var cache = {};
  return function fib(number) {
    if (cache[number]) {
      return cache[number];
    } else {
      if (number < 2) return number;
      cache[number] = fib(number -1) + fib(number -2)
      return cache[number];
    }
  }
}

var fasterFib = fibmemo1(20);
console.log(fasterFib);

var fasterFib2 = fibmemo2();
console.log(fasterFib2(20));