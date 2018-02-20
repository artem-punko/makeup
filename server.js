var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
const path = require('path');
const http = require('http');
const router = express.Router();

var app = express();

var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};
var mongodbUri = 'mongodb://makeup_collection:30secondstomars@ds119258.mlab.com:19258/makeup_collection';
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

Grid.mongo = mongoose.mongo;
var gfs = Grid(conn.db);

app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(bodyParser.json());

var storage = GridFsStorage({
    gfs: gfs,
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    },

    metadata: function (req, file, cb) {
        cb(null, { originalname: file.originalname });
    },
    root: 'notes'
});

var upload = multer({
    storage: storage
}).single('file');

app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        res.json({ error_code: 0, err_desc: null });
    });
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/file/:filename', function (req, res) {
    gfs.collection('notes');
    gfs.files.find({ filename: req.params.filename }).toArray(function (err, files) {
        if (!files || files.length === 0) {
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        var readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: "notes"
        });
        res.set('Content-Type', files[0].contentType)
        return readstream.pipe(res);
    });
});

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));