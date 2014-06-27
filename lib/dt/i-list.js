

/**
 * @interface
 */
dt.IList = function() {};


/**
 * @return {dt.ListItem}
 */
dt.IList.prototype.getFirst = function() {};


/**
 * @return {boolean}
 */
dt.IList.prototype.isEmpty = function() {};


/**
 * @param {dt.ListData} data
 * @param {number=} opt_itemNo
 */
dt.IList.prototype.add = function(data, opt_itemNo) {};


/**
 * @param {number=} opt_itemNo
 */
dt.IList.prototype.remove = function(opt_itemNo) {};
