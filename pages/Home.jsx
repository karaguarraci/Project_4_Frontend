// import { useState } from "react";
// import RestaurantCard from "./RestaurantCard";
// import axios from "axios";
// import { API_URL } from "../consts";
// import RestaurantCard from "../components/RestaurantCard";

const Home = () => {
  //   const [city, setCity] = useState("");
  //   const [county, setCounty] = useState("");
  //   const [restaurants, setRestaurants] = useState([]);
  //   const handleCityChange = (e) => {
  //     setCity(e.target.value);
  //   };
  //   const handleCountyChange = (e) => {
  //     setCounty(e.target.value);
  //   };
  //   const onSubmitForm = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.get(`${API_URL}/restaurants/`, {
  //         params: { city, county },
  //       });
  //       setRestaurants(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   return (
  //     <div>
  //       <form onSubmit={onSubmitForm}>
  //         <label>
  //           City:
  //           <input type="text" value={city} onChange={handleCityChange} />
  //         </label>
  //         <label>
  //           County:
  //           <input type="text" value={county} onChange={handleCountyChange} />
  //         </label>
  //         <button type="submit">Search</button>
  //       </form>
  //       <div className="row">
  //         {restaurants.map((restaurant) => (
  //           <div key={restaurant.id} className="col-md-4 mb-4">
  //             <RestaurantCard restaurantByPlace={restaurant} />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
};

export default Home;
