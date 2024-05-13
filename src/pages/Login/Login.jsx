import React from "react";
import "./Login.css";
import { Signin_page_img } from "../../assets";
import { Login_Main } from "../../components";

const Login = () => {
  return (
    <div className="login_page_div">
      <div className="login_page_div_right">
        <Login_Main />
        <div className="login_page_div_p">
          <p>Your community is just one step ahead !</p>
        </div>
      </div>
      <div className="login_page_div_img">
        <img
          src={Signin_page_img}
          alt="Signin_img"
          className="login_page_div_img_img"
        />
      </div>
    </div>
  );
};

export default Login;
