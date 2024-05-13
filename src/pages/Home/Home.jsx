import React from "react";
import "./Home.css";
import {
  Nav_bar,
  Left_bar,
  Community_page_banner,
  UpcommingEvents,
} from "../../components";
import { ProfileImg } from "../../assets";
import Community_Post from "../../components/Community_Post/Community_Post";
const Home = () => {
  return (
    <div className="App">
      <Nav_bar />
      <div className="app_div">
        <div className="app_div_left">
          <Left_bar />
        </div>
        <div className="app_div_right">
          <div className="app_div_right_left">
            <Community_page_banner />
            <Community_Post />
          </div>
          <div className="app_div_right_right">
            <UpcommingEvents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
