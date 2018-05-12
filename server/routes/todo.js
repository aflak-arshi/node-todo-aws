const express = require('express');
const todoController = require('../controllers/todo');

const todos = (database) => {
    const router = express.Router();

    router.post('/', todoController.addTodo);

    router.get('/', todoController.getTodos);

    // router.delete('/:id');

    return router;
};
module.exports = todos;