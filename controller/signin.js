// const Task = require('../model/author');
const bcrypt = require('bcrypt');
const user = require("../model/user");
const {generateToken} = require("../auth/auth");
const Books =require("../model/books")

const signin = async(req,res)=>{
    let users = await user.findOne({email:req.body.email}, { email: 1, password: 1 });
    if(!users)
        return  res.json({message:"not valid user"});
    
    let bcrypts = await bcrypt.compare(req.body.password,users.password);
    
    if(!bcrypts) 
        return  res.json({message:"Password didn't matched."});

    const refreshToken = await generateToken(users._id);
    console.log(refreshToken)

    return res.json({
        refreshToken,
        username: users.username,
        email:users.email,
        code:200
    })

}
 

const createBook = async(req,res)=>{
    try{
    let data = await Books.create(req.body);
    return res.json(data)
    }
    catch(error)
    {
        console.log('111111111111111111111111111111',error)
    }
}

const deletebook = (req,res)=>{
  try{  let del = Books.deleteOne({_id : req.body.id});
    if(!del) return res.json({msg : "no book present"});
    return res.json({msg : "book del"})}
    catch(err){
        console.log(err.message);
    };
}

const getallbooks =( req,res)=>{
try {
    let book = Books.find().populate('author');
    if(!book) return res.json({msg : " no book present"});
    return res.json({data : book});
} catch (error) {
    res.send(error.message);
}
}

 
const getBookWithCreator = async(req,res)=>{
    try
    {
        console.log('33333333333333333333333333333333333333')
        let data = await Books.findOne({_id:req.body._id}).populate("creator")
        return res.json(data);
    }
    catch(error)
    {
        console.log("2222222222222222222222222222222",error)
    }
}


module.exports = {
    signin:signin,
    getallbooks: getallbooks,
    createBook:createBook,
    getBookWithCreator:getBookWithCreator,
    deletebook : deletebook
}