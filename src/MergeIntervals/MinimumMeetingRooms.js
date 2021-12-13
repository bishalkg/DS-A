/*
Minimum Meeting Rooms (hard)#
Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.

Example 1:

Meetings: [[1,4], [2,5], [7,9]]
Output: 2
Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can
occur in any of the two rooms later.
*/


//we need to keep track of the last earliest ending meeting, to compare to the start of the next meeting, this is done using a minHeap

//A min Heap will store all active meetings, and we will track the maximum length of the heap and return that
//if the start of the next meeting is >= the end of the meeting at the root of the minHeap, remove it from the minHeap
  //this represents that the meeting room is now open for another meeting, since the start of the next meeting is after the end of the last earliest ending meeting
//always push the current meeting into the heap
//track the minRooms by keeping track of the longest MinHeap
/*
Sort all the meetings on their start time.
Create a min-heap to store all the active meetings. This min-heap will also be used to find the active meeting with the smallest end time.
Iterate through all the meetings one by one to add them in the min-heap. Let’s say we are trying to schedule the meeting m1.
Since the min-heap contains all the active meetings, so before scheduling m1 we can remove all meetings from the heap that have ended before m1, i.e., remove all meetings from the heap that have an end time smaller than or equal to the start time of m1.
Now add m1 to the heap.
The heap will always have all the overlapping meetings, so we will need rooms for all of them. Keep a counter to remember the maximum size of the heap at any time which will be the minimum number of rooms needed.
*/
function min_meeting_rooms(meetings) {
  // sort the meetings by start time
  meetings.sort((a, b) => a.start - b.start);

  let minRooms = 0,
    minHeap = new Heap([], null, ((a, b) => b.end - a.end));
  for (i = 0; i < meetings.length; i++) {
    // remove all the meetings that have ended
    while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
      minHeap.pop(); //remove the last earliest ending meeting from the heap
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
  //if endTime and startTime are === one is ending, visit the ending first if theres a tie, meeting must end before the next starts
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
    } else { //a meeting is ending
      meetingsGoingOn--;
      end++;
    }
    minRooms = Math.max(minRooms, meetingsGoingOn);
  }
  return minRooms;
}