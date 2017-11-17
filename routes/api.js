const router=require("express").Router()
const wikipediaControll = require('../controllers/wikipediaControll');
const flickrControll=require("../controllers/flickrControll");
const apiControll=require("../controllers/apiControll");

router.post("/",wikipediaControll,flickrControll,apiControll);

module.exports=router;
