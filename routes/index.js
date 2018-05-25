var express = require('express');
var router = express.Router();
var data = require('../model/people-postgresql');

//login
router.get('/', function(req, res) {
  res.render('login');
});
//calendar
router.get('/home', function(req, res){
  res.render('index');
});
//overview
router.get('/overview', function(req, res){
  res.render('overview');
});
//add user
router.get('/admin', function(req, res){
  res.render('admin');
});
//calendar admin
router.get('/adminindex', async function(req, res){
  res.render('adminindex',{
    data: await data.getAll()
  });
});

module.exports = router;
