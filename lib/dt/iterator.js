

/**
 * @constructor
 * @implements {dt.IIterator}
 * @param {dt.IIterable} source
 */
dt.Iterator = function(source) {
  /**
   * @type {dt.IIterable}
   */
  this.__source = source;

  /**
   * @type {dt.Item}
   */
  this.__cursor = source.getFirst();
};


/**
 * @inheritDoc
 */
dt.Iterator.prototype.hasNext = function() {
  return this.__cursor !== null && this.__cursor.getNext() !== null;
};


/**
 * @inheritDoc
 */
dt.Iterator.prototype.next = function() {
  return this.__cursor = this.__source.getNext(this.__cursor);
};
