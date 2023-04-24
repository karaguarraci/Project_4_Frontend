import axios from "axios";
import { API_URL } from "../consts";
import { useState, useEffect } from "react";
import AllRestaurantsCard from "../components/AllRestaurantCard";
import LoadingVisual from "../components/LoadingVisual";

const AllRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/restaurants/`);
        setIsLoading(false);
        setAllRestaurants(data);
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
        <div className="restaurant-cards">
          {allRestaurants.map((restaurant) => (
            <div key={restaurant.id}>
              <AllRestaurantsCard restaurantData={restaurant} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRestaurants;
