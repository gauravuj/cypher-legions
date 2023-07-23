"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
import React from "react";

const data = [
  {
    image: "/games/OmNom.jpg",
    name: "Om Nom Run",
    url: "https://play.famobi.com/om-nom-run",
  },
  {
    image: "/games/cannon.jpg",
    name: "Cannon Balls 3D",
    url: "https://play.famobi.com/cannon-balls-3d",
  },
  {
    image: "/games/tower.jpg",
    name: "Tower Crash",
    url: "https://play.famobi.com/tower-crash-3d",
  },
  {
    image: "/games/tile.jpg",
    name: "Tile Journey",
    url: "https://play.famobi.com/tile-journey",
  },
  {
    image: "/games/connect.jpg",
    name: "Om Nom Connect",
    url: "https://play.famobi.com/om-nom-connect-classic",
  },

  {
    image: "/games/arch.jpg",
    name: "Archery World Tour",
    url: "https://play.famobi.com/archery-world-tour",
  },
  {
    image: "/games/towers.jpg",
    name: "Tower Smash",
    url: "https://play.famobi.com/tower-smash-level",
  },
  {
    image: "/games/car.jpg",
    name: "Drift Dudes",
    url: "https://play.famobi.com/drift-dudes",
  },
  {
    image: "/games/slope.jpg",
    name: "Slope",
    url: "https://play.famobi.com/slope",
  },
  {
    image: "/games/frank.jpg",
    name: "Frankenstein",
    url: "https://play.famobi.com/frankenstein-go",
  },
  {
    image: "/games/pop.jpg",
    name: "Pop It Duel",
    url: "https://play.famobi.com/pop-it-duel",
  },
  {
    image: "/games/fuzz.jpg",
    name: "Fuzzies",
    url: "https://play.famobi.com/fuzzies",
  },
  {
    image: "/games/bus.jpg",
    name: "Bus Parking 3D",
    url: "https://play.famobi.com/bus-parking-3d",
  },
  {
    image: "/games/bomb.jpg",
    name: "TNT Bomb",
    url: "https://play.famobi.com/tnt-bomb",
  },
  {
    image: "/games/hoop.jpg",
    name: "Hoop Royale",
    url: "https://play.famobi.com/hoop-royale",
  },
  {
    image: "/games/monkey.jpg",
    name: "Monkey Bounce",
    url: "https://play.famobi.com/monkey-bounce",
  },
  {
    image: "/games/bunny.jpg",
    name: "Bunny Quest",
    url: "https://play.famobi.com/bunny-quest",
  },
  {
    image: "/games/piano.jpg",
    name: "Perfect Piano",
    url: "https://play.famobi.com/perfect-piano",
  },
  {
    image: "/games/gold.jpg",
    name: "Gold Miner",
    url: "https://play.famobi.com/gold-miner-tom",
  },
  {
    image: "/games/gym.jpg",
    name: "Gym Mania",
    url: "https://play.famobi.com/gym-mania",
  },
];

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col bg-white/10 rounded-2xl h-fit px-3 space-y-6 pb-2 overflow-auto">
      <h1 className="text-gray-200 font-semibold text-center pt-4 text-3xl hover:opacity-70 ">
        Arcade Games
      </h1>
      <div className="grid grid-cols-5 gap-4 ">
        {data.map((games) => (
          <div
            className="bg-white flex flex-col items-center justify-center hover:text-blue-600 rounded-xl w-fit cursor-pointer p-2 hover:scale-105 transition"
            key={games.name}
            onClick={() => router.push(games.url)}
          >
            <Image
              src={games.image}
              alt={games.name}
              width={200}
              height={200}
              className="rounded-xl hover:opacity-70 "
            />
            <h3 className="text-sm font-medium text-gray-700">{games.name}</h3>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-400 text-center">
        Powered by Famobi | HTML5 Games
      </div>
    </div>
  );
};

export default Page;
