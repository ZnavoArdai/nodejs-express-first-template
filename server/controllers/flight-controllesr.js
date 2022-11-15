const flights=require("../model/flight");


const getFlight=(req,res)=>{
    res.send({message:"sad",flights})
}
const postFlights=(req,res)=>{
flights.push(req.body)
res,send("add flight")
}

module.exports={
    getFlight,
    postFlights,
}