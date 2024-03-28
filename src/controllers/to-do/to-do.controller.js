const createHttpError = require('http-errors');
const ToDoService = require('../../services/todo/todo.service');
const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require('http-status-codes');
const autoBind = require('auto-bind');

class ToDoController {
  #service;
  constructor() {
    this.#service = new ToDoService();
    autoBind(this);
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
        return res.send({
          status: StatusCodes.CREATED,
          types: ReasonPhrases.CREATED,
          data: { result },
        });
      }
    } catch (error) {
      next(error);
    }
  }
  async getAllTodo(req, res, next) {
    const todos = await this.#service.getAllTodo();
    return res.send({
      status: StatusCodes.OK,
      type: ReasonPhrases.OK,
      data: todos,
    });
  }
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
