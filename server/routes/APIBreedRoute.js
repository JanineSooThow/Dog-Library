var express = require('express')

var router = express.Router()

var aPIDataController = require('../controllers/BreedAPIController')

//define routes to the correct controller
router.get('/breeds/:breedgroup', aPIDataController.fetchAPIData);//Going to the controller and calling this fetchAPIData

module.exports = router;
