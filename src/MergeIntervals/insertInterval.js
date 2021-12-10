/*
57. Insert Interval
Medium

3941

296

Add to List

Share
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.



Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
*/

//fastest solution O(N) time and space
var insert = function(intervals, newInterval) {
  var result = [];
  var i = 0;

  //first check if the current interval in intervals should lie to the left of the newInterval, always check that i doesnt reach the end of the list
  while (i < intervals.length && intervals[i][1] < newInterval[0]) { //while intervals are less than the new interval, push them to result
                                                                      //we will stop where the next interval can be merged, or starts a new interval
      result.push(intervals[i]);
      i++;
  }

  //if the current interval should not lie to the left of the newInterval, there may be a merge
  //up to this step, the current Intervals end is greater than the newIntervals start, meaning there should be a merge
  //and we want to continue to merge while the currentInvervals start is less than or equal to the newIntervals end ----> bc if the currentIntervals start were greater than the newIntervals end, it should be placed AFTER the newInterval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) { //while the start of the current interval is less than the end of the newInterval, merge
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //take the minimum start of all the potential intervals to merge
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //take the max end of all the potential intervals to merge
      i++;
  }

  result.push(newInterval); //the push the interval in once we reach a case where the current Interval should lie to the RIGHT of the newInterval

  while (i < intervals.length) {
      result.push(intervals[i]);
      i++;
  }
  return result;
}




//naiive slow solution, push newInterval into intervals and run mergeIntervals
var insert = function(intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0]-b[0]);
  var currInt = intervals[0];
  var merged = [currInt];
  for (var i = 1; i < intervals.length; i++) {
      if (intervals[i][0] <= currInt[1]) {
          currInt[1] = Math.max(currInt[1], intervals[i][1]);
      } else {
          currInt = intervals[i];
          merged.push(currInt);
      }
  }
  return merged;
};


//another slow solution
var insert = function(intervals, newInterval) {
  var result = [];
  var onLeft = false;

  for (var i = 0; i < intervals.length; i++) {
      if (newInterval[1] < intervals[i][0]) {
          result.push(newInterval);
          onLeft = true;
          break;
      } else if (newInterval[0] > intervals[i][1]) {
          result.push(intervals[i]);
      } else {
          newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
      }
  }

  if (onLeft) {
      return result.concat(intervals.splice(i));
  }

  result.push(newInterval);
  return result;
};