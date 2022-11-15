const router=require("express").Router();
const {getTravel,createState,updateState,removeState,findById}=require("../controllers/trave-ctrl");

router.get("/",getTravel);
router.post("/create",createState)
router.put("/edit/:id",updateState)
router.delete("/remove/:id",removeState);
router.get("/byId/:id",findById)
module.exports=router
