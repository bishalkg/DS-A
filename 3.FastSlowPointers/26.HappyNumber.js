/*
202. Happy Number
Easy

4155

611

Add to List

Share
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/



//have a hash set containing all the seen sums, if we have already seen the sum, then return false bc there is a cycle

var isHappy = function(n) {
  var seen = new Set();
  while (n !== 1) {
      var sum = 0;
      var current = n;
      while (current !== 0) {
          sum += (current % 10) * (current % 10); //add the sum of the square of the last digit of n
          current = Math.floor(current/10); //remove the last digit from n
      }

      if (seen.has(sum)) return false;
      seen.add(sum);
      n = sum; //next loop should use the summed number
  }
  return true;
};



//also the only cycle starts at n = 4



//O(logN) time, O(1) space
var isHappy = function(n) {
  //fast pointer will always move 2 steps faster each turn, so if there is a cycle it will lap the slow pointer
  var slow = n;
  var fast = n;
  while (true) { //the break statement will break it out of this loop
      slow = findSumSquare(slow);
      fast = findSumSquare(findSumSquare(fast)); //move fast twice as much
      if (slow === fast) {
          break;
      }
  }
  //if it ended happy slow = fast = 1, if there was a cycle slow = fast = some number in the cycle
  return slow === 1;
};

var findSumSquare = function(num) {
  var sum = 0;
  var current = num;
  while (current !== 0) {
      sum += (current % 10)**2;
      current = Math.floor(current/10);
  }
  return sum;
}