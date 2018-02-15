const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var bodyParser = require('body-parser');


const connection = (closure) => {
    return MongoClient.connect('mongodb://makeup_collection:30secondstomars@ds119258.mlab.com:19258/makeup_collection', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('notes')
            .find()
            .toArray()
            .then((users) => {

                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/users', (req, res) => {
    console.log("11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", req.body)
});

module.exports = router;