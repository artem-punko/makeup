var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

let response = {
    status: 200,
    data: [],
    message: null
};


const path = require('path');
const http = require('http');
const api = require('./server/routes/api');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const connection = (closure) => {
    return MongoClient.connect('mongodb://makeup_collection:30secondstomars@ds119258.mlab.com:19258/makeup_collection', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};


app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.static('../client'));
app.use(bodyParser.json());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

var upload = multer({
    storage: storage
}).single('file');


app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        console.log(req)
        var myobj = { name: req.file.filename, size: req.file.size, type: req.file.mimetype, destination: req.file.destination, originalname: req.file.originalname, typeCollection: req.body.typeCollection};
        
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        } else {
            connection((db) => {
                db.collection('notes').insert(myobj);
            });
        }
    });
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));