import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PrettyChatWindow } from "react-chat-engine-pretty";
// import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const Chats = () => {
  const navigation = useNavigate();
  const user = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();

    navigation("/");
  };

  const getFile = async (URL) => {
    const response = await fetch(URL);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      navigation("/login");

      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, navigation]);

  //   if (!user || loading) return "Loading...";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">connect</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>

      <PrettyChatWindow
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        username={user.email}
        secret={user.uid}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default Chats;
