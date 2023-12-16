const User = require('./sql_users');
const Restaurant = require('./sql_restaurants');
const Comment = require('./sql_comments');
const Reservation = require('./sql_reservations');


User.hasMany(Comment, { foreignKey: 'id_user' });
Comment.belongsTo(User, { foreignKey: 'id_user' });

User.hasMany(Reservation, { foreignKey: 'id_user' });
Reservation.belongsTo(User, { foreignKey: 'id_user' });

Restaurant.hasMany(Comment, { foreignKey: 'id_restaurant' });
Comment.belongsTo(Restaurant, { foreignKey: 'id_restaurant' });

Reservation.belongsTo(Restaurant, { foreignKey: 'id_restaurant' });
Restaurant.hasMany(Reservation, { foreignKey: 'id_restaurant' });

module.exports = {
    User,
    Restaurant,
    Comment,
    Reservation,
  };