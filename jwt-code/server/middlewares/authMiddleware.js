const jwt=require('jsonwebtoken')

const verifyToken=async(req, res, next)=>{

    try{
        if(req.headers.authorization){
            const token=req.headers.authorization.split(' ')[1]
            const isVerified=await jwt.verify(token,process.env.JWT_SECRET)
            isVerified?next():res.status(400).send({msg:"Invalid Token"})
            return;
        }
        res.send('Token is required')
    }
    catch(error){
        res.send('Invalid Token')
    }
}

module.exports={verifyToken}