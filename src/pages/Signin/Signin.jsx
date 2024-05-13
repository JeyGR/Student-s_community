import React from "react";
import "./Signin.css";
import { Signin_Main } from "../../components";
import { Signin_page_img } from "../../assets";
import { useEffect, useState } from "react";

const Signin = () => {
  return (
    <div className="signing_page_div">
      {/* <div className="signing_page_div_left"></div> */}
      <div className="signing_page_div_right">
        <Signin_Main />
        <div className="signing_page_div_p">
          <p>Finding your community is just one step ahead !</p>
        </div>
      </div>
      <div className="signing_page_div_img">
        <img
          src={Signin_page_img}
          alt="Signin_img"
          className="signing_page_div_img_img"
        />
      </div>
    </div>
  );
};

export default Signin;
