

/**
 * @constructor
 * @implements {ds.IDataSet}
 */
ds.List = function() {
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
ds.List.prototype.getFirst = function() {
  return this.__first;
};


/**
 * @return {ds.IDataItem}
 */
ds.List.prototype.getLast = function() {
  return this.__last;
};


/**
 * @return {boolean}
 */
ds.List.prototype.isEmpty = function() {
  return this.__size === 0;
};


/**
 * @param {number} itemNo
 * @return {ds.IDataItem}
 */
ds.List.prototype.locate = function(itemNo) {
  var i = 1;
  var item = this.__first;

  while (item !== null) {
    if (i === itemNo) {
      return item;
    }

    item = item.next;
    i += 1;
  }

  return null;
};


/**
 * @param {*} data
 * @return {ds.ListItem}
 */
ds.List.prototype.find = function(data) {
  var item = this.__first;

  while (item !== null) {
    if (item.get() === data) {
      return item;
    }

    item = item.next;
  }

  return null;
};


/**
 * @param {*} data
 */
ds.List.prototype.addFirst = function(data) {
  this.__first = new ds.ListItem(data, null, this.__first);

  if (this.__first.next === null) {
    this.__last = this.__first;
  }

  this.__size += 1;
};


/**
 * @param {*} data
 */
ds.List.prototype.addLast = function(data) {
  var item = new ds.ListItem(data, this.__last, null);

  if (this.__last !== null) {
    this.__last.next = item;
  } else {
    this.__first = item;
  }

  this.__last = item;
  this.__size += 1;
};


/**
 * @param {*} data
 * @param {number} itemNo
 */
ds.List.prototype.addAt = function(data, itemNo) {
  if (this.__size === 0 || this.__size === 1) {
    this.addFirst(data);
  } else {
    var prev = this.locate(itemNo - 1);
    var next = prev.next;
    var item = new ds.ListItem(data, prev, next);
    next.prev = item;
    prev.next = item;
  }
};


/**
 *
 */
ds.List.prototype.removeFirst = function() {
  if (this.__first !== null) {
    var next = this.__first.next;
    this.__first.next = null;
    this.__first = next;

    if (next !== null) {
      next.prev = null;
    } else {
      this.__last = null;
    }

    this.__size -= 1;
  }
};


/**
 * @return {*}
 */
ds.List.prototype.removeLast = function() {
  if (this.__last !== null) {
    var data = this.__last.get();
    var prev = this.__last.prev;
    this.__last.prev = null;
    this.__last = prev;

    if (prev !== null) {
      prev.next = null;
    } else {
      this.__first = null;
    }

    this.__size -= 1;
    return data;
  }

  return null;
};


/**
 * @param {number} itemNo
 */
ds.List.prototype.removeAt = function(itemNo) {
  var item = this.locate(itemNo);

  if (item !== null) {
    var prev = item.prev;
    var next = item.next;

    if (prev === null) {
      this.removeFirst();
    } else if (next === null) {
      this.removeLast();
    } else {
      item.prev = null;
      item.next = null;
      next.prev = prev;
      prev.next = next;
      this.__size -= 1;
    }
  }
};


/**
 * @return {number}
 */
ds.List.prototype.getSize = function() {
  return this.__size;
};


/**
 * @inheritDoc
 */
ds.List.prototype.add = function(data) {
  this.addLast(data);
};


/**
 * @inheritDoc
 */
ds.List.prototype.remove = function(opt_data) {
  return this.removeLast();
};


/**
 * @inheritDoc
 */
ds.List.prototype.getIterator = function() {
  return new ds.ListIterator(this);
};


/**
 * @inheritDoc
 */
ds.List.prototype.destroy = function() {
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
