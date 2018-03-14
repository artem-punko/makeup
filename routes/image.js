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

router.post('/message/:message', function (req, res, next) {
  console.log(req.params.message)
  // let reqBody = req.body
  // let fields = [
  //   '<b>Name</b>: ' + reqBody
  // ]
  // let msg = ''
  // fields.forEach(field => {
  //   msg += field + '\n'
  // });
  // msg = encodeURI(msg)
  // http.post(`https://api.telegram.org/bot518727334:AAFAQvh0wD2ypSMg7SQS6luTN-LXA5Zq5j8/sendMessage?chat_id=-298625427&parse_mode=html&text=${msg}`, function (error, response, body) {  

  //   if(response.statusCode===200){
  //     res.status(200).json({status: 'ok', message: 'Успешно отправлено!'});
  //   }
  //   if(response.statusCode!==200){
  //     res.status(400).json({status: 'error', message: 'Произошла ошибка!'});
  //   }
  // });
});

router.delete('/:id/:type', function (req, res, next) {
  cloudinary.uploader.destroy(req.params.type, {});
  Image.findOneAndRemove({ _id: new mongoose.mongo.ObjectID(req.params.id) }, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;