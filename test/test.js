

var ds = require('../bin/ds.js');

var list = new ds.List();

var i = 0;

while (i < 3) {
  list.addLast(i);
  i += 1;
}

list.remove(3);


var it = new ds.Iterator(list);
while (it.hasNext()) {
  console.log(it.next().getData());
}