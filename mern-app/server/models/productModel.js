const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
    },
    name:{  
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:Number,
    quantity:Number
})

module.exports=mongoose.model('product',productSchema)