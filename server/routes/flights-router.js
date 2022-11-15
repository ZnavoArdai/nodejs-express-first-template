const router=require("express").Router();
const {getFlight,postFlights}=require("../controllers/flight-controllesr");

router.get("/",getFlight)
router.post("/create",postFlights)


module.exports=router