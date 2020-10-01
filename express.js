var express = require('express');
var app = express();
app.engine('html', require('express-art-template'));

app.use('/public/', express.static('./public/'));

app.get('/', function (request, response) {
    response.render('index.html');
});

app.listen(process.env.PORT || 3000, () => console.log('Server started'));


