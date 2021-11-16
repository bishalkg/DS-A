//Kadane's algorithm
//if the current sum is less than the previous current sum (up to the previous index), better to start over the sum with the new index

var maxSubArray = function(nums) {
  if (!nums.length) return -1;
  var global_max = nums[0];
  var curr_sum = global_max;
  for (var i = 1; i < nums.length; i++) {
      curr_sum = Math.max(nums[i], nums[i] + curr_sum); //better to start over or add the current index value to the previous sum?
      global_max = Math.max(curr_sum, global_max); //update global max if the current sum is now bigger
  }
  return global_max;
};


var maxSubArray = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  var max = nums[0];
  for (var i = 0; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1]); //this more consisely describes what's going on above
    max = Math.max(nums[i], max);
  }
  return max;
}