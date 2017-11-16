const router=require("express").Router()
const wikipediaControll = require('../controllers/wikipediaControll');

router.get("/:id", wikipediaControll);

module.exports=router;
