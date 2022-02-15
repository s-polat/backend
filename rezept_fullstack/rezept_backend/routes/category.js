var express = require('express');
const getRezeptByCategory = require('../controllers/getRezeptByCategory.controller');
var router = express.Router();

/* GET home page. */
router.get('/category/:category', getRezeptByCategory);



module.exports = router;