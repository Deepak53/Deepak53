const userModel = require("../model/user");
const {generateToken} = require('../auth/auth');
const bcrypt = require("bcrypt");
const author = require('../model/author');



const signup = async(req,res)=>{

    let user = await userModel.findOne({email:req.body.email})
    if(user){
        res.json({message:"user already exist"});
    }
     console.log(req.body.password);

    const salt = 10;
    let hash = await bcrypt.hash(req.body.password, salt)
    req.body.password = hash

    let result = await userModel.create(req.body);
    // let token = generateToken(result._id);

    return res.json({
        _id : result._id,
        firstName : result.firstName,
        code:200
    })
}


const writer = (req,res)=>{
    let result = author.create(req.body);
    if(!result) 
    return res.status(404).json({msg : "no author create"});
    return res.status(200).json({data : result});
}



module.exports = {signup , writer};