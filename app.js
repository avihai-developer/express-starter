require('dotenv').config()
var mongooseService = require('./services/mongoose.service');
var express = require('express');

var app = express();
app.use(require('./routes'));
mongooseService.connect();

var server = app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + server.address().port);
});
