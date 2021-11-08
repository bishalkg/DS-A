import { LimitedArray, getIndexBelowMaxForKey } from './HashTableHelpers.mjs';

// Notice how each function has a similar structure:
//   - calculate an index
//   - retreive an bucket at that location
//   - iterate over the bucket, and
//     - perform an action if the key is found
//   - otherwise perform a not-found action

class HashTable {
  constructor() {
    this._size = 0;
    this._limit = 8;
    this._storage = new LimitedArray(this._limit);
    //new Array(this._limit) would work too but it wont check the limit and throw error
  }

  insert(k, v) {
    let index = getIndexBelowMaxForKey(k, this._limit);

    //if a bucket at that index exists, retrieve it, or create a new empty bucket
    let bucket = this._storage.get(index) || [];

    //collision: if bucket exists and hashedIndex exists, replace a value
    for (var i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === k) {
        let oldVal = tuple[1];
        tuple[1] = v;
        return oldVal;
      }
    }
    //if tuple with the key k doesn't exist, push a new tuple into the bucket
    bucket.push([k, v]);
    //set the storage index to be the hash, and its value to be the bucket array
    this._storage.set(index, bucket);
    this._size++;

    //if the storage array size is at 75% of the limit, resize the storage array 2x
    if (this._size > this._limit * 0.75) {
      this._resize(this._limit * 2);
    }

    return undefined;
  }


  //O(1) but if bucket holds many, could be O(n)
  retrieve(k) {
    let index = getIndexBelowMaxForKey(k, this._limit);

    let bucket = this._storage.get(index) || [];

    for (var i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
    return undefined;
  }

  remove(k) {
    let index = getIndexBelowMaxForKey(k, this._limit);

    let bucket = this._storage.get(index) || [];

    for (var i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === k) {
        //splice is an O(n) operation
        bucket.splice(i, 1);
        this._size--;
        //if size of storage array is less than 25% of the limit, resize by half
        if (this._size < this._limit * 0.25) {
          this._resize(Math.floor(this._limit / 2));
        }
        return tuple[1];
      }
    }
    return undefined;
  }


  _resize(newLimit) {
    //have ref to old storage bc we will need to transfer data
    let oldStorage = this._storage;

    //min size will be 8
    newLimit = Math.max(newLimit, 8);
    if (newLimit === this._limit) return;

    //reassign to new resized storage array
    this._limit = newLimit;
    this._storage = new LimitedArray(this._limit);
    this._size = 0;

    oldStorage.each(function(bucket) {
      if (!bucket) return;
      for (var i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        this.insert(tuple[0], tuple[1]);
      }
      //bc this callback will be invoked inside of LimitedArrays each function, it has no 'this' binding during invocation time of the callback
      //need bind so that this.insert works on the hashtable instance, so we bind 'this' here so that the 'this' inside the callback has the correct binding
    }.bind(this))
  };

}

