/*
Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

Example 1:

Appointments: [[1,4], [2,5], [7,9]]
Output: false
Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments

*/


//O(NlogN) N is number of appointments bc we need to sort the items first, space is O(N) also needed for sorting (if using a sort that uses space)
const can_attend_all_appointments = function(intervals) {
  intervals.sort((a,b) => a.start-b.start);
  var currentInt = intervals[0];
  for (var i = 1; i < intervals.length; i++) {
    if (currentInt.end > intervals[i].start) { // equal to is OK bc as one ends you can start the next appointment
      return false;
    }
    currentInt = intervals[i];
  }
  return true;
};



function can_attend_all_appointments(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  for (i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      // please note the comparison above, it is "<" and not "<="
      // while merging we needed "<=" comparison, as we will be merging the two
      // intervals having condition "intervals[i][start] === intervals[i - 1][end]" but
      // such intervals don't represent conflicting appointments as one starts right
      // after the other
      return false;
    }
  }
  return true;
}