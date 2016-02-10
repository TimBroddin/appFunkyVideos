var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/images', function(req, res, next) {
    var files = fs.readdirSync('temp/').length;

    if (files < 10) {
        files = '00' + files;
    } else if (files > 9 && files < 100) {
        files = '0' + files;
    }

    var fileName = 'img' + files;
    var path = 'temp/' + fileName;
    var wstream = fs.createWriteStream(path);

    req.pipe(wstream) // pipe the http request body to the file stream
        .on('error', next) // something went wrong with the fs, return 500
        .on('finish', function () {
            res.status(204).send();
        });
});

//url /api
router.get('/images', function(req, res) {
    res.json({ message: 'hooray! welcome to our api! 1' });
});


module.exports = router;
