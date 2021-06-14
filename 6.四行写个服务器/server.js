var express = require('express')

var app = new express();

app.use(express.static('./page'));

app.listen(10086); //端口号大于8000,等于80

