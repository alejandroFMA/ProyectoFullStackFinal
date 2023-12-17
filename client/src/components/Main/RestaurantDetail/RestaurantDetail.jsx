import { jwtDecode } from "jwt-decode";
import ReactStars from "react-rating-stars-component";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FormReserve from "./FormReserve";
import Comments from "./Comments";

const RestaurantDetail = () => {
  const [ userInfo, setUserInfo ] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const numberId = Number(id);
  const [restaurantDetail, setRestaurantDetail] = useState({});
  // const [ratings, setRatings] = useState()

    useEffect(() => {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      setUserInfo(decoded)
  }, []);

  console.log(userInfo)

  useEffect(() => {
    fetchRestaurantData();
    fetchCommentsByRestaurantId();
  }, [numberId]);

  const fetchRestaurantData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${numberId}`
      );
      setRestaurantDetail(response.data);
    } catch (error) {
      console.error("Error fetching restaurant data: " + error);
    }
  };

  const fetchCommentsByRestaurantId = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/comment/restaurant/${numberId}`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments: " + error);
    }
  };

  return (
    <>
      <section className="detail-page">
        <article>
          <h1>{restaurantDetail.name}</h1>
          <p>Dirección:{restaurantDetail.address}</p>
          <p>Tipo de cocina: {restaurantDetail.type}</p>
          <ReactStars
                 size={24}
                 isHalf={true}
                 emptyIcon={<i className="far fa-star"></i>}
                 halfIcon={<i className="fa fa-star-half-alt"></i>}
                 fullIcon={<i className="fa fa-star"></i>}
                 activeColor="#ffd700"
              />
          <p>({restaurantDetail.rating})</p>
        </article>
        <Comments
          userInfo={userInfo}
          comments={comments}
          setComments={setComments}
          id_restaurant={numberId}
        />
        <FormReserve id_restaurant={numberId} userInfo={userInfo} />
      </section>
    </>
  );
};

export default RestaurantDetail;
