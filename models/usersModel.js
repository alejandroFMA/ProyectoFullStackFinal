const User = require('../schemas/sql_users');
const Reservation = require('../schemas/sql_reservations')
const Comment =require('../schemas/sql_reservations')

const getUser = async (userId) => {
    try{
        const user = await User.findByPk(userId);
        return user || 'Usuario no encontrado';
    } catch (error) {
        throw error;
    }
};

const getUserByEmail = async (email) => {
    try {
        if (email) {
            const user = await User.findOne({ where: { email: email } });
            return user || 'Usuario no encontrado';
        } else {
            throw new Error('Email no proporcionado');
        }
    } catch (error) {
        throw error;
    }
};


const getAllUsers = async () => {
    try {
        return await User.findAll(); 
    } catch (error) {
        throw error;
    }
};



const createUser = async (userData) => {
    try {
        const user = await User.create(userData);
        return user;
    } catch (error) {
        throw error;
    }
}

const updateUser = async (userId, updateData) => {
    try {
        const user = await User.findByPk(userId);
        if (user) {
            await user.update(updateData);
            return user;
        }
        throw new Error('Usuario no encontrado');
    } catch (error) {
        throw error;
    }
}


const deleteUser = async (userId) => {
    try {
        await Comment.destroy({ where: { id_user: userId } });
        await Reservation.destroy({ where: { id_user: userId } });
        //se borran todas las filas dependientes de esta tabla
        const rows = await User.destroy({ where: { id_users: userId } }); 

        if (rows === 0) {
            throw new Error('Usuario no encontrado');
        }

        return { message: 'Usuario borrado', userId: userId };
    } catch (error) {
        throw error;
    }
}

module.exports = { getUser, getUserByEmail, getAllUsers, createUser, updateUser, deleteUser };