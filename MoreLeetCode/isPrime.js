/*

204. Count Primes
Medium

4228

939

Add to List

Share
Given an integer n, return the number of prime numbers that are strictly less than n.



Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0

*/


//Sieve of Eratosthenes uses an extra O(n) memory and its runtime complexity is O(n log log n).
//Algorithm
//create an isPrime array of true values up to n
//iterate from j=2 to sqrt(j)
  //if the isPrime value has already been changed to false, continue to the next loop
  //else turn all values from j*j up to n (ie. all multiple of j up to n) to false
//iterate through the isPrime array and count up the number of prime values

//this works because of 2 optimizations:
//we change all multiple of a prime number to false, but we can start at k=j*j, j*j+k... instead of say 5, 10, 15, 20, 25, we can be sure that 10, 15, 20 were already changed by multiples of values < 5
//we only have to go up to sqrt(n) because we can be sure that for any p*q=n, that either p <= sqrt(n) and q >= sqrt(n), so we only need to go up to the lesser of the two to reduce the repetitive computations (eg 3*5, 5*3)
var countPrimes = function(n) {

  var isPrime = [];
  for (var i = 2; i < n; i++) {
    isPrime[i] = true;
  }
  for (var j = 2; j*j < n; j++) {
      if (!isPrime[j]) continue;
      for (var k = j*j; k < n; k+=j) {
          isPrime[k] = false;
      }
  }

  var count = 0;
  for (var i = 2; i < n; i++) {
      if (isPrime[i]) count++;
  }
  return count;
};



//O(N^2) slow solution
var countPrimes = function(n) {
  var count = 0;
  for (var i = 2; i < n; i++) { //start at 2 as 1 does not count
      var currNum = i;
      var isPrime = true; //start by saying all the currNums are indivisible
      for (var j = 2; j < n/2; j++) { //can't be divisible by nums greater than n/2
          if (Number.isInteger(currNum/j) && currNum !== j) { //if the currNum/j is divisible, and the currNum is not j (which would return 1), then we found a nonPrime number in the set
              isPrime = false;
          }
      }
      if (isPrime) { //if the number is still prime after dividing the currNum by all values less than n, then count up 1
          count+=1
      }
  }
  return count;
};