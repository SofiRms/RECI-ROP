
const User= require('../models/User')

const validarEmail=async(req,res,next)=>{
 
    try{
        const user = await User.find({email:req.body.email});
        if(user.email){
         return res.status(500).json({msg:'error al registrar email'})
        }
        next();
    }catch(error){
return res.status(500).json({msg:'internal server error'})
    }
}

module.exports={
    validarEmail
};