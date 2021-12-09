/*
986. Interval List Intersections
Medium

3594

77

Add to List

Share
You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].



Example 1:


Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
*/


var intervalIntersection = function(firstList, secondList) {

  var result = [];
  var i = 0;
  var j = 0;
  while (i < firstList.length && j < secondList.length) {

      var aOverb = firstList[i][0] <= secondList[j][0] && firstList[i][1] >= secondList[j][0];
      var bOvera = secondList[j][0] <= firstList[i][0] && secondList[j][1] >= firstList[i][0];

      if (aOverb || bOvera) {
          result.push([Math.max(firstList[i][0],secondList[j][0]), Math.min(firstList[i][1],secondList[j][1])])
      }

      //remove the interval with the smaller endpoint
      if (firstList[i][1] < secondList[j][1]) {
          i++;
      } else {
          j++;
      }
  }
  return result;
};






//from leetcode, doesnt actually seem to work
var intervalIntersection = function(firstList, secondList) {
  var result = [];
  var i = 0, j = 0;

  while (i < firstList.length && j < firstList.length) {
    var low = Math.max(firstList[i][0], secondList[j][0]);
    var high = Math.min(firstList[i][1], secondList[j][1]);
    if (low <= high) {
      result.push([low, high]);
    }

    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}