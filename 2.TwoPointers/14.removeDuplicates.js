
//mine
const remove_duplicates = function(arr) {
  var nextNonDup = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[nextNonDup]) {
      nextNonDup++;
      [arr[i], arr[nextNonDup]] = [arr[nextNonDup], arr[i]];
    }
  }
  return nextNonDup+1;
};

//grokkings
function remove_duplicates(arr) {
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;

  let i = 1;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
}


console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));


/*
27. Remove Element
Easy

2846

4414

Add to List

Share
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

*/

//mine
var removeElement = function(nums, val) {
  var lastSeenValIndex = 0;
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          [nums[i], nums[lastSeenValIndex]] = [nums[lastSeenValIndex], nums[i]];
          lastSeenValIndex++;
      }
  }
  return lastSeenValIndex;
};


//grokkings
function remove_element(arr, key) {
  let nextElement = 0; // index of the next element which is not 'key'
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i];
      nextElement += 1;
    }
  }
  return nextElement;
}



//remove duplicates -> advance pointer, swap
//remove elements -> swap, advance pointer