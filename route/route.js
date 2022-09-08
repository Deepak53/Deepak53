const Port = require('dotenv').config();
const app = require('../index');
const config = require('../config/default');
const bodyparser = require('body-parser');
const {signup} = require("../controller/signup");
const {signin, createBook, getBookWithCreator} = require("../controller/signin");
const {verifyToken} =  require("../auth/auth");
const {getallbooks} = require("../controller/signin");
const {writer} = require('../controller/signup');
const {deletebook} = require('../controller/signin');

module.exports = (app) => {
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))  ; 
app.post("/api/getbooks",getBookWithCreator);
app.post('/api/signup',signup);
app.post('/api/signin',signin);
app.get("/api/getallbooks",verifyToken , getallbooks);
app.post("/api/createbook",verifyToken , createBook);
app.post('/api/author', verifyToken , writer);
app.post('/api/delete' , deletebook );
 app.listen(config.port,console.log(`server is run on ${config.port}`))
}


