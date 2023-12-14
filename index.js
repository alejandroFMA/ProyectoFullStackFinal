const express = require('express');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();
const { db } = require('./config/sql_connection');
require('./schemas/sql_association')

const port = process.env.PORT || 3000;

//middlewares

const morgan = require('./middlewares/morgan');

const app = express();
app.use(express.json())

db.sync().then(() => {
  console.log('Base de datos sincronizada');
});
app.use(cors())

//routes

const userApiRoutes = require("./routes/users.routes");
const restaurantApiRoutes = require("./routes/restaurants.routes")
const reservationApiRoutes = require('./routes/reservations.routes')
const commentApiRoutes = require('./routes/comments.routes')

app.use('/api', userApiRoutes);
app.use('/api', restaurantApiRoutes);
app.use('/api', reservationApiRoutes);
app.use('/api', commentApiRoutes);




app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`)
 
});