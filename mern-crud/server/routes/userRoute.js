const express=require('express')
const { register, login, getProducts, createProduct } = require('../controllers/userController')
const { verifyToken } = require('../middlewares/authMiddleware')
const user_route=express()

user_route.post('/register',register)
user_route.post('/login',login)
user_route.get('/products',verifyToken,getProducts)
user_route.post('/create',createProduct)

module.exports=user_route