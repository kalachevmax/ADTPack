

/**
 * @constructor
 * @implements {ds.IIterable}
 */
ds.List = function() {
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
ds.List.prototype.getFirst = function() {
  return this.__first;
};


/**
 * @return {ds.ListItem}
 */
ds.List.prototype.getLast = function() {
  return this.__last;
};


/**
 * @return {ds.ListItem}
 */
ds.List.prototype.getPrev = function(item) {
  return item !== null ? item.getPrev() : null;
};


/**
 * @inheritDoc
 */
ds.List.prototype.getNext = function(item) {
  return item !== null ? item.getNext() : null;
};


/**
 * @return {boolean}
 */
ds.List.prototype.isEmpty = function() {
  return this.__size === 0;
};


/**
 * @param {number} itemNo
 * @return {ds.ListItem}
 */
ds.List.prototype.locate = function(itemNo) {
  var i = 1;
  var item = this.__first;

  while (item !== null) {
    if (i === itemNo) {
      return item;
    }

    item = item.getNext();
    i += 1;
  }

  return null;
};


/**
 * @param {ds.ListData} data
 * @return {ds.ListItem}
 */
ds.List.prototype.find = function(data) {
  var item = this.__first;

  while (item !== null) {
    if (item.getData() === data) {
      return item;
    }

    item = item.getNext();
  }

  return null;
};


/**
 * @param {ds.ListData} data
 */
ds.List.prototype.addFirst = function(data) {
  this.__first = new ds.ListItem(data, null, this.__first);

  if (this.__first.getNext() === null) {
    this.__last = this.__first;
  }

  this.__size += 1;
};


/**
 * @param {ds.ListData} data
 */
ds.List.prototype.addLast = function(data) {
  var item = new ds.ListItem(data, this.__last, null);

  if (this.__last !== null) {
    this.__last.setNext(item);
  } else {
    this.__first = item;
  }

  this.__last = item;
  this.__size += 1;
};


/**
 * @param {!ds.ListData} data
 * @param {number} itemNo
 */
ds.List.prototype.add = function(data, itemNo) {
  if (this.getSize() === 0 || this.getSize() === 1) {
    this.addFirst(data);
  } else {
    var prev = this.locate(itemNo - 1);
    var next = prev.getNext();
    var item = new ds.ListItem(data, prev, next);
    next.setPrev(item);
    prev.setNext(item);
  }
};


/**
 *
 */
ds.List.prototype.removeFirst = function() {
  if (this.__first !== null) {
    var next = this.__first.getNext();
    this.__first.setNext(null);
    this.__first = next;

    if (next !== null) {
      next.setPrev(null);
    } else {
      this.__last = null;
    }

    this.__size -= 1;
  }
};


/**
 *
 */
ds.List.prototype.removeLast = function() {
  if (this.__last !== null) {
    var prev = this.__last.getPrev();
    this.__last.setPrev(null);
    this.__last = prev;

    if (prev !== null) {
      prev.setNext(null);
    } else {
      this.__first = null;
    }

    this.__size -= 1;
  }
};


/**
 * @param {number} itemNo
 */
ds.List.prototype.remove = function(itemNo) {
  var item = this.locate(itemNo);

  if (item !== null) {
    var prev = item.getPrev();
    var next = item.getNext();

    if (prev === null) {
      this.removeFirst();
    } else if (next === null) {
      this.removeLast();
    } else {
      item.setPrev(null);
      item.setNext(null);
      next.setPrev(prev);
      prev.setNext(next);
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
