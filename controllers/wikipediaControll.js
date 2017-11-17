const wikipediaModel = require('../models/wikipediaModel');

var pencarianwikipedia = (req,res,next) => {
    wikipediaModel(req.body.pencarian,(hasil)=>{
        req.wikiResult=hasil;
        next();
    });
}


module.exports = pencarianwikipedia;
