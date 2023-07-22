"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Games = () => {
  const router = useRouter();
  return (
    <div className="aspect-ratio-square rounded-xl shadow-lg bg-white border border-white hover:text-white hover:bg-blue-500 hover:scale-105 transition">
      <Image
        src="/games/OmNom.jpg"
        alt="Om Nom Run"
        width={250}
        height={200}
        className="rounded-lg"
      />
      <div
        className="font-bold leading-7 text-center py-2 px-2 cursor-pointer rounded-full"
        onClick={() => router.push("https://play.famobi.com/om-nom-run")}
      >
        Play
      </div>
    </div>
  );
};

export default Games;
