

/**
 * @constructor
 * @implements {dt.IList}
 */
dt.List = function() {
  /**
   * @type {dt.ListItem}
   */
  this.__first = null;
};


/**
 * @return {dt.ListItem}
 */
dt.List.prototype.getFirst = function() {
  return this.__first;
};


/**
 * @return {boolean}
 */
dt.List.prototype.isEmpty = function() {
  return this.__first === null;
};


/**
 * @param {dt.ListData} data
 * @param {number=} opt_itemNo
 */
dt.List.prototype.add = function(data, opt_itemNo) {

};


/**
 * @param {number=} opt_itemNo
 */
dt.List.prototype.remove = function(opt_itemNo) {

};
