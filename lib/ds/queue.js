

/**
 * @constructor
 * @implements {ds.IDataSet}
 * @implements {ds.IQueue}
 * @param {*} dataType
 */
ds.Queue = function(dataType) {
  /**
   * @type {*}
   */
  this.__dataType = dataType;

  /**
   * @type {ds.IDataItem}
   */
  this.__first = null;

  /**
   * @type {ds.IDataItem}
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
ds.Queue.prototype.add = function(data) {
  var item = new ds.ListItem(data, null, this.__last);

  if (this.__last !== null) {
    this.__last.prev = item;
  }

  this.__last = item;

  if (this.__last.next === null) {
    this.__first = this.__last;
  }

  this.__size += 1;
};


/**
 * @inheritDoc
 */
ds.Queue.prototype.remove = function(opt_data) {
  if (this.__first !== null) {
    var data = this.__first.get();
    var prev = this.__first.prev;

    this.__first.prev = null;
    this.__first = prev;

    if (prev !== null) {
      prev.next = null;
    } else {
      this.__last = null;
    }

    this.__size -= 1;
    return data;
  }

  return null;
};


/**
 * @inheritDoc
 */
ds.Queue.prototype.enqueue = function(data) {
  this.add(data);
};


/**
 * @inheritDoc
 */
ds.Queue.prototype.dequeue = function() {
  return this.remove();
};


/**
 * @inheritDoc
 */
ds.Queue.prototype.isEmpty = function() {
  return this.__size === 0;
};


/**
 * @inheritDoc
 */
ds.Queue.prototype.getIterator = function() {
  return new ds.ListIterator(this);
};


/**
 * @inheritDoc
 */
ds.Queue.prototype.destroy = function() {
  var item = this.__first;

  while (item !== null) {
    if (item.prev !== null) {
      item.prev.next = null;
      item.prev = null;
    }

    item = item.next;
  }

  this.__first = null;
  this.__last = null;
  this.__size = 0;
};
