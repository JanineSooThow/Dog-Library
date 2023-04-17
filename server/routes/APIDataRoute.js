var express = require('express')

var router = express.Router()

var aPIDataController = require('../controllers/DogAPIController')

//define routes to the correct controller
router.get('/', aPIDataController.fetchAPIData) //Going to the controller and calling this fetchAPIData

module.exports = router;
