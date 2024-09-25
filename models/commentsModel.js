const {Comment, User} = require('../schemas/association');

const getComment = async (commentId) =>{
    try{
        const comment = await Comment.findByPk(commentId);
        return comment || 'Comentario no encontrado';
  
} catch (error) {
    throw error;
}
};


const getCommentsbyRestaurantID = async (restaurantId) =>{
    try{
        const comment = await Comment.findAll( 
            {where:{id_restaurant: restaurantId},
            include: [
                {
                  model: User,
                    attributes: ["username"]
                }]});
        return comment || 'Comentarios no encontrado';
  
} catch (error) {
    throw error;
}

}

const getAllComments = async () => {
    try {
        return await Comment.findAll(); 
    } catch (error) {
        throw error;
    }
};


const createComment = async (commentData) => {
    try {
        const comment = await Comment.create(commentData);
        return comment;
    } catch (error) {
        throw error;
    }
}

const updateComment = async (commentId, updateData) => {
    try {
        const comment = await Comment.findByPk(commentId);
        if (comment) {
            await comment.update(updateData);
            return comment;
        }
        throw new Error('Comentario no encontrado');
    } catch (error) {
        throw error;
    }
}


const deleteComment = async (commentId) => {
    try {
        const comment = await Comment.findByPk(commentId);
        if (comment) {
            await comment.destroy();
            return comment; 
        } else {
            throw new Error('Comentario no encontrado');
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { getComment, getCommentsbyRestaurantID, getAllComments, createComment, updateComment ,deleteComment};
