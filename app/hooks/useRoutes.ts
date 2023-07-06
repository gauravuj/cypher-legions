import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import {
  Chats,
  SignOut,
  Users,
  Bookmark,
  GameController,
  Calendar,
} from "@phosphor-icons/react";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: Chats,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: Users,
        active: pathname === "/users",
      },
      {
        label: "Calendar",
        href: "/calendar",
        icon: Calendar,
        active: pathname === "/calendar",
      },
      {
        label: "Events",
        href: "/events",
        icon: Bookmark,
        active: pathname === "/events",
      },
      {
        label: "Arcade",
        href: "/arcadegames",
        icon: GameController,
        active: pathname === "/arcadegames",
      },
      {
        label: "Logout",
        href: "/auth",
        onClick: () => signOut(),
        icon: SignOut,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
