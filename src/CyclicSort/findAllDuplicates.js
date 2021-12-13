/*
We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

Example 1:

Input: [3, 4, 4, 5, 5]
Output: [4, 5]
*/

const find_all_duplicates = function(nums) {
  duplicateNumbers = new Set();

  var i = 0;
  while (i < nums.length) {
    var j = nums[i]-1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }


  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== i+1) {
      duplicateNumbers.add(nums[i]);
    }
  }


  return Array.from(duplicateNumbers);
};

//no need to use a set if there is only one duplicate of each number
function find_all_duplicates(nums) {
  let i = 0;
  while (i < nums.length) {
    j = nums[i] - 1;
    if (nums[i] != nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i++;
    }
  }

  duplicateNumbers = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicateNumbers.push(nums[i]);
    }
  }

  return duplicateNumbers;
}