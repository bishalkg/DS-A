// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

//O(n^2) (bc used splice inside a for loop..) time and O(n) space (had to create a new array of zeros)

var moveZeroes = function(nums) {
  if (!nums.length) return nums;
  if (nums.length === 1) return nums;

  var counter = 0;
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          counter++;
          nums.splice(i,1);
          i--;
      } else {
          continue;
      }
  }
  var zeros = (new Array(counter)).fill(0);
  nums.splice(nums.length, 0, ...zeros);
  return nums;
}

//must splice for it to be in place, cannot use concat!

//O(n) time and O(1) space approach
var moveZeroes = function(nums) {
  var lastNonZeroIndex = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
  }

  //and here is why that var is called lastNonZeroIndex, bc we start swapiing for zeros starting here
  for (var i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}


//third even better approach O(n) time with only one loop
//if the current element is non-0, its correct position can be AT BEST its current index or a previous index, so we can immediately swap it with the lastNonZeroIndex when we encounter a non-0 integer
var moveZeroes = function(nums) {
  var lastNonZeroIndex = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[lastNonZeroIndex]] = [nums[lastNonZeroIndex], nums[i]];
            lastNonZeroIndex++;
        }
    }
  return nums;
}