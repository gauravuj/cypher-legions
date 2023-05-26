import React from "react";
import { Google, Apple } from "grommet-icons";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2> Welcome to Connect! </h2>
        <div className="SignIn">
          <input placeholder="Email" minLength={8} required /> <br />
          <input placeholder="Password" minLength={8} required /> <br />
          <button>Login</button>
        </div>

        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <Google color="plain" /> Sign In with Google
        </div>

        <div
          className="login-button apple"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.AppleAuthProvider())
          }
        >
          <Apple color="white" /> Sign In with Apple
        </div>
      </div>
    </div>
  );
};

export default Login;
