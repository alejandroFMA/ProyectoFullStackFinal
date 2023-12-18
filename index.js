const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
require('./config/google.config');
require('./config/jwt.config')(passport);
const { db } = require('./config/sql_connection');
require('./schemas/association');
const path = require('path');

const port = process.env.PORT || 3000;



// middlewares
const morgan = require('./middlewares/morgan');
const error404 = require('./middlewares/error404');

db.sync().then(() => {
  console.log('Base de datos sincronizada');
});

const app = express();

// configure express
app.use(express.json());
app.use(cookieParser());
app.use(cors("http://localhost:5173"));

// configure session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

// configure passport
app.use(passport.initialize());
app.use(passport.session());

// routes
const userApiRoutes = require("./routes/users.routes");
const restaurantApiRoutes = require("./routes/restaurants.routes")
const reservationApiRoutes = require('./routes/reservations.routes')
const commentApiRoutes = require('./routes/comments.routes')
const authRoute = require('./routes/auth.routes');
const auth = require('./controllers/auth.controller');

app.use('/api', userApiRoutes);
app.use('/api', restaurantApiRoutes);
app.use('/api', reservationApiRoutes);
app.use('/api', commentApiRoutes);
app.use('/', authRoute);

// authentication
app.get("/auth/google", passport.authenticate("google", { scope: ['email', 'profile'], prompt: "select_account" }));
app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth/failed' }), auth.googleAuth);




//* Serve static assets in production, must be at this location of this file

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'));
  
  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'dist','index.html')));
}





// error handling
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));
app.use('*',error404)

// start server

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
});
