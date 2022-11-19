const router=require("express").Router();
const {getFlight,postFlights,putFlights}=require("../controllers/flight-controllesr");

router.get("/",getFlight)
router.post("/create",postFlights)
router.put("/edit",postFlights)


module.exports=router