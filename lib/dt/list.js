

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
  this.__first = new dt.ListItem(data, this.__first);
  this.__size += 1;
};


/**
 * @param {dt.ListData} data
 */
dt.List.prototype.addLast = function(data) {
  var last = this.__last;
  var item = new dt.ListItem(data, null);
  last.setNext(item);
  this.__last = item;
  this.__size += 1;
};


/**
 * @param {!dt.ListData} data
 * @param {number} itemNo
 */
dt.List.prototype.add = function(data, itemNo) {
  if (this.isEmpty() || this.getSize() === 1) {
    this.addFirst(data);
  } else {
    var prev = this.locate(itemNo - 1);
    prev.setNext(new dt.ListItem(data, prev.getNext()));
  }
};


/**
 * @inheritDoc
 */
dt.List.prototype.remove = function(opt_itemNo) {

};


/**
 * @return {number}
 */
dt.List.prototype.getSize = function() {
  return this.__size;
};
