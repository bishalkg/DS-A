/*
438. Find All Anagrams in a String
Medium

5360

219

Add to List

Share
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".


Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.

*/


var findAnagrams = function(s, p) {
  var freqMap = {};
  for (var i = 0; i < p.length; i++) {
      if (!(p[i] in freqMap)) {
          freqMap[p[i]]=0;
      }
      freqMap[p[i]]++;
  }

  var start = 0;
  var matches = 0;
  var result = [];

  for (var end = 0; end < s.length; end++) {
      if (s[end] in freqMap) {
          freqMap[s[end]]--;
          if (freqMap[s[end]] === 0) {
              matches++;
          }
      }

      if (Object.keys(freqMap).length === matches) result.push(start);

      if ((end -start+1) >= p.length) {

          if (s[start] in freqMap) {
              if (freqMap[s[start]] === 0) {
                  matches--;
              }

              freqMap[s[start]]++;
          }


          start++;
      }
  }

  return result;
};