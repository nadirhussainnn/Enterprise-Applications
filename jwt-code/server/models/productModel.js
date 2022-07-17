const mongoose=require('mongoose')

const productSchema=mongoose.Schema({

    createdBy:{
        ref:'User',
        required:true,
        type:mongoose.Types.ObjectId
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Product',productSchema)