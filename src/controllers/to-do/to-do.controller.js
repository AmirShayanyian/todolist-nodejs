const ToDoService = require('../../services/todo/todo.service');
const autoBind = require('auto-bind');
class ToDoController {
  #service;
  constructor() {
    this.#service = new ToDoService();
    autoBind(this)
  }
  async createTodo(req, res, next) {
    try {
      const { name, description, isDone } = req.body;
      const result = await this.#service.createTodo({
        name,
        description,
        isDone,
      });
      if (result) {
        return res.json(result);
      }
    } catch (error) {
      next(error);
    }
  }
  static async getAllTodo(req, res, next) {}
  static async getTodoById(req, res, next) {
    res.json({
      id: req.params.id,
      message: 'hiiiiiiiiiiiiiiiiiiiiii',
    });
  }
  static async getTodoByName(req, res, next) {}
  static async updateTodo(req, res, next) {}
  static async deleteTodo(req, res, next) {}
}
module.exports = ToDoController;
