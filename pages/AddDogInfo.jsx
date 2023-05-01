// import { useState } from "react";
// import axios from "axios";
// import { API_URL } from "../consts";
// import addDogInfo_background_image from "../assets/SmilingDogs.jpg";
// import { Button, Form, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const AddDogInfo = () => {
//   const [dogInfoFormData, setdogInfoFormData] = useState({
//     provides_water_bowls: false,
//     provides_treats: false,
//     has_doggy_menu: false,
//     extras: "",
//   });
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value =
//       e.target.type === "checkbox" ? e.target.checked : e.target.value;
//       setdogInfoFormData({
//       ...dogInfoFormData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(`This is the form data ${JSON.stringify(dogInfoFormData)}`);
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(`${API_URL}/dog_friendly/`, dogInfoFormData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log(dogInfoFormData);
//       navigate("/");
//       // setFormData(false);
//     } catch (e) {
//       console.log(e);
//       // console.log(JSON.parse(e.request.response));
//       // setShowError(true);
//       // console.log(Object.entries(JSON.parse(e.request.response)));
//       // setErrorMessage(Object.entries(JSON.parse(e.request.response)));
//       setErrorMessage("Somthing went wrong");
//       console.log(dogInfoFormData);
//     }
//   };

//   return (
//     <div className="form_page">
//       <img
//         src={addDogInfo_background_image}
//         alt="Background image"
//         className="form_background_image"
//       />
//       <Container className="form_container">
//         <Form className="sl_form" onSubmit={handleSubmit}>
//           <h3 className="form_header">Dog Friendly Info</h3>
//           <Form.Group controlId="provides_water_bowls">
//             <Form.Check
//               type="checkbox"
//               label="Provides water bowls"
//               name="provides_water_bowls"
//               checked={dogInfoFormData.provides_water_bowls}
//               onChange={handleChange}
//             />

//             <Form.Group controlId="provides_treats">
//               <Form.Check
//                 type="checkbox"
//                 label="Provides treats"
//                 name="provides_treats"
//                 checked={dogInfoFormData.provides_treats}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="has_doggy_menu">
//               <Form.Check
//                 type="checkbox"
//                 label="Doggy Menu"
//                 name="has_doggy_menu"
//                 checked={dogInfoFormData.has_doggy_menu}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="extras">
//               <Form.Control
//                 className="input_text"
//                 type="text"
//                 value={dogInfoFormData.extras}
//                 placeholder="Doggy extras"
//                 name="extras"
//                 onChange={handleChange}
//               ></Form.Control>
//             </Form.Group>
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Add
//           </Button>
//         </Form>
//       </Container>
//     </div>
//   );
// };

// export default AddDogInfo;
