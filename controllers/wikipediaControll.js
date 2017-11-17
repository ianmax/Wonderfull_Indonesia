const wikipediaModel = require('../models/wikipediaModel');

var pencarianwikipedia = (req, res) => {
  wikipediaModel(req.params.id, (hasil) => {
    res.send(hasil)
  })
}


module.exports = pencarianwikipedia;
