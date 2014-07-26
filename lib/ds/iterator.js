

/**
 * @constructor
 * @implements {ds.IIterator}
 * @param {ds.IIterable} source
 */
ds.Iterator = function(source) {
  /**
   * @type {ds.IIterable}
   */
  this.__source = source;

  /**
   * @type {ds.ListItem}
   */
  this.__cursor = new ds.ListItem(null, null, source.getFirst());
};


/**
 * @inheritDoc
 */
ds.Iterator.prototype.hasNext = function() {
  return this.__cursor.getNext() !== null;
};


/**
 * @inheritDoc
 */
ds.Iterator.prototype.next = function() {
  this.__cursor = this.__source.getNext(this.__cursor);
  return this.__cursor.getData();
};


/**
 *
 */
ds.Iterator.prototype.destroy = function() {
  this.__source = null;
  this.__cursor = null;
};
