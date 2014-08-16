

/**
 * @constructor
 * @implements {ds.IDataItem}
 * @param {*} data
 * @param {ds.IDataItem} prev
 * @param {ds.IDataItem} next
 */
ds.ListItem = function(data, prev, next) {
  /**
   * @type {*}
   */
  this.__data = data;

  /**
   * @type {ds.IDataItem}
   */
  this.prev = prev;

  /**
   * @type {ds.IDataItem}
   */
  this.next = next;
};


/**
 * @return {*}
 */
ds.ListItem.prototype.get = function() {
  return this.__data;
};
