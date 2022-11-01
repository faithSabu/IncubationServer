var express = require('express');
const userHelper = require('../helpers/userHelper');
const adminHelper = require('../helpers/adminHelper')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('its adminnnn');
});

router.get('/applicationData',(req,res)=>{
  console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
  adminHelper.getApplicationData().then((data)=>{
    console.log(data);
    res.json(data)
  })
})



module.exports = router;
