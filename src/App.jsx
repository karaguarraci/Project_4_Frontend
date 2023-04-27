import "./App.css";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllRestaurants from "../pages/AllRestaurants";
import Locations from "../pages/Locations";
import RestaurantPage from "../pages/RestaurantPage";
import { Routes, Route } from "react-router-dom";
import City from "../components/City";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allrestaurants" element={<AllRestaurants />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="/city/:city" element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
