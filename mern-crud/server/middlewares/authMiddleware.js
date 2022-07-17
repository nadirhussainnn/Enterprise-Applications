const jwt=require('jsonwebtoken')

const verifyToken=async(req, res, next)=>{

    //
    const token=req.headers.authorization.split(' ')[1]
    if(token){

        const availableToken=jwt.verify(token, process.env.JWT_SECRET)
        availableToken?next():res.send('Invalid Token')
    }
    else{
        res.send('Token is required')
    }
    
}

module.exports={verifyToken}