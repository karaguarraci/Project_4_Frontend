import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../consts";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import home_background_image from "../assets/Pups.jpg";

const Home = () => {
  const [restaurantCardData, setrestaurantCardData] = useState();
  const [cardsToDisplay, setCardsToDisplay] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/restaurants/`);
        console.log(data);
        setrestaurantCardData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const onSearch = (e) => {
    const filteredrestaurants = restaurantCardData.filter((restaurant) =>
      restaurant.city.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filteredrestaurants);
    navigate(`/city/${e.target.value.toLowerCase()}`, {
      state: filteredrestaurants,
    });
    setCardsToDisplay(filteredrestaurants);
  };

  return (
    <div className="home-page">
      <div className="background_images">
        <img
          src={home_background_image}
          alt="Background image"
          className="form_background_image"
        />
      </div>
      <div className="main-searchbar">
        <SearchBar className="searchbar-home" onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Home;
