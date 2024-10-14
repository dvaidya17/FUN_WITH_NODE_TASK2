const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


const addevents = require('./routes_task_2/add-event.js');
const getevents = require('./routes_task_2/get-event.js');

app.use( '/add-events', addevents); 
app.use('/get-events' , getevents);

// for 404 error
app.use('/', (req,res,next) => {
   res.status(404).send('<h1>Page Not Found!</h1>')
});

app.listen(3000);