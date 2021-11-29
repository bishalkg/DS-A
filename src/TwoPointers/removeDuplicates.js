
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