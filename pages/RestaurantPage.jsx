import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../consts.js";
import RestaurantCard from "../components/RestaurantCard.jsx";
import LoadingVisual from "../components/LoadingVisual.jsx";

const RestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // const [reviews, setReviews] = useState([]);
  // const [dogFriendly, setDogFriendly] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/restaurants/${id}/`);
        // console.log(data);
        setIsLoading(false);
        setRestaurant(data);
      } catch (err) {
        console.log(err);
        setShowError(true);
        setErrorMessage("Something went wrong, please try again later.");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {showError ? <p className="error-message">{errorMessage}</p> : null}
      {isLoading ? (
        <LoadingVisual />
      ) : (
        <div className="restaurant_card">
          <RestaurantCard restaurant={restaurant} />
          {/* <ReviewsCarousel reviews={reviews} /> */}
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;
