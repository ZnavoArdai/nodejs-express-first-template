const e = require("express")

const flightsArray=[
    {
        id:1,
        number:1234,
        country:"osbkistan",
        airplains:10,
        seats:4200,
        flights:4,
        time:"10:45",
        firsrclass:true,
        available:43,
land:"thailand",
    },
    {
        id:2,
        number:1234,
        country:"osbkistan",
        airplains:10,
        seats:4200,
        flights:4,
        time:"10:00",
        firsrclass:false,
        available:41,
        land:"ethiopia"

    },
    {
        id:3,
        number:1234,
        country:"osbkistan",
        airplains:10,
        seats:4200,
        flights:4,
        time:"10:45",
        firsrclass:true,
        available:40,
        land:"moroco"


    },
    {
        id:4,
        number:1234,
        country:"osbkistan",
        airplains:10,
        seats:4200,
        flights:4,
        time:"10:45",
        firsrclass:true,
        available:0,
        land:"moroco"

    },
]

module.exports=flightsArray