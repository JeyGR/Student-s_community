import React from "react";
import "./UpCommingevents.css";
import { designPoster, right_arrow, right_arrow_white } from "../../assets";

const UpCommingevents = () => {
  return (
    <div className="events_sidebar_Top">
      <div className="sidebar_title">
        <div className="sidebar_title_left">
          <h3 className="sidebar_title_left_h3">Upcomming events :</h3>
        </div>
        <div className="sidebar_title_right">
          <div className="arrowandtext">
            <p className="sidebar_title_right_p">view more</p>
            <img src={right_arrow} alt="Go" className="right_arrow_img" />
          </div>
        </div>
      </div>
      <div className="sidebar_body">
        <div className="sidebar_card1">
          <img src={designPoster} alt="Poster" />
          <div className="sidebar_card_summa">
            <div className="sidebar_card_summa_left">
              <h3 className="sidebar_card_summa_h3">Meetup</h3>
              <p className="sidebar_card_summa_p">
                Meet the brilliant minds of design
              </p>
            </div>
            <div className="sidebar_card_summa_right">
              <img
                src={right_arrow_white}
                alt="right arrow"
                className="sidebar_card_summa_right_img"
              />
            </div>
          </div>
        </div>
        <div className="sidebar_card1">
          <img src={designPoster} alt="Poster" />
          <div className="sidebar_card_summa">
            <div className="sidebar_card_summa_left">
              <h3 className="sidebar_card_summa_h3">Meetup</h3>
              <p className="sidebar_card_summa_p">
                Meet the brilliant minds of design
              </p>
            </div>
            <div className="sidebar_card_summa_right">
              <img
                src={right_arrow_white}
                alt="right arrow"
                className="sidebar_card_summa_right_img"
              />
            </div>
          </div>
        </div>
        <div className="sidebar_card1">
          <img src={designPoster} alt="Poster" />
          <div className="sidebar_card_summa">
            <div className="sidebar_card_summa_left">
              <h3 className="sidebar_card_summa_h3">Meetup</h3>
              <p className="sidebar_card_summa_p">
                Meet the brilliant minds of design
              </p>
            </div>
            <div className="sidebar_card_summa_right">
              <img
                src={right_arrow_white}
                alt="right arrow"
                className="sidebar_card_summa_right_img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpCommingevents;
