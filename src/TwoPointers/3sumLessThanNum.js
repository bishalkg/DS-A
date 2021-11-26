/*
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
*/

const triplet_with_smaller_sum = function(arr, target) {

  arr.sort((a,b) => a-b);
  var count = 0;
  for (var i = 0; i < arr.length-2; i++) {
    //dont want to skip duplicates
    var curr = arr[i];
    var left = i+1;
    var right = arr.length-1;
    while (left < right) {
      var currSum = curr + arr[left] + arr[right];
      if (currSum < target) {
        count+= right-left;
        //all possible triplets to the left of 'right' will be counted
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
}


console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3)); //2
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5)); //4


/*
Time complexity#
Sorting the array will take O(N * logN)O(N∗logN). The searchPair() will take O(N)O(N). So, overall searchTriplets() will take O(N * logN + N^2)O(N∗logN+N
​2
​​ ), which is asymptotically equivalent to O(N^2)O(N
​2
​​ ).

Space complexity#
The space complexity of the above algorithm will be O(N)O(N) which is required for sorting if we are not using an in-place sorting algorithm.

*/