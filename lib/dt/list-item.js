

/**
 * @constructor
 * @param {dt.ListData} data
 * @param {dt.ListItem} next
 * @param {dt.ListItem} prev
 */
dt.ListItem = function(data, next, prev) {
  /**
   * @type {dt.ListData}
   */
  this.__data = data;

  /**
   * @type {dt.ListItem}
   */
  this.__next = next;

  /**
   * @type {dt.ListItem}
   */
  this.__prev = prev;
};


/**
 * @return {dt.ListData}
 */
dt.ListItem.prototype.getData = function() {
  return this.__data;
};


/**
 * @return {dt.ListItem}
 */
dt.ListItem.prototype.getNext = function() {
  return this.__next;
};


/**
 * @param {dt.ListItem} item
 */
dt.ListItem.prototype.setNext = function(item) {
  this.__next = item;
};


/**
 * @return {dt.ListItem}
 */
dt.ListItem.prototype.getPrev = function() {
  return this.__prev;
};


/**
 * @param {dt.ListItem} item
 */
dt.ListItem.prototype.setPrev = function(item) {
  this.__prev = item;
};
