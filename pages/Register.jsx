import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signup_background_image from "../assets/dog-face.jpg";
import { API_URL } from "../consts.js";
import { Form, Button, Container } from "react-bootstrap";
import Errors from "../components/Errors.jsx";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
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
      await axios.post(`${API_URL}/auth/register/`, formData);
      navigate("/login");
      // console.log(formData);
    } catch (e) {
      console.log(e);
      console.log(JSON.parse(e.request.response));
      setShowError(true);
      console.log(Object.entries(JSON.parse(e.request.response)));
      setErrorMessage(Object.entries(JSON.parse(e.request.response)));
      console.log(formData);
    }
  };
  return (
    <div className="form_page">
      <img
        src={signup_background_image}
        alt="Background image"
        className="form_background_image"
      />
      <Container className="form_container">
        <Form className="sl_form" onSubmit={onSubmit}>
          <h3 className="form_header">Register</h3>
          <Form.Group controlId="username">
            <Form.Control
              className="input_text"
              type="text"
              value={formData.username}
              placeholder="Username"
              name="username"
              onChange={onChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Control
              className="input_text"
              type="email"
              value={formData.email}
              placeholder="Email"
              name="email"
              onChange={onChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              className="input_text"
              type="password"
              value={formData.password}
              placeholder="Password"
              name="password"
              onChange={onChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              className="input_text"
              type="password"
              value={formData.password_confirmation}
              placeholder="Confirm Password"
              name="password_confirmation"
              onChange={onChange}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign up
          </Button>
          <p onClick={() => navigate("/login")}>Already have an account? </p>
        </Form>

        <Errors showError={showError} errorMessage={errorMessage} />
      </Container>
    </div>
  );
};

export default Register;
