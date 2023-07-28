import JWT  from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected routes token based.
export const requireSignIn =async(req,res,next)=>{

    
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        
        req.user = decode;
        next();

    } catch (error) {
        console.log(error);
        
    }
};
 export const testController = (req,res)=>{
    console.log("protected routes");
    res.send("protected routes");
};

//admin access 7
export const isAdmin = async (req,res,next) =>{
            const user = await userModel.findById(req.user._id)
            if(user.role !== 1){
                return res.status(401).send({
                    success:false,
                    Message:"unAuthorised access"
                })
            }else{
                next();
                // res.status(401).send({
                //     success:false,
                    
                //     Message:"error admin middleware",
                    
                // })
            }
    try {
        
    } catch (error) {
        console.log(error);
        error
         
        
    }
}