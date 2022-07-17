const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{  
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Product',productSchema)