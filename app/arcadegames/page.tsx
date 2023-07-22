"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-white font-semibold pt-4 text-3xl text-center hover:opacity-70">
        Arcade Games
      </h1>

     
    </div>
  );
};

export default Page;
