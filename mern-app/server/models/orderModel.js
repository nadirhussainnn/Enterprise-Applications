const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
    },
    products:[]
})

module.exports=mongoose.model('order',orderSchema)