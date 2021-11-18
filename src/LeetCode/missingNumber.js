var missingNumber = function(nums) {
  var array = new Array(nums.length+1); //make room for the missing number
  for (var i = 0; i < nums.length; i++) {
      array[nums[i]] = nums[i];
  }
  for (var i = 0; i < array.length; i++) {
      if (array[i] === undefined) return array[i-1]+1 || 0; //the or 0 takes care of if the missing number was 0, since that would give a negative index
  }
};

var missingNumber = function(nums) {
  var counts = {};
  for (var i = 0; i < nums.length; i++) {
    counts[nums[i]] = 1;
  }

  for (var i = 0; i <= nums.length; i++) {
    if (!counts[i]) return i;
  }
}


//solved in O(n) time and O(1) space using summation law
var missingNumber = function(nums) {
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum+= nums[i];
  }
  var actualLength = nums.length+1;
  var sum2 = actualLength * ((actualLength-1)/2);
  return sum2 - sum;
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([1,2]))