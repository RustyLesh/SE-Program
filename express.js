var express = require('express');
var app = express();
app.engine('html', require('express-art-template'));

app.use('/public/', express.static('./public/'));

app.get('/', function (request, response) {
    response.render('index.html');
});







app.listen(3000, function () {
    console.log('server is running');
});
