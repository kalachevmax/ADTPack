

/**
 * @interface
 */
ds.IIterator = function() {};


/**
 * @return {boolean}
 */
ds.IIterator.prototype.hasNext = function() {};


/**
 * @return {*}
 */
ds.IIterator.prototype.next = function() {};


/**
 *
 */
ds.IIterator.prototype.destroy = function() {};
