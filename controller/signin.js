const Task = require('../model/task');
const bcrypt = require('bcrypt');
const employee = require("../model/employee");
const {generateToken} = require("../auth/auth");
  const Books =require("../model/books")

const signin = async(req,res)=>{
    let users = await employee.findOne({email:req.body.email}, { email: 1, password: 1 });
    if(!users)
        return  res.json({message:"not valid user"});
   
    console.log(req.body.password);
    
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
 

// const userProfile = async (req, res) => {
    
//         await Post.find()
//         .populate({ path: "userId" }).exec((err, posts) => {
//             console.log("Populated User " + posts);
//             return res.json(posts);
//         })
//  }


const userProfile = async (req, res) => {
    // console.log('User Id =========> ', req.data)
 
    await Task.findOne({empid: req.body._id}).populate({path:"employeeId"}).exec((err,post)=>{
       if(err){
        console.log("errror of popuate",err)
       } console.log("post==>",post);
        return res.json({post});
    })
    // console.log('RESULT =========>> ', result)
 
    // if(!result) return res.json({ message: "User not found" })
    
    // return res.json({
    //    status : 200,
    //    message: "User data found successfully",
    //    data : result
    // })
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
 
const getBookWithCreator = async(req,res)=>{
    try
    {
        console.log('33333333333333333333333333333333333333')
        let data = await Books.findOne({"_id":req.query.bookid}).populate("creator")
        return res.json(data)
    }
    catch(error)
    {
        console.log("2222222222222222222222222222222",error)
    }
}


module.exports = {
    signin:signin,
    userProfile:userProfile,
    createBook:createBook,
    getBookWithCreator:getBookWithCreator
}