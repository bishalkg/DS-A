//Kadane's algorithm
//if the current sum is less than the previous current sum (up to the previous index), better to start over the sum with the new index

var maxSubArray = function(nums) {
  if (!nums.length) return -1;
  var global_max = nums[0];
  var curr_sum = global_max;
  for (var i = 1; i < nums.length; i++) {
      curr_sum = Math.max(nums[i], nums[i] + curr_sum)
      global_max = Math.max(curr_sum, global_max);
  }
  return global_max;
};