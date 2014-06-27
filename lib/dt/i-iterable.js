

/**
 * @interface
 */
dt.IIterable = function() {};


/**
 * @return {dt.Item}
 */
dt.IIterable.prototype.getFirst = function() {};


/**
 * @return {dt.Item}
 */
dt.IIterable.prototype.getLast = function() {};


/**
 * @param {dt.Item} item
 * @return {dt.Item}
 */
dt.IIterable.prototype.getNext = function(item) {};


/**
 * @param {dt.Item} item
 * @return {dt.Item}
 */
dt.IIterable.prototype.getPrev = function(item) {};
