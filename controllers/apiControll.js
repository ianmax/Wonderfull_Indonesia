const compileAll=(req,res)=>{
    res.send({
        wikipedia:req.wikiResult,
        flickr:req.flickrResult
    });
}

module.exports=compileAll;
