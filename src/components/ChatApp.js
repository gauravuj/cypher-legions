import React from "react";
import Login from "./Login";
// import Login from "./Login";
import Chats from "./Chats";
import "../styles/SignIn.css";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

/* chat app code */
function Chatapp() {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" Component={Chats} />
            <Route path="/" Component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default Chatapp;
