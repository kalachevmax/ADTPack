

/**
 * @interface
 */
ds.IIterable = function() {};


/**
 * @return {ds.Item}
 */
ds.IIterable.prototype.getFirst = function() {};


/**
 * @param {ds.Item} item
 * @return {ds.Item}
 */
ds.IIterable.prototype.getNext = function(item) {};
