const User = require('./sql_users');
const Restaurant = require('./sql_restaurants');
const Comment = require('./sql_comments');
const Reservation = require('./sql_reservations');


User.hasMany(Reservation);
Reservation.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Restaurant.hasMany(Comment);
Comment.belongsTo(Restaurant);

Restaurant.hasMany(Reservation);
Reservation.belongsTo(Restaurant)