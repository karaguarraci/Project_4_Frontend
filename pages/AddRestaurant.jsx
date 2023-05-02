import { useState } from "react";
import axios from "axios";
import { API_URL } from "../consts.js";
import { Form, Button, Container } from "react-bootstrap";
import Errors from "../components/Errors.jsx";
import addRestaurant_background_image from "../assets/Dog1.jpg";
import { useNavigate } from "react-router-dom";

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    // county: "",
    address: "",
    description: "",
    image: "",
    website: "",
    is_dog_friendly: false,
  });
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(`This is the form data ${JSON.stringify(formData)}`);
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${API_URL}/restaurants/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(formData);
      navigate("/");
      // setFormData(false);
    } catch (e) {
      console.log(e);
      // console.log(JSON.parse(e.request.response));
      // setShowError(true);
      // console.log(Object.entries(JSON.parse(e.request.response)));
      // setErrorMessage(Object.entries(JSON.parse(e.request.response)));
      setErrorMessage("Somthing went wrong");
      console.log(formData);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form_page">
      <img
        src={addRestaurant_background_image}
        alt="Background image"
        className="form_background_image"
      />
      <Container className="form_container">
        <Form className="sl_form" onSubmit={onSubmit}>
          <h3 className="form_header">Add Restaurant</h3>
          <Form.Group controlId="username">
            <Form.Control
              className="input_text"
              type="text"
              value={formData.name}
              placeholder="Name*"
              name="name"
              onChange={onChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Control
              className="input_text"
              type="text"
              value={formData.city}
              placeholder="City*"
              name="city"
              onChange={onChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Control
              className="input_text"
              type="text"
              value={formData.description}
              placeholder="Description"
              name="description"
              onChange={onChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Control
              className="input_text"
              type="text"
              value={formData.address}
              placeholder="Address*"
              name="address"
              onChange={onChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="imageURL">
            <Form.Control
              className="input_text"
              type="text"
              value={formData.image}
              placeholder="image URL"
              name="image"
              onChange={onChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="website">
            <Form.Control
              className="input_text"
              type="text"
              value={formData.website}
              placeholder="Website URL"
              name="website"
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="is_dog_friendly">
            <Form.Check
              type="checkbox"
              checked={formData.is_dog_friendly}
              label="Dog Friendly*"
              name="is_dog_friendly"
              // onChange={onChange}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>

        {/* <Errors
          showError={showError}
          errorMessage={errorMessage}
          setShowError={setShowError}
        /> */}
      </Container>
    </div>
  );
};

export default AddRestaurant;
