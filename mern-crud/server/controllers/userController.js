
const User=require('../models/userModel')
const Product=require('../models/productModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const path=require('path')

const register=async(req, res)=>{

    console.log('Register API', req.body)
    try{

        const user=await User.create({...req.body})
        res.status(200).send({success:true,data:user})

    }
    catch(error){
        res.send(error.message)
    }
}

const login=async(req, res)=>{
    console.log('Login API')
    const {email, password}=req.body
    try{

        const user=await User.findOne({email})

        if(user){

            const isvalid=await bcrypt.compare(password, user.password)

            if(isvalid){

                const token=await jwt.sign({email:email},process.env.JWT_SECRET,{expiresIn:60*30})

                res.status(200).send({success:true, data:user, token:token})
            }
            else{
                res.status(400).send({success:false, msg:'Invalid Pass'})                
            }
        }
        else{
            res.status(400).send({success:false, msg:'No user found'})
        }
    }
    catch(error){
        res.send(error.message)
    }
}

const getProducts=async(req, res)=>{
    try{

        res.status(200).send({success:true, data:[{name:'Laptop', price:45}]})
    }
    catch(error){
        res.send(error.message)
    }
}

const createProduct=async(req, res)=>{
    console.log(`CREATE PRODUCT`)
    
    const {name}=req.body
    const {image}=req.files
    try{

    await image.mv(path.resolve(__dirname,'../public/images', name+'-'+image.name),async(error)=>{

        if(!error){
            const newProd=await Product.create({name, image:name+'-'+image.name})
            console.log(newProd)
            if(newProd){
                res.status(200).send({msg:'Created Product Successfully', success:true})
                return;
            }
            res.status(400).send({msg:'Could not create', success:false})
        }
    })

    }catch(error){
        res.status(400).send(error.message)
    }
}

module.exports={
    register,
    login,
    getProducts,
    createProduct
}