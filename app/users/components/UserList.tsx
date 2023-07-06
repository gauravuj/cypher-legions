"use client";

import { User } from ".prisma/client";
import UserBox from "./UserBox";

interface UserListProps {
    items: User[]
};

const UserList: React.FC<UserListProps> = ({
    items
}) => {
  return (
    <aside
       className="fixed
                  inset-y-0
                  pb-20
                  lg:pb-0
                  lg:left-20
                  lg:w-80
                  lg:block
                  lg:bg-white/10
                  lg:backdrop-blur-md
                   lg:m-4
                  overflow-y-auto
                  border
                  border-gray-200
                  block
                  w-full
                 
                  rounded-xl

                  left-0"
    >
        <div className="px-5">
            <div className="flex-col">
                <div className="text-2xl
                                font-bold
                                text-neutral-800
                                py-4">
                                    Users
                                </div>
            </div>
            {items.map((item) => (
                <UserBox
                   key={item.id}
                   data={item}
                />
            ))}
        </div>

    </aside>
  )
}

export default UserList