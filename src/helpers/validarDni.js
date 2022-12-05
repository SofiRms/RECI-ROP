const User= require('../models/user')

const validarDni=async(req,res,next)=>{
 
    try{
        const user = await User.find({dni:req.body.dni});
        if(user.dni){
         return res.status(500).json({msg:'error al registrar dni'})
        }
        next();
    }catch(error){
return res.status(500).json({msg:'internal server error'})
    }
}

module.exports={
    validarDni
};