import React from "react";
import { useState, useEffect } from "react";
import "./Select_community_compo.css";

const Select_community_compo = () => {
  const [communitysearchInput, setcommunitysearchInput] = useState("");

  useEffect(() => {
    console.log({ communitysearchInput });
  }, [communitysearchInput]);

  const handlecommunitysearchInputChange = (e) => {
    setcommunitysearchInput(e.target.value);
  };

  const handleSearchButtonCLick = (e) => {
    console.log("Search button clicked !");
  };
  return (
    <div className="Select_community_compo_div">
      <div className="Select_community_compo_div_top">
        <input
          type="text"
          placeholder="Search For communities"
          onChange={handlecommunitysearchInputChange}
        />
        <button onClick={handleSearchButtonCLick}>Search</button>
      </div>
      <div className="Select_community_compo_div_bottom">
        <div className="community_Card1">
          <p style={{ color: "White", fontSize: "0.8rem" }}>New to Campusji</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>App Dev</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>Back-End</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>Machine learning</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>Ui/Ux</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>Fullstack</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>AR/VR</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>Design</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>New to Campusji</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>New to Campusji</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>New to Campusji</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>New to Campusji</p>
        </div>
        <div className="community_Card2">
          <p style={{ color: "White", fontSize: "0.8rem" }}>New to Campusji</p>
        </div>
      </div>
    </div>
  );
};

export default Select_community_compo;
