var express = require('express');
const getAllRezept = require('../controllers/getAllRezept.controller');
var router = express.Router();

/* GET home page. */
router.get('/', getAllRezept);








module.exports = router;
