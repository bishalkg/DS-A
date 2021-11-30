/*
844. Backspace String Compare
Easy

3207

148

Add to List

Share
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.



Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a##c", t = "#a#c"
Output: true
Explanation: Both s and t become "c".
Example 4:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".


Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.


Follow up: Can you solve it in O(n) time and O(1) space?
*/


//O(3N) time, O(N) space using stack
var backspaceCompare = function(s, t) {
  var s1 = [];
var s2 = [];
for (var i = 0; i < s.length; i++) {

while (s[i] === '#') {
  s1.pop();
  i++;
}
s1.push(s[i]);
}

for (var j = 0; j < t.length; j++) {

while (t[j] === '#') {
  s2.pop();
  j++;
}
s2.push(t[j]);
}
var k = 0;
while (k < t.length) {
  if (s1[k] !== s2[k]) return false;
  k++;
}

return true;
};

//O(N) time and O(1) space solution

var backspaceCompare = function(s, t) {
  var i = s.length -1;
  var j = t.length -1;
  var backIcount = 0;
  var backJcount = 0;
  //start from the ends of the strings
  while (i >= 0 || j >= 0) { //this takes care of if the indices are no longer at the same positions, or one string was longer than the other post backspaces
    while (i >= 0) {
      if (s[i] === '#') {
        backIcount ++;  //if the current val is #, then count up number of backspaces (#), and move index down
        i--;
      } else if (backIcount > 0) {
        backIcount--; //when it loops, this will skip the next char for however many consecutive #'s we have in the string
        i--;
      } else {
        break;    //required to break out of the while loop when the other two statements arent true but i is still >= 0
      }
    }

    //repeat for other string
    while (j >= 0) {
      if (t[j] === '#') {
        backJcount ++;  //if the current val is #, then count up number of backspaces (#), and move index down
        j--;
      } else if (backJcount > 0) {
        backJcount--; //when it loops, this will skip the next char for however many consecutive #'s we have in the string
        j--;
      } else {
        break;    //required to break out of the while loop when the other two statements arent true but i is still >= 0
      }
    }
    //this leaves us with the next appropriate indices for the strings, so now we can compare
    if (s[i] !== t[j]) return false;
    if ((i >= 0) !== (j >=0)) return false; //if one of the indices has gone below 0, we've gone past the end of one of the strings


    //count down at each loop
    i--;
    j--;

  }

  return true; //if we don't return false anywhere in the while loop, then the strings are equivalent
}