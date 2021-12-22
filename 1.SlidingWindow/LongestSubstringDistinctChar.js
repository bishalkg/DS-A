/*
3. Longest Substring Without Repeating Characters
Medium

18960

864

Add to List

Share
Given a string s, find the length of the longest substring without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/



//O(N) optimal solution
var lengthOfLongestSubstring = function(s) {
  var maxlength = 0;
  var start = 0;
  var counter = {};
  for (var end = 0; end < s.length; end++) {
    //if you see a character again ( s[end] ), shrink the window by setting start, but set start to the max of the current start or the index+1 at which the char was first observed. This makes sure that if you see a duplicate in s, start will be set such that it starts at the index after where it first appeared
    //set start to the larger of two indices, either index+1 of where it last appeared, or where the start pointer is currently at, you don't want to go back to a lower index like I did the solutions below, bc then you're searching indices you've already serched
    //instead, the end - start +1 keeps track of the strech of characters in the hash map
    if (counter[s[end]]) { //if the char has been seen before, set start to the index it was seen+1, leave start as is, whichever is larger index
      start = Math.max(start, counter[s[end]]);
    }

    maxlength = Math.max(maxlength, end - start + 1); //update size of window

    counter[s[end]] = end+1;  //a duplicate will have its index+1 updated
  }
  return maxlength;
};


//O(N^2) or close to, bc I backtrack the start index and start over the search lmao
var lengthOfLongestSubstring = function(s) {
    var maxlength = 0;
    var start = 0;
    var counter = {};
    for (var end = 0; end < s.length; end++) {
       if (!counter[s[end]]) {
           counter[s[end]] = end+1;
       } else if (counter[s[end]]) {
            var seenAt = counter[s[end]];
            counter = {};
            start = seenAt;
            end = start -1;
       }

       maxlength = Math.max(maxlength, end - start +1)
    }
    return maxlength;
};

var lengthOfLongestSubstring = function(s) {
  var maxlength = 0;
  var start = 0;
  var counter = new Array(26);
  for (var end = 0; end < s.length; end++) {
      var index = s[end].charCodeAt(0)-97;
     if (!counter[index]) {
         counter[index] = end+1;
     } else if (counter[index]) {
          var seenAt = counter[index];
          counter = new Array(26);
          start = seenAt;
          end = start -1;
     }

     maxlength = Math.max(maxlength, end - start +1)
  }
  return maxlength;
};