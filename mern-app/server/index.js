const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const cors=require('cors')
const fileUpload=require('express-fileupload')
const user_route = require('./routes/userRoute')

dotenv.config()

const DB_URL=process.env.DB_URL

const app=express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())

mongoose.connect(DB_URL).then(res=>{
    console.log(`Connected to Databaset ${DB_URL}`)
})

app.use('/api',user_route)

module.exports=app