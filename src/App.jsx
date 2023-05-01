import "./App.css";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllRestaurants from "../pages/AllRestaurants";
import AddRestaurant from "../pages/AddRestaurant";
import RestaurantPage from "../pages/RestaurantPage";
import { Routes, Route } from "react-router-dom";
import City from "../components/City";
import FavouritesPage from "../pages/FavouritesPage";
// import AddDogInfo from "../pages/AddDogInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allrestaurants" element={<AllRestaurants />} />
        <Route path="/addrestaurant" element={<AddRestaurant />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="/city/:city" element={<City />} />
        <Route path="/myfavourites" element={<FavouritesPage />} />
        {/* <Route path="adddoginfo" element={<AddDogInfo />} /> */}
      </Routes>
    </div>
  );
}

export default App;
