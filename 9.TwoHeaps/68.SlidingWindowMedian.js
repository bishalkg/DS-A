/*
480. Sliding Window Median
Hard

1869

119

Add to List

Share
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.

For examples, if arr = [2,3,4], the median is 3.
For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted.


Time complexity #
The time complexity of our algorithm is O(N*K)O(N∗K) where ‘N’ is the total number of elements in the input array and ‘K’ is the size of the sliding window. This is due to the fact that we are going through all the ‘N’ numbers and, while doing so, we are doing two things:

Inserting/removing numbers from heaps of size ‘K’. This will take O(logK)O(logK)
Removing the element going out of the sliding window. This will take O(K)O(K) as we will be searching this element in an array of size ‘K’ (i.e., a heap).
Space complexity #
Ignoring the space needed for the output array, the space complexity will be O(K)O(K) because, at any time, we will be storing all the numbers within the sliding window.
*/

const Heap = require('./collections/heap'); //http://www.collectionsjs.com


class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap([], null, ((a, b) => a - b));
    this.minHeap = new Heap([], null, ((a, b) => b - a));
  }

  find_sliding_window_median(nums, k) {
    const result = Array(nums.length - k + 1).fill(0.0);

    for (let i = 0; i < nums.length; i++) { //loop over the give nums

      if (this.maxHeap.length === 0 || nums[i] <= this.maxHeap.peek()) {
        this.maxHeap.push(nums[i]);
      } else {
        this.minHeap.push(nums[i]);
      }

      this.rebalance_heaps(); //rebalance extracted as a separate function for reuse

      if (i - k + 1 >= 0) { // if we have at least 'k' elements in the sliding window, i-k+1 wont be equal to 0 until we have k elements in our window, at which point it also becomes the currentIndex of our result array
      //eg. say k=3, once we are on index 2, 2-3+1=0, so we have a window of 3, i-k+1 also then becomes the first/0th index of the result array
        // add the median to the the result array
        if (this.maxHeap.length === this.minHeap.length) {
          // we have even number of elements, take the average of middle two elements
          result[i - k + 1] = this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
        } else { // because max-heap will have one more element than the min-heap
          result[i - k + 1] = this.maxHeap.peek();
        }

        // remove the element going out of the sliding window
        const elementToBeRemoved = nums[i - k + 1]; //we can use the index i-k+1 to retrieve the first value in our window, which will first be at index 0..1..2 each loop
        if (elementToBeRemoved <= this.maxHeap.peek()) { //find which heap the element lives in and remove it
          this.maxHeap.delete(elementToBeRemoved); // delete from heap, takes O(K) bc we need to search for this element
        } else {
          this.minHeap.delete(elementToBeRemoved); // delete from heap
        }

        this.rebalance_heaps(); //rebalance the heaps after removing a value
      }

    }

    return result;
  }

  rebalance_heaps() {
    // either both the heaps will have equal number of elements or max-heap will have
    // one more element than the min-heap
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }
}






var medianSlidingWindow = function(nums, k) {
  var result = [];
  var maxHeap = new MaxPriorityQueue({ priority: (num) => num });
  var minHeap = new MinPriorityQueue({ priority: (num) => num });

  var rebalanceHeaps = function() {
      if (maxHeap.size() > minHeap.size()+1) {
          minHeap.enqueue(maxHeap.dequeue().element);
      } else if (minHeap.size() > maxHeap.size()) {
          maxHeap.enqueue(minHeap.dequeue().element);
      }
  }

  for (var i = 0; i < nums.length; i++) {

      if (maxHeap.size() === 0 || nums[i] <= maxHeap.front().element) {
          maxHeap.enqueue(nums[i]);
      } else {
          minHeap.enqueue(nums[i]);
      }

      rebalanceHeaps();

      if (i-k+1 >= 0) {

          if (maxHeap.size() === minHeap.size()) {
              result[i-k+1] = (maxHeap.front().element + minHeap.front().element)/2;
          } else {
              result[i-k+1] = maxHeap.front().element;
          }

          var elToRemove = result[i-k+1];
          if (elToRemove <= maxHeap.front().element) {
              //remove element from maxHeap //leetcode priority queue doesnt have this method...
          } else {
              //remove element from minHeap
          }


          rebalanceHeaps();

      }



  }

  return result;
};