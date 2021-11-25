//Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.


//sum as close to target as possible means minimize Math.abs(target - newSum)
//store an array of Math.abs(target - newSum), then return Math.min(...array)
//Math.min(currSum, newSum)

var threeSumClosest = function(nums, target) {
  nums.sort((a,b) => a-b);
var minDiff = Infinity;
var candidate = Infinity;
for (var i = 0; i < nums.length; i++) {
if (i > 0 && nums[i] === nums[i-1]) {
  continue;
}
  var currVal = nums[i];
  var left = i+1;
  var right = nums.length-1;
  while (left < right) {
    var currSum = currVal + nums[left] + nums[right];
    var currDiff = Math.abs(target - currSum);
    if (currDiff < minDiff) {
        minDiff = currDiff;
        candidate = currSum;
    }
    if (target > currSum) {
      left++;
    } else {
      right--;
    }

  }

}

return candidate;
};

//this one doesnt work bc candidate loses its scoping or something, even if the value changes in findCandidate, it still is equal to Infinity when it returns to the original function scope
// const triplet_sum_close_to_target = function(arr, target_sum) {
//   arr.sort((a,b) => a-b);
//   var candidate = Infinity;
//   for (var i = 0; i < arr.length; i++) {
//     if (i > 0 && arr[i] === arr[i-1]) {
//       continue;
//     }
//     findCandidate(arr, arr[i], i+1, target_sum, candidate);

//   }

//   return candidate;
// };

// var findCandidate = function(arr, currVal, left, target_sum, candidate) {
//   var right = arr.length-1;
//   while (left < right) {
//     var currSum = currVal + arr[left] + arr[right];
//     var currDiff = Math.abs(target_sum - currSum);
//     candidate = Math.min(candidate, currDiff);
//     if (target_sum > currSum) {
//       left++;
//     } else {
//       right--;
//     }

//   }
// }