const { Router } = require('express');
const ToDoController = require('../controllers/to-do/to-do.controller');
const todoController = new ToDoController();
const router = Router();

router.post('/', todoController.createTodo);
// router.get('/:id', todoController.getTodoById);
router.get('/:name', ToDoController.getTodoByName);
router.get('/', todoController.getAllTodo);
router.patch('/:id', ToDoController.updateTodo);
router.delete('/:id', ToDoController.deleteTodo);

module.exports = {
  TodoRoutes: router,
};
