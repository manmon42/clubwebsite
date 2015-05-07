/**
 * Created by Max on 5/1/2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Drake Devolopers Club' });
});

module.exports = router;