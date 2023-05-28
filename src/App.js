import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import Welcome from "./pages/WelcomePage";
import Login from "./pages/Login";
// import Login from "./signUpTest/login";
// import "./signUpTest/login.css";
import "./styles/index.css";
import Chats from "./pages/Chats";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" Component={Login} />
            <Route path="/chats" Component={Chats} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
