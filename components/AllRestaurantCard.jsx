import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllRestaurantsCard = (restaurantData) => {
  const [restaurantInfo, setRestaurantInfo] = useState(
    restaurantData ? restaurantData.restaurantData : undefined
  );
  console.log(restaurantInfo);

  function calcAv(reviews) {
    console.log(`This is reviews@!!!! ${reviews}`);
    if (!reviews) {
      return 0;
    }
    let totalscore = 0;
    let totalCount = reviews.length;
    Array.from(reviews).forEach((review) => {
      totalscore += review.rating;
    });
    let avgScore = totalscore / totalCount;
    return Math.round(avgScore * 10) / 10;
  }

  return (
    restaurantInfo && (
      <li className="restaurant-card" key={restaurantInfo.id}>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={restaurantInfo.image} />
          <Card.Body>
            <Card.Title>{restaurantInfo.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {calcAv(restaurantInfo.reviews)}
            </Card.Subtitle>
            <Card.Text className="mb-2 text-muted">
              {restaurantInfo.address}
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
