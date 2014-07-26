

/**
 * @interface
 */
ds.IIterable = function() {};


/**
 * @return {ds.ListItem}
 */
ds.IIterable.prototype.getFirst = function() {};


/**
 * @param {ds.ListItem} item
 * @return {ds.ListItem}
 */
ds.IIterable.prototype.getNext = function(item) {};
