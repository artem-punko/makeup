var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Image = require('../models/Image.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Image.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY TYPE */
router.get('/:type', function(req, res, next) {
  Image.find({type: req.params.type}, function (err, post) {
    if (err) return next(err);
    console.log(post)
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Image.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/image', function(req, res, next) {
  Image.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  
  Image.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;