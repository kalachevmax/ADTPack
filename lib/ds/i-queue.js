

/**
 * @interface
 */
ds.IQueue = function() {};


/**
 * @param {*} data
 */
ds.IQueue.prototype.enqueue = function(data) {};


/**
 * @return {*}
 */
ds.IQueue.prototype.dequeue = function() {};
