

/**
 * @constructor
 * @param {dt.QueueData} data
 * @param {dt.QueueItem} prev
 * @param {dt.QueueItem} next
 */
dt.QueueItem = function(data, prev, next) {
  /**
   * @type {dt.QueueData}
   */
  this.__data = data;

  /**
   * @type {dt.QueueItem}
   */
  this.__prev = prev;

  /**
   * @type {dt.QueueItem}
   */
  this.__next = next;
};


/**
 * @return {dt.QueueData}
 */
dt.QueueItem.prototype.getData = function() {
  return this.__data;
};


/**
 * @return {dt.QueueItem}
 */
dt.QueueItem.prototype.getNext = function() {
  return this.__next;
};


/**
 * @return {dt.QueueItem}
 */
dt.QueueItem.prototype.getPrev = function() {
  return this.__prev;
};
