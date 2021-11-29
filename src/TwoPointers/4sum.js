var fourSum = function(nums, target) {
  nums.sort((a,b) => a-b);
  var res = [];
  for (var i = 0; i < nums.length-3; i++) {
      if (i > 0 && nums[i] === nums[i-1]) {
          continue;
      }

      for (var j = i+1; j < nums.length-2; j++) {
          if (j > i+1 && nums[j] === nums[j-1]) {
              continue;
          }

          var left = j+1;
          var right = nums.length-1;
          while (left < right) {
              var currSum = nums[i] + nums[j] + nums[left] + nums[right];
              if (currSum === target) {
                  res.push([nums[i], nums[j], nums[left], nums[right]]);
                  left++;
                  right--;
                  while (left < right && nums[left] === nums[left-1]) {
                      left++;
                  }
                  while (left < right && nums[right] === nums[right+1]) {
                      right--;
                  }
              } else if (currSum > target) {
                  right--;
              } else {
                  left++;
              }
          }
      }
  }
  return res;
};

//O(N^3)
//this is just 3sum with one extra for loop