import { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import FormReserve from "./FormReserve";
import Comments from "./Comments";

const RestaurantDetail = () => {

  const [comments, setComments] = useState([]);
  const { id } = useParams(); 
  const [restaurantDetail, setRestaurantDetail] = useState({});
 const newId = id.slice(1)
 const numberId= Number(newId)
 console.log(numberId)

 useEffect(() => {
  fetchRestaurantData();
  fetchCommentsByRestaurantId();
}, [numberId]); 


  const fetchRestaurantData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/restaurant/${numberId}`);
      console.log(response.data);
      setRestaurantDetail(response.data);
    } catch (error) {
      console.error("Error fetching restaurant data: ", error);
    }
  };

  const fetchCommentsByRestaurantId = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/comments/${numberId}`);
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments: ", error);
    }
  };


  return (
    <>
      <section>
        <h1>{restaurantDetail.name}</h1>
        <p>Dirección:{restaurantDetail.address}</p>
        <p>Tipo de cocina: {restaurantDetail.type}</p>
        <p>Rating: {restaurantDetail.rating}</p>
      </section>
      <Comments comments={comments} />
      <FormReserve />
    </>
  );
};

export default RestaurantDetail;
