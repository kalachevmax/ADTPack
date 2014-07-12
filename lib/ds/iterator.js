

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
   * @type {ds.Item}
   */
  this.__cursor = source.getFirst();
};


/**
 * @inheritDoc
 */
ds.Iterator.prototype.hasNext = function() {
  return this.__cursor !== null && this.__cursor.getNext() !== null;
};


/**
 * @inheritDoc
 */
ds.Iterator.prototype.next = function() {
  return this.__cursor = this.__source.getNext(this.__cursor);
};
