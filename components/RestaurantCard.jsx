import { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import ReviewCarousel from "./ReviewCarousel";

const RestaurantCard = ({ restaurant }) => {
  const [singleRestaurantInfo, setSingleRestaurantInfo] = useState(
    restaurant ? restaurant : undefined
  );

  function calcAv(reviews) {
    // console.log(`This is reviews@!!!! ${reviews}`);
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

  // console.log(`restaurantCardInfo: ${singleRestaurantInfo}`);
  // console.log(restaurant);
  return (
    singleRestaurantInfo && (
      <div className="restaurant-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={singleRestaurantInfo.image} />
          <Card.Body>
            <Card.Title>{singleRestaurantInfo.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {calcAv(singleRestaurantInfo.reviews)}
            </Card.Subtitle>
            <Card.Text>{singleRestaurantInfo.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{singleRestaurantInfo.address}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href={singleRestaurantInfo.website}>
              {singleRestaurantInfo.website}
            </Card.Link>
          </Card.Body>
        </Card>
        <ReviewCarousel reviews={singleRestaurantInfo.reviews} />
      </div>
    )
  );
};

export default RestaurantCard;
