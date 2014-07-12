

/**
 * @constructor
 * @implements {ds.IIterable}
 */
ds.Queue = function() {
  /**
   * @type {ds.QueueItem}
   */
  this.__first = null;

  /**
   * @type {ds.QueueItem}
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
ds.Queue.prototype.getFirst = function() {
  return this.__first;
};


/**
 * @inheritDoc
 */
ds.Queue.prototype.getNext = function(item) {
  return item !== null ? item.getNext() : null;
};


/**
 * @param {ds.QueueData} data
 */
ds.Queue.prototype.enqueue = function(data) {
  this.__first = new ds.QueueItem(data, null, this.__first);

  if (this.__first.getNext === null) {
    this.__last = this.__first;
  }

  this.__size += 1;
};


/**
 * @return {ds.QueueData}
 */
ds.Queue.prototype.dequeue = function() {
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
