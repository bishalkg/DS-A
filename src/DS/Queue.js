//pseudoclassical

const Queue = function() {
  this._storage = [];
  this._size = 0;
}

Queue.prototype.enqueue = function(value) {
  this._storage.push(value)
  this._size++;
}

Queue.prototype.dequeue = function(value) {
  this._size && this._size--;
  return this._storage.shift()
}

Queue.prototype.size = function() {
  return this._storage.length
  //return this._size;
}


//ES6

class Queue2 {
  constructor() {
    this._storage = {};
    this._start = 0;
    this._end = 0;
  }

  enqueue(value) {
    this._storage[this._end++] = value;
  }

  dequeue(value) {
    const dequeued = this._storage[this._start];
    delete this._storage[this._start];
    //shifts the starting position by one, instead of shifting all values towards 0
    this.size() && this._start++;
    return dequeued;
  }

  size() {
    return this._end - this._start;
  }
}

let q = new Queue2();
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
console.log(q.dequeue())
console.log(q);
console.log(q.dequeue())
console.log(q);
console.log(q.dequeue())
console.log(q);
console.log(q.dequeue())
console.log(q);
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
console.log(q)