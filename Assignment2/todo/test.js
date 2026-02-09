const TodoRepository = require("./todoRepository");

const todos = new TodoRepository();

todos.add("Learn Node.js");
todos.add("Practice DSA");
todos.add("Prepare for JLPT N3");

console.log("All todos:", todos.list());

todos.update(2, "Practice DSA daily");
console.log("After update:", todos.list());

todos.markCompleted(1);
console.log("After mark completed:", todos.list());

todos.delete(3);
console.log("After delete:", todos.list());
