"use client";

import { User } from ".prisma/client";
import UserBox from "./UserBox";

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <div
      className="fixed
                  inset-y-0
                  pb-20
                  lg:pb-0
                  lg:left-1/4
                  lg:w-96
                  lg:block
                  lg:bg-white/10
                  lg:backdrop-blur-md
                  lg:my-6
                  overflow-y-auto
                  
                  border
                  border-[#242627]
                  block
                  w-full
                 
                  rounded-xl

                  left-0"
    >
      <div className="px-5 space-y-2">
        <div className="flex-col">
          <div
            className="text-2xl
                                font-bold
                                text-white
                                py-4"
          >
            Users
          </div>
        </div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
