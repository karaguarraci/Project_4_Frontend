import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../consts";
import LoadingVisual from "../components/LoadingVisual";
import AllRestaurantsCard from "../components/AllRestaurantCard";

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`${API_URL}/favourites/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsLoading(false);
        setFavourites(data);
        console.log(`this is the favourites data ${data}`);
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
          {favourites.map((favourite) => (
            <div key={favourite.id}>
              <AllRestaurantsCard restaurantData={favourite.restaurant} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;
