
const Comments = ({comments, userInfo}) => {

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
      // const response = await axios.post('http://localhost:3000/comment', {
      //   const data={
      //     id:id_user
      //     id: id_restaurant
      //     text: text
      //   }

      // });
  

    }

  return <>
    <section>
    {comments.map(comment => (
        <article>
          <p>{comment.text}</p>
        </article>
      ))}
    </section>
    
    
    <textarea placeholder="Escribe tu comentario"></textarea>
  
    <button type="submit">Enviar</button>
  </>;
};

export default Comments;
