import React from "react";
import "./Left_bar.css";
import {
  Calender,
  Code_img,
  Home,
  My_profile,
  Terms_of_use,
  UiUx,
  User1,
  swift_logo,
} from "../../assets";

const Left_bar = () => {
  return (
    <div className="left_bar">
      <div className="left_bar_top_two">
        <div className="left_bar_top">
          <div className="left_bar_top_home">
            <img src={Home} alt="Home" className="left_bar_top_home_hm_img" />
            <h3>Home</h3>
          </div>
          <div className="left_bar_top_event">
            <img
              src={Calender}
              alt="Event"
              className="left_bar_top_event_ev_img"
            />
            <h3>Events</h3>
          </div>
        </div>
        <div className="left_bar_middle">
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={Code_img} alt="Code" />
            </div>
            <h3>Home</h3>
          </div>
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={swift_logo} alt="Code" />
            </div>
            <h3>Swift</h3>
          </div>
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={Code_img} alt="Code" />
            </div>
            <h3>Home cdsf</h3>
          </div>
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={Code_img} alt="Code" />
            </div>
            <h3>Home</h3>
          </div>
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={User1} alt="Code" />
            </div>
            <h3>Home</h3>
          </div>
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={UiUx} alt="Code" />
            </div>
            <h3>Home</h3>
          </div>
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={Code_img} alt="Code" />
            </div>
            <h3>Home</h3>
          </div>
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={User1} alt="Code" />
            </div>
            <h3>Home</h3>
          </div>
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={Code_img} alt="Code" />
            </div>
            <h3>Home</h3>
          </div>
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={UiUx} alt="Code" />
            </div>
            <h3>Home</h3>
          </div>
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={Code_img} alt="Code" />
            </div>
            <h3>Home</h3>
          </div>
          <div className="left_bar_middle_option">
            <div className="left_bar_middle_option_img_div">
              <img src={Code_img} alt="Code" />
            </div>
            <h3>Home</h3>
          </div>
        </div>
      </div>
      <div className="left_bar_bottom">
        <div className="left_bar_bottom_div">
          <img src={Terms_of_use} alt="Terms" />
          <h3>Terms of use</h3>
        </div>
      </div>
    </div>
  );
};

export default Left_bar;
