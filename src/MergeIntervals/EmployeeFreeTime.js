/*
Employee Free Time (hard)#
For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is sorted on the start time.

Example 1:

Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
Output: [3,5]
Explanation: Both the employees are free between [3,5].
*/



const find_employee_free_time = function(schedule) {
  result = [];

  var allScheds = [];
  for (employee of schedule) {
      for (interval of employee) {
          allScheds.push([interval.start, interval.end]);
      }
  }
  allScheds.sort((a, b) => a.start-b.start);

  var firstInterval = allScheds[0];
  var lastEnd = firstInterval[1];
  for (var i = 1; i < allScheds.length; i++) {
      var currStart = allScheds[i][0];
      var currEnd = allScheds[i][1];
      if (currStart > lastEnd) {
          result.push([lastEnd, currStart]);
      }
      lastEnd = Math.max(lastEnd, currEnd);
  }

  return result;
};