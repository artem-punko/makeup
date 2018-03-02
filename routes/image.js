var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Image = require('../models/Image.js');
var cloudinary = require('cloudinary');


cloudinary.config({
  cloud_name: 'dhvqokydk',
  api_key: '557163583743686',
  api_secret: '7Pwn18CDbFtGOGu5Lt99riL7Byo'
});


router.get('/:page', function (req, res, next) {
  var perPage = 8;
  var page = req.params.page || 0;
  Image
    .find({})
    .sort({ $natural: -1 })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec(function (err, products) {
      Image.count().exec(function (err, count) {
        if (err) return next(err);
        res.json({
          products: products,
          current: page,
          pages: Math.ceil(count / perPage) == 0 ? 1 : Math.ceil(count / perPage)
        });
      });
    });
});

router.get('/:type/:page', function (req, res, next) {
  var perPage = 8;
  var page = req.params.page || 0;
  Image
    .find({ type: req.params.type })
    .sort({ $natural: -1 })
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec(function (err, products) {
      Image.count({ type: req.params.type }).exec(function (err, count) {
        if (err) return next(err);
        res.json({
          products: products,
          current: page,
          pages: Math.ceil(count / perPage) == 0 ? 1 : Math.ceil(count / perPage)
        });
      });
    });
});

router.post('/', function (req, res, next) {
  Image.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id/:type', function (req, res, next) {
  cloudinary.uploader.destroy(req.params.type, {});
  Image.findOneAndRemove({ _id: new mongoose.mongo.ObjectID(req.params.id) }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;