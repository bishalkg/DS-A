
//first we want to get the nums in sorted order
//for every value of nums, we want to check if there are two values to the right of this value that sum to negative of this value ==> meaning 3sum =0

var threeSum = function(nums) {
  nums.sort((a,b) => a-b);
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i-1]) {
      continue; //check if the previous value was the same, if so, then skip it, i>0 bc we cant do this when i=0
    }
    findpair(nums, -nums[i], i+1, result); //helper function to find the next two pairs of numbers that sum to -nums[i], starting at index i+1
  }

  return result;
}

var findpair = function(nums, targetSum, left, result) {
  //initialize the right most pointer at the end of the nums array
  var right = nums.length-1;
  while (left < right) {  //continue loop until left and right meet in the middle
    var currSum = nums[left] + nums[right]; //the sum of current left and right index values
    if (currSum === targetSum) {  //if they sum to the targetSum (which is the -value at the current index in the array passed in)
      result.push([-targetSum, nums[left], nums[right]]); //then we can push the indices into our result array, remember to take the reverse the negative of the targetSum
      left++; //narrow the search window by moving left pointer up and right pointer down
      right--;
      //here we check if the left and right pointers havent met yet, and if the val that we were just at (nums[left-1] and nums[right+1]) is the same as the next vals repectively, then skip
      //those vals
      while (left < right && nums[left] === nums[left-1]) {
        left++;
      }
      while (left < right && nums[right] === nums[right+1]) {
        right--;
      }
    } else if (targetSum > currSum) { //if the vals didn't sum to our target, if the target is larger, we need to advance our left pointer up, and vice versa
      left++;
    } else {
      right--;
    }
  }

}


console.log(threeSum([-3, 0, 1, 2, -1, 1, -2]));
console.log(threeSum([-5, 2, -1, -2, 3]));