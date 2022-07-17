const express=require('express')
const { login, register } = require('../controllers/userController')

const user_route=express()

user_route.post('/login', login)
user_route.post('/register', register)

module.exports=user_route