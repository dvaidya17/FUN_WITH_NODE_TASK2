const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const scheduler = require('../controller/mc');

//const {events: getevents} = require('../routes/add-event.js');

const router = express.Router();

router.get('/', (req, res, next) => {
   const obj = new scheduler();

   const items = obj.getEvents();
   let htmlResponse = '<ul>';
    items.forEach(item => {
        htmlResponse += `<li>${item}</li>`;
    });
    htmlResponse += '</ul>';

    // Send the HTML response
    res.send(htmlResponse);
});

module.exports = router;
