import React from "react";
import "./Login_main.css";
import { useState, useEffect } from "react";
import { Google_SSO } from "../../assets";
import { useNavigate } from "react-router-dom";

const Login_main = () => {
  const navigate = useNavigate();
  const [logininput, setlogininput] = useState("");
  const [loginpassword, setloginpassword] = useState("");
  useEffect(() => {
    console.log({ logininput });
  }, [logininput]);

  useEffect(() => {
    console.log({ loginpassword });
  }, [loginpassword]);

  const handlelogininputChange = (e) => {
    setlogininput(e.target.value);
  };

  const handlepasswordChange = (e) => {
    setloginpassword(e.target.value);
  };

  const handleloginbuttonClick = (e) => {
    navigate("/");
    console.log("Login clicked");
  };
  const handleswitchtosignin = (e) => {
    navigate("/signin");
  };
  return (
    <div className="Login_main_top">
      <h3 style={{ fontSize: "2em" }}>Login</h3>
      <div className="Login_main_top_email_box">
        <div className="Login_main_top_email_box_top">
          <input
            type="text"
            placeholder="Enter your mail Id"
            onChange={handlelogininputChange}
          />
          <p style={{ marginTop: "0px", fontSize: "1em" }}>
            <span style={{ color: "#D24D4D" }}>Note : </span>
            Use your college mail ID to Login
          </p>
        </div>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={handlepasswordChange}
        />
        <br />
        <button onClick={handleloginbuttonClick}>Login</button>
        <p
          style={{ color: "#4285F4", cursor: "pointer" }}
          onClick={handleswitchtosignin}
        >
          New user ? Try sign in{" "}
        </p>

        <img src={Google_SSO} alt="" />
      </div>
    </div>
  );
};

export default Login_main;
