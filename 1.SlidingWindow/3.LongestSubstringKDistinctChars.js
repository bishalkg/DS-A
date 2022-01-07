
/*

Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
*/


/*
Time Complexity#
The above algorithm’s time complexity will be O(N), where NN is the number of characters in the input string. The outer for loop runs for all characters, and the inner while loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N), which is asymptotically equivalent to O(N).

Space Complexity#
The algorithm’s space complexity is O(K), as we will be storing a maximum of K+1 characters in the HashMap.
*/




//Medium
//Given a string, find the length of the longest substring in it with no more than K distinct characters.
function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    //add to charFrequency one by one, since we want at MOST K distinct chars
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    //if number of distinct chars in window is more than k
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar]; //delete so doesn't count towards Object.keys
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}
//loop over chars, add to freqMap if not seen or +1 if seen
//while the total num of diff chars in the freqMap is greater than the required (k), eg. { a:1, b:2, c:1 } and k = 2
  //remove the count of the first char in the window, if the count is now 0, delete it from the map
  //slide the start of the window up by 1
//compute the maxLength using end - start + 1