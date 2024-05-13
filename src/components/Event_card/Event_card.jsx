import React, { useState } from "react";
import "./Event_card.css";
import {
  Dates,
  Dollar,
  Tk_banner,
  Touch_button,
  designPoster,
} from "../../assets";
import Truncated_text from "../Truncated_text/Truncated_text";

const Event_card = () => {
  const [txt, settxt] = useState(
    "The Grand Annual Cultural Fiesta of Chennai Institute Of Technology is takshashila, it has a wide range of audience"
  );
  return (
    <div className="Event_Card_div">
      <div className="Event_card_top">
        <div className="Event_card_top_left">
          <img src={Tk_banner} alt="poster" />
        </div>
        <div className="Event_card_top_right">
          <h3>Event name : Takshashila</h3>
          <Truncated_text text={txt} />
          <div className="Event_card_top_right_date">
            <img src={Dates} alt="" />
            <p>Dates : 13th Aug, 14th Aug 2023</p>
          </div>
          <div className="Event_card_top_right_rate">
            <img src={Dollar} alt="price" />
            <p>Entry fee : ₹300*</p>
          </div>
        </div>
        <div className="Event_card_top_button">
          <div className="Event_card_top_button_ele">
            <p>View Event</p>
            <img src={Touch_button} alt="Link" />
          </div>
        </div>
      </div>
      <div className="Event_card_top">
        <div className="Event_card_top_left">
          <img src={Tk_banner} alt="poster" />
        </div>
        <div className="Event_card_top_right">
          <h3>Event name : Takshashila</h3>

          <Truncated_text text={txt} />
          <div className="Event_card_top_right_date">
            <img src={Dates} alt="" />
            <p>Dates : 13th Aug, 14th Aug 2023</p>
          </div>
          <div className="Event_card_top_right_rate">
            <img src={Dollar} alt="price" />
            <p>Entry fee : ₹300*</p>
          </div>
        </div>
        <div className="Event_card_top_button">
          <div className="Event_card_top_button_ele">
            <p>View Event</p>
            <img src={Touch_button} alt="Link" />
          </div>
        </div>
      </div>
      <div className="Event_card_top">
        <div className="Event_card_top_left">
          <img src={Tk_banner} alt="poster" />
        </div>
        <div className="Event_card_top_right">
          <h3>Event name : Takshashila</h3>

          <Truncated_text text={txt} />
          <div className="Event_card_top_right_date">
            <img src={Dates} alt="" />
            <p>Dates : 13th Aug, 14th Aug 2023</p>
          </div>
          <div className="Event_card_top_right_rate">
            <img src={Dollar} alt="price" />
            <p>Entry fee : ₹300*</p>
          </div>
        </div>
        <div className="Event_card_top_button">
          <div className="Event_card_top_button_ele">
            <p>View Event</p>
            <img src={Touch_button} alt="Link" />
          </div>
        </div>
      </div>
      <div className="Event_card_top">
        <div className="Event_card_top_left">
          <img src={Tk_banner} alt="poster" />
        </div>
        <div className="Event_card_top_right">
          <h3>Event name : Takshashila</h3>

          <Truncated_text text={txt} />
          <div className="Event_card_top_right_date">
            <img src={Dates} alt="" />
            <p>Dates : 13th Aug, 14th Aug 2023</p>
          </div>
          <div className="Event_card_top_right_rate">
            <img src={Dollar} alt="price" />
            <p>Entry fee : ₹300*</p>
          </div>
        </div>
        <div className="Event_card_top_button">
          <div className="Event_card_top_button_ele">
            <p>View Event</p>
            <img src={Touch_button} alt="Link" />
          </div>
        </div>
      </div>
      <div className="Event_card_top">
        <div className="Event_card_top_left">
          <img src={Tk_banner} alt="poster" />
        </div>
        <div className="Event_card_top_right">
          <h3>Event name : Takshashila</h3>

          <Truncated_text text={txt} />
          <div className="Event_card_top_right_date">
            <img src={Dates} alt="" />
            <p>Dates : 13th Aug, 14th Aug 2023</p>
          </div>
          <div className="Event_card_top_right_rate">
            <img src={Dollar} alt="price" />
            <p>Entry fee : ₹300*</p>
          </div>
        </div>
        <div className="Event_card_top_button">
          <div className="Event_card_top_button_ele">
            <p>View Event</p>
            <img src={Touch_button} alt="Link" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_card;
