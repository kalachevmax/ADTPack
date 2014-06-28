

var dt = require('../bin/adt.js');

var list = new dt.List();

var i = 0;

while (i < 3) {
  list.addLast(i);
  i += 1;
}

list.remove(3);


var it = new dt.Iterator(list);
while (it.hasNext()) {
  console.log(it.next().getData());
}