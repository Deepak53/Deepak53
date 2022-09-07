const jwt = require('jsonwebtoken');
const config = require('../config/default');


function generateToken (userId){
    let token = jwt.sign({userId},config.refreshPrivateKey,{expiresIn:config.refreshTokenExpiresIn});
    return token;
} 

function verifyToken(req,res,next){
    let token = req.header("authorization");
    let decode = jwt.verify(token,config.refreshPrivateKey);
    if(!decode){
        res.json({message:"not a valid user "})
    } 
    req.data = decode.userId;
    next();
}

module.exports = {
    generateToken,
    verifyToken
};