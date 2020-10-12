// const { json } = require('express');
var express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
// const router = require('./search.controller');
var Upshortinfos = require('./db');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('html', require('express-art-template'));
app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));
// app.use(router);
app.get('/', function (request, response) {
    response.render('index.html');
    if (request.query) {
        // const regex = new RegExp(escapeRegex(request.query.search), 'gi');
        Upshortinfos.find({ Author: request.body }, function (error, result) {
            if (error) {
                console.log(error)
            } else {
                response.render('index.html', {
                    datas: result
                });
            }
        });
    }

});
// app.get('/search', function (request, response) {
//     fs.readFile('./data.json', function (error, dataa) {
//         if (error) {
//             return error;
//         }
//         var data1 = JSON.parse(dataa).datas;
//         console.log(data1)var fs = require('fs');
//         response.render('searching data.html', {
//             datas: data1
//         });
//     });

// });






app.listen(8000, function () {
    console.log('server is running');
});