import {useState} from "react"
import axios from "axios"
import { format } from 'date-fns'


const Comments = ({comments, setComments, id_restaurant, userInfo}) => {

const [text, setText]=useState("");

// const token = localStorage.getItem('token');
// const decoded = jwtDecode(token);

// console.log(decoded)


console.log(comments)

const handleInputChange= (event) => {
  setText(event.target.value)
}

  const handleSubmit = async (event) => {
    event.preventDefault();
 
    const commentData ={
      id_user: userInfo.id,
      id_restaurant:id_restaurant,
      text:text
    }
    try{
     
      const response = await axios.post('http://localhost:3000/api/comment', commentData)
        setComments(prevComments => [...prevComments, response.data] )  
        setText("")
        console.log(response.data)
        alert("Comentario enviado")
      }
       catch(error) {
    console.error(console.error("Error creating comment:", error.response || error));
    alert(error.message)
  }
}


  return (<>  
    
    <section className="comments-display">
    <h4>Comentarios</h4>
    {comments && comments.map((comment) => (
        <article className="container2" key={comment.id}>
          <p><b>@{comment.User.username}</b></p>
            <q>{comment.text}</q>
            <p>{format(new Date(comment.timestamp), 'dd-MM-yyyy HH:mm')}</p> 
        </article>
      ))}

 
    </section>
    <form className="comment-txt-area"onSubmit={handleSubmit}>
      <textarea placeholder="Escribe tu comentario..." onChange={handleInputChange} value={text} cols="40" rows="5"></textarea> 
      <button className= "btn-comment" type="submit">Enviar</button>
    </form>

    
  </>);
};

export default Comments;
