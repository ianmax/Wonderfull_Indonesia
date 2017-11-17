const flickrModel=require("../models/flickrModel");

const pencarianFlickr = (req,res,next) => {
    flickrModel(req.body.pencarian+" "+req.body.type,(hasil)=>{
        req.flickrResult=hasil;
        next();
    });
}

module.exports = pencarianFlickr;
