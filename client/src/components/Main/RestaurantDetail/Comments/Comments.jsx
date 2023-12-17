import {useState} from "react"
import axios from "axios"
import {jwtDecode} from "jwt-decode";


const Comments = ({comments, setComments, id_restaurant, userInfo}) => {

const [text, setText]=useState("");

// const token = localStorage.getItem('token');
// const decoded = jwtDecode(token);

// console.log(decoded)
  

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
    <section>
    {comments.map(comment => (
        <article key={comment.id}>
          <p><q>{comment.text}</q> - <b>{comment.User.username}</b></p>
        </article>
      ))}
    </section>

    <form onSubmit={handleSubmit}>
      <textarea placeholder="Escribe tu comentario" onChange={handleInputChange} value={text}></textarea> 
      <button type="submit">Enviar</button>
    </form>
  </>);
};

export default Comments;
