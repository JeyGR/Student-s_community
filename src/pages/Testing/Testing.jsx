import React from "react";
import "./Testing.css";
import { Carousel } from "../../components/Carousel/Carousel";
import slides from "../../data/carouselData.json";

const Testing = () => {
  return (
    <div className="carousel_top_div">
      <Carousel data={slides} />
    </div>
  );
};

export default Testing;
