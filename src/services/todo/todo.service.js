const toDoModel = require('../../models/to-do/toDo.model');

class ToDoService {
  #model;
  constructor() {
    this.#model = toDoModel;
  }
  async createTodo(todo) {
    const createdTodo = await this.#model.create(todo);
    return createdTodo;
  }
}
module.exports = ToDoService;
