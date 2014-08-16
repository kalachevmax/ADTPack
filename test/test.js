

var ds = require('../bin/semantic.ds.js');

var list = new ds.List();

var i = 0;

while (i < 3) {
  list.addLast(i);
  i += 1;
}

list.removeAt(3);


var it = list.getIterator();
while (it.hasNext()) {
  console.log(it.next());
}

it.destroy();
list.destroy();


var queue = new ds.Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.destroy();
