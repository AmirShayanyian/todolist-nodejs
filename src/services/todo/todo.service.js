const toDoModel = require('../../models/to-do/toDo.model');
const mongoose = require('mongoose');
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
      { $project: { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 } },
    ]);
    return models;
  }
  async getTodoById(id) {
    const todo = await this.#model.findOne({
      _id:new  mongoose.Types.ObjectId(id),
    });
    return todo;
  }
}
module.exports = ToDoService;
