var fizzBuzz = function(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
      arr[i] = (!((i+1)%3) && !((i+1)%5)) ? 'FizzBuzz' : !((i+1) % 3) ? 'Fizz' : !((i+1) % 5) ? 'Buzz' : `${i+1}`;
  }
  return arr;
};

console.log(fizzBuzz(15))

//O(n) time
//remember the number in the output array is also a string --- usually arrays contain the same data types!!