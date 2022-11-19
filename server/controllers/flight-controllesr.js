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
flights[index]=req.body;
index>-1?res.send("edited"):res.send("edited failed")
}

const removeFlights=(req,res)=>{
    const obj=flights.find(obj=>obj.id==req.params.id);
    const index=flights.indexOf(obj);

index>-1?flights.splice(index,1)&&res.send("removed successes"):res.send("removed failed")

}
const getById=(req,res)=>{
    const obj=flights.find(obj=>obj.id==req.params.id);
    obj?res.send(obj):res.send("not found")

}

const getFirstClass=(req,res)=>{
const obj=flights.filter(obj=>obj.firsrclass==true)

res.send(obj)
}
const getByTimes=(req,res)=>{
    const obj=flights.filter(obj=>obj.time==req.params.time)
    res.send(obj)
    }

    const getByFlyAndlAND=(req,res)=>{
const obj=flights.filter((obj)=>{
    if(obj.country=="osbkistan"&&obj.land=="moroco"){
      return res.send(obj);
    }
})
    }

    const getByFlyTimeAndFromWhere=(req,res)=>{
const obj=flights.filter((obj)=>{

    if(obj.country=="osbkistan"&&obj.land=="moroco"&&obj.available>0){
        return res.send(obj);
      }
})
        
    }

    const timeAndLand=(req,res)=>{
        const obj=flights.filter((obj)=>{
            if(obj.time=="10:45"&&obj.land=="moroco"&&obj.available>0){
                return res.send(obj)
            }
        })
    }

module.exports={
    getFlight,
    postFlights,
    putFlights,
    removeFlights,
    getById,
    getFirstClass,
    getByTimes,
    getByFlyAndlAND,
    getByFlyTimeAndFromWhere,
    timeAndLand
}