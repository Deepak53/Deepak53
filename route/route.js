const Port = require('dotenv').config();
const app = require('../index');
const config = require('../config/default');
const bodyparser = require('body-parser');
const signup = require("../controller/signup");
const {signin, createBook, getBookWithCreator} = require("../controller/signin");
const {verifyToken} =  require("../auth/auth");
const {userProfile} = require("../controller/signin");
let tasks = require("../model/task");
module.exports = (app) => {
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))  ; 
app.get("/api/getbooks",getBookWithCreator);
app.post('/api/signup',signup);
app.post('/api/signin',signin);
app.post("/api/userprofile",userProfile);
app.post("/api/createBook",createBook);
app.post('/api/task',async(req,res)=>{

    let r = await tasks.create(req.body);
    res.json({data:r,message:"Data inserted"});
})
 app.listen(config.port,console.log(`server is run on ${config.port}`))
}


