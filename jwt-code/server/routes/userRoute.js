const express=require('express')
const { register, login, getProducts, createProducts } = require('../controllers/userController')
const { verifyToken } = require('../middlewares/authMiddleware')
const user_route=express()

user_route.post('/register',register)
user_route.post('/login',login)
user_route.get('/get-products',getProducts)
user_route.post('/create-product',createProducts)

module.exports=user_route