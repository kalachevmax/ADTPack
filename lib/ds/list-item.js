

/**
 * @constructor
 * @param {ds.ListData} data
 * @param {ds.ListItem} prev
 * @param {ds.ListItem} next
 */
ds.ListItem = function(data, prev, next) {
  /**
   * @type {ds.ListData}
   */
  this.__data = data;

  /**
   * @type {ds.ListItem}
   */
  this.__prev = prev;

  /**
   * @type {ds.ListItem}
   */
  this.__next = next;
};


/**
 * @return {ds.ListData}
 */
ds.ListItem.prototype.getData = function() {
  return this.__data;
};


/**
 * @return {ds.ListItem}
 */
ds.ListItem.prototype.getNext = function() {
  return this.__next;
};


/**
 * @param {ds.ListItem} item
 */
ds.ListItem.prototype.setNext = function(item) {
  this.__next = item;
};


/**
 * @return {ds.ListItem}
 */
ds.ListItem.prototype.getPrev = function() {
  return this.__prev;
};


/**
 * @param {ds.ListItem} item
 */
ds.ListItem.prototype.setPrev = function(item) {
  this.__prev = item;
};
