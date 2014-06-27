

/**
 * @interface
 */
dt.IIterator = function() {};


/**
 * @return {boolean}
 */
dt.IIterator.prototype.hasNext = function() {};


/**
 * @return {dt.Item}
 */
dt.IIterator.prototype.next = function() {};
