

/**
 * @constructor
 * @param {dt.ListData} data
 * @param {dt.ListItem} next
 */
dt.ListItem = function(data, next) {
  /**
   * @type {dt.ListData}
   */
  this.__data = data;

  /**
   * @type {dt.ListItem}
   */
  this.__next = next;
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
