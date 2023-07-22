import Image from "next/image";
import React from "react";

const EmptyState = () => {
  return (
    <div
      className="px-4
                
                 rounded-2xl
                 
                 py-1
                 sm:px-6
                 lg:px-8
                 h-screen
                 flex
                 justify-center
                 items-center
                 bg-white/10
                 "
    >
      <div className="bg-transparent w-96" />
      <div className=" items-center flex flex-col">
        <Image
          alt="plant"
          src="/images/brandImage/plant.png"
          width="200"
          height="200"
        />
        <h3 className="p-20 text-2xl font-semibold text-gray-100">
          Select a chat or start a new conversation
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
