const express = require('express');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();
const { connectSQL } = require('./config/sql_connection');

const port = process.env.PORT || 3000;


const app = express();
app.use(express.json())

//middlewares

const morgan = require('./middlewares/morgan');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

app.listen(3000, async function () {
  console.log(`Listening on port: http://localhost:${port}`)
  await connectSQL();
});