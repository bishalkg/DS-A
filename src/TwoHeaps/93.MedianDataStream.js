
/*
295. Find Median from Data Stream
Hard

5861

106

Add to List

Share
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.


Example 1:

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
*/

//https://leetcode.com/problems/minimize-deviation-in-array/discuss/1042804/javascript-using-max-priority-queue-with-comments
//see above link to see the min and max priortity queue data structures available on leetcode

/*
Time complexity#
The time complexity of the insertNum() will be O(logN) due to the insertion in the heap. The time complexity of the findMedian() will be O(1) as we can find the median from the top elements of the heaps.

Space complexity#
The space complexity will be O(N) because, as at any time, we will be storing all the numbers.
*/

var MedianFinder = function() {
  this.maxHeap = new MaxPriorityQueue({ priority: (num) => num }); //create a maxheap for the smaller values
  this.minHeap = new MinPriorityQueue({ priority: (num) => num }); //create a minheap for the larger values
};


MedianFinder.prototype.addNum = function(num) {
   if (this.maxHeap.size() === 0 || this.maxHeap.front().element >= num) { //if the smallvalues heap is empty or the num to add is smaller than the largest elemnent in the maxheap
       this.maxHeap.enqueue(num);                                            //add it to the maxHeap/smallheap
   } else {
       this.minHeap.enqueue(num);           //else add it to the minHeap/largervalues heap
   }


   if (this.maxHeap.size() > this.minHeap.size()+1) {         //if the smallvalues heap size is greater than 1+ the size of the largervalues heap, move the top value from the maxHeap to the minHeap (move the max value from the maxHeap to the minHeap) so that the sizes of the two heaps differ by at most 1 only
       this.minHeap.enqueue(this.maxHeap.dequeue().element);
   } else if (this.minHeap.size() > this.maxHeap.size()) {    //if the largervalues heap is larger than the smallervalues heap, move value from the largervalues heap to the smaller values heap
       this.maxHeap.enqueue(this.minHeap.dequeue().element);
   }

};


MedianFinder.prototype.findMedian = function() {
   if (this.maxHeap.size() === this.minHeap.size()) { //if the total number of values are even, the heaps should be the same size, so we return the avg of the top val in the max heap and top val in the minheap
       return (this.maxHeap.front().element + this.minHeap.front().element)/2.0;
   }
   return this.maxHeap.front().element; //else the maxHeap will be larger so return its top value
};




//I liked this guys implementation
var MedianFinder = function () {
  this.small = new MaxPriorityQueue({ priority: (num) => num });
  this.large = new MinPriorityQueue({ priority: (num) => num });
};


MedianFinder.prototype.addNum = function (num) {
  this.small.enqueue(num);
  this.large.enqueue(this.small.dequeue().element);
  if (this.small.size() < this.large.size()) {
    this.small.enqueue(this.large.dequeue().element);
  }
};

MedianFinder.prototype.findMedian = function () {
  return this.small.size() > this.large.size()
    ? this.small.front().element
    : (this.small.front().element + this.large.front().element) / 2;
};



//from grokkings
const Heap = require('./collections/heap'); //http://www.collectionsjs.com


class MedianOfAStream {
  constructor() {
    this.maxHeap = new Heap([], null, ((a, b) => a - b)); // containing first half of numbers
    this.minHeap = new Heap([], null, ((a, b) => b - a)); // containing second half of numbers
  }

  insert_num(num) {
    if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    // either both the heaps will have equal number of elements or max-heap will have one
    // more element than the min-heap
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  find_median() {
    if (this.maxHeap.length === this.minHeap.length) {
      // we have even number of elements, take the average of middle two elements
      return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
    }

    // because max-heap will have one more element than the min-heap
    return this.maxHeap.peek();
  }
}