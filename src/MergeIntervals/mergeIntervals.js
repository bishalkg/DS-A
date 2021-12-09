/*
56. Merge Intervals
Medium

10634

457

Add to List

Share
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.


Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

*/

var merge = function(intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]); //sort by start index of each interval

  var start = intervals[0][0];  //start with the start of the first interval, guaranteed to be the smallest bc is sorted
  var end = intervals[0][1];    //and start end with the end of the first interval --- this will be reassign to grow the interval
  var merged = [];              //merged intervals to return
  for (var i = 1; i < intervals.length; i++ ) { //now start with the second interval, and loop through all intevals
      if (intervals[i][0] <= end) {   //if the start of the next interval is less or equal to the end of the first, it means the first overlaps the second
          end = Math.max(end, intervals[i][1]); //so we can reassign the end pointer to be the max of the two interval's end values
      } else {
          merged.push([start, end]);  //if there were no overlaps, push the current merged interval ([start, end]) into our result array
          start = intervals[i][0];  //and reset the starting and ending intervals
          end = intervals[i][1];
      }
  }
  merged.push([start, end]);    //we need to push the last interval into the result array since the loop will end before this happens
  return merged;
};



//similar solution except we mutate the interval while its within the result array
var merge = function(intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  var currInterval = intervals[0];
  var merged = [currInterval];

  for (var i = 1; i < intervals.length; i++) {
      if (intervals[i][0] <= currInterval[1]) { //if the start of the next interval is less than the end of the current interval
          currInterval[1] = Math.max(currInterval[1], intervals[i][1]);
      } else {
          currInterval = intervals[i]; //reassign to the new interval
          merged.push(currInterval);  //push that interval into the result array and repeat...
      }
  }
  return merged;
};