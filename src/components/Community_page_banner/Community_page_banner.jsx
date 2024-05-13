import React from "react";
import {
  Community_banner_img,
  Community_dp,
  My_profile,
  back_banner,
  designPoster,
} from "../../assets";
import "./Community_page_banner.css";

const Community_page_banner = () => {
  return (
    <div className="community_top_div">
      <div className="community_cover">
        <div className="community_top">
          <img
            src={Community_banner_img}
            alt="banner"
            className="community_top_img"
          />
        </div>
        <div className="community_bottom">
          <img src={Community_dp} alt="DP" className="community_bottom_img" />
        </div>
      </div>
    </div>
  );
};

export default Community_page_banner;
