var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login');
});

router.get('/home', function(req, res){
  res.render('index');
});

router.get('/overview', function(req, res){
  res.render('overview');
});

router.get('/admin', function(req, res){
  res.render('admin');
});

router.get('/adminindex', function(req, res){
  res.render('adminindex');
});

module.exports = router;
