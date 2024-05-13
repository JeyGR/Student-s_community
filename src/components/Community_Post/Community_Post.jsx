import React from "react";
import "./Community_Post.css";
import { Bookmarkimg, Like, Option, dummy_profile_img } from "../../assets";
import Truncated_text from "../Truncated_text/Truncated_text";
import { Carousel } from "../../components/Carousel/Carousel";
import slides from "../../data/carouselData.json";

const Community_Post = () => {
  return (
    <div className="Community_Post">
      <div className="Community_Post_header">
        <div className="Community_Post_header_left">
          <img src={dummy_profile_img} alt="dummy_profile" />
          <p>
            <span>Michael Sebastian</span>• 12/09/2023 • 8:14 am
          </p>
        </div>
        <div className="Community_Post_header_right">
          <img src={Bookmarkimg} alt="Bookmark" />
          <img src={Option} alt="" />
        </div>
      </div>
      <div className="Community_Post_content">
        <Truncated_text
          text="When I started my studies , I was very much influenced by the campus of the Colleges Rather than the content they Provided. We all have some type of fantasy that we carry in our mind as we proceed toward our college life So here are the top ten alluring campus around."
          limit="200"
        />
      </div>
      <div className="Community_Post_carousel">
        <Carousel data={slides} />
      </div>
      <div className="Community_Post_likes_button">
        <button>
          <img src={Like} className="Community_Post_likes_button_img" />
        </button>
      </div>
    </div>
  );
};

export default Community_Post;
