import userModel from "../models/User.js";

export const isAdmin=async (req,res,next)=>{
try {
    const {email}=req.body;

   const userInfo = await userModel.findOne({email})
s
   if(userInfo && userInfo.role=="Admin")
   {
    next();
   }
   else{
    res.status(403).json({
 message:"Access Denied ,Only admin can access it"
    })
   }

} catch (error) {
    res.status(500).json({
        message:"Internal server error"
    })
}
}