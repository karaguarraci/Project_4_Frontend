import { useState } from "react";

const RestaurantCard = (restaurant) => {
  const [singleRestaurantInfo, setSingleRestaurantInfo] = useState(
    restaurant ? restaurant.restaurant : undefined
  );
  console.log(`restaurantCard: ${restaurant}`);
  return (
    singleRestaurantInfo && (
      <div className="restaurant-card">
        <img src={restaurant.image} alt={restaurant.name} />
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>
        <div className="restaurant-details">
          <div>
            <span>Address:</span> {restaurant.address}
          </div>
          <div>
            <span>Website:</span>{" "}
            <a href={restaurant.website}>{restaurant.website}</a>
          </div>
          <div>
            <span>Dog Friendly:</span> {restaurant.dog_friendly ? "Yes" : "No"}
          </div>
        </div>
      </div>
    )
  );
};

export default RestaurantCard;
