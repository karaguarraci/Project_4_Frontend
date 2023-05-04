import { useState } from "react";
import { API_URL } from "../consts";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import ReactStars from "react-rating-stars-component";

const ReviewsCard = ({ review }) => {
  const [showEditForm, setShowEditForm] = useState();
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const loggedInUser = decodedToken;

  const initialFormData = {
    rating: review.rating,
    comment: review.comment,
    restaurant: review.restaurant,
  };

  const [formData, setFormData] = useState(initialFormData);
  console.log(initialFormData);

  const onClick = () => {
    setFormData(initialFormData);
    setShowEditForm(true);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const reviewId = review.id;
      // const restaurantId = review.restaurant;
      // console.log(`this is the review id: ${reviewId}`);
      // console.log(`restaurant id: ${restaurantId}`);
      const updatedReview = await axios.put(
        `${API_URL}/reviews/${reviewId}/`,
        { ...formData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(updatedReview);
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async (e) => {
    // e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const reviewId = review.id;
      const reviewToDelete = await axios.delete(
        `${API_URL}/reviews/${reviewId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload();
      console.log(reviewToDelete);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {
        <ReactStars
          className="rating-stars"
          count={5}
          value={review.rating}
          size={24}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
        />
      }
      <p>{review.comment}</p>
      {loggedInUser && loggedInUser.sub === review.owner ? (
        showEditForm ? (
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
              {/* <ReactStars
                className="rating-stars"
                count={5}
                onChange={onChange}
                size={24}
                edit={false}
                isHalf={true}
                activeColor="#ffd700"
              /> */}
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
          <div>
            <Button onClick={onClick} variant="primary" className="cardbutton">
              Update Review
            </Button>

            <Button onClick={onDelete} variant="primary" className="cardbutton">
              Delete Review
            </Button>
          </div>
        )
      ) : null}
    </div>
  );
};

export default ReviewsCard;
