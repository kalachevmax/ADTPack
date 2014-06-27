

/**
 * @constructor
 * @implements {dt.IIterable}
 */
dt.List = function() {
  /**
   * @type {dt.ListItem}
   */
  this.__first = null;
};


/**
 * @inheritDoc
 */
dt.List.prototype.getFirst = function() {
  return this.__first;
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
 * @inheritDoc
 */
dt.List.prototype.find = function() {

};


/**
 * @param {dt.ListData} data
 */
dt.List.prototype.addFirst = function(data) {
  this.__first = new dt.ListItem(data, this.__first);
};


/**
 * @inheritDoc
 */
dt.List.prototype.add = function(data, opt_itemNo) {
  var itemNo = opt_itemNo ? opt_itemNo : this.getSize();

  if (this.isEmpty()) {
    this.__first = new dt.ListItem(data, null);
  } else {
    var prev = this.find(itemNo);
    if (prev !== null) {
      prev.setNext(new dt.ListItem(data, prev.getNext()));
    } else {
      this.__first = new dt.ListItem(data, this.__first);
    }
  }
};


/**
 * @inheritDoc
 */
dt.List.prototype.remove = function(opt_itemNo) {

};
