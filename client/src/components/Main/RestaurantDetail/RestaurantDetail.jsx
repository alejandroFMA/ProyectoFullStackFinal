import {jwtDecode} from "jwt-decode";
import { useState, useEffect, useContext } from "react";
import {UserInfoContext} from "../../../context/userInfoContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import FormReserve from "./FormReserve";
import Comments from "./Comments";

const RestaurantDetail = () => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [decodedToken, setDecodedToken] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams(); 
  console.log(id)
  const numberId= Number(id)
  const [restaurantDetail, setRestaurantDetail] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    setDecodedToken(decoded);
    setUserInfo(decoded)
}, [setUserInfo]);

 useEffect(() => {
  fetchRestaurantData();
  fetchCommentsByRestaurantId();
}, [numberId]); 


  const fetchRestaurantData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/restaurant/${numberId}`);
      setRestaurantDetail(response.data);
    } catch (error) {
      console.error("Error fetching restaurant data: ", error);
    }
  };

  const fetchCommentsByRestaurantId = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/comment/restaurant/${numberId}`);
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
      <Comments userInfo={userInfo} comments={comments} />
      <FormReserve userInfo={userInfo}/>
    </>
  );
};

export default RestaurantDetail;
