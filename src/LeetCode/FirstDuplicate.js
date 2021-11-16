/* Medium
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
*/


const firstDup = function(array) {
  let seen = {};
  for (var i = 0; i < array.length; i++) {
    if (seen[array[i]]) {
      return array[i];
    } else {
      seen[array[i]] = array[i];
    }
  }
  return -1;
}

//if we know values of array are between 1 and length of array, this is O(n) time and 0(1) space
const firstDup2 = function(array) {
  for (var i = 0; i < array.length; i++) {
    let mapIndex = Math.abs(array[i]) - 1;  //sub 1 because last possible index will be one less than the length of the array

    if (array[mapIndex] < 0) {
      return Math.abs(array[i]);
    }
    array[mapIndex] = -1 * array[mapIndex];
  }

  return -1;
}

var array = [2,2,3,5,3,2];
console.log(firstDup2(array));

//if values of array are between 1 and length of the array, then we can use the values as inidices
//we will turn the value at that index to a negative number, and if we encounter a negative number again, then we've found our duplicate