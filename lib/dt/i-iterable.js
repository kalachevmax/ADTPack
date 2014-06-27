

/**
 * @interface
 */
dt.IIterable = function() {};


/**
 * @return {dt.Item}
 */
dt.IIterable.prototype.getFirst = function() {};


/**
 * @param {dt.Item} item
 * @return {dt.Item}
 */
dt.IIterable.prototype.getNext = function(item) {};
