const todoController=require("./../Controller/todoController")
const express=require("express")
const Router=express.Router()

Router.route("/task").post(todoController.createTodo)
Router.route("/task/:id").get(todoController.getTodo)
Router.route("/task").put(todoController.updateTask)
Router.route("/task/status").post(todoController.updateStatus)
Router.route("/task/delete").put(todoController.deleteTodo)
Router.route("/get/task").get(todoController.getInprogresstask)


module.exports=Router