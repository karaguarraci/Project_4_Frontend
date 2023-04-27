import { useLocation } from "react-router-dom";
import AllRestaurantsCard from "./AllRestaurantCard";

const City = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      {state.map((restaurant) => (
        <AllRestaurantsCard key={restaurant.id} restaurantData={restaurant} />
      ))}
    </div>
  );
};

export default City;
