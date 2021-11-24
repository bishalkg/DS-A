/*
Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
*/

var characterReplacement = function(s, k) {
  var maxlen = 0;
  var counter = {};
  var start = 0;
  for (var end = 0; end < s.length; end++) {
      if (!counter[s[end]]) {
          counter[s[end]] = 1;
      } else {
          counter[s[end]]++;
      }

      maxRepeatCharCount = Math.max(...Object.values(counter));
      if ((end - start +1) - maxRepeatCharCount > k) {
          counter[s[start]]--;
          start++;
      }



      maxlen = Math.max(maxlen, end - start +1);
  }
  return maxlen;
};
//dont need to update maxRepeatChar because the maxlen will get larger ONLY IF we find a maxRepeatChar greater than the greatest one we have already found


//this one's faster, instead of spreading and finding the maxRepeatCharCount, instead compare current maxRepeatCharCount to the count at the current char
var characterReplacement = function(s, k) {
  var counter = {};
  var maxRepeatCharCount = 0; //this will be used to calculate # of distinct chars, which canot be greater than k
  var maxlen = 0;
  var start = 0;
  for (var end = 0; end < s.length; end++) {
      if (!counter[s[end]]) {
          counter[s[end]] = 1;
      } else {
          counter[s[end]]++;
      }

      //update the max repeat counter using the count at the current value
      maxRepeatCharCount = Math.max(maxRepeatCharCount, counter[s[end]]);

      //windowLength - maxRepeatCharCount = number of diff chars, which cannot be greater than k characters
      if ((end - start +1 - maxRepeatCharCount) > k) {
          counter[s[start]]--;
          start++;
      }

      maxlen = Math.max(maxlen, end - start +1);
  }
  return maxlen;
};





//from solution
function characterReplacement(s, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
      leftChar = s[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}