const { Router } = require('express');
const ToDoController = require('../controllers/to-do/to-do.controller');
const todoController = new ToDoController();
const router = Router();

router.post('/create', todoController.createTodo);
router.get('/getById/:id', todoController.getTodoById);
router.get('/getByName', todoController.getTodoByName);
router.get('/getAll', todoController.getAllTodo);
router.patch('/update/:id', todoController.updateTodo);
// router.delete('/:id', todoController.deleteTodo);

module.exports = {
  TodoRoutes: router,
};
