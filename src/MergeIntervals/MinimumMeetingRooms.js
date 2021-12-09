/*
Minimum Meeting Rooms (hard)#
Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.

Example 1:

Meetings: [[1,4], [2,5], [7,9]]
Output: 2
Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can
occur in any of the two rooms later.
*/


//we need to keep track of the last earliest ending meeting, to compare to the start of the next meeting

//A min Heap will store all active meetings, and we will track the maximum length of the heap and return that
//if the start of the next meeting is >= the end of the meeting at the root of the minHeap, remove it from the minHeap
  //this represents that the meeting room is now open for another meeting, since the start of the next meeting is after the end of the last earliest ending meeting
//always push the current meeting into the heap
//track the minRooms by keeping track of the longest MinHeap
function min_meeting_rooms(meetings) {
  // sort the meetings by start time
  meetings.sort((a, b) => a.start - b.start);

  let minRooms = 0,
    minHeap = new Heap([], null, ((a, b) => b.end - a.end));
  for (i = 0; i < meetings.length; i++) {
    // remove all the meetings that have ended
    while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
      minHeap.pop();
    }
    // add the current meeting into min_heap
    minHeap.push(meetings[i]);
    // all active meetings are in the min_heap, so we need rooms for all of them.
    minRooms = Math.max(minRooms, minHeap.length);
  }
  return minRooms;
}



//iterative approach O(NlogN) time and O(N+M) space
// go through each point in sorted order
  //if starting a new meeting +1 meetingsGoingOn
  //if ending a meeting -1 meetingsGoingOn
  //if end and start are === one is ending, the other is starting so +1 and -1; visit the ending first if theres a tie, meeting must end before the next starts
//Math.max(meetingsGoingOn, current Meetings Going On)

function minMeetingRooms(intervals) {
  var startTimes = intervals.map((interval) => interval[0]).sort();
  var endTimes = intervals.map((interval) => interval[1]).sort();

  var minRooms = 0;
  var meetingsGoingOn = 0;
  var start = 0;
  var end = 0;
  while (start < intervals.length) {
    if (startTimes[start] < endTimes[end]) { //new meeting is starting
      meetingsGoingOn++;
      start++;      //advance pointer
    } else {
      meetingsGoingOn--;
      end++;
    }
    minRooms = Math.max(minRooms, meetingsGoingOn);
  }
  return minRooms;
}