const Comment = require('../schemas/sql_comments');

const getComment = async (commentId) =>{
    try{
        const comment = await Comment.findByPk(commentId);
        return comment || 'Comentario no encontrado';
  
} catch (error) {
    throw error;
}
};



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

module.exports = { getComment, getAllComments, createComment, updateComment ,deleteComment};
