const express = require('express');
var bodyParser = require('body-parser')
const utilityFunctions = require('./app/utils/utilityFunctions');
const errorHandler = utilityFunctions.errorHandler;
const app =  express();

app.use(bodyParser.json());



require('./app/routes/routes.js')(app);
app.use(errorHandler);


app.listen(3000, () => console.log('app running on 3000'))