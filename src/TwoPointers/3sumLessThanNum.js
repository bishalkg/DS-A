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
        count+= right-left; //algorithm wont see each valid triplet, but does count all triplets
        //all possible triplets to the left of 'right' will be counted
        left++;
      } else {
        right--; //bc we want sum to get smaller, if we moved left up again, the sum would only get bigger
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
​​ ), which is asymptotically equivalent to O(N^3).

Space complexity#
The space complexity of the above algorithm will be O(N)O(N) which is required for sorting if we are not using an in-place sorting algorithm.

*/

//this solution does look at all possible triplets and stores them in a result array
function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length - 2; i++) {
    search_pair(arr, target - arr[i], i, triplets);
  }
  return triplets;
}


function search_pair(arr, target_sum, first, triplets) {
  let left = first + 1,
    right = arr.length - 1;
  while ((left < right)) {
    if (arr[left] + arr[right] < target_sum) { // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      for (i = right; i > left; i--) { //this is the only difference, we iterate backwards to push all the sums
        triplets.push([arr[first], arr[left], arr[i]]);
      }
      left += 1;
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}

//O(N^3)