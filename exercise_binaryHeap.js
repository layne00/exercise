var MedianStream = function () {
  this._heap = [];
};

MedianStream.prototype = {
  insert: function (value, index=this.size()) {
    if (this.size() === 0) {
      this._heap[0] = value
    } else { //recursively switch 
      this._heap[index] = value; //insert value into the last column and resort 
      var pIndex = this.getParentIndex(index); 
      var cIndex = this.getChildIndex(index);
      
      if (index === 0) {
        if(value < this._heap[1]) { //traverse left if smaller
          this._heap[0] = this._heap[1];
          this.insert(value, 1);
        } else if (value > this._heap[2]) {
          this._heap[0] = this._heap[2];
          this.insert(value, 2);
        }
      } else if (index % 2 === 0) {
        if (value < this._heap[pIndex]) {
          this._heap[index] = this._heap[pIndex];
          this.insert(value, pIndex);
        } else if (cIndex !== null && value > this._heap[cIndex]) {
          this._heap[index] = this._heap[cIndex];
          this.insert(value, cIndex);
        }
      } else if (index % 2 === 1) {
        if (value > this._heap[pIndex]) {
          this._heap[index] = this._heap[pIndex];
          this.insert(value, pIndex);
        } else if (cIndex !== null && value < this._heap[cIndex]) {
          this._heap[index] = this._heap[cIndex];
          this.insert(value, cIndex);
        }
      }
    }
  },
  peekMedian: function () {
    if (this.size() % 2 === 1) {
      return this._heap[0];
    } else {
      return (this._heap[0] + this._heap[1]) / 2
    }
  },
  size: function () {return this._heap.length;},
  getParentIndex: function (currentIndex) {
    if (currentIndex === 0) {
      return null;
    } else if (currentIndex === 1) {
      return 0
    } else {
      return currentIndex - 2;
    }
  }, 
  getChildIndex: function (currentIndex, value) {
    if (currentIndex === 0) {
      return 0 // not sure yet
    } else {
      if ((currentIndex + 2) > this.size()-1) {
        return null
      } else {
        return currentIndex + 2;
      }
    }
  }
};

var mStream = new MedianStream();
mStream.insert(1);
mStream.insert(3);
mStream.insert(2);
mStream.insert(5);
mStream.insert(4);
console.log(mStream._heap)
console.log(mStream.peekMedian())


var mStream = new MedianStream();
mStream.insert(1);
mStream.insert(3);
mStream.insert(7);
mStream.insert(8);
console.log(mStream._heap)
console.log(mStream.peekMedian())


//plan is to try to represent the thing in a heap where the root is the median!!!

/*
 *          0
 *        1   2
 *       3     4     
        5       6
 *     7         8
 

 */

