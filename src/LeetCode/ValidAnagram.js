/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  var sa = {};
  var ta = {};

  for (var i = 0; i < s.length; i++) {
      if (!sa[s[i]]) {
          sa[s[i]] = 1;
      } else {
          sa[s[i]]++;
      }
  }


  for (var i = 0; i < t.length; i++) {
  if (!ta[t[i]]) {
      ta[t[i]] = 1;
      } else {
          ta[t[i]]++;
      }
  }

  for (l in sa) {
      if (!(sa[l] === ta[l])) {
          return false;
      }
  }

  return true;


};



//still 3N , .fill is loop
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

    var counts = (new Array(26)).fill(0)
    for (var i = 0; i < s.length; i++) {
        counts[ s[i].charCodeAt(0) - 96 ]++;
        counts[ t[i].charCodeAt(0) - 96 ]--;
    }

    for (var i = 0; i < counts.length; i++) {
        if (counts[i] !== 0) return false;
    }
    return true;

}

//now just two loops O(N) ----- this one was faster than 99%
//use the same hash map/array, iterate through string1, if seen in string1 +1, if seen in string2 -1, this will balance out to 0 in the end if string1 was an anagram of string2, then we can iterate through the hashmap/array and if we find a non-0, then return false
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

    var counts = (new Array(26));
    for (var i = 0; i < s.length; i++) {
        var currS = s[i].charCodeAt(0) - 96;
        var currT = t[i].charCodeAt(0) - 96;

        if (!counts[currS]) {
            counts[currS] = 1;
        } else {
            counts[currS]++
        }

        if (!counts[currT]) {
           counts[currT] = -1;
        } else {
            counts[currT]--;

        }

    }

    for (var i = 0; i < counts.length; i++) {
        if (!counts[i]) counts[i] = 0;
        if (counts[i] !== 0) return false;
    }

    return true;

}