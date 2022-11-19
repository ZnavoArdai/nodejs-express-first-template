const users = require("../model/user");


const postRegister=(req,res)=>{

    const data=req.body;
    users.push(data)
    res.send("add flight")
}
const getRegister=(req,res)=>{

    res.send(users)
}
module.exports={
    postRegister,getRegister
}