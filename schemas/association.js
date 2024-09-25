const User = require('./sql_users');
const Restaurant = require('./sql_restaurants');
const Comment = require('./sql_comments');
const Reservation = require('./sql_reservations');


User.hasMany(Comment, {onDelete:'CASCADE' ,foreignKey: 'id_user' });
Comment.belongsTo(User, {onDelete:'CASCADE' ,foreignKey: 'id_user' });

User.hasMany(Reservation, {onDelete:'CASCADE' ,foreignKey: 'id_user' });
Reservation.belongsTo(User, {onDelete:'CASCADE' ,foreignKey: 'id_user' });

Restaurant.hasMany(Comment, {onDelete:'CASCADE',foreignKey: 'id_restaurant' });
Comment.belongsTo(Restaurant, {onDelete:'CASCADE' ,foreignKey: 'id_restaurant' });

Reservation.belongsTo(Restaurant, {onDelete:'CASCADE' ,foreignKey: 'id_restaurant' });
Restaurant.hasMany(Reservation, {onDelete:'CASCADE',foreignKey: 'id_restaurant' });

module.exports = {
    User,
    Restaurant,
    Comment,
    Reservation,
  };