import { useState } from "react";
import { Card, ListGroup, Button, Form } from "react-bootstrap";
import Reviews from "./Reviews";
import { calcAv } from "./AverageRating";
import axios from "axios";
import { API_URL } from "../consts.js";

const RestaurantCard = ({ restaurant }) => {
  const [singleRestaurantInfo, setSingleRestaurantInfo] = useState(
    restaurant ? restaurant : undefined
  );

  const [showForm, setShowForm] = useState(false);
  const initialFormData = {
    rating: "",
    comment: "",
    restaurant: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onClick = () => {
    setFormData(initialFormData);
    setShowForm(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const restaurantId = singleRestaurantInfo.id;
      const addedReview = await axios.post(
        `${API_URL}/reviews/`,
        { ...formData, restaurant: restaurantId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(addedReview);
      if (addedReview) {
        setShowForm(false);
      }
    } catch (err) {
      console.log("post not worked");
      console.log(err);
    }
  };

  return (
    singleRestaurantInfo && (
      <div className="restaurant-card-container">
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
              <ListGroup.Item>
                {singleRestaurantInfo.dog_friendly.provides_water_bowls
                  ? "Water bowls: Yes"
                  : "Water bowls: No"}{" "}
                <br />
                {singleRestaurantInfo.dog_friendly.provides_treats
                  ? "Treats: Yes"
                  : "Treats: No"}
                <br />
                {singleRestaurantInfo.dog_friendly.has_doggy_menu
                  ? "Doggy menu: Yes"
                  : "Doggy menu: No"}
                <br />
                Doggy extras: {singleRestaurantInfo.dog_friendly.extras}
              </ListGroup.Item>
              <ListGroup.Item>{singleRestaurantInfo.address}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href={singleRestaurantInfo.website}>
                {singleRestaurantInfo.website}
              </Card.Link>
            </Card.Body>
            <Card.Body>
              {showForm ? (
                <Form onSubmit={onSubmit}>
                  <Form.Group controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                      type="number"
                      min={1}
                      max={5}
                      name="rating"
                      value={formData.rating}
                      onChange={onChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="comment"
                      value={formData.comment}
                      onChange={onChange}
                      required
                    />
                  </Form.Group>
                  <Button type="submit">Submit</Button>
                  {error && <p className="text-danger">{error}</p>}
                </Form>
              ) : (
                <Button
                  onClick={onClick}
                  variant="primary"
                  className="cardbutton"
                >
                  Add Review
                </Button>
              )}
            </Card.Body>
          </Card>

          <Reviews
            reviews={singleRestaurantInfo.reviews}
            restaurant={singleRestaurantInfo}
          />
        </div>
      </div>
    )
  );
};

export default RestaurantCard;
