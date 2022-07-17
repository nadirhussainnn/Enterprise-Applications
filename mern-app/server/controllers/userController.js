
const User=require('../models/userModel')
const bcrypt=require('bcrypt')

const login=async(req, res)=>{

    console.log(`Login API hit`, req.body)
    const {email, password}=req.body
    try{

        const user=await User.findOne({email:email})
        if(user){

            const isTrue=await bcrypt.compare(password, user.password)
            if(isTrue){
                res.status(200).send({data:user, success:true})
            }
            else{
                res.status(200).send({msg:'Password not match',success:false})
            }
        }
        else{
            res.status(200).send({msg:'No such user',success:false})
        }

    }catch(err){
        res.send(err.message)
    }
}

const register=async(req, res)=>{

    console.log(`Register API hit`, req.body)
    const {email, password}=req.body
    try{

        const user=await User.findOne({email:email})
        if(user){
            res.status(400).send({msg:'User already exists',success:false})            
        }
        else{
            await User.create({...req.body})
            res.status(200).send({msg:'Created account successfully',success:true})
        }

    }catch(err){
        res.send(err.message)
    }
}


module.exports={
    login,
    register
}