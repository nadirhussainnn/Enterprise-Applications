const User=require('../models/userModel')
const Product=require('../models/productModel')

const jwt=require('jsonwebtoken')
const path=require('path')
const fs=require('fs')

const base_url="http://localhost:5000/products/"

const register=async(req, res)=>{

    console.log(`REGISTER`)
    const {email, password}=req.body
    console.log(email, password)
    try{

        await User.create({...req.body})
        res.status(200).send({msg:"Registered Successfully"})
    }catch(error){
        res.status(400).send(error.message)
    }
}

const login=async(req, res)=>{

    console.log(`Login`, req.body)
    const {email, password}=req.body
    try{
        const user=await User.findOne({email:email, password:password})
        if(user){
            const token=await signToken(user.email)
            res.status(200).send({success:true,msg:"Loggedin Successfully", data:user, token:token})
            return;
        }
        res.status(400).send({msg:'Login failed', success:false})        
    }catch(error){
        res.status(400).send(error.message)
    }
}


const getProducts=async(req, res)=>{

    console.log(`GET PRODS`)
    try{

        const products=await Product.find().populate('createdBy')

        const productsData=[]
        const directoryPath="public/products";
        const files=fs.readdirSync(directoryPath)


        await products.map(async p=>{
            await files.map(file=>{
                if(file==p.image){
                    productsData.push({name:p.name, image:base_url+file, owner:p.createdBy})
                }
            })
        })
        res.status(200).send({data:productsData})

    }catch(error){
        res.status(400).send(error.message)
    }
}

  
const createProducts=async(req, res)=>{

    console.log(`CREATE PRODUCT`)
    
    const {name,id}=req.body
    const {file}=req.files
    try{

        
    await file.mv(path.resolve(__dirname,'../public/products', name+'-'+file.name),async(error)=>{

        if(!error){
            const newProd=await Product.create({name, createdBy:id, image:name+'-'+file.name})
            console.log(newProd)
            if(newProd){
                res.status(200).send({msg:'Created Product Successfully', success:true})
                return;
            }
            res.status(200).send({msg:'Could not create', success:false})
        }
    })

    }catch(error){
        res.status(400).send(error.message)
    }
}



function signToken(email){
    return jwt.sign({email:email},process.env.JWT_SECRET,{expiresIn:60*30})
}

module.exports={
    register,
    login,
    getProducts,
    createProducts
}