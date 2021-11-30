/*
350. Intersection of Two Arrays II
Easy

3374

598

Add to List

Share
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.


Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000


Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
  - use the second algorithm, which uses 2 pointers and follows along each array until a match is found, and when a match is found is inserted into a list that will be returned
What if nums1's size is small compared to nums2's size? Which algorithm is better?
  - swap nums1 and nums2 in parameters by recursively returning the function with the parameters swapped, if nums1 > nums2
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
  - break up nums2 into chunks and repeat the iteration over the second array nums2, after the build up of the hashmap using nums1

*/

//O(n) time and O(n) space
var intersect = function(nums1, nums2) {

  var shorter = nums1;
  var longer = nums2;
  if (shorter.length !== longer.length && shorter.length > longer.length) {
    [shorter, longer] = [longer, shorter];
  }
  //the step above ensures we make a freqmap of the smaller array

  var counter = {};
  for (var i = 0; i < shorter.length; i++) {
      if (counter[shorter[i]]) {
          counter[shorter[i]]++;
      } else {
          counter[shorter[i]] = 1;
      }
  }
  var result = [];

  for (var i = 0; i < longer.length; i++) {
    if (counter[longer[i]]) {
        result.push(longer[i]);//if the value exists in our hash map, push it to result array,
        counter[longer[i]]--;//decrement the count of that number to signifiy that its been counted in our result
    }
  }
  return result;

};


//if already sorted

var intersect = function(nums1, nums2) {
  //sort both if not sorted --> O(nlogn)
  var i = 0;
  var j = 0;
  var list = [];
  while (i < nums1.length && j < nums2.length) {
    //keep adding to list and incrementing both pointers as long as theres matches
    if (nums1[i] === nums2[j]) {
      list.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) { //if val is smaller, then advance the smaller pointer to catch up to the larger val in the other array
      i++;
    } else {
      j++;
    }
  }
  return list;
}




