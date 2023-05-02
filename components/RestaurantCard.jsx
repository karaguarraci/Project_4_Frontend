import { useState } from "react";
import { Card, ListGroup, Button, Form, Container } from "react-bootstrap";
import { calcAv } from "./AverageRating";
import axios from "axios";
import { API_URL } from "../consts.js";
import ReactStars from "react-rating-stars-component";

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
  const [dogInfoFormData, setDogInfoFormData] = useState({
    provides_water_bowls: false,
    provides_treats: false,
    has_doggy_menu: false,
    extras: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showDogInfoForm, setShowDogInfoForm] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setDogInfoFormData({
      ...dogInfoFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`This is the form data ${JSON.stringify(dogInfoFormData)}`);
    try {
      const token = localStorage.getItem("token");
      const restaurant = singleRestaurantInfo.id;
      await axios.post(
        `${API_URL}/dog_friendly/`,
        { ...dogInfoFormData, restaurant: restaurant },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(dogInfoFormData);

      setShowDogInfoForm(false);
    } catch (e) {
      console.log(e);
      // console.log(JSON.parse(e.request.response));
      // setShowError(true);
      // console.log(Object.entries(JSON.parse(e.request.response)));
      // setErrorMessage(Object.entries(JSON.parse(e.request.response)));
      setErrorMessage("Somthing went wrong");
      console.log(e);
    }
  };

  const handleClick = (e) => {
    setDogInfoFormData({ ...dogInfoFormData, [e.target.name]: e.target.value });
    console.log(dogInfoFormData);
    setShowDogInfoForm(true);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onClick = () => {
    setFormData(initialFormData);
    setShowForm(true);
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
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
      <div>
        <div className="restaurant-card">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={singleRestaurantInfo.image} />
            <Card.Body>
              <Card.Title>{singleRestaurantInfo.name}</Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ margin: "auto" }}
              >
                {singleRestaurantInfo.reviews.length > 0 ? (
                  <ReactStars
                    className="rating-stars"
                    count={5}
                    value={calcAv(singleRestaurantInfo.reviews)}
                    size={24}
                    edit={false}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                ) : (
                  "No reviews yet"
                )}
              </Card.Subtitle>
              <Card.Text>{singleRestaurantInfo.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                {showDogInfoForm ? (
                  <Container className="form_container">
                    <Form className="sl_form" onSubmit={handleSubmit}>
                      <h3 className="form_header">Dog Friendly Info</h3>
                      <Form.Group controlId="provides_water_bowls">
                        <Form.Check
                          type="checkbox"
                          label="Provides water bowls"
                          name="provides_water_bowls"
                          checked={dogInfoFormData.provides_water_bowls}
                          onChange={handleChange}
                        />

                        <Form.Group controlId="provides_treats">
                          <Form.Check
                            type="checkbox"
                            label="Provides treats"
                            name="provides_treats"
                            checked={dogInfoFormData.provides_treats}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group controlId="has_doggy_menu">
                          <Form.Check
                            type="checkbox"
                            label="Doggy Menu"
                            name="has_doggy_menu"
                            checked={dogInfoFormData.has_doggy_menu}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group controlId="extras">
                          <Form.Control
                            className="input_text"
                            type="text"
                            value={dogInfoFormData.extras}
                            placeholder="Doggy extras"
                            name="extras"
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        onSubmit={handleSubmit}
                      >
                        Add
                      </Button>
                    </Form>
                  </Container>
                ) : singleRestaurantInfo.dog_friendly ? (
                  <div>
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
                  </div>
                ) : (
                  <div>
                    <p>Add dog friendly extras?</p>
                    <Button
                      variant="primary"
                      className="cardbutton"
                      onClick={handleClick}
                    >
                      Add
                    </Button>
                  </div>
                )}
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
        </div>
      </div>
    )
  );
};

export default RestaurantCard;
