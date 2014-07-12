

/**
 * @interface
 */
ds.IIterator = function() {};


/**
 * @return {boolean}
 */
ds.IIterator.prototype.hasNext = function() {};


/**
 * @return {ds.Item}
 */
ds.IIterator.prototype.next = function() {};
