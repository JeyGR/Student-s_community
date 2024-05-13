import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Signin from "./pages/Signin/Signin";
import Login from "./pages/Login/Login";
import Select_community from "./pages/Select_community/Select_community";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./pages/Testing/Testing";
import Testing from "./pages/Testing/Testing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selectcommunity" element={<Select_community />} />
        <Route path="testing" element={<Testing />} />
      </Routes>
    </Router>
  );
}

export default App;
