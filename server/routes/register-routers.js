const router=require("express").Router();
const {postRegister,getRegister}=require("../controllers/register-controller")


router.get("/",getRegister);

router.post("/create",postRegister);


module.exports=router;