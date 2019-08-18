const express = require('express');
var bodyParser = require('body-parser')
const utilityFunctions = require('./app/utils/utilityFunctions');
const errorHandler = utilityFunctions.errorHandler;
const app =  express();

app.use(bodyParser.json());



require('./app/routes/routes.js')(app);
app.use(errorHandler);

let port = process.env.PORT || 3000;


app.listen(port, () => console.log('app running on 3000'))