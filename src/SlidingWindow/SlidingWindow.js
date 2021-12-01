var maxSumSizeK = function(array, k) {
  var max = 0;

  for (var i = 0; i <= array.length - k; i++) {
      var sum = 0;
      for (var j = i; j < k+i; j++) {
          sum+= array[j]
      }
      max = Math.max(max, sum);

  }
  return max;
}

//sliding window method, FIXED SIZE WINDOW
var maxSumSizeKSliding = function(array, k) {
  var max = -Infinity;
  var currSum = 0;
  for (var i = 0; i < array.length; i++) {
    currSum += array[i];
    if (i >= (k-1)) { //this will set the window of size k, as long as the index is greater than or equal to the window size we want, we know the window will be of fixed size
                      //if i is index 2, we've seen 3 values, if i is at index i, we've seen i+1 values
      max = Math.max(max, currSum);
      currSum -= array[i - (k-1)];
    }
  }
  return max;
}

// console.log(maxSumOfSizeK([4,2,1,7,8,1,2,8,1,0], 3))
// console.log(maxSumSizeKSliding([-1,2,3,1,-3,2], 3))


//all subarrays that add to sum
//Brute Force
var arraySum = function(array, sum) {
  var counter = {};
  for (var i = 0; i < array.length; i++) {
      var sum = 0;
      for (var j=i; j < array.length; j++) {
          sum+=array[j];
          counter[`${i},${j}`] = sum;
      }
  }
  return counter;
}

// console.log(arraySum([-1,2,3,1,-3,2], 3))


var slidingSum = function(array, sum) {
  var counter = [];

  for (var i = 0; i < array.length; i++) {
      var currSum = 0;
      var j = i;
      while (currSum < sum) {
          currSum+= array[j];
          if (currSum === sum) {
          counter.push([`${i}${j}`])
          }
          j++;
          if (j >= array.length) break;
      }

  }
  return counter;
}

console.log(slidingSum([1,1,1,1,2,1,1,1,1], 2))






//Mininum window size with a sum >= targetSum DYNAMIC WINDOW
var minWindowSize = function(array, targetSum) {
  var minWindowSize = Infinity;
  var windowStart = 0;
  var currWindowSum = 0;
  for (var windowEnd = 0; windowEnd < array.length; windowEnd++) {
      currWindowSum+=array[windowEnd]; //iterate and add until currWindowSum is greater or equal to targetSum
      while (currWindowSum >= targetSum) {
          minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1); //add 1 bc is zero indexed
          if (minWindowSize === 1) return 1;  //1 is the smallest window size //this should be minWindowSize??
          currWindowSum -= array[windowStart]; //can use windowStart to remove the first item of the window, so as to slide the window
          windowStart++;               //advance windowStart so that we shrink our window, and run the while loop again if possible, before advancing the end.if the sum is still >= target after subtracting the value at windowStart, the while loop will continue

      }
  }
  return minWindowSize;
}

console.log(minWindowSize([4,2,2,7,8,1,2,8,10], 8))


//repeats

var maxSumToK = function(array, k) {
  var max = -Infinity;
  var currSum = 0;
  var start = 0;
  for (var end = 0; end < array.length; end++) {
    currSum+= array[end];
    if (i >= (k-1)) {
      max = Math.max(max, currSum);
      currSum -= array[start];
      start++;
    }
  }
  return max;
}


var minimizeSum = function(array, sum) {
  var min = Infinity;
  var currSum = 0;
  var start = 0;
  for (var end = 0; end < array.length; end++) {
    currSum+= array[end];
    while (currSum >= sum) {//once we have a window where the sum is >= target sum, shrink the window to see if a smaller subarray has a currSum >= targetsum
      min = Math.min(min, end - start +1);
      currSum-= array[start];
      start++;
    }

  }
  return min;
}


var AllAvgSizeK = function(array, k) {
  var averages = [];
  var currSum = 0;
  var start = 0;
  for (var end = 0; end < array.length; end++) {
    currSum += array[end];
    if (end >= (k-1)) { // end-start+1 === k
      averages.push(currSum/k);
      currSum -= array[start];
      start++
    }
  }
  return averages;
}


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

//fruit baskets
var totalFruit = function(fruits) {
  var max = -Infinity;
var b1 = [];
var b2 = [];
var start = 0;
for (var end = 0; end < fruits.length; end++) {
if (!b1.length) {
  b1.push(fruits[end]);
} else if (b1.length && b1[0] === fruits[end]) {
  b1.push(fruits[end]);
} else if (!b2.length) {
  b2.push(fruits[end]);
} else if (b2.length && b2[0] === fruits[end]) {
  b2.push(fruits[end]);
}

max = Math.max(max, b1.length + b2.length);

if (b1[0] !== fruits[end] && b2[0] !== fruits[end]) {
  b1 = [];
  b2 = [];
  end = start;
  start++;
}

}

return max;
};

function fruits_into_baskets(fruits) {
  let windowStart = 0,
    maxLength = 0,
    fruitFrequency = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitFrequency)) {
      fruitFrequency[rightFruit] = 0;
    }
    fruitFrequency[rightFruit] += 1;

    // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary, this is the k distinct chars where k is 2
    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart];
      fruitFrequency[leftFruit] -= 1;
      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
      }
      windowStart += 1; // shrink the window
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}