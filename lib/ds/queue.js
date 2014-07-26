

/**
 * @constructor
 * @implements {ds.IIterable}
 */
ds.Queue = function() {
  /**
   * @type {ds.ListItem}
   */
  this.__first = null;

  /**
   * @type {ds.ListItem}
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
  var item = new ds.ListItem(data, null, this.__last);

  if (this.__last !== null) {
    this.__last.setPrev(item);
  }

  this.__last = item;

  if (this.__last.getNext() === null) {
    this.__first = this.__last;
  }

  this.__size += 1;
};


/**
 * @return {ds.QueueData}
 */
ds.Queue.prototype.dequeue = function() {
  if (this.__first !== null) {
    var data = this.__first.getData();
    var prev = this.__first.getPrev();

    this.__first.setPrev(null);
    this.__first = prev;

    if (prev !== null) {
      prev.setNext(null);
    } else {
      this.__last = null;
    }

    this.__size -= 1;
    return data;
  }

  return null;
};
