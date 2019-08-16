const express = require('express');

const app =  express();

require('./app/routes/routes.js')(app);

app.listen(3000, () => console.log('app running on 3000'))