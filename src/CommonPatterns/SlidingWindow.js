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
      currWindowSum+=array[windowEnd];
      while (currWindowSum >= targetSum) {
          minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1); //add 1 bc is zero indexed
          if (currWindowSum === 1) return 1;  //1 is the smallest window size
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


var minsizeSum = function(array, sum) {
  var min = Infinity;
  var currSum = 0;
  var start = 0;
  for (var end = 0; end < array.length; end++) {
    currSum+= array[end];
    while (currSum >= target) {
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
    if (end >= (k-1)) {
      averages.push(currSum/k);
      currSum -= array[start];
      start++
    }
  }
  return averages;
}


var longestSubstringSizeK = function(string, k) {
  var maxLength = -Infinity;
  var counter = {};
  var start = 0;
  for (var end = 0; end < array.length; end++) {
    if (!counter[string[end]]) {
      counter[string[end]] = 1;
    } else {
      counter[string[end]]++;
    }

    while (Object.keys(counter).length > k) {
      counter[string[start]]--;
      if (counter[string[start]] === 0) delete counter[string[start]];
      start++;
    }

    if (Object.keys(counter).length <= k) {
      maxLength = Math.max(maxLength, end - start + 1);

    }

  }
}