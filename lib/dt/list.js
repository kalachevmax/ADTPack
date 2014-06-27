

/**
 * @constructor
 * @implements {dt.IIterable}
 */
dt.List = function() {
  /**
   * @type {dt.ListItem}
   */
  this.__first = null;

  /**
   * @type {dt.ListItem}
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
dt.List.prototype.getFirst = function() {
  return this.__first;
};


/**
 * @return {dt.ListData}
 */
dt.List.prototype.getLast = function() {
  return this.__last;
};


/**
 * @inheritDoc
 */
dt.List.prototype.getNext = function(item) {
  return item.getNext();
};


/**
 * @inheritDoc
 */
dt.List.prototype.isEmpty = function() {
  return this.__first === null;
};


/**
 * @param {number} itemNo
 * @return {dt.ListItem}
 */
dt.List.prototype.locate = function(itemNo) {
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
 * @param {dt.ListData} data
 * @return {dt.ListItem}
 */
dt.List.prototype.find = function(data) {
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
 * @param {dt.ListData} data
 */
dt.List.prototype.addFirst = function(data) {
  this.__last = this.__first;
  this.__first = new dt.ListItem(data, this.__first, null);
  this.__size += 1;
};


/**
 * @param {dt.ListData} data
 */
dt.List.prototype.addLast = function(data) {
  var item = new dt.ListItem(data, null, this.__last);

  if (this.__last !== null) {
    this.__last.setNext(item);
  } else {
    this.__first = item;
  }

  this.__last = item;
  this.__size += 1;
};


/**
 * @param {!dt.ListData} data
 * @param {number} itemNo
 */
dt.List.prototype.add = function(data, itemNo) {
  if (this.getSize() === 0 || this.getSize() === 1) {
    this.addFirst(data);
  } else {
    var prev = this.locate(itemNo - 1);
    var next = prev.getNext();
    var item = new dt.ListItem(data, next, prev);
    next.setPrev(item);
    prev.setNext(item);
  }
};


/**
 *
 */
dt.List.prototype.removeFirst = function() {
  if (this.__first !== null) {
    this.__first = this.__first.getNext();
  }
};


/**
 *
 */
dt.List.prototype.removeLast = function() {
};


/**
 * @param {number} itemNo
 */
dt.List.prototype.remove = function(itemNo) {
};


/**
 * @return {number}
 */
dt.List.prototype.getSize = function() {
  return this.__size;
};
