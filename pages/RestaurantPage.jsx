import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../consts.js";
import RestaurantCard from "../components/RestaurantCard.jsx";

const RestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();
  // const [reviews, setReviews] = useState([]);
  // const [dogFriendly, setDogFriendly] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/restaurants/${id}/`);
        console.log(data);
        setRestaurant(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="restaurant_card">
      <RestaurantCard restaurant={restaurant} />
      {/* <ReviewsCarousel reviews={reviews} /> */}
    </div>
  );
};

export default RestaurantPage;
