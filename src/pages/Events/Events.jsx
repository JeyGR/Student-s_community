import React from "react";
import {
  Event_card,
  Left_bar,
  Nav_bar,
  UpcommingEvents,
} from "../../components";

const Events = () => {
  return (
    <div className="App">
      <Nav_bar />
      <div className="app_div">
        <Left_bar />
        <Event_card />
        <UpcommingEvents />
      </div>
    </div>
  );
};

export default Events;
