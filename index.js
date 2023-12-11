const express = require('express');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3000;


const app = express();
app.use(express.json())

//middlewares

const morgan = require('./middlewares/morgan');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

app.listen(3000, function () {
  console.log(`Listening on port: http://localhost:${port}`);
});