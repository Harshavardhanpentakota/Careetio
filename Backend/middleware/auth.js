const {JWT_SECRET}=require("../config");
const jwt=require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
    const token = req.headers.authorization;
    console.log(token)
    if(!token || !token.startsWith("Bearer ")){
        return res.status(403).json({
            msg:"Invalid token!"
        })
    }

    token = token.split(" ")[1];
    try{
        const decoded= jwt.verify(token,JWT_SECRET);
        if(decoded.userId){
            req.userId=decoded.userId;
            next();
        }
        else{
            res.status(403).json({
                msg:"Incorrect UserId"
            })
        }
    }
    catch(err){
        return res.status(403).json({
            msg:"Invalid token"
        })
    }
}

module.exports={authMiddleware}