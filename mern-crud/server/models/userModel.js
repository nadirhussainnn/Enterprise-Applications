const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{  
        type:String,
        required:true
    }
})

userSchema.pre('save',function(next){

    const user=this;
    bcrypt.hash(user.password,5, function(err, hash){
        user.password=hash;
        next()
    })
})

module.exports=mongoose.model('User',userSchema)