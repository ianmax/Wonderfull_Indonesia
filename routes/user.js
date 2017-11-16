const router=require("express").Router();
const loginControll=require("../controllers/loginControll");

router.post("/",loginControll.login);
router.post("/user",loginControll.getuser);

module.exports=router;
