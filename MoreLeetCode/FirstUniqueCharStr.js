/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1


Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/



var firstUniqChar = function(s) {
  var map = {};
  for (var i = 0; i < s.length; i++) {
      if (map[s[i]]) {
          map[s[i]]++;
      } else {
          map[s[i]] = 1;
      }
  }
  //recognize a hash map is not guranteed to be ordered
  //the key here is to iterate over the original array the second time, so that we are checking IN ORDER
  for (var i = 0; i < s.length; i++) {
    //if the val at that key is 1, means this was the only char to appear once
      if (map[s[i]] === 1) return i;
  }
  return -1;
};

