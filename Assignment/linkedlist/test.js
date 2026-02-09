const LinkedList = require("./linkedList");

const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);

console.log("After insert:", list.toArray());

console.log("Find 20:", list.find(20)?.value);
console.log("Find 99:", list.find(99));

list.delete(20);
console.log("After delete 20:", list.toArray());

list.reverse();
console.log("After reverse:", list.toArray());

list.delete(10);
console.log("After delete 10:", list.toArray());

list.insert(50);
console.log("After insert 50:", list.toArray());
