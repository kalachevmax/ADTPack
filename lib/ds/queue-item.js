

/**
 * @constructor
 * @param {ds.QueueData} data
 * @param {ds.QueueItem} prev
 * @param {ds.QueueItem} next
 */
ds.QueueItem = function(data, prev, next) {
  /**
   * @type {ds.QueueData}
   */
  this.__data = data;

  /**
   * @type {ds.QueueItem}
   */
  this.__prev = prev;

  /**
   * @type {ds.QueueItem}
   */
  this.__next = next;
};


/**
 * @return {ds.QueueData}
 */
ds.QueueItem.prototype.getData = function() {
  return this.__data;
};


/**
 * @return {ds.QueueItem}
 */
ds.QueueItem.prototype.getNext = function() {
  return this.__next;
};


/**
 * @return {ds.QueueItem}
 */
ds.QueueItem.prototype.getPrev = function() {
  return this.__prev;
};


/**
 * @param {ds.QueueItem} item
 */
ds.QueueItem.prototype.setNext = function(item) {
  this.__next = item;
};


/**
 * @param {ds.QueueItem} item
 */
ds.QueueItem.prototype.setPrev = function(item) {
  this.__prev = item;
};
