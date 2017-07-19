var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/assets', express.static('public'));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
//------------port---------------
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});