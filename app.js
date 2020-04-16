var express=require('express');
var todoController = require('./requesthandler/manage')
var app= express();

app.set('view engine','ejs');
app.use(express.static('./'));
todoController(app);
app.listen(3000);

