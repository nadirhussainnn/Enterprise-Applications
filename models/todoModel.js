const mongoose=require('mongoose')

const todoSchema=mongoose.Schema({
    
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
    }
})

module.exports=mongoose.model('Todo',todoSchema)