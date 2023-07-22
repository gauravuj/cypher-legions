"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { games } from "./data";

const Card = () => {


  return (
    <div className=" bg-gray-100 p-4 m-5 rounded-2xl h-screen left-96">
      <div className="flex flex-row flex-wrap space-x-3 space-y-2 mt-4 mb-4">
        {games.map((game) => (
          <game.image key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default Card;
