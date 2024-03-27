const { Router } = require('express');
const ToDoController = require('../controllers/to-do/to-do.controller');

const router = Router();

router.post('/', ToDoController.createTodo);
router.get('/:id', ToDoController.getTodoById);
router.get('/:name', ToDoController.getTodoByName);
router.get('/', ToDoController.getAllTodo);
router.patch('/:id', ToDoController.updateTodo);
router.delete('/:id', ToDoController.deleteTodo);

module.exports = {
  TodoRoutes: router,
};
