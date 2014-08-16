

/**
 * @interface
 */
ds.IDataSet = function() {};


/**
 * @return {ds.IDataItem}
 */
ds.IDataSet.prototype.getFirst = function() {};


/**
 * @param {*} data
 */
ds.IDataSet.prototype.add = function(data) {};


/**
 * @param {*=} opt_data
 * @return {*}
 */
ds.IDataSet.prototype.remove = function(opt_data) {};


/**
 * @return {ds.IIterator}
 */
ds.IDataSet.prototype.getIterator = function() {};


/**
 * @return {boolean}
 */
ds.IDataSet.prototype.isEmpty = function() {};


/**
 *
 */
ds.IDataSet.prototype.destroy = function() {};
