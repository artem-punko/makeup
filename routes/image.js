var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Image = require('../models/Image.js');

/* GET ALL BOOKS */
router.get('/:page', function (req, res, next) {
  var perPage = 8;
  var page = req.params.page || 0;
  Image
    .find({})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec(function (err, products) {
      Image.count().exec(function (err, count) {
        if (err) return next(err);
        res.json({
          products: products,
          current: page,
          pages: Math.ceil(count / perPage)==0 ? 1 : Math.ceil(count / perPage)
        });
      });
    });
});
/* GET SINGLE BOOK BY TYPE */
router.get('/:type/:page', function (req, res, next) {
  var perPage = 8;
  var page = req.params.page || 0;
  Image
    .find({ type: req.params.type })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec(function (err, products) {
      Image.count({ type: req.params.type }).exec(function (err, count) {
        if (err) return next(err);
        res.json({
          products: products,
          current: page,
          pages: Math.ceil(count / perPage)==0 ? 1 : Math.ceil(count / perPage)
        });
      });
    });
});

/* SAVE BOOK */
router.post('/', function (req, res, next) {
  Image.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/image', function (req, res, next) {
  Image.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function (req, res, next) {

  Image.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;