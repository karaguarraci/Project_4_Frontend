import axios from "axios";
import { API_URL } from "../const";
import { useState, useEffect } from "react";

const AllRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/restaurants/`);
        setAllRestaurants(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Restaurants</h1>
      <div className="restaurant-cards">
        {allRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <p>{restaurant.address}</p>
            <p>
              <a href={restaurant.website}>{restaurant.website}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRestaurants;
