class TodoRepository {
  constructor() {
    this.todos = [];
    this.idCounter = 1;
  }

  add(title) {
    const todo = {
      id: this.idCounter++,
      title,
      completed: false
    };
    this.todos.push(todo);
    return todo;
  }

  list() {
    return this.todos;
  }

  getById(id) {
    return this.todos.find(t => t.id === id) || null;
  }

  update(id, title) {
    const todo = this.getById(id);
    if (!todo) return null;
    todo.title = title;
    return todo;
  }

  delete(id) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) return false;
    this.todos.splice(index, 1);
    return true;
  }

  markCompleted(id) {
    const todo = this.getById(id);
    if (!todo) return null;
    todo.completed = true;
    return todo;
  }
}

module.exports = TodoRepository;
