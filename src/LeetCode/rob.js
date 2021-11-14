var rob = function(nums) {

  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  for (var i = 2; i < nums.length; i++) {
    nums[i] = (Math.max((nums[i] + nums[i - 2]), (nums[i] + (nums[i - 3] || 0))))
  }
  return Math.max(nums[nums.length -1], nums[nums.length - 2]);
};

//mutates the nums array but....
//calculate the max val at each 2 adjacent indices starting at nums[0], nums[1]
//the max at the next index will be the value at that index + the prevmax at the index -2 or index -3
//at the end, you will be left with two potential max values at the last two indices, so return the max of those two



//current best option is the previous houses sum (the current runnning max) or the current house + the previous non-adj houses sum
function rob(nums) {


  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);





  let memo = [

    nums[0],
    Math.max(nums[0], nums[1])

  ];


  for (let i = 2; i < nums.length; i++) {


    memo[i] = Math.max( nums[i] + memo[i-2], memo[i-1] );


  }




  return memo[memo.length -1];
}