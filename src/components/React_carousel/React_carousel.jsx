// import React from "react";
// import Flickity from "react-flickity-component";
// import { My_profile } from "../../assets";
// import "flickity/css/flickity.css";
// import "./React_carousel.css";

// const flickityOptions = {
//   initialIndex: 2,
// };

// const React_carousel = () => {
//   const carouselStyles = {
//     width: "300px",
//     height: "200px",
//   };
//   return (
//     <div className="corousel_div">
//       <Flickity
//         className={"carousel"}
//         elementType={"div"}
//         options={flickityOptions}
//         disableImagesLoaded={false}
//         reloadOnUpdate
//         static
//       >
//         <img src={My_profile} />
//         <img src={My_profile} />
//         <img src={My_profile} />
//       </Flickity>
//     </div>
//   );
// };

// export default React_carousel;

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function React_carousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: ",jgjhgjhgjhgjh",
      image: "{ right_arrow }",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  const anArrayOfNumbers = [
    <img src="https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_poster-maker-7bde0bc953786a062bbd5b6dacedf5b8.jpg" />,
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_4UAgXlolqUkgnxMK5PX1fFwTtITFk10wrsFYM7IFQ&s" />,
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPk2EVkG47eR0-EthqfPmzWtlESRU-dI15WQBTOAArg&s" />,
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
export default React_carousel;
