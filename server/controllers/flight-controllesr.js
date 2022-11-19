const flights=require("../model/flight");


const getFlight=(req,res)=>{
    res.send({message:"sad",flights})
}
const postFlights=(req,res)=>{
    const data=req.body;
flights.push(data)
res.send("add flight")
}

const putFlights=(req,res)=>{
const obj=flights.find(obj=>obj.id==req.params.id);
const index=flights.indexOf(obj);
console.log(index)
flights[index]=req.body;
index>-1?res.send("edited"):res.send("edited failed")
}

module.exports={
    getFlight,
    postFlights,
    putFlights,
}