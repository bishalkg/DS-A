/*
76. Minimum Window Substring
Hard

8630

502

Add to List

Share
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.



Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.


Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.


Follow up: Could you find an algorithm that runs in O(m + n) time?

*/



var minWindow = function(s, t) {

  var freqMap = {};
  for (var i = 0; i < t.length; i++) {
      if (!(t[i] in freqMap)) {
          freqMap[t[i]] = 0;
      }
      freqMap[t[i]]++;
  }

  var start = 0;
  var matches = 0;
  var shortestSub = s;
  var shortestlen = s.length+1;

  //can make this better by using variables -> substringStart, minLength instead. Then wouldn't have to perform slice operation multiple times
  for (var end = 0; end < s.length; end++) {
      if (s[end] in freqMap) {
          freqMap[s[end]]--;
          if (freqMap[s[end]] === 0) {
              matches++;
          }
      }

      while (matches === Object.keys(freqMap).length) {
          if ((end-start+1) <= shortestSub.length) {
              shortestSub = s.slice(start, end+1);
              shortestlen = (end-start+1);
          }

          if (s[start] in freqMap) {
              if (freqMap[s[start]] === 0) {
                  matches--;
              }
              freqMap[s[start]]++;
          }

          start++;
      }
  }

  if (shortestlen > s.length) {
      return '';
  }


  return shortestSub;
};