/*
Maximum CPU Load (hard)#
We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

Example 1:

Jobs: [[1,4,3], [2,5,4], [7,9,6]]
Output: 7
Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the
jobs are running at the same time i.e., during the time interval (2,4).
*/





//mine O(N^2) time solution
const find_max_cpu_load = function(jobs) {
  jobs.sort((a,b) => a.start -b.start);

  var maxLoad = 0;
  var currJob = jobs[0];
  for (var i = 1; i <= jobs.length; i++) {
    var currLoad = currJob.cpu_load;
    if (i < jobs.length && jobs[i].start <= currJob.end) {
      var j = i;
      while (j < jobs.length && currJob.end >= jobs[j].start) {
        currLoad+=jobs[j].cpu_load;
        j++;
      }
    }
    maxLoad = Math.max(currLoad, maxLoad);
    currJob = jobs[i];
  }
  return maxLoad;
};






//grokkings
function find_max_cpu_load(jobs) {
  // sort the jobs by start time
  jobs.sort((a, b) => a.start - b.start);

  let maxCPULoad = 0,
    currentCPULoad = 0;
  const minHeap = new Heap([], null, ((a, b) => b.end - a.end));

  for (j = 0; j < jobs.length; j++) {
    // remove all the jobs that have ended
    while (minHeap.length > 0 && jobs[j].start >= minHeap.peek().end) {
      currentCPULoad -= minHeap.pop().cpuLoad;
    }
    // add the current job into min_heap
    minHeap.push(jobs[j]);
    //update totalCPULoad
    currentCPULoad += jobs[j].cpuLoad;
    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
  }
  return maxCPULoad;
}

/*
Time complexity#
The time complexity of the above algorithm is O(NlogN), where ‘N’ is the total number of jobs. This is due to the sorting that we did in the beginning. Also, while iterating the jobs, we might need to poll/offer jobs to the priority queue. Each of these operations can take O(logN)O(logN). Overall our algorithm will take O(NlogN).

Space complexity#
The space complexity of the above algorithm will be O(N), which is required for sorting. Also, in the worst case, we have to insert all the jobs into the priority queue (when all jobs overlap) which will also take O(N) space. The overall space complexity of our algorithm is O(N).
*/