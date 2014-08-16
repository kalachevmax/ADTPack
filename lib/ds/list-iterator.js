

/**
 * @constructor
 * @implements {ds.IIterator}
 * @param {ds.IDataSet} source
 */
ds.ListIterator = function(source) {
  /**
   * @type {ds.IDataItem}
   */
  this.__cursor = new ds.ListItem(null, null, source.getFirst());
};


/**
 * @inheritDoc
 */
ds.ListIterator.prototype.hasNext = function() {
  return this.__cursor.next !== null;
};


/**
 * @inheritDoc
 */
ds.ListIterator.prototype.next = function() {
  this.__cursor = this.__cursor.next;
  return this.__cursor.get();
};


/**
 *
 */
ds.ListIterator.prototype.destroy = function() {
  this.__cursor = null;
};
