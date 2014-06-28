

/**
 * @constructor
 * @implements {dt.IIterable}
 */
dt.Queue = function() {
  /**
   * @type {dt.QueueItem}
   */
  this.__first = null;

  /**
   * @type {dt.QueueItem}
   */
  this.__last = null;

  /**
   * @type {number}
   */
  this.__size = 0;
};


/**
 * @inheritDoc
 */
dt.Queue.prototype.getFirst = function() {
  return this.__first;
};


/**
 * @inheritDoc
 */
dt.Queue.prototype.getNext = function(item) {
  return item !== null ? item.getNext() : null;
};


/**
 * @param {dt.QueueData} data
 */
dt.Queue.prototype.enqueue = function(data) {
  this.__first = new dt.QueueItem(data, null, this.__first);

  if (this.__first.getNext === null) {
    this.__last = this.__first;
  }

  this.__size += 1;
};


/**
 * @return {dt.QueueData}
 */
dt.Queue.prototype.dequeue = function() {
  if (this.__last !== null) {
    var data = this.__last.getData();
    var prev = this.__last.getPrev();

    this.__last.setPrev(null);
    this.__last = prev;

    if (prev !== null) {
      prev.setNext(null);
    } else {
      this.__first = null;
    }

    this.__size -= 1;
    return data;
  }

  return null;
};
