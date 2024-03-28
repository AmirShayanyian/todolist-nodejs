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
  async getAllTodo() {
    const models = await this.#model.aggregate([
      { $project: { _id: 0, createdAt: 0, updatedAt: 0,__v:0 } },
    ]);
    return models;
  }
}
module.exports = ToDoService;
