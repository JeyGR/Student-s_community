import React from "react";
import "./Select_community.css";
import {
  Signin_page_img,
  right_finish_arrow,
  select_community_img,
} from "../../assets";
import { useNavigate } from "react-router-dom";
import { Select_community_compo } from "../../components";

const Select_community = () => {
  const navigate = useNavigate();
  const handlefinishbuttonClick = (e) => {
    navigate("/");
  };
  return (
    <div className="Select_community_div">
      <div className="Select_community_div_right">
        <Select_community_compo />
        <div className="Select_community_div_p">
          <button onClick={handlefinishbuttonClick}>
            Finish <img src={right_finish_arrow} alt="" />
          </button>
          <p>Be a part of your favorite community in just one click </p>
        </div>
      </div>
      <div className="Select_community_div_img">
        <img
          src={select_community_img}
          alt="Signin_img"
          className="Select_community_div_img_img"
        />
      </div>
    </div>
  );
};

export default Select_community;
