class ToDoController {
  #model;
  constructor() {
    // this.#model = ?
  }
  static async createTodo(req, res, next) {}
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
