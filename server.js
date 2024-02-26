// require('./config/db');


const app = require('express')();
const port=3000;
const UserRouter=require('./api/user.js');
const bodyParser = require('express').json;
app.use(bodyParser());
app.get('/',(req,res)=>{
res.send("Lets go")
})
// app.use('./user',UserRouter)
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})