import React from "react";
import App from "./components/card";
import App1 from "./components/card2";
import App2 from "./components/card3";

const page = () => {
  return (
    <aside className="bg-gray-50 h-screen rounded-xl">
      <div className="flex flex-col flex-wrap mx-auto px-20 space-y-5 cursor-pointer">
        <h1 className="font-bold text-3xl text-center p-4 m-9">Events</h1>
        <App />

        <App1 />

        <App2 />
      </div>
    </aside>
  );
};

export default page;
