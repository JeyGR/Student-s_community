import React, { useState, useEffect } from "react";
import "./Signin_main.css";
import { Google_SSO } from "../../assets";
import { useNavigate } from "react-router-dom";

const Signin_main = () => {
  const navigate = useNavigate();
  const [signininput, setsignininput] = useState("");
  const [signinpassword, setsigninpassword] = useState("");

  useEffect(() => {
    console.log({ signininput });
  }, [signininput]);

  useEffect(() => {
    console.log({ signinpassword });
  }, [signinpassword]);

  const handlesigninInputChange = (e) => {
    setsignininput(e.target.value);
  };

  const handlelsigninpasswordInputChange = (e) => {
    setsigninpassword(e.target.value);
  };

  const handlesigninbuttonChange = (e) => {
    navigate("/selectcommunity");
  };

  const handleswitchtologin = (e) => {
    navigate("/login");
  };
  return (
    <div className="Signin_main_top">
      <h3 style={{ fontSize: "2em" }}>Sign In</h3>
      <div className="Signin_main_top_email_box">
        <div className="Signin_main_top_email_box_top">
          <input
            type="text"
            placeholder="Enter your mail Id"
            value={signininput}
            onChange={handlesigninInputChange}
          />
          <p style={{ marginTop: "0px", fontSize: "1em" }}>
            <span style={{ color: "#D24D4D" }}>Note : </span>Use your college
            mail ID to sign in
          </p>
        </div>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={handlelsigninpasswordInputChange}
        />
        <br />
        <button onClick={handlesigninbuttonChange}>Sign In</button>
        <p
          style={{ color: "#4285F4", cursor: "pointer" }}
          onClick={handleswitchtologin}
        >
          Already an user ? Try login
        </p>
        <img src={Google_SSO} alt="" />
      </div>
    </div>
  );
};

export default Signin_main;
