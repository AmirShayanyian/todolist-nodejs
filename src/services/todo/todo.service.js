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
      { $project: { createdAt: 0, updatedAt: 0, __v: 0 } },
    ]);
    return models;
  }
  async getTodoById(id) {
    const todo = await this.#model.findOne({
      _id: id,
    });
    return todo;
  }
  async getTodoByName(name) {
    const todo = await this.#model.findOne({
      name,
    });
    return todo;
  }
  async updateTodo(id, payload) {
    try {
      // const todo = await this.#model.findById(id);
      // console.log('Old todo :', todo);
      const updatedTodo = await this.#model.updateOne({ _id: id }, payload);
      // console.log('New todo :', todo);
      return updatedTodo;
    } catch (err) {
      console.log('err: ', err);
    }
  }
}
module.exports = ToDoService;
