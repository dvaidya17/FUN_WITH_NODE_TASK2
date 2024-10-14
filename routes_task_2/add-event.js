const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const scheduler = require('../controller/mc');

const router = express.Router();

//const events = [];


router.get('/', (req, res, next) => {
  res.send('<form action="/add-events" method="POST"><input type="text" name="startval"><input type = "text" name = "endval"><button type="submit">Submit</button></form>');
  
});

router.post('/', (req, res, next) => {
  /*
  const eventdetails = req.body;
  //res.send('<form action = "/admin/products" method = "POST"><input type = "text" name = "Product"><button type = "submit">Submit</button></form>');
  events.push(eventdetails);
  const start = eventdetails.split(':')[]
  console.log(eventdetails);
  res.send('<h1> Event details has been recorded successfully</h1>');
  */

  const start = req.body.startval;
  const end = req.body.endval;

  console.log(start, end);
  
  if(start < 0 || end > 23) res.send('<h1> Adding events for less than 00:00 hrs or greater than 23:59 hrs is not possible </h1>');

  const obj = new scheduler(start, end);

  if(obj.addEvents())
  {
       res.send('<h1> Events added </h1>');
  }
  else
  {
    res.send('<h1> Events are overlapping </h1>');
  }

});

module.exports = router;


