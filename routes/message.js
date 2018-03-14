var express = require('express');
var router = express.Router();
const http = require('http');



router.post('/', function (req, res, next) {
    
// var telegram = {
//     token: "518727334:AAFAQvh0wD2ypSMg7SQS6luTN-LXA5Zq5j8",
//     chat: "-298625427"
//   }
//     let msg = '11111111111'
//     msg = encodeURI(msg)
    http.post(`https://api.telegram.org/bo518727334:AAFAQvh0wD2ypSMg7SQS6luTN-LXA5Zq5j8/sendMessage?chat_id=-298625427&parse_mode=html&text=11111111111`, function (error, response, body) {  
  
      if(response.statusCode===200){
        res.status(200).json({status: 'ok', message: 'Успешно отправлено!'});
      }
      if(response.statusCode!==200){
        res.status(400).json({status: 'error', message: 'Произошла ошибка!'});
      }
    });
});



module.exports = router;