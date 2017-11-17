var express = require('express');
var router = express.Router();
const flickr = require('../controllers/flickrControllers');

router.get('/search', flickr.searchPhoto);

module.exports = router;
