import React from "react";
import { Google } from "grommet-icons";
import "firebase/compat/app";
import firebase from "firebase/compat/app";
import Logo from "../images/OfficialLogo.png";
import brand from "../images/3902762.jpg";

import { auth } from "../firebase";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <img src={Logo} alt="" />
        <img src={brand} class="dup" alt="" />

        <div className="login-box">
          <div
            className="login-button google"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
          >
            <Google color="plain" /> Login with Google
          </div>
          <div
            className="login-button google"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
          >
            <Google color="plain" /> Sign Up with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
