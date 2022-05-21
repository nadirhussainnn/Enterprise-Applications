
const express=require('express')
const todoController=require('../controllers/todoController')
const todoRoute=express()


todoRoute.get('/', todoController.displayHomePage)
todoRoute.get('/displayAddTodoPage', todoController.displayAddTodoPage)
todoRoute.post('/addTodoItem', todoController.addTodoItem)
todoRoute.get('/viewAllTodos', todoController.viewAllTodos)
todoRoute.get('/deleteItem', todoController.deleteItem)
todoRoute.get('/updateItem', todoController.updateItemPage)
todoRoute.post('/updateItem', todoController.updateItemById)


module.exports=todoRoute