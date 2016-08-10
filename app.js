var express = require('express');
var fs = require('fs');
var app = express();

// app.set('etag', false);

app.use('/bower_components', express.static('bower_components'));
app.use(express.static('public'));

app.get('/post/:id', function (req, res) {
    setTimeout(function () {
        var json = JSON.parse(fs.readFileSync('./post1.json', 'utf8'));
        res.json(json);

        // res.setHeader("content-type", "application/json; charset=utf-8");
        // fs.createReadStream("./post1.json").pipe(res);
    }, 150);
});

app.post('/post/:id', function (req, res) {
    setTimeout(function () {
        var json = JSON.parse(fs.readFileSync('./post1.json', 'utf8'));
        res.json(json);

        // res.setHeader("content-type", "application/json; charset=utf-8");
        // fs.createReadStream("./post1.json").pipe(res);
    }, 150);
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});
