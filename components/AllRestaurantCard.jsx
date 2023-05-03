import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { calcAv } from "./AverageRating";
import Heart from "react-heart";
import axios from "axios";
import { API_URL } from "../consts.js";
import jwt_decode from "jwt-decode";
import ReactStars from "react-rating-stars-component";

const AllRestaurantsCard = (restaurantData) => {
  const [restaurantInfo, setRestaurantInfo] = useState(
    restaurantData ? restaurantData.restaurantData : undefined
  );
  console.log(restaurantInfo);
  const [active, setActive] = useState(false);

  const addToFavourite = async () => {
    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.sub;
      const restaurant = restaurantInfo.id;
      console.log(userId, restaurant);
      const favouriteRestaurant = await axios.post(
        `${API_URL}/favourites/`,
        { restaurant: restaurant, owner: userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(`this is the favourited restaurant ${favouriteRestaurant}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    restaurantInfo && (
      <li className="restaurant-card" key={restaurantInfo.id}>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={restaurantInfo.image} />
          <Card.Body>
            <Card.Title>
              <div style={{ width: "2rem" }}>
                <Heart
                  isActive={active}
                  onClick={() => {
                    setActive(!active);
                    addToFavourite();
                  }}
                />
              </div>
              {restaurantInfo.name}
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ margin: "auto" }}
            >
              {restaurantInfo.reviews && restaurantInfo.reviews.length > 0 ? (
                <ReactStars
                  classname="rating-stars"
                  count={5}
                  value={calcAv(restaurantInfo.reviews)}
                  size={24}
                  edit={false}
                  isHalf={true}
                  activeColor="#ffd700"
                />
              ) : (
                "No reviews yet"
              )}
            </Card.Subtitle>
            <Card.Text className="mb-2 text-muted" style={{ margin: "auto" }}>
              {restaurantInfo.city}
            </Card.Text>
            <Button
              className="restaurant-button"
              as={Link}
              to={`/restaurants/${restaurantInfo.id}/`}
              variant="primary"
            >
              View Info
            </Button>
          </Card.Body>
        </Card>
      </li>
    )
  );
};

export default AllRestaurantsCard;
