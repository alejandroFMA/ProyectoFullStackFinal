import {useState} from "react";
import axios from "axios";
import FormReserve from "./FormReserve";
import Comments from "./Comments";

const RestaurantDetail = () => {

  const [comments, setComments] =useState([])
  const fetchCommentById = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/restaurant");
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <section>
        <h1>TITULO</h1>
        <p>Tipo de cocina</p>
        <p>Rating</p>
      </section>
      <Comments comments={comments}/>
      <FormReserve />
    </>
  );
};

export default RestaurantDetail;
