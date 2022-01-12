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


//this one kindof is cumulative of all the other sliding problems //the one after this is the optimal solution
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
            //can also use >= 0, if the while loop condition is (matches === pattern.length)
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



//here it is with only one slice done O(N+M). Remember .slice is O(n) operation
var minWindow = function(s, t) {

  //make freqMap of pattern t
  var freqMap = {};
  for (var i = 0; i < t.length; i++) {
      if (!(t[i] in freqMap)) {
          freqMap[t[i]] = 0;
      }
      freqMap[t[i]]++;
  }

  var windowStart = 0;
  var substrStart = 0;
  var minLength = s.length+1; //set this +1 higher than the string length, so later we can check it anything actually changed, if not return ''
  var matches = 0;

  for (var end = 0; end < s.length; end++) {
      if (s[end] in freqMap) {
          freqMap[s[end]]--;
          if (freqMap[s[end]] >= 0) {
              matches++;
          }
      }

      while (matches === t.length) { //number of matches contains all chars of t, do a while loop here to keep shrinking window from the left/start
          if ((end-windowStart+1) < minLength) { //if the current window length is less than the current minLength
              minLength = (end-windowStart+1); //update the minimum length
              substrStart = windowStart; //all you need is the length of the substr and where it starts to return the subtr later
          }

          //the rest here is to slide the window, to do so, we need to update our freqMap to add back the char at the start index
          if (s[windowStart] in freqMap) {  //if the char at the start index is in the freqMap, we need to do some cleanup, bc we added to matches and subtrated it from the freqMap earlier
              if (freqMap[s[windowStart]] === 0) { //if its freq is currently 0, decrement matches bc this was counted as a match before
                  matches--;
              }
              freqMap[s[windowStart]]++; // add it back to freqMap
          }

          windowStart++;
      }
  }

  if (minLength > s.length) { //if minLength is > s.length, it means it didnt change bc we set it +1 before the for loop, so just return ''
      return '';
  }

  return s.slice(substrStart, substrStart+minLength)

};




//reattempt
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

var minWindow = function(s, t) {
    var freqMap = {};
    for (var i = 0; i < t.length; i++) {
        if (!(t[i] in freqMap)) {
            freqMap[t[i]] = 0;
        }
        freqMap[t[i]]++;
    }

    var start = 0;
    var substrStart = 0;
    var minLength = s.length+1;
    var matches = 0;

    for (var end = 0; end < s.length; end++) {
        if (freqMap[s[end]]) {
            freqMap[s[end]]--;
            if (freqMap[s[end]] >= 0) { //we add to matches if the value is greater than or equal to 0
                matches++;
            }
        }

        while(matches === t.length) {

            if ((end-start+1) < minLength) {
                minLength = end-start+1;
                substrStart = start;
            }

            if (freqMap[s[start]]) {
                if (freqMap[s[start]] === 0) { //yet we only subtract from matches if the value is 0, see explaination below
                    matches--;
                }
                freqMap[s[start]]++
            }

            start++;
        }


    }

    if (minLength > s.length) {
        return ''
    }

    return s.slice(substrStart, substrStart+minLength)

}

//if our inputs were
// s = "AADOBEC^ODEBANC", t = "ABC", up to ^ the freqMap would look like:
// {A:1, B:1, C:1} => {A: -1, B: 0, C: 0}
//since A is -1 here, and we only increment matches if A has val >= 0, it means the second A was not counted in matches,
//thus, we only decrement matches if A:0 is true, and we add +1 back to A to account for the fact that there were 2 As to begin with, but now one is sliding out of the window.