"use client";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";

import { User } from "@prisma/client";
import Avatar from "../Avatar";
import SettingsModal from "./SettingsModal";
import { motion } from "framer-motion";
import Image from "next/image";

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  console.log({ currentUser });

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div
        className="hidden
                    lg:fixed
                    lg:inset-y-0
                    lg:left-1
                    lg:z-40
                    lg:w-{370px}
                    xl:px-2
                    lg:overflow-y-auto
                    lg:pb-4
                    lg:flex
                    lg:flex-col
                    justify-between
                   
                   "
      >
        <div
          className="mt-6
                     mr-2
                     p-3
                     flex
                     flex-col
                    justify-between
                    bg-white/10
                    rounded-2xl
                    h-96
                    w-96
                    items-center"
        >
          <div
            onClick={() => setIsOpen(true)}
            className="curson-pointer hover:opacity-75 transition"
          >
            <div className="relative inline-block rounded-full overflow-hidden lg:h-32 lg:w-32 md:h-11 md:w-11">
              <Image
                alt="Avatar"
                src={currentUser?.image || "/images/dashboardImage/pic5.webp"}
                fill
              />
            </div>
          </div>
          <p className="text-white font-medium mb-80">{currentUser?.name}</p>
        </div>

        <nav
          className="m-4
                                        flex
                                        flex-col
                                        justify-between"
        >
          <ul
            role="list"
            className="flex
                      flex-col
                      items-start
                      space-y-1"
          >
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
