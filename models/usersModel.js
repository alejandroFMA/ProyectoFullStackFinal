const User = require('../schemas/sql_users');

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
        return await User.findAll(); // Devuelve todos los usuarios
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


const deleteUser = async (email) => {
    try {
        const user = await User.destroy({ where: { email: email } });
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = { getUserByEmail, getAllUsers, createUser, updateUser, deleteUser };