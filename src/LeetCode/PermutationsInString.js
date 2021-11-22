/*
567. Permutation in String
Medium

3648

97

Add to List

Share
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.



Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false


Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/


var checkInclusion = function(s1, s2) {
  var freqMap = {};
for (var i of s1) {
if (!freqMap[i]) {
  freqMap[i] = 0
}
freqMap[i]++
}
//create a freq map using the pattern

var start = 0;
var matches = 0;
//keep track of how many matches we found

for (var end = 0; end < s2.length; end++) {

//if the current char is in the freq map, then count it down in the map
//and if the count in the map is 0 for that char, then we have a 'match'
if (s2[end] in freqMap) {
    freqMap[s2[end]]--;
    if (freqMap[s2[end]] === 0) {
        matches++;
    }
}

//if the number of matches equals the number of different chars, then return true
if (matches === Object.keys(freqMap).length) return true;


//if the length of window is at least the size of the pattern, we need to resize
  //we need to check the char at the start index of the window, and if it is in our freqMap, we need to add its count back, and if its count in the freqMap was 0, we need to also subtract 1 from our total matches, since the zero indicates we added 1 to matches
  //then advance start index of the window
if ((end-start+1) >= s1.length) {
    if (s2[start] in freqMap) {
        if (freqMap[s2[start]] === 0) {
            matches--;
        }
        freqMap[s2[start]]++;
    }
    start++;
}


}
return false;
};