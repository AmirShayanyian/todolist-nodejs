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
          data: result,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  async getAllTodo(req, res, next) {
    try {
      const todos = await this.#service.getAllTodo();
      return res.send({
        status: StatusCodes.OK,
        type: ReasonPhrases.OK,
        data: todos,
      });
    } catch (error) {
      next(error);
    }
  }
  async getTodoById(req, res, next) {
    try {
      const id = req.params.id;
      const todo = await this.#service.getTodoById(id);
      return res.send({
        status: StatusCodes.OK,
        type: ReasonPhrases.OK,
        data: todo,
      });
    } catch (error) {
      next(error);
    }
  }
  async getTodoByName(req, res, next) {
    try {
      const name = req.query.name;
      const todo = await this.#service.getTodoByName(name);
      return res.send({
        status: StatusCodes.OK,
        type: ReasonPhrases.OK,
        data: todo,
      });
    } catch (error) {
      next(error);
    }
  }
  async updateTodo(req, res, next) {}
  async deleteTodo(req, res, next) {}
}
module.exports = ToDoController;
