const { Router } = require('express');
const ToDoController = require('../controllers/to-do/to-do.controller');
const todoController = new ToDoController();
const router = Router();

router.post('/', todoController.createTodo);
router.get('/:id', todoController.getTodoById);
// router.get('/:name', todoController.getTodoByName);
router.get('/', todoController.getAllTodo);
// router.patch('/:id', todoController.updateTodo);
// router.delete('/:id', todoController.deleteTodo);

module.exports = {
  TodoRoutes: router,
};
