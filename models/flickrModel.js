const request = require('request');

const flickrModel=(search,callback)=>{
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ca370d51a054836007519a00ff4ce59e&text=${search}&per_page=5&extras=url_m,owner_name&format=json&nojsoncallback=1`;
    request(url,function(err,response,body){
        callback(body);
    });
}

module.exports=flickrModel;
