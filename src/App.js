import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Chats from "./components/Chats";
import "./styles/index.css";
import Login from "./components/Login";
import Welcome from "./pages/WelcomePage";

function App() {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" element={<Welcome />} />
            <Route path="/chats" Component={Chats} />
            <Route path="/login" Component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
