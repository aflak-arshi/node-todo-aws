const mongoose = require("mongoose");
const Todo = require("../models/todo");

exports.addTodo = (req, res) => {
  const todo = new Todo({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name
  });
  todo
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
          name: result.name,
          _id: result._id,
          request: {
            type: "GET",
            url: "http://localhost:8080/todos/" + result._id
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.getTodos = (req, res) => {
  Todo.find()
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        todos: docs.map(doc => {
          return {
            name: doc.name,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:8080/todos/" + doc._id
            }
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
