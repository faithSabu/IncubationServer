var express = require('express');
const userHelper = require('../helpers/userHelper');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
