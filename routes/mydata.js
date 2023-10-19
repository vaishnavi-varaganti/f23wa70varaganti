var express = require('express');
var router = express.Router();

/* GET render page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Vaishnavi Varaganti' });
});

module.exports = router;
