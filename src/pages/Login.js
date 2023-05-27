import React from "react";
import { Google } from "grommet-icons";
import "firebase/compat/app";
import firebase from "firebase/compat/app";

import { auth } from "../firebase";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Hey There!</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <Google color="white" /> Login
        </div>
        <br />
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <Google color="white" /> Sign Up
        </div>
      </div>
    </div>
  );
};

export default Login;
