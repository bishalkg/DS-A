//psuedo classical
const Stack = function() {
  this._storage = {};
  this._size = 0;
}

Stack.prototype.push = (value) => {
  this._storage[this._size] = value;
  this._size++;
}

Stack.prototype.pop = () => {
  this._size && this._size--;
  const popped = this._storage[this._size];
  delete this._storage[this._size];
  return popped;
}

Stack.prototype.size = () => {
  return this._size;
}


//ES6
class Stack {
  constructor() {
    this._storage = {};
    this._size = 0;
  }


  push(value) {
    this._storage[this._size] = value;
    this._size++;
  }

  pop() {
    //if size is not 0, reduce size by 1
    this._size && this._size--;
    const popped = this._storage[this._size];
    delete this._storage[this._size];
    return popped;
  }

  size() {
    return this._size;
  }
}
