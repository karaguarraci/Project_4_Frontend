import { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

const RestaurantCard = ({ restaurant }) => {
  const [singleRestaurantInfo, setSingleRestaurantInfo] = useState(restaurant);
  console.log(`restaurantCardInfo: ${singleRestaurantInfo}`);
  console.log(restaurant);
  return (
    singleRestaurantInfo && (
      <div className="restaurant-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={singleRestaurantInfo.image} />
          <Card.Body>
            <Card.Title>{singleRestaurantInfo.name}</Card.Title>
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
      </div>
    )
  );
};

export default RestaurantCard;
