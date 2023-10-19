var express = require('express');
var router = express.Router();
var randomValue = Math.random();

/* GET users listing. */
router.get('/', function (req, res, next) {
    randomValue = Math.random();
    res.send(`Math.fround applied to ${randomValue} is ` + Math.fround(randomValue) + '<br>' +
        `Math.random is ` + Math.random() + '<br>' +
        `Math.round applied to ${randomValue} is ` + Math.round(randomValue) + '<br>');
});

module.exports = router;