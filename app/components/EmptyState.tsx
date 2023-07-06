import React from "react";

const EmptyState = () => {
  return (
    <div
      className="px-4
                 fixed
                 rounded-2xl
                 m-2
                 py-1
                 sm:px-6
                 lg:px-8
                 h-screen
                 flex
                 justify-center
                 items-center
                 bg-gray-200"
    >
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold text-gray-700">
          Select a chat or start a new conversation
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
